const imageInput = document.querySelector('#image-input');
const image = document.querySelector('#image');
const blurAmountInput = document.querySelector('#blur-amount');

imageInput.addEventListener('change', () => {
  const file = imageInput.files[0];
  const reader = new FileReader();

  reader.onload = (event) => {
    image.src = event.target.result;
  };

  reader.readAsDataURL(file);
});

blurAmountInput.addEventListener('input', () => {
  image.style.filter = `blur(${blurAmountInput.value}px)`;
});