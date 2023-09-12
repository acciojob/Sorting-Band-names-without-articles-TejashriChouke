//your code here

// Function to remove articles and sort the array
function sortBandNames(bandNames) {
  return bandNames
    .map(name => name.replace(/^(a|an|the) /i, ''))
    .sort((a, b) => a.localeCompare(b));
}

// Input array of band names
let bandNames = ['The Beatles', 'Aerosmith', 'The Rolling Stones', 'Pink Floyd'];

// Sort the band names and remove articles
let sortedBandNames = sortBandNames(bandNames);

// Create an unordered list and populate it with list items
const bandList = document.createElement('ul');
bandList.id = 'bands';

sortedBandNames.forEach(name => {
  const listItem = document.createElement('li');
  listItem.textContent = name;
  bandList.appendChild(listItem);
});

// Add the unordered list to the document
document.body.appendChild(bandList);
