document.addEventListener('DOMContentLoaded', (event) => {
    displayWelcome();
})

function displayWelcome() {
    const message = document.querySelector('#user-visit-msg');
    let prevVisit = localStorage.getItem('visitDate' || null); // if first visit then return -1
    let curVisit = Date.now();
    const dayInMillis = 24 * 60 * 60 * 1000; // # of milliseconds that make up one day
    
    prevVisit = Number(prevVisit);
    curVisit = Number(curVisit);
   
    localStorage.setItem('visitDate', curVisit);

    if (prevVisit === 0) {
        message.innerHTML = "Let us know if you have any questions.";
    }
    else if (curVisit - prevVisit < dayInMillis) {
        message.innerHTML = "Wonderful to see you back so soon!";
    } else { 
        // set the times to 0 so that the dates are counted based on days and not times
        prevVisit = new Date(prevVisit).setHours(0,0,0,0); 
        curVisit = new Date(curVisit).setHours(0,0,0,0);
        
        const diff = Math.abs(curVisit - prevVisit)
        const diffInDays = Math.trunc(diff / dayInMillis);

        message.innerHTML = `Your last visit was ${diffInDays} ago.`;
    }
}