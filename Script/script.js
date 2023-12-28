let prev = document.getElementById("prev");
let next = document.getElementById("next");

let arr = ["Image/slide_img/img1.webp", "Image/slide_img/img2.webp", "Image/slide_img/img3.webp", "Image/slide_img/img4.webp", "Image/slide_img/img5.webp", "Image/slide_img/img6.webp"]
let i = 0;
next.addEventListener("click", function () {
    i++;
    if (i > arr.length - 1) {
        i = 0;
    }
    document.getElementById("image").src = arr[i];
})
prev.addEventListener("click", function () {
    i--;
    if (i < 0) {
        i = arr.length - 1;
    }
    document.getElementById("image").src = arr[i];
})
function slides () {

    document.getElementById("image").src = arr[i];
    if (i < arr.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
}
slides();
setInterval(slides, 3000);

let bag = [];

let data = fetch("https://6399a21316b0fdad7743a496.mockapi.io/movies")
    .then((res) => res.json())
    .then((data) => {
        // console.log(data)
        bag = data;
        displayData(bag);
    });


let trending = document.querySelector(".trending");

function displayData (data) {

    data.forEach((ele) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = ele.image;

        let title = document.createElement("h3");
        title.innerText = ele.title;

        let runtime = document.createElement("p");
        runtime.innerText = "Length : 1hr " + ele.runtime + "min";

        let rating = document.createElement("p");
        rating.innerText = "Rating : " + ele.rating + "⭐ / 100 ⭐";

        let watch = document.createElement("button");
        watch.innerText = "Watch";

        div.append(img, title, runtime, rating, watch);
        trending.append(div);
    })
}
// displayData(data);


// Searched result code refer here

let searchInput = document.getElementById("nav_search");

let search = document.getElementById("search_div");

search.addEventListener("click", () => {
    // window.location.href = "search.html";
    searchedData(searchInput);

})

async function searchedData (searchInput) {
    let data = await fetch(
        `https://63987501fe03352a94d1a25b.mockapi.io/home1?filter=${searchInput.value}`
    );
    console.log(data);
    let renderedData = await data.json();
    console.log(renderedData)
    sessionStorage.setItem("searchedData", JSON.stringify(renderedData));
        window.location.href = "search.html";

}


// let serachBtn = document.querySelector("#searchBar form");
// serachBtn.addEventListener("submit", (event) => {
//     event.preventDefault();

//     console.log(searchedInput.value);
//     searchedData(searchInput);
// });

// async function searchedData (searchedInput) {
//     let data = await fetch(
//         `https://63996f3916b0fdad773c979e.mockapi.io/products?filter=${searchedInput.value}`
//     );
//     console.log(data);
//     let renderedData = await data.json();
//     console.log(renderedData)
//     sessionStorage.setItem("searchedData", JSON.stringify(renderedData));
//     window.location.href = "searchedProduct.html";
// }

