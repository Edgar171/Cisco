function calcular(){
    var Q1 = parseFloat(document.getElementById('Q1').value);
    var Q2 = parseFloat(document.getElementById('Q2').value);
    var D = parseFloat(document.getElementById('D').value);

    var Força = (9000000 * Q1 * Q2 / (D * D));
    document.getElementById('resultado').innerText = Força;
}