// Set timestamp value dynamically when the form loads
document.addEventListener("DOMContentLoaded", function () {
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }
});

// Function to show membership benefit modals
function showModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "block";
    }
}

// Function to close modals
function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "none";
    }
}


// Display submitted form data on the Thank You page
document.addEventListener("DOMContentLoaded", function () {
    const formDataContainer = document.getElementById("form-data");
    if (formDataContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.forEach((value, key) => {
            formDataContainer.innerHTML += `<p><strong>${key.replace('-', ' ')}:</strong> ${value}</p>`;
        });
    }
});




