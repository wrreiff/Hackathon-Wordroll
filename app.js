//look up instances of specified text
//use DOM manipulation to change the text to something else
//at some point rick roll


console.log('App.js is working!')

document.body.innerHTML = document.body.innerHTML.replaceAll(/software engineer/gi, 'hand model');
document.body.innerHTML = document.body.innerHTML.replaceAll(/immersive/gi, 'Juicy Puff');
document.body.innerHTML = document.body.innerHTML.replaceAll(/coding/gi, 'Underwater Basket-Weaving');

window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
        popUp();
    }
};

function popUp () {
  const response = window.confirm("You've won a free Codesmith Underwater Basket Weaving class.  Click continue OK to accept!");
    if(response) {
      window.open("https://youtu.be/dQw4w9WgXcQ?t=43");
  };
}

// let selectP = document.querySelectorAll('p')
// let selectP = document.getElementsByTagName("p").innerHTML
// console.log(selectP)
// selectP.forEach(el => {
//     console.log(el)
//   })



