function setBtnState(btn, passStrCfm) {
  if (passStrCfm.length > 0) {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
}

function isMatch(string, stringMatch) {
  if (string === stringMatch) {
    return true;
  }

  return false;
}

function setErrorMsgState(isError, inputs, msg) {
  if (isError) {
    msg.textContent = "* Passwords do not match";
    inputs.push(msg);
    inputs.forEach((inputs) => {
      inputs.classList.add("error");
    });
  } else {
    let errorMsg = document.querySelector(".error__message");
    let errorInputs = document.querySelectorAll(".error");

    errorMsg.textContent = "\u00a0";
    errorInputs.forEach((element) => {
      element.classList.remove("error");
    });
  }
}

function watchInput(input) {
  input.addEventListener("focus", () => {
    setErrorMsgState(false);
    input.value = "";
  });
}

function passwordValidate(form) {
  let pass = document.querySelector("#form__data__password");
  let passMatch = document.querySelector("#form__data__confirm-password");
  let passStr = pass.value;
  let passStrMatch = passMatch.value;

  if (isMatch(passStr, passStrMatch)) {
    form.submit();
  } else {
    let errorMsg = document.querySelector(".form__data__password__error");
    setErrorMsgState(true, [pass, passMatch], errorMsg);
    watchInput(passMatch);
    form.reportValidity();
  }
}

function submitForm() {
  let form = document.querySelector("#form");
  let btn = document.querySelector(".button");

  btn.addEventListener("click", () => {
    if (form.checkValidity()) {
      passwordValidate(form);
    } else {
      form.reportValidity();
    }
  });
}

submitForm();
