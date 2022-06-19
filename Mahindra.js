

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