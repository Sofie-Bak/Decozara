/* document.addEventListener("DOMContentLoaded", function () {
   
    const sub = document.querySelector("#sub");
    let text = document.querySelector(".sub");
    
    sub.addEventListener("click", function () {
      if (text.style.display === "block") {
        text.style.display = "none";
      } else {
        text.style.display = "block";
      }
    });
    });
   
    const sub = document.querySelector("#unsub");
    let text = document.querySelector(".unsub");
    
    sub.addEventListener("click", function () {
      if (text.style.display === "block") {
        text.style.display = "none";
      } else {
        text.style.display = "block";
      } */

      document.addEventListener("DOMContentLoaded", function () {
        const emailInput = document.querySelector("#email");
        const responseMessage = document.querySelector(".responseMessage");
      
        function validateEmail(email) {
          /* RegEx = regular expression */
          const regEx =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return regEx.test(String(email).toLowerCase());
        }
      
        async function handleSubscription(url, method, successMessage, errorMessage) {
          const email = emailInput.value;
      
          if (!validateEmail(email)) {
            responseMessage.textContent = "Please insert a valid email.";
            return;
          }
      
          try {
            const response = await fetch(url, {
              method: method,
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email }),
            });
      
            const data = await response.json();
      
            if (!response.ok) {
              throw new Error(data.error || errorMessage);
            }
      
            console.log("Success:", data);
            responseMessage.textContent = successMessage;
          } catch (error) {
            console.error("Error:", error);
            responseMessage.textContent = error.message || errorMessage;
          } finally {
            emailInput.value = ""; // Nulstiller email input-feltet
          }
        }
      
        document
          .querySelector(".inputContainer")
          .addEventListener("submit", function (event) {
            event.preventDefault(); // Forhindrer formen i at udføre standard submit handling
            handleSubscription(
              "https://api-medieskolerne.vercel.app/emails",
              "POST",
              "You are now signed up for the new launch!",
              "There was a problem signing you up."
            );
          });
      
        document
          .querySelector("#unsub")
          .addEventListener("click", function () {
            handleSubscription(
              "https://api-medieskolerne.vercel.app/emails",
              "DELETE",
              "You are now unsubscribed from further launches!",
              "There was a problem unsubscribing you from."
            );
          });
    });