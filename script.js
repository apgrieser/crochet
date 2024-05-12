// Scroll to the top of the document on page load
// window.onload = function() {
//   window.scrollTo(0, 0);
// };

document.addEventListener("DOMContentLoaded", function() {
    // console.log("DOMContentLoaded");
    // const menuToggle = document.querySelector('.menu-toggle');
    // const nav = document.querySelector('nav ul');

    // Toggle the 'show' class on the navigation links when the menu toggle is clicked
    // menuToggle.addEventListener('click', function () {
    // nav.classList.toggle('show');
    // });

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("return-to-top").style.display = "block";
        } else {
            document.getElementById("return-to-top").style.display = "none";
        }
    }

    document.getElementById("return-to-top").addEventListener("click", function() {
        // console.log("return-to-top pressed")
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });


});
    

    // document.addEventListener('DOMContentLoaded', function () {
    //     const menuToggle = document.querySelector('.menu-toggle');
    //     const nav = document.querySelector('nav ul');
      
    //     // Toggle the 'show' class on the navigation links when the menu toggle is clicked
    //     menuToggle.addEventListener('click', function () {
    //       nav.classList.toggle('show');
    //     });
    //   });
      

    // document.getElementById("get-started").addEventListener("click", function() {
    //     console.log("get-started pressed")
    //     document.getElementById("services").scrollIntoView({ behavior: 'smooth' });
    // });

    
    // React when the "Get Started" button is pressed.
    // var getStarted = document.querySelector("#get-started");
    // console.log("After getStarted Set", getStarted)
    // var servicesSection = document.querySelector("#services");
    // console.log("After servicesSection Set", servicesSection);

    // getStarted.addEventListener("click", function() {
    //     console.log("Before scrollIntoView call ")
    //     servicesSection.scrollIntoView({ behavior: "smooth" });
    // });

    // React when the "Learn More" button is pressed.
    // document.addEventListener("DOMContentLoaded", function() {
    //     var getStarted = document.querySelector("#learn-more-button");
    //     var servicesSection = document.querySelector("#services");
  
    //     getStarted.addEventListener("click", function() {
    //         servicesSection.scrollIntoView({ behavior: "smooth" });
    //     });
    //   });
