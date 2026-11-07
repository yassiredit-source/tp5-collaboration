function addition() {
    let n1 = Number(document.getElementById("nombre1").value);
    let n2 = Number(document.getElementById("nombre2").value);
    document.getElementById("resultat").innerText = "Résultat : " + (n1 + n2);
}

function soustraction() {
    let n1 = Number(document.getElementById("nombre1").value);
    let n2 = Number(document.getElementById("nombre2").value);
    document.getElementById("resultat").innerText = "Résultat : " + (n1 - n2);
}