document.addEventListener("DOMContentLoaded", () => {
    const donationBoxes = document.querySelectorAll(".donation-box");
    const frequencyButtons = document.querySelectorAll(".frequency-btn");
    const donateButton = document.querySelector(".donate-btn");

    let selectedAmount = 50; // Montant par défaut
    let selectedFrequency = "mois"; // Fréquence par défaut

    // Gestion de la sélection des montants
    donationBoxes.forEach(box => {
        box.addEventListener("click", () => {
            donationBoxes.forEach(b => b.classList.remove("active"));
            box.classList.add("active");
            selectedAmount = box.getAttribute("data-value");
            updateDonateButton();
        });
    });

    // Gestion de la sélection de la fréquence
    frequencyButtons.forEach(button => {
        button.addEventListener("click", () => {
            frequencyButtons.forEach(b => b.classList.remove("active"));
            button.classList.add("active");

            const freq = button.getAttribute("data-frequency");
            selectedFrequency = freq === "once" ? "une fois" :
                                freq === "monthly" ? "mois" : "an";
            updateDonateButton();
        });
    });

    // Met à jour le bouton de don
    function updateDonateButton() {
        donateButton.textContent = `❤️ Faire un don de ${selectedAmount}€/${selectedFrequency}`;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const mainImage = document.getElementById("main-img");
    const storyTitle = document.getElementById("story-title");
    const storyDescription = document.getElementById("story-description");
    const storyDate = document.getElementById("story-date");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            // Changer l'image principale
            mainImage.src = this.getAttribute("data-image");

            // Changer le titre, la description et la date
            storyTitle.textContent = this.getAttribute("data-title");
            storyDescription.textContent = this.getAttribute("data-description");
            storyDate.textContent = this.getAttribute("data-date");

            // Marquer la miniature comme active
            document.querySelector(".thumbnail.active").classList.remove("active");
            this.classList.add("active");
        });
    });
});
function selectAnswer(button) {
    // Retirer la sélection des autres réponses dans la même carte
    let parent = button.parentElement;
    let buttons = parent.querySelectorAll('.answer');
    buttons.forEach(btn => btn.classList.remove('selected'));

    // Ajouter la classe "selected" au bouton cliqué
    button.classList.add('selected');
}
