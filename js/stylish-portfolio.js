(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

})(jQuery); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);


// Populate Skills Section
(function populateSkills(){
  var skillsDetails = [
    {
      title:'HTML5',
      image:'./img/HTML5_Logo.png'
    },
    {
      title:'CSS3',
      image:'./img/CSS3_Logo.png'
    },
    {
      title:'JavaScript',
      image:'./img/JavaScript_Logo.png'
    },
    {
      title:'GitHub',
      image:'./img/gitHub_Logo.png'
    },
    {
      title:'Visual Studio',
      image:'./img/vs.png'
    },
    {
      title:'jQuery',
      image:'./img/jquery.png'
    },
    {
      title:'Adobe Creative Cloud',
      image:'./img/acc.png'
    },
    {
      title:'NodeJS',
      image:'./img/nodejs.png'
    },
    {
      title:'ReactJS',
      image:'./img/react.png'
    }
  ];

  var skillsHTML = "";

  for(var i = 0; i < skillsDetails.length; i++) {
    if(i == 4) {
      var addBootstrapLogo = '<div class="col-sm-3 col-6"><svg class="skillsLogo" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg" ><path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"/></svg><p class="text-faded skillsTitle">Bootstrap</p></div>';

      skillsHTML = skillsHTML + addBootstrapLogo;
    }
    var addCols ='<div class="col-sm-3"></div>'
    if((i == skillsDetails.length - 2) && (Math.abs(i % 4) == 3)){
      skillsHTML = skillsHTML + addCols;
    }
    var addHTML = '<div class="col-sm-3 col-6"><img class="skillsLogo" src="' + skillsDetails[i].image + '"><p class="text-faded skillsTitle">' + skillsDetails[i].title + '</p></div>'

    skillsHTML = skillsHTML + addHTML;

    if ((i == skillsDetails.length - 1) && (Math.abs(i % 4) == 0)) {
      skillsHTML = skillsHTML + addCols;
    }
  }

  document.getElementById('skillsContent').innerHTML = skillsHTML;
})();

// Populate Project Area Javascript
(function populatePortfolio(){
  var portfolioDetails = [
    {
      title:'Kable Academy Capstone Project',
      description:'Capstone based around Cincinnati Tourism, a full stack MERN (MongoDB, Express, React, Node) website',
      image:'./img/capstone.jpg',
      link:'https://capstonecincinnatidls.herokuapp.com/'
    },
    {
      title:'Pet Store',
      description:'Mock Pet Store Project utilizing Bootstrap/JavaScript/jQuery',
      image:'./img/petStore.jpg',
      link:'https://sachsd-stack.github.io/petStore/'
    },
    {
      title:'How to Cross a Piranha-Infested River',
      description:'Madlibs with HTML,CSS, and JavaScript',
      image:'./img/madLib.jpg',
      link:'https://sachsd-stack.github.io/madLibs/'
    },
    {
      title:'Parody Product: Buy a Piece of Stonehenge!',
      description:'Introduction to some JavaScript, but primarily uses HTML Bootstrap and CSS',
      image:'./img/parodyProduct.jpg',
      link:'https://sachsd-stack.github.io/productLandingPage/'
    },
    {
      title:'Javascript Bass Riff',
      description:'Reused Given Javascript Drum Kit to a Bass Riff using Audacity/JavaScript',
      image:'./img/jsbassriff.jpg',
      link:'https://sachsd-stack.github.io/JS-Bass-Riff-from-Drum-Kit/'
    },
    {
      title:'Counter React App',
      description:'Simple Number Counter and Multiplier built using React',
      image:'./img/counterApp.png',
      link:'https://sachsd-stack.github.io/counterApp/'
    },
    {
      title:'To-do List React App',
      description:'To-do list made using React',
      image:'./img/toDoList.png',
      link:'https://sachsd-stack.github.io/toDoList/'
    },
    {
      title:'Fun Facts React App',
      description:'Texas Hold-em Fun Facts App made using React',
      image:'./img/funFacts.png',
      link:'https://sachsd-stack.github.io/funFacts/'
    },
    {
      title:'Standard Textile Meg Fiora Collection',
      description:"Restyled previous developer's work to fit Interiors Collection theme. Used HTMl, CSS, JavaScript, jQuery and other scripts",
      image:'./img/megFiora.jpg',
      link:'http://interiors.standardtextile.com/featured/megfiora'
    }
  ]

  var portfolioHTML = "";
  var link = "";

  for(var i = 0; i < portfolioDetails.length; i++) {
    if(i == (portfolioDetails.length - 1) && (Math.abs(i % 2) == 0)) {
      var addCols = '<div class="col-lg-3"></div>'
      link = addCols + '<div class="col-lg-6"><a class="portfolio-item" href="' + portfolioDetails[i].link + '" target="_blank">' + addCols;
    }
    else {
      link = '<div class="col-lg-6"><a class="portfolio-item" href="' + portfolioDetails[i].link + '" target="_blank">';
    }
    var caption = '<div class="caption"><div class="caption-content"><div class="h2">' + portfolioDetails[i].title + '</div><p class="mb-0">' + portfolioDetails[i].description + '</p></div></div>';
    var img = '<img class="img-fluid" src="' + portfolioDetails[i].image + '" alt="' + portfolioDetails[i].title + '"></a></div>';

    portfolioHTML = portfolioHTML + link + caption + img;
  }

  document.getElementById('portfolioContent').innerHTML = portfolioHTML;
})();