function ValidateEmail(inputText) {
    if (inputText.value.match(mailformat)) {
      document.getElementById("check").style.display = "none";
    } else {
      document.getElementById("check").style.display = "block";
      document.getElementById("your-mail").style.borderColor = "#EF4877";
    }
  
    setTimeout(() => {
      document.getElementById("check").style.display = "none";
      document.getElementById("your-mail").style.borderColor = "#07043b";
    }, 2000);
  }