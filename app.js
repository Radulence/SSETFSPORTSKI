const divFudb = document.getElementById('fudbal')

const divKos = document.getElementById('kosarka')

const divOpste = document.getElementById('opste')

const redfudbal = document.querySelectorAll('#fudbalred')

const rezFudb =  document.getElementById('kolofudbal')

const rezKos = document.getElementById('kolokosarka')

function rezultatiFudbal(){
  rezFudb.style.display = "block"
  rezKos.style.display = "none"
}

function rezultatiKosarka(){
  rezKos.style.display = "block"
  rezFudb.style.display = "none"
}

function filterFudbal(){
    divFudb.style.display = "block"
    divKos.style.display = "none"
    divOpste.style.display = "none"
}

function filterKosarka(){
    divKos.style.display = "block"
    divFudb.style.display = "none"
    divOpste.style.display = "none"

}



function filterOpste(){
    divOpste.style.display  = "block"
    divFudb.style.display = "none"
    divKos.style.display = "none"
}


const nav = document.getElementById('nav')
const navslika = document.getElementById('navslika')

const ikona = document.getElementById('ikona')

nav.addEventListener('click', function(){
    if (ikona.style.display === "none") {
      ikona.style.display = "block";
    } else {
      ikona.style.display = "none";
    }

  
    
  
})



  AOS.init();




  const dugme = document.getElementById('sledeci')

  dugme.addEventListener('click', function(){
      
  })




  $(".slideshow").slick({
    infinite: true,
    autoplay: true,
    dots: true,
    arrows: true,
    autoplaySpeed: 4000
});



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function plusSlides1(n) {
  showSlides1(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function currentSlide1(n) {
  showSlides1(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block" 
  dots[slideIndex-1].className += " active";
}


function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("dot1");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block" 
  dots[slideIndex-1].className += " active";
}



function prikazStrelica(){
  var next = document.getElementById('sledecifudb')
  var prev = document.getElementById('proslifudb')
  next.style.display = "block"
  prev.style.display = "block"
  }


  function prikazStrelica1(){
    var next = document.getElementById('sledecikos')
    var prev = document.getElementById('proslikos')
    next.style.display = "block"
    prev.style.display = "block"
    }