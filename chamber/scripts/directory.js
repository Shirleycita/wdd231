// load and display member data for directory cards
const cards = document.querySelector("#directory-cards");
import { displayMembers } from "./members.js";
displayMembers(cards);

document.addEventListener("DOMContentLoaded", function() {
    const gridView = document.getElementById('dir-grid-view');
    const listView = document.getElementById('dir-list-view');
    const directoryCards = document.querySelector("#directory-cards");

    document.querySelector('.dir-layout').addEventListener('click', function() {
        if (gridView.checked) {
            directoryCards.classList = "dir-grid";
        }
        if (listView.checked) {
            directoryCards.classList = "dir-list";
        }
    });
});