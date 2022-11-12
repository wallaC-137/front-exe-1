import { nanoid } from 'nanoid';
import  copy from 'clipboard-copy';
import './style.css';

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');
passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
  copy(displayPasswordEl.innerHTML)
});


//// desse modo a senha só é copiada após clicar sobre ela
// displayPasswordEl.addEventListener('click', () => {
  // displayPasswordEl.innerHTML = randomPassword;
// })
