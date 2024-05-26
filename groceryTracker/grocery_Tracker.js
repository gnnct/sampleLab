let grocery1Amount;
let grocery2Amount;
let grocery3Amount;

function calculateTotalAmount() {
    grocery1Amount = parseFloat(document.getElementById('grocery1Amount').value);
    grocery2Amount = parseFloat(document.getElementById('grocery2Amount').value);
    grocery3Amount = parseFloat(document.getElementById('grocery3Amount').value);

    let totalAmount = grocery1Amount + grocery2Amount + grocery3Amount;

    document.getElementById('totalAmount').innerText = `The total amount is: ${totalAmount}`;
}