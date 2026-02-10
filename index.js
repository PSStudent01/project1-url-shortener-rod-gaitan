//index.js
import { shortenURL } from "./apiService.js";
import { saveLink, getLinks } from "./storage.js";
import { displayLinks } from "./ui.js";

const inputBox = document.getElementById("input-box");
const shortBtn = document.getElementById("short-btn");


                                        const userInput = document.getElementById("input-box").value.trim()


// Display saved links on page load
displayLinks(getLinks());

// Handle shorten button click
shortBtn.addEventListener("click", async () => {
    const userInput = inputBox.value.trim();
    clearError();

    if (!userInput) {
        showError("Please enter a URL!")
        return;
    }

                                        clearError()


        try {
        new URL(userInput);
    } catch {
        showError("Please enter a valid URL");
        return;
    }




    try {
        const shortUrl = await shortenURL(userInput);
        const link = { original: userInput, short: shortUrl }
        saveLink(link);
        displayLinks(getLinks())
        inputBox.value = ""
    } catch (error) {
        showError("Failed to shorten URL. Please check your input.")
        console.error("Error shortening URL:", error)
    }
});







                                    // Function to show the error message
                                    function showError(message) {
                                  const errorMessage = document.getElementById("error-message");
                                    errorMessage.textContent = message;
                                    errorMessage.style.color = "red";  // Customize error message style
                                }

                                // Function to clear any error message
                                function clearError() {
                                const errorMessage = document.getElementById("error-message");
                                errorMessage.textContent = "";  // Clear the error message
                                }

/*
const inputBox = document.getElementById("input-box")
const shortBtn = document.getElementById("short-btn")
const ulEl = document.createElement("ul")


    shortBtn.addEventListener("click", function() {
        //console.log('button clicked!')
        const userInput = inputBox.value.trim()
        //console.log(userInput)     
        //ulEl.innerHTML += userInput 
        if(!userInput) {
            //console.log("Please enter a valid URL link.")
            alert ("Please enter a valid URL link.")
            return
        }
        console.log(userInput)
    })
*/




