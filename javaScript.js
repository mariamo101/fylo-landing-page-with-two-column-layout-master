let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function ValidateEmail(inputText) {
  if (inputText.value.match(mailformat)) {
    document.getElementById("lbl").style.display = "none";
  } else {
    document.getElementById("lbl").style.display = "block";
    document.getElementById("inp").style.borderColor = "#EF4877";
  }

  setTimeout(() => {
    document.getElementById("lbl").style.display = "none";
    document.getElementById("inp").style.borderColor = "#07043b";
  }, 2000);
}