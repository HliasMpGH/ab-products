// post user choices to the server
function postSubmission() {
    // check if the submission has already been posted
    if (localStorage.getItem("postedSubmission") !== null) {
        console.log("Already posted submission. Not posting again.");
        return;
    }

    // get the user choices from local storage
    console.log("posting submission");
    searchChoice = localStorage.getItem("searchChoice");
    buyChoice = localStorage.getItem("buyChoice");
    console.log(`search=${searchChoice}&buy=${buyChoice}`);

    // dont post empty choices
    if (!searchChoice && !buyChoice) {
        console.error("User choices not found on local.");
        return;
    }

    // post the user choices to the server
    fetch(
        `/submit-to-google-form?search=${searchChoice}&buy=${buyChoice}`,
        { method: 'POST' }
    ).then(response => {
        if (response.ok) {
            console.log("Form submitted successfully");
            localStorage.setItem("postedSubmission", "true");
        } else {
            console.error("Error submitting form:", response.statusText);
        }
    }).catch(error => {
        console.error("Error submitting form:", error);
    });
}

// Save buy choice to local storage
function saveBuyChoice(choice) {
    if (localStorage.getItem("buyChoice") !== null) {
        console.log("Buy choice already set. Not setting again.");
        return;
    }
    console.log("saving buy choice: " + choice);
    localStorage.setItem("buyChoice", choice);
}

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const targetId = this.dataset.tab;

            // Remove active from all
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            // Activate selected
            this.classList.add("active");
            document.getElementById(targetId).classList.add("active");
        });
    });
});

// Add event listeners to buttons to post user choice
document.getElementById("a-buy").addEventListener("click", () => {
    // postBuyChoice('A');
    saveBuyChoice('A');
});

document.getElementById("b-buy").addEventListener("click", () => {
    // postBuyChoice('B');
    saveBuyChoice('B');
});

// Add purchase alert upon buy button click
const buyButtons = document.getElementsByClassName("buy-button");

for (let button of buyButtons) {
    button.addEventListener("click", () => {
        postSubmission(); // post search and buy choice to server
        alert(`Your purchase will be processed!`);
        window.location.href = '/'; // Redirect to main page
    });
}