
const nombreSecret = Math.floor(Math.random() * 20) + 1;
let essaisRestants = 5;

const champ = document.getElementById("nombre");
const bouton = document.getElementById("valider");
const message = document.getElementById("message");
const essais = document.getElementById("essais");
const suite = document.getElementById("suite");
const lienSuite = document.getElementById("lienSuite");

function finDuJeu(gagne) {
  champ.disabled = true;
  bouton.disabled = true;
  suite.hidden = false;

  if (gagne) {
    lienSuite.href = "pageJeux22.html";
    lienSuite.textContent = "Monter l'escalier secret vers la tour";
  } else {
    lienSuite.href = "pageJeux24.html";
    lienSuite.textContent = "Le sol se met à trembler...";
  }
}

function essayer() {
  const proposition = Number(champ.value);

  if (!Number.isInteger(proposition) || proposition < 1 || proposition > 20) {
    message.textContent = "La pierre ne comprend pas. Choisis un nombre entre 1 et 20.";
    return;
  }

  essaisRestants--;
  essais.textContent = "Essais restants : " + essaisRestants;

  if (proposition === nombreSecret) {
    message.textContent = "Clic ! La serrure s'ouvre. Derrière la porte, un escalier secret monte vers la tour.";
    finDuJeu(true);
  } else if (essaisRestants === 0) {
    message.textContent = "Raté ! Le nombre secret était " + nombreSecret + ". La pierre se met à gronder...";
    finDuJeu(false);
  } else if (proposition < nombreSecret) {
    message.textContent = proposition + " ? La pierre murmure : « Plus grand... »";
  } else {
    message.textContent = proposition + " ? La pierre murmure : « Plus petit... »";
  }

  champ.value = "";
  champ.focus();
}


bouton.addEventListener("click", essayer);
champ.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    essayer();
  }
});
