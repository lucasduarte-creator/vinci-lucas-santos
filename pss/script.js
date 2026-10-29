const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

const dialog = document.getElementById('model-dialog');
const dialogTitle = document.getElementById('dialog-title');
document.querySelectorAll('.model-details').forEach(button => {
  button.addEventListener('click', () => {
    dialogTitle.textContent = button.dataset.model;
    dialog.showModal();
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
document.querySelector('.dialog-contact').addEventListener('click', () => dialog.close());

document.getElementById('interest-form').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const model = document.getElementById('model').value;
  const feedback = document.querySelector('.form-feedback');
  feedback.textContent = `Obrigado, ${name}! Seu interesse${model !== 'Ainda não decidi' ? ` no ${model}` : ''} foi registrado nesta demonstração.`;
  event.target.reset();
});
