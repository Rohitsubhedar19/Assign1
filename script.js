$(document).ready(function() {
    // Dark Mode Toggle functionality
    $(".dark-mode-toggle").click(function() {
      $("body").toggleClass("dark-mode");
      
      // Toggle the button text (🌙 to ☀️)
      if ($("body").hasClass("dark-mode")) {
        $(".dark-mode-toggle").text("☀️");
      } else {
        $(".dark-mode-toggle").text("🌙");
      }
    });
  
    // Optionally, add form submission functionality
    // Here we can use a simple alert for testing form submission
    $("#contact-form").submit(function(event) {
      event.preventDefault(); // Prevent the form from actually submitting
      
      // You can add form validation and submit the form to a server or a service here
      alert("Thank you for reaching out! Your message has been received.");
      
      // Optionally reset the form after submission
      $(this).trigger("reset");
    });
  });