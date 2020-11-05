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


// Populate Project Area Javascript
(function populatePortfolio(){
  var portfolioDetails = [
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