document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const artistListItem = createArtistListItem(event.target);
  const artistList = document.querySelector('#artist-list');
  artistList.appendChild(artistListItem);

  event.target.reset();
}

const createArtistListItem = function (form) {
  const artistListItem = document.createElement('li');
  artistListItem.classList.add('artist-list-item');

  const artist = document.createElement('h2');
  artist.textContent = form.artist.value;
  artistListItem.appendChild(artist);

  const artWork = document.createElement('h3');
  artWork.textContent = form.artWork.value;
  artistListItem.appendChild(artWork);

  const artMovement = document.createElement('p');
  artMovement.textContent = form.artMovement.value;
  artistListItem.appendChild(artMovement);

  return artistListItem;
}

const handleDeleteAllClick = function (event) {
  const artistList = document.querySelector('#artist-list');
  artistList.innerHTML = '';
}
