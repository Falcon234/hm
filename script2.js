// Галерея: відкриття зображення
const galleryImages = document.querySelectorAll('.image');
const fullImageContainer = document.getElementById('full-image-container');
const fullImage = document.getElementById('full-image');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    fullImage.src = img.src;
    fullImageContainer.style.display = 'block';
  });
});

fullImageContainer.addEventListener('click', () => {
  fullImageContainer.style.display = 'none';
});

// Створення блоків
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesContainer = document.getElementById('boxes');

createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value);
  createBoxes(amount);
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes(); // очищення перед новим рендером
  let size = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomColor();
    fragment.appendChild(div);
    size += 10;
  }

  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomColor() {
  return `rgb(${rand()}, ${rand()}, ${rand()})`;
}

function rand() {
  return Math.floor(Math.random() * 256);
}
