const modal = (selectedPhotographer) => {
   // Insert name of photographer

   contactMe.innerHTML += ` ${selectedPhotographer.name}`;

   //RegExp for test form

   const regExpEmail = new RegExp("^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,5})+[.]{1}[a-z]{2,10}$");
   const regExpLetters = new RegExp("^[a-zA-Z'-]+$");

   // Build text error while user make mistakes

   const createTxtErr = (txt, id, input) => {
      if (!document.getElementById(`${id}`)) {
         const txtErr = document.createElement("p");
         txtErr.innerHTML = txt;
         txtErr.classList.add("txt-err");
         txtErr.id = id;
         input.after(txtErr);
         input.setAttribute("aria-invalid", "true");
         input.setAttribute("aria-errormessage", id);
      }
   };

   // Display modal

   const displayModal = () => {
      modalDom.style.top = "calc(50% - 473px)";
      modalDom.style.opacity = "1";
      main.setAttribute("aria-hidden", "true");
      modalDom.setAttribute("aria-hidden", "false");
      crossModal.focus();
      document.body.style.overflowY = "hidden";
   };

   // Close modal

   const closeModal = () => {
      modalDom.style.top = "-800px";
      modalDom.style.opacity = "0";
      main.setAttribute("aria-hidden", "false");
      modalDom.setAttribute("aria-hidden", "true");
      contactButton.focus();
      document.body.style.overflowY = "scroll";
   };

   // Test form

   const testForm = () => {
      // firstName error

      if (!regExpLetters.test(firstName.value)) {
         createTxtErr("Veuillez saisir un prénom correct", "firstNameErr", firstName);
      }

      if (document.getElementById("firstNameErr") && regExpLetters.test(firstName.value)) {
         firstNameErr.remove();
         firstName.setAttribute("aria-invalid", "false");
      }

      // lastName error

      if (!regExpLetters.test(lastName.value)) {
         createTxtErr("Veuillez saisir un nom correct", "lastNameErr", lastName);
      }

      if (document.getElementById("lastNameErr") && regExpLetters.test(lastName.value)) {
         lastNameErr.remove();
         lastName.setAttribute("aria-invalid", "false");
      }

      // email error

      if (!regExpEmail.test(email.value)) {
         createTxtErr("Veuillez saisir un email correct", "emailErr", email);
      }
      if (document.getElementById("emailErr") && regExpEmail.test(email.value)) {
         emailErr.remove();
         email.setAttribute("aria-invalid", "false");
      }

      // message error

      if (message.value === "") {
         createTxtErr("Veuillez saisir un message", "messageErr", message);
      }
      if (document.getElementById("messageErr") && message.value !== "" && messageErr) {
         messageErr.remove();
         message.setAttribute("aria-invalid", "false");
      }

      if (document.getElementsByClassName("txt-err").length === 0) {
         console.log(`
         first name : ${firstName.value},
         last name : ${lastName.value},
          email : ${email.value},
         message : ${message.value}
         `);
         closeModal();
         document.querySelectorAll("input").forEach((input) => {
            input.value = "";
         });
      }
   };

   // Event listener

   contactButton.addEventListener("click", () => {
      displayModal();
   });

   crossModal.addEventListener("click", () => {
      closeModal();
   });
   addEventListener("keydown", (e) => (e.key === "Escape" ? closeModal() : null));

   addEventListener("keydown", (e) => {
      if (modalDom.style.display === "block" && e.key === "Escape") {
         closeModal();
      }
   });

   sendButton.addEventListener("click", (e) => {
      e.preventDefault();
      testForm();
   });
};

export default modal;
