// Event Listener for the Contact Modal Button
document.getElementById("contactModalButton").addEventListener("click", function () {
  const contactModal = new bootstrap.Modal(document.getElementById("contactModal"));
  contactModal.show();
});

// Handle Form Validation and Submission in Modal
document.getElementById("sendEmailButton").addEventListener("click", function () {
  let valid = true;

  // Validate Email
  const email = document.getElementById("modalEmailInput");
  const emailError = document.getElementById("modalEmailError");
  if (!email.checkValidity()) {
    emailError.classList.remove("d-none");
    valid = false;
  } else {
    emailError.classList.add("d-none");
  }

  // Validate Subject
  const subject = document.getElementById("modalSubjectInput");
  const subjectError = document.getElementById("modalSubjectError");
  if (!subject.value.trim()) {
    subjectError.classList.remove("d-none");
    valid = false;
  } else {
    subjectError.classList.add("d-none");
  }

  // Validate Message
  const message = document.getElementById("modalMessageInput");
  const messageError = document.getElementById("modalMessageError");
  if (!message.value.trim()) {
    messageError.classList.remove("d-none");
    valid = false;
  } else {
    messageError.classList.add("d-none");
  }

  // If valid, show success message
  if (valid) {
    document.getElementById("successMessage").classList.remove("d-none");

    // Clear form inputs
    email.value = "";
    subject.value = "";
    message.value = "";
  }
});

// Show the Fake Resume Modal
document.getElementById("fakeResumeButton").addEventListener("click", (e) => {
  e.preventDefault();
  const resumeModal = new bootstrap.Modal(document.getElementById("fakeResumeModal"));
  resumeModal.show();
});
