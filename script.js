const height = document.getElementById("height");
const weight = document.getElementById("weight");
const calculateBtn = document.querySelector(".calculateBtn");
const bmitotal = document.querySelector(".bmi-total");

calculateBtn.addEventListener("click", function () {
  const heightInput = parseFloat(height.value);
  const weightInput = parseFloat(weight.value);

  if (
    isNaN(heightInput) ||
    isNaN(weightInput) ||
    heightInput <= 0 ||
    weightInput <= 0
  ) {
    // Check if inputs are valid
    alert("Please enter valid height and weight values.");
    return;
  }

  const BMI = weightInput / (heightInput * heightInput);
  bmitotal.textContent = `BMI: ${BMI.toFixed(2)}`; // Display BMI with two decimal places
});
