var nome = prompt("inserisci il tuo nome");
var cognome = prompt("inserisci il tuo cognome");
var colorePrefe = prompt("inserisci il tuo colore preferito");
var annoCorrente = "21";

var passwordGen = (nome + cognome + colorePrefe + annoCorrente);
console.log(passwordGen);
document.getElementById("password-generated").innerHTML= passwordGen;