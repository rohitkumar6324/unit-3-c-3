// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
// api = "http://www.omdbapi.com/?s=avengers&apikey=ea6b3376";

let count = JSON.parse(localStorage.getItem("amount")) || 0;
function displayCount() {
    let amount = document.getElementById("wallet");
    amount.innerText = count;
}
displayCount()

function read(query) {
    return document.querySelector(query).value;
}
async function showMovies() {
    const query = read("#search");
    if (query !== "") {
        try {
            const url = `https://www.omdbapi.com/?s=${query}&apikey=ea6b3376`
            const fetched = await fetch(url);
            const dataParsed = await fetched.json();
            if (dataParsed.Response == "True") {
                console.log(dataParsed);
                appendData(dataParsed.Search);
            }
        }
        catch (err) {
            console.log(err);
        }

    }

}

let id;

function debounce(func, delay) {
    if (id) clearTimeout(id);
    id = setTimeout(() => {
        func();
    }, delay);
}

function appendData(data) {
    let container = document.querySelector("#movies");
    container.innerHTML = null;
    data.forEach(elem => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        let title = document.createElement("h2");
        let booknow = document.createElement("button");
        booknow.innerText = "book now";
        booknow.className = "book_now";
        booknow.addEventListener("click", () => {
            selectMovie(elem);
        })
        title.innerText = elem.Title;
        img.src = elem.Poster;
        img.style.width = "100%";
        img.style.aspectRatio = "9/16"
        card.append(img, title, booknow);
        container.append(card);
    })
}

function selectMovie(data) {
    localStorage.setItem("movie", JSON.stringify(data));
    window.location.href = "../checkout.html"
}