function checkNumber() {
      var num = document.getElementById("number").value;

      if (num === "") {
        alert("Please enter a number.");
        return;
      }

      num = parseInt(num);

      if (isNaN(num)) {
        alert("That's not a valid number.");
      } 
      else {
        if (num % 2 === 0) {
          alert(num + " is an Even number.");
        }
         else {
          alert(num + " is an Odd number.");
        }
      }
    }