import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form')

form.addEventListener('submit', handlerSubmit)
function handlerSubmit(evt) {
  evt.preventDefault()

  const delay = form.elements.delay.value;
  const state = form.elements.state.value;

  form.reset()

  const promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
      if(state === 'fulfilled') {
        resolve(delay);
      }
      else {
        reject(delay)
      }
    },delay)
  });


promise
.then((delay) => {iziToast.show({
  title: `✅ Fulfilled promise in ${delay}ms`,
});})
.catch((delay)=> {iziToast.show({
  title: `❌ Rejected promise in ${delay}ms`,
});})

}


