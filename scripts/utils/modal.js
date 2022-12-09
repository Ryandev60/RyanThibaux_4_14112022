const modal = (selectedPhotographer) => {
   // Insert name of photographer

   contactMe.innerHTML += ` ${selectedPhotographer.name}`;

   //RegExp

   const regExpEmail = new RegExp(
      "^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,5})+[.]{1}[a-z]{2,10}$"
   );
   const regExpLetters = new RegExp("^[a-zA-Z'-]+$");

   // Function

   const createTxtErr = (txt, id, input) => {
      if (!document.getElementById(`${id}`)) {
         const txtErr = document.createElement("p");
         txtErr.innerHTML = txt;
         txtErr.classList.add("txt-err");
         txtErr.id = id;
         input.after(txtErr);
      }
   };

   const displayModal = () => {
      modalDom.style.display = "block";
   };

   const closeModal = () => {
      modalDom.style.display = "none";
   };

   // Event listener

   contactButton.addEventListener("click", () => {
      displayModal();
   });

   crossModal.addEventListener("click", () => {
      closeModal();
   });

   addEventListener("keydown", (e) => {
      if (modalDom.style.display === "block" && e.key === "Escape") {
         closeModal();
      }
   });

   // Test error form

   sendButton.addEventListener("click", (e) => {
      e.preventDefault();

      // firstName error

      if (!regExpLetters.test(firstName.value)) {
         createTxtErr(
            "Veuillez saisir un prénom correct",
            "firstNameErr",
            firstName
         );
      }

      if (
         document.getElementById("firstNameErr") &&
         regExpLetters.test(firstName.value)
      ) {
         firstNameErr.remove();
      }

      // lastName error

      if (!regExpLetters.test(lastName.value)) {
         createTxtErr(
            "Veuillez saisir un nom correct",
            "lastNameErr",
            lastName
         );
      }

      if (
         document.getElementById("lastNameErr") &&
         regExpLetters.test(lastName.value)
      ) {
         lastNameErr.remove();
      }

      // email error

      if (!regExpEmail.test(email.value)) {
         createTxtErr("Veuillez saisir un email correct", "emailErr", email);
      }
      if (
         document.getElementById("emailErr") &&
         regExpEmail.test(email.value)
      ) {
         emailErr.remove();
      }

      // message error

      if (message.value === "") {
         createTxtErr("Veuillez saisir un message", "messageErr", message);
      }
      if (
         document.getElementById("messageErr") &&
         message.value !== "" &&
         messageErr
      ) {
         messageErr.remove();
      }

      if (document.getElementsByClassName("txt-err").length === 0) {
         console.log(`
         first name : ${firstName.value},
         last name : ${lastName.value},
          email : ${email.value},
         message : ${message.value}
         `);
      }
   });
};

export default modal;
