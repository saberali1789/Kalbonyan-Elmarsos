const fullName = "Sabe Ali Ahmed";


const shortName = fullName.split(" ").map(n=>n[0]).join('').toLowerCase();

console.log(shortName);
