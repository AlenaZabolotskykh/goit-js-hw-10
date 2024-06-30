import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector('#datetime-picker');
const button = document.querySelector('button');
// console.log(button)
// console.log(input)
button.disabled = true;

let userSelectedDate;
// const today = new Date()
let ms;
let interval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const today = new Date();
    if (selectedDates[0] >= today) {
      userSelectedDate = selectedDates[0];
      button.disabled = false;
    } else {
    //   alert('Please choose a date in the future');
    iziToast.show({
        title: 'Please choose a date in the future',
    });
    
      button.disabled = true;
    }
    console.log(selectedDates[0]);
  },
};

const instance = flatpickr(input, options);

button.addEventListener('click', runTimer);
function runTimer() {
  if (userSelectedDate) {
    button.disabled = true;
    input.disabled = true;
    interval = setInterval(() => {
      const today = new Date();
      ms = userSelectedDate - today;
      if (ms <= 0) {
        clearInterval(interval);
        button.disabled = true;
        input.disabled = false;
        return;
      }
      const { days, hours, minutes, seconds } = convertMs(ms);

      document.querySelector('[data-days]').textContent = addLeadingZero(days);
      document.querySelector('[data-hours]').textContent =
        addLeadingZero(hours);
      document.querySelector('[data-minutes]').textContent =
        addLeadingZero(minutes);
      document.querySelector('[data-seconds]').textContent =
        addLeadingZero(seconds);
    }, 1000);
  }
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
