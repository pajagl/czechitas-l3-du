// tady je místo pro náš program

let vstup = document.querySelector(".reseni");

let jmeno = prompt("Zadejte své celé jméno");

let rok = Number(prompt("Zadejte svůj rok narození"));

vstup.innerHTML += jmeno + " " + (2022 - rok)

let barva = prompt("Napiš oblíbenou barvu anglicky")

vstup.style.color = barva;
vystup.style.fontStyle = "italic"

