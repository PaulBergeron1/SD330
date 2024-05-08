// parking.js
document.addEventListener('DOMContentLoaded', (event) => {
  fetch('parking.json')
    .then(response => response.json())
    .then(data => {
      const lotsContainer = document.getElementById('lotsContainer');

      data.parking_lots.forEach(lot => {
        const section = document.createElement('div');
        section.className = 'section';

        const lotHeader = document.createElement('h2');
        lotHeader.textContent = lot.name;
        section.appendChild(lotHeader);

        const lotImage = document.createElement('img');
        lotImage.src = `${lot.name}.jpg`; // Assuming the image is in the same directory as the HTML file
        lotImage.alt = `Map of ${lot.name} Lot`;
        section.appendChild(lotImage);

        const lotDescription = document.createElement('p');
        lotDescription.textContent = `${lot.comments} (Total Spaces: ${lot.totalSpaces})`;
        section.appendChild(lotDescription);

        const spacesList = document.createElement('ul');
        lot.spaces.forEach(space => {
          const listItem = document.createElement('li');
          listItem.textContent = `Space ID: ${space.spaceId}, Type: ${space.type}, Status: ${space.status}, Handicap: ${space.isHandicap ? 'Yes' : 'No'}, Reserved Date: ${space.reserved_date}`;
          spacesList.appendChild(listItem);
        });
        section.appendChild(spacesList);

        lotsContainer.appendChild(section);
      });
    })
    .catch(error => console.error('Error loading parking data:', error));
});
