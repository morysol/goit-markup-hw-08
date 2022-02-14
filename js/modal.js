// try to remove class is-hidden
// function purchaseService() {
//   var element = document.getElementById('backdrop');
//   element.classList.remove('is-hidden');
// }

// try to add class is-hidden and close modal window

// function closeModal() {
//   var element = document.getElementById('backdrop');
//   element.classList.add('is-hidden');
// }

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
