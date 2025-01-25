const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

const getProphetData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets); // Check the data in the console
    displayProphets(data.prophets); // Call the display function
  };
  



  const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
      // Create the elements
      const card = document.createElement('section');
      const fullName = document.createElement('h2');
      const birthInfo = document.createElement('p');
      const placeInfo = document.createElement('p');
      const portrait = document.createElement('img');
  
      // Set content for the elements
      fullName.textContent = `${prophet.name} ${prophet.lastname}`;
      birthInfo.textContent = `Date of Birth: ${prophet.birthdate}`;
      placeInfo.textContent = `Place of Birth: ${prophet.birthplace}`;
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '200');
      portrait.setAttribute('height', '250');
  
      // Append elements to the card
      card.appendChild(fullName);  // Name goes first
      card.appendChild(birthInfo); // Date of birth next
      card.appendChild(placeInfo); // Place of birth after that
      card.appendChild(portrait);  // Image goes last
  
      // Append the card to the cards container
      cards.appendChild(card);
    });
  };

  getProphetData();


