console.log('modal.js loaded');

document.addEventListener('DOMContentLoaded', () => {
  const backdrop = document.querySelector('.backdrop');
  const openBtn = document.querySelector('.modal-btn-open');
  const closeBtn = document.querySelector('.modal-btn-close');

  console.log({ backdrop, openBtn, closeBtn });

  function toggleModal(from) {
    console.log(from, 'BEFORE:', backdrop.className);
    backdrop.classList.toggle('is-hidden');
    console.log(from, 'AFTER :', backdrop.className);
  }

  openBtn.addEventListener('click', e => {
    console.log('OPEN clicked');
    toggleModal('OPEN');
  });

  closeBtn.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    console.log('CLOSE clicked');
    toggleModal('CLOSE');
  });
});
