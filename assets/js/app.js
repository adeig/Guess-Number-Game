const options = document.querySelectorAll('input[name="level"]');
const nameForm = document.getElementById('nameForm');

options.forEach(option => {
  option.addEventListener('click', () => {
    nameForm.action = option.value;

    console.log(nameForm.action);
  });
});
