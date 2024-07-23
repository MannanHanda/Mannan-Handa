// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.opacity = "0";
    setTimeout(() => {
      mybutton.style.display = "none";
    }, 500); // Match this with the CSS transition time for opacity
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Fade out the button
  mybutton.style.opacity = "0";
  setTimeout(() => {
    mybutton.style.display = "none";
  }, 500); // Match this with the CSS transition time for opacity
}