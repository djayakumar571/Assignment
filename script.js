const result = document.getElementById('result');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
   
    const value = button.textContent;

    if (value === '=') {
      // Calculate the result
      const resultValue = eval(result.value);
      result.value = resultValue;
    } else if (value === 'AC') {
      // Clear the result
      result.value = "";
    } else {
      // Append the value to the result
      result.value += value;
    }
  });
});
