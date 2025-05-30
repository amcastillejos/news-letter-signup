const form = document.querySelector(".signup-form");
  const emailInput = document.querySelector(".emailInput");
  const successMsg = document.getElementById("successMsg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    successMsg.hidden = false;
    form.reset();
  });


