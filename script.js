//your JS code here. If required.
    const input = document.getElementById("fname");

      input.addEventListener("input", function () {
        // Change actual value to uppercase
        this.value = this.value.toUpperCase();
      });