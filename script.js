const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    const sound = new Audio(box.dataset.sound);
    sound.play();
  });
});