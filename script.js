function checkemail() {
    // gets the email address

    var email = document.getElementById("email").value;
    var confirm_email = document.getElementById("confirmemail").value;

    //It checks if they are matched

    if (email !== confirm_email) {
        alert("The emails do not match");
        return false; // will stop the form from submitting
    }
    return true; // The emails match
}

function checkdate() {
    var projectdate = document.getElementById("projectdate").value;
    var today = new Date();

    today.setDate(today.getDate() +1); // atleast 1 day in the future

    var selected_date = new Date(projectdate);

    if (selected_date < today) {
        alert("The project date must be at least 1 day in the future");
        return false;
    }
    return true;

}


function validateform() {

    // It will first check emails
    if (!checkemail()) return false;

    // then it will check the date
    if (!checkdate()) return false;

    // This gathers all the data in the form

    var firstname = document.getElementById("firstname").value;
    var description = document.getElementById("description").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var projectdate = document.getElementById("projectdate").value;
  

    var duration = document.getElementById("duration").value;
    // to make sure the duration number is a positive number

    if (duration <= 0) {
        alert("The Project Duration must be a positive number");
        return false;
    }

    // This gets the preferred contacting method
    var contactmethod = document.querySelector('input[name="contactmethod"]:checked').value;


    var message = "To: adonisashti@gmail.com\n\n" +
                "First Name: " + firstname + "\n" +
                "Description: " + description + "\n" +
                "Email: " + email + "\n" +
                "Phone: " + phone + "\n" +
                "Project Date: " + projectdate + "\n" +
                "Duration: " + duration + " days\n" +
                "Preferred Contact: " + contactmethod + "\n\n" +
                "Confirm submission?";


    return confirm(message);  // asks user to confirm
}