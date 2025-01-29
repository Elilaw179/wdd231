// Fetch and display all members
async function fetchMembers() {
  try {
    const response = await fetch('data/members.json'); // Fetch JSON data
    if (!response.ok) throw new Error("Failed to fetch member data");

    const members = await response.json(); // Get all members from JSON
    
    renderMembers(members); // Display ALL members on the page

  } catch (error) {
    console.error("Error fetching members:", error);
    document.getElementById('memberDirectory').innerHTML = '<p>Failed to load member data.</p>';
  }
}

// Render member data in grid or list view
function renderMembers(members) {
  const container = document.getElementById('memberDirectory');
  container.innerHTML = ''; // Clear existing content

  members.forEach(member => {
    const memberCard = document.createElement('div');
    memberCard.className = 'member-card';

    memberCard.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h2>${member.name}</h2>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
      <p><strong>Membership Level:</strong> ${getMembershipLevel(member.membershipLevel)}</p>
      <p>${member.description}</p>
    `;

    container.appendChild(memberCard);
  });
}

// Get membership level name
function getMembershipLevel(level) {
  return level === 3 ? 'Gold' : level === 2 ? 'Silver' : 'Bronze';
}

// Toggle grid/list view
document.getElementById('toggleView').addEventListener('click', () => {
  const directory = document.getElementById('memberDirectory');
  directory.classList.toggle('grid');
  directory.classList.toggle('list');
});

// Footer updates
function updateFooter() {
  const yearElement = document.getElementById('year');
  const modifiedElement = document.getElementById('lastModified');

  const currentYear = new Date().getFullYear();
  yearElement.textContent = `Copyright © ${currentYear}`;

  const lastModified = document.lastModified;
  modifiedElement.textContent = `Last Modified: ${lastModified}`;
}

// Initialize functions
fetchMembers();
updateFooter();
