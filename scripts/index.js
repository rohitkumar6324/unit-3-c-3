// Store the wallet amount to your local storage with key "amount"
let count = JSON.parse(localStorage.getItem("amount")) || 0;
function read(query) {
    return document.querySelector(query).value;
}
function displayCount() {
    let amount = document.getElementById("wallet");
    amount.innerText = count;
}

displayCount()

function addAmount() {
    let added = read("#amount");
    count += Number(added);
    localStorage.setItem("amount", JSON.stringify(count));
    displayCount();
}