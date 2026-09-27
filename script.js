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




function validateform() {

    // Check that both email addresses match
    if (!checkemail()) {
        return false;
    }

    // Get the information from the form
    var firstname = document.getElementById("firstname").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Create the email
    var emailBody =
        "Name: " + firstname + "\n" +
        "Email: " + email + "\n\n" +
        message;

    // Open the user's email application
    window.location.href =
        "mailto:adonisashti@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(emailBody);

    // Stop the HTML form from submitting normally
    return false;
}



// Opens the AdventureScape project popup
function openAdventureScape() {
    document.getElementById("adventurescape-modal").style.display = "block";
}


// Closes the AdventureScape project popup
function closeAdventureScape() {
    document.getElementById("adventurescape-modal").style.display = "none";

    // Hide the code again when the project is closed
    document.getElementById("adventurescape-code").style.display = "none";
}


// Shows or hides the AdventureScape code
function showAdventureCode() {
    var code = document.getElementById("adventurescape-code");

    if (code.style.display === "block") {
        code.style.display = "none";
    } else {
        code.style.display = "block";
    }
}


// Opens the AstonCV project popup
function openAstonCV() {
    document.getElementById("astoncv-modal").style.display = "block";
}


// Closes the AstonCV project popup
function closeAstonCV() {
    document.getElementById("astoncv-modal").style.display = "none";

    // Hide the code again when the project is closed
    document.getElementById("astoncv-code").style.display = "none";
}


// Shows or hides the AstonCV code
function showAstonCode() {
    var code = document.getElementById("astoncv-code");

    if (code.style.display === "block") {
        code.style.display = "none";
    } else {
        code.style.display = "block";
    }
}



// Opens the AI Search project popup
function openAISearch() {
    document.getElementById("ai-search-modal").style.display = "block";
}


// Closes the AI Search project popup
function closeAISearch() {
    document.getElementById("ai-search-modal").style.display = "none";

    // Hide the code again when the project is closed
    document.getElementById("ai-search-code").style.display = "none";
}


// Shows or hides the AI Search code
function showAISearchCode() {
    var code = document.getElementById("ai-search-code");

    if (code.style.display === "block") {
        code.style.display = "none";
    } else {
        code.style.display = "block";
    }
}


// Opens the Arduino project popup
function openArduino() {
    document.getElementById("arduino-modal").style.display = "block";
}


// Closes the Arduino project popup
function closeArduino() {
    document.getElementById("arduino-modal").style.display = "none";

    // Hide the code again when the project is closed
    document.getElementById("arduino-code").style.display = "none";
}


// Shows or hides the Arduino code
function showArduinoCode() {
    var code = document.getElementById("arduino-code");

    if (code.style.display === "block") {
        code.style.display = "none";
    } else {
        code.style.display = "block";
    }
}
