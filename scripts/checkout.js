// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let count = JSON.parse(localStorage.getItem("amount"))
function displayCount() {
    let amount = document.getElementById("wallet");
    amount.innerText = count;
}

function read(query) {
    return document.querySelector(query).value;
}
displayCount()

function displayData() {
    let data = JSON.parse(localStorage.getItem("movie"));
    let title = document.createElement("h2");
    title.innerText = data.Title;
    let img = document.createElement("img");
    img.style.height = "500px";
    img.style.aspectRatio = "9/16"
    img.src = data.Poster;
    document.querySelector("#movie").append(title, img)
}
displayData()

function bookTickets(e) {
    e.preventDefault();
    let name = read("#user_name");
    let seats = Number(read("#number_of_seats"));
    let total = seats * 100;
    if (total > count) {
        alert("Insufficient Balance!")
    }
    else {
        count -= total;
        localStorage.setItem("amount", JSON.stringify(count));
        displayCount()
        alert("Booking successful!")
    }
}