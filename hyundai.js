// SELECTCITY BOX POPUP WINDOW

var selectCity = document.querySelector("#city_search");

var selectCityNav = document.querySelector(".cityBox");
selectCity.addEventListener("click", function () {
  var searchBox = document.querySelector("#subContainer");
  var container = document.querySelector("#container");
  searchBox.style.display = "block";
  container.style.display = "flex";
  container.style.backgroungcolor = "rgba(0,0,0,0.3)";
});
var close = document.querySelector(".crossIcon>img");
close.addEventListener("click", function () {
  var searchBox = document.querySelector("#subContainer");
  var container = document.querySelector("#container");
  searchBox.style.display = "none";
  container.style.display = "none";
});
selectCityNav.addEventListener("click", function () {
  var searchBox = document.querySelector("#subContainer");
  var container = document.querySelector("#container");
  searchBox.style.display = "block";
  container.style.display = "flex";
  container.style.backgroungcolor = "rgba(0,0,0,0.3)";
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
var close = document.querySelector(".crossIcon>img");
close.addEventListener("click", function () {
  var searchBox = document.querySelector("#subContainer");
  var container = document.querySelector("#container");
  searchBox.style.display = "none";
  container.style.display = "none";
});

var searchNav = document.querySelector(".search");
searchNav.addEventListener("click", function () {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
// var citiesDiv = document.querySelectorAll(".city-div");
// console.log(citiesDiv)
// citiesDiv.forEach(function (elem) {
//   elem.addEventListener("click", function () {
//     var cityText = document.querySelector("#city-search");
//     // console.log(cityText.innerText);
//     var check = document.querySelectorAll("#topCities>div>img");
//     var citySpan = document.querySelector(".citySpan");
//     check.forEach(function (data) {
//       data.classList.remove("active");
//     });
//     cityText.innerText = event.target.innerText;
//     citySpan.innerText = event.target.innerText;
//     elem.querySelector("#topCities>div>img").classList.add("active");
//   });
// });

const cities_div = document.querySelectorAll('#topCities > div');

cities_div.forEach((selected_city) => {
    selected_city.addEventListener('click', (clicked_city) => {
        const city_name = clicked_city.target.innerText
        // console.log(selected_city)
        const current_selected = document.querySelector('.selected-city')
        current_selected.classList.remove('selected-city')
        selected_city.classList.add('selected-city');

        // const searchBox = document.querySelector("#subContainer");
        // searchBox.style.display = "none";
        const container = document.querySelector("#container");
        container.style.display = "none";

        const city_display = document.getElementById('city_search')
        city_display.value = city_name
        city_display.style.color = "rgba(0, 0, 0, 0.87)"
    })
})

const other_cities_div = document.querySelectorAll('#otherCities > div');

other_cities_div.forEach((selected_city) => {
    selected_city.addEventListener('click', (clicked_city) => {
        const city_name = clicked_city.target.innerText
        // console.log(selected_city)
        const current_selected = document.querySelector('.selected-city')
        current_selected.classList.remove('selected-city')
        selected_city.classList.add('selected-city');

        // const searchBox = document.querySelector("#subContainer");
        // searchBox.style.display = "none";
        const container = document.querySelector("#container");
        container.style.display = "none";

        const city_display = document.getElementById('city_search')
        city_display.value = city_name
        city_display.style.color = "rgba(0, 0, 0, 0.87)"
    })
})

var searchbarContainer = document.getElementById("searchbarContainer")
        var searchBar = document.getElementById("searchBar");
        window.onscroll = function(){
          if(window.pageYOffset >= 582){
            searchBar.style.display="grid";
            searchbarContainer.style.display= "block";
          } else {
            searchBar.style.display="none";
            searchbarContainer.style.display= "none"; 
          }
        }

const faqs_div = document.querySelectorAll(".faq_div")
const faq_hidden = document.querySelectorAll(".faq_hidden")
// console.log(faq_hidden[1])
faqs_div.forEach(function(elem,index) {
    elem.addEventListener("click", function() {
        // console.log(faqs_div[index])
        display(index)
    })
})

function display(index) {
    // console.log(faq_hidden)
    // console.log(faq_hidden[index])
    if(faq_hidden[index].style.display == 'none') {
        faq_hidden[index].style.display = 'block'
    }
    else {
        faq_hidden[index].style.display = 'none'
    }
}