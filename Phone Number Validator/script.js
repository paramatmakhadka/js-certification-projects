document.querySelector("#check-btn").addEventListener("click", function() {
    const userInput = document.querySelector("#user-input").value.trim();
    const resultDiv = document.querySelector("#results-div");
    
   if (userInput === "") {
    alert("Please provide a phone number.");
    resultDiv.innerText = "";
    return;
   }else if (validatePhoneNumber(userInput)) {
      resultDiv.innerText = `Valid US number: ${userInput}`;
      resultDiv.style.color = "green";
    } else {
      resultDiv.innerText = `Invalid US number: ${userInput}`;
      resultDiv.style.color = "red";
    }
  });
  
  document.querySelector("#clear-btn").addEventListener("click", function() {
    document.querySelector("#user-input").value = "";
    const resultDiv = document.querySelector("#results-div");
    resultDiv.textContent = "";
  });
  
  function validatePhoneNumber(phoneNumber) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-])?\d{3}([\s-])?\d{4}$/;
    return regex.test(phoneNumber);
  }
  