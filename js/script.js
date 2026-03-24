let saldo = 1000;

function depositar() {
    let monto = Number(document.getElementById("monto").value);
    saldo += monto;
    alert("Depósito realizado. Nuevo saldo: $" + saldo);
}