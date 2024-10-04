document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault();
  if (document.querySelector(".usernames").value.length < 3) {
    document.querySelector(".usernames").classList.add("error");
    document.querySelector(".usernames").classList.remove("success");
    document.querySelector(".username-error").classList.add("error");
  } else {
    document.querySelector(".usernames").classList.add("success");
    document.querySelector(".usernames").classList.remove("error");
    document.querySelector(".username-error").classList.remove("error");
  }
  const emailInput = document.querySelector(".emails");
  const emailError = document.querySelector(".email-error");
  const emailValue = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    emailInput.classList.add("error");
    emailInput.classList.remove("success");
    emailError.classList.add("error");
    emailError.textContent = "Lütfen geçerli bir e-posta adresi girin.";
  } else {
    emailInput.classList.add("success");
    emailInput.classList.remove("error");
    emailError.classList.remove("error");
  }
  if (document.querySelector(".passwords").value.length < 6) {
    document.querySelector(".passwords").classList.add("error");
    document.querySelector(".passwords").classList.remove("success");
    document.querySelector(".password-error").classList.add("error");
  } else {
    document.querySelector(".passwords").classList.add("success");
    document.querySelector(".passwords").classList.remove("error");
    document.querySelector(".password-error").classList.remove("error");
  }
  if (
    document.querySelector(".passwords").value !=
    document.querySelector(".passwords2").value
  ) {
    document.querySelector(".passwords2").classList.add("error");
    document.querySelector(".passwords2").classList.remove("success");
    document.querySelector(".password2-error").classList.add("error");
  } else if (
    document.querySelector(".passwords").value ===
    document.querySelector(".passwords2").value
  ) {
    document.querySelector(".passwords2").classList.add("success");
    document.querySelector(".passwords2").classList.remove("error");
    document.querySelector(".password2-error").classList.remove("error");
  }
});
