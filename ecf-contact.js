document.getElementById('contact-form').addEventListener('envoyer'), function(event) {
  let name = document.getElementById('nom').value();
    let email = document.getElementById('email').value();
    let message = document.getElementById('message').value();
    let confirmationMessage = document.getElementById('confirmation-message');}

    // Vérification des champs obligatoires
    if (nom === "" || email === "" || message === "") {
        alert("Veuillez remplir tous les champs obligatoires.");
        return;
    }

    // Vérification email valide
    let emailverif= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailverif.test(email)) {
        alert("Veuillez saisir une adresse email valide.");
        return;
    }
