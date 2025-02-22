function calculate() {
  // Retrieve and validate the cement amount (in kg)
  const cementInput = document.getElementById("cement").value;
  const cement = parseFloat(cementInput);
  if (isNaN(cement) || cement <= 0) {
    alert("Please enter a valid cement amount.");
    return;
  }
  
  // Retrieve the selected cement grade
  const grade = document.getElementById("cementGrade").value.toLowerCase();
  
  // Define ratios for sand and aggregate based on the grade
  let sandRatio, aggregateRatio;
  switch (grade) {
    case "cs15":
      sandRatio = 2;
      aggregateRatio = 4;
      break;
    case "c20":
      sandRatio = 1.5;
      aggregateRatio = 3;
      break;
    case "c25":
      sandRatio = 1;
      aggregateRatio = 2;
      break;
    default:
      alert("Invalid grade selected.");
      return;
  }
  
  // Assume water is 50% of the cement weight (in kg)
  const waterRatio = 0.5;
  
  // Calculate material quantities
  const bags = cement / 50; // Number of cement bags (each bag is 50kg)
  const sand = cement * sandRatio; // Sand quantity (kg)
  const aggregate = cement * aggregateRatio; // Aggregate quantity (kg)
  const water = cement * waterRatio; // Water quantity (kg)
  const totalKg = cement + sand + aggregate + water; // Total weight of materials (kg)

  // Calculate individual prices using provided formulas
  const cementPrice = (cement / 50) * 7;      // Cement price
  const sandPrice = sand * 0.0186;             // Sand price
  const aggregatePrice = aggregate * 0.036;   // Aggregate price
  const waterPrice = water * 0.0015;          // Water price
  
  // Compute the total price
  const totalPrice = cementPrice + sandPrice + aggregatePrice + waterPrice;
  
  document.getElementById("cementResult").innerText = `${bags.toFixed(0)} bags`;
  document.getElementById("cementPriceResult").innerText = `$${cementPrice.toFixed(2)}`;
  
  document.getElementById("sandResult").innerText = `${sand.toFixed(0)} Kg`;
  document.getElementById("sandPriceResult").innerText = `$${sandPrice.toFixed(2)}`;
  
  document.getElementById("aggregateResult").innerText = `${aggregate.toFixed(0)} Kg`;
  document.getElementById("aggregatePriceResult").innerText = `$${aggregatePrice.toFixed(2)}`;
  
  document.getElementById("waterResult").innerText = `${water.toFixed(0)}L`; 
  document.getElementById("waterPriceResult").innerText = `$${waterPrice.toFixed(2)}`;

  document.getElementById("totalkg").innerText = `${totalKg.toFixed(0)} kg`;  
  document.getElementById("totalPriceResult").innerText = `$${totalPrice.toFixed(2)}`;
  
  
  // Display the results section
  document.querySelector(".results").style.display = "block";
}
