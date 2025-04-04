document.addEventListener("DOMContentLoaded", function () {
    const visitMessage = document.getElementById("visitMessage");
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();

    if (!lastVisit) {
        // 🆕 First-time visit
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        // ⏳ Calculate time difference in days
        const lastVisitDate = parseInt(lastVisit);
        const timeDifference = now - lastVisitDate;
        const daysSinceLastVisit = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysSinceLastVisit < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            visitMessage.textContent = `You last visited ${daysSinceLastVisit} ${daysSinceLastVisit === 1 ? "day" : "days"} ago.`;
        }
    }

    // ✅ Now store the visit AFTER displaying the message!
    localStorage.setItem("lastVisit", now);
});






