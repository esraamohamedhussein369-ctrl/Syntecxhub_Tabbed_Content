document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanes = document.querySelectorAll(".tab-pane");
    const indicator = document.getElementById("active-indicator");

    function updateIndicator(activeBtn) {
        indicator.style.width = `${activeBtn.offsetWidth}px`;
        indicator.style.left = `${activeBtn.offsetLeft}px`;
    }

    // Set initial indicator position
    const initialActive = document.querySelector(".tab-btn.active");
    if (initialActive) {
        updateIndicator(initialActive);
    }

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-target");

            // Remove active classes
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabPanes.forEach(pane => pane.classList.remove("active"));

            // Add active class to clicked tab and pane
            button.classList.add("active");
            document.getElementById(targetId).classList.add("active");

            // Move indicator
            updateIndicator(button);
        });
    });
});

// Accordion toggle function
function toggleAccordion(element) {
    element.classList.toggle("open");
}

// Copy repository name function
function copyRepoName() {
    const repoText = document.getElementById("repo-name").innerText;
    navigator.clipboard.writeText(repoText).then(() => {
        const copyBtn = document.querySelector(".copy-btn");
        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied';
        setTimeout(() => {
            copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
        }, 2000);
    });
}

// Form submit handler
function handleFormSubmit(event) {
    event.preventDefault();
    alert("Thank you! Form details submitted successfully for Syntecxhub Internship.");
}