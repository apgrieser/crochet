// Scroll to the top of the document on page load
// window.onload = function() {
//   window.scrollTo(0, 0);
// };

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("return-to-top").style.display = "block";
    } else {
        document.getElementById("return-to-top").style.display = "none";
    }
}

document.getElementById("return-to-top").addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// React when the "Learn More" button is pressed.
// document.addEventListener("DOMContentLoaded", function() {
//   var learnMoreButton = document.querySelector("#learn-more-button");
//   var servicesSection = document.querySelector("#services");

//   learnMoreButton.addEventListener("click", function() {
//       servicesSection.scrollIntoView({ behavior: "smooth" });
//   });
// });


