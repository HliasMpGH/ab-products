// Save search choice to local storage
function saveSearchChoice(choice) {
    if (localStorage.getItem("searchChoice") !== null) {
        console.log("Search choice already set. Not setting again.");
        return;
    }
    console.log("saving search choice: " + choice);
    localStorage.setItem("searchChoice", choice);
}

// Add event listeners to buttons to post user choice
document.addEventListener("DOMContentLoaded", function () {
    const aButtons = document.getElementsByClassName("details-button");
    const bButtons = document.getElementsByClassName("details-button-b");

    for (let button of aButtons) {
        button.addEventListener("click", () => {
            saveSearchChoice('A');
        });
    }

    for (let button of bButtons) {
        button.addEventListener("click", () => {
            saveSearchChoice('B');
        });
    }
});