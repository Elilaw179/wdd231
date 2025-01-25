

async function fetchMembers() {
    try {
      const response = await fetch('data/members.json'); 
      if (!response.ok) throw new Error("Failed to fetch member data");
      const members = await response.json();
      renderMembers(members);
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  }
  

  function renderMembers(members) {
    const container = document.getElementById('memberDirectory');
    container.innerHTML = ''; 
  
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
    return level === 3 ? 'Gold' : level === 2 ? 'Silver' : 'Member';
  }
  function updateFooter() {
    const yearElement = document.getElementById('year');
    const modifiedElement = document.getElementById('lastModified');
  
    const currentYear = new Date().getFullYear();
    yearElement.textContent = `Elisha Sunday © ${currentYear}`;
  
    const lastModified = document.lastModified;
    modifiedElement.textContent = `Last Modified: ${lastModified}`;
  }
  

  fetchMembers();
  updateFooter();
  