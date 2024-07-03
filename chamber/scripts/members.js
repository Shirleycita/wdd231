const memberData = "../chamber/data/members.json";

async function getMemberData() {
    try {
        const response = await fetch(memberData);
        const data = await response.json();
        
        return (data.members);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

export async function displayMembers(cards, filtered = false) {
    let memberList = [];
    
    // if the data is meant to be filtered
    if (filtered) {
        memberList = await filterMembers();
    } else {
        memberList = await getMemberData();
    }

    memberList.forEach((member) => {
        let card = document.createElement("section");
        card.classList.add("member-card");

        let name = document.createElement("h2");
        name.textContent = member.name;
        card.appendChild(name);

        let level = document.createElement("p");
        if (member.memberLevel === 1) {
            level.textContent = "Chamber Member";
        } else if (member.memberLevel === 2) {
            level.textContent = "Silver Member";
        } else if (member.memberLevel === 3) {
            level.textContent = "Gold Member";
        }
        level.classList.add("level");
        card.appendChild(level);

        let img = document.createElement("img");
        img.src = member.image;
        img.alt = `Image or logo for ${member.name}`;
        img.loading = "lazy";
        img.width = "100";
        img.height = "100";
        img.classList.add("member-img");
        card.appendChild(img);

        let address = document.createElement("p");
        address.innerHTML = `<span class="card-label">Address:</span> ${member.address}${member.box ? `, Box ${member.box}` : ''}`;
        address.classList.add("info");
        card.appendChild(address);

        let phone = document.createElement("p");
        phone.innerHTML = `<span class="card-label">Phone:</span> ${member.phone}`;
        phone.classList.add("info");
        card.appendChild(phone);

        let email = document.createElement("p");
        email.innerHTML = `<span class="card-label">Email:</span> ${member.email}`;
        email.classList.add("info");
        card.appendChild(email);

        let url = document.createElement("a");
        url.href = member.url;
        url.textContent = `${member.url}`;
        url.classList.add("url");
        url.target = "_blank";
        card.appendChild(url);

        cards.appendChild(card);
    });
}

async function filterMembers() {
    try {
        const data = await getMemberData();

        // filter and leave only silver and gold level members
        let filteredMembers = data.filter((member) => member.memberLevel > 1);
        
        // select 3 random members
        let newList = [];
        for (let i = 0; i < 3 && filteredMembers.length > 0; i++) {
            let randomIndex = Math.floor(Math.random() * filteredMembers.length);
            let selectedMember = filteredMembers.splice(randomIndex, 1)[0]; 
            newList.push(selectedMember);
        }

        return newList;

    } catch (error) {
        console.error("Error displaying members: ", error);
    }  
}s