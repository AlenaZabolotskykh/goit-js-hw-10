import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker')
const button = document.querySelector('button')
// console.log(button)
// console.log(input)

let userSelectedDate
button.disabled = true

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        let today = new Date()

if (selectedDates[0] >= today) {
    userSelectedDate = selectedDates[0]
    button.disabled = false
}
else {
    alert("Please choose a date in the future");
    button.disabled = true
}
      console.log(selectedDates[0]);
    },
  };


const instance = flatpickr(input, options)