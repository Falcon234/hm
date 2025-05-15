// 1. Зміна кольору фону
document.querySelectorAll('input[name="color"]').forEach(radio => {
  radio.addEventListener('change', () => {
    document.body.style.backgroundColor = radio.value;
  });
});
document.body.style.backgroundColor = document.querySelector('input[name="color"]:checked').value;

// 2. Ввід імені
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
  nameOutput.textContent = nameInput.value.trim() ? nameInput.value : 'незнайомець';
});

// 3. Перевірка довжини
const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', () => {
  const length = Number(validationInput.dataset.length);
  if (validationInput.value.length === length) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});

// 4. Зміна розміру шрифту
const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

fontSizeControl.addEventListener('input', () => {
  textSpan.style.fontSize = `${fontSizeControl.value}px`;
});
textSpan.style.fontSize = `${fontSizeControl.value}px`;
