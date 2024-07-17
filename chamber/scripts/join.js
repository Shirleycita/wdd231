const modalLink = document.querySelector("#membership-level-link");
const membershipDialog = document.querySelector("#membership-dialog");

modalLink.addEventListener("click", () => {
    membershipDialog.showModal();
})

const closeModal = document.querySelector("#close-modal");

closeModal.addEventListener("click", () => {
    membershipDialog.close();
})

document.addEventListener("DOMContentLoaded", () => {
    const timestamp = document.querySelector("#timestamp");

    timestamp.value = Date().toString();
})