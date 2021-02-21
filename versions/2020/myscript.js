/** JQuery functionality when screen is to be loaded **/

// Refresh viewport for fixing browser compatibility issues
$(window).trigger("resize");

$(window).on("load", function() {
  $(window).scroll(function () {

      // Determines height position of browser window top height
      //console.log($(window).scrollTop());

      // Obtain height values for the following (As BootStrap determines varied heights for divs)
      var navHeight = $("#navigationBar").height();
      var carouselHeight = $("#carouselImageSlideShow").height();
      //console.log(navHeight);
      //console.log(carouselHeight);

      var aboutMe_triggerPosition = (carouselHeight / 1.2);
      var aboutMe_triggerHeight = (navHeight + carouselHeight) - aboutMe_triggerPosition;

      if ($(window).scrollTop() >= aboutMe_triggerHeight) {
          $('#about-me-heading').css('visibility', 'visible').hide().fadeIn(2000, "swing")
          $('#about-me-subHeading').css('visibility', 'visible').hide().fadeIn(4000,"swing");
          $(this).off('scroll');
      }
  });
});


/*For the Photography Portfolio gallery, the following JavaScript script
triggers the modal and then opens the modal along with the image */

// Firstly obtain the modal before retrieving the image
var modal = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");

// Get the image and insert it inside the modal - use its "alt" text from the html file as a caption
var img = document.getElementById("pic1");
var img2 = document.getElementById("pic2");
var img3 = document.getElementById("pic3");
var img4 = document.getElementById("pic4");

var modalImg = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
var modalImg3 = document.getElementById("img03");
var modalImg4 = document.getElementById("img04");

var captionText = document.getElementById("caption");
var captionText2 = document.getElementById("caption2");
var captionText3 = document.getElementById("caption3");
var captionText4 = document.getElementById("caption4");

//Creating the function for each click on the picture which will show the modal, image and caption respectively
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img2.onclick = function() {
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}

img3.onclick = function() {
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
}

img4.onclick = function() {
  modal4.style.display = "block";
  modalImg4.src = this.src;
  captionText4.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementById("myModal1").getElementsByClassName("close")[0];
var span2 = document.getElementById("myModal2").getElementsByClassName("close")[0];
var span3 = document.getElementById("myModal3").getElementsByClassName("close")[0];
var span4 = document.getElementById("myModal4").getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close modal and the display would be hidden
span.onclick = function() {
  modal.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

span4.onclick = function() {
  modal4.style.display = "none";
}
