document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.sendForm(
      "service_f2kot8m",   // your EmailJS service ID
      "template_qmvfkx9",  // your template ID
      this
  ).then(
      function() {
          alert("Email sent successfully!");
      },
      function(error) {
          alert("Failed to send email: " + error.text);
      }
  );
});