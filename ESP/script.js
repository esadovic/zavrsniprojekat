function onNavChange(nav) {
    //ako je nav zapravo nav-home
    if (nav == 'nav-home') {
        //prikazi home
        document.getElementById('home').style.display = "block"; //prikazi se
        document.getElementById('gallery').style.display = "none";
        document.getElementById('blog').style.display = "none";
        document.getElementById('about').style.display = "none";
        document.getElementById('contact').style.display = "none";

        document.getElementById('nav-home').classList.add('active');
        document.getElementById('nav-gallery').classList.remove('active');
        document.getElementById('nav-blog').classList.remove('active');
        document.getElementById('nav-about').classList.remove('active');
        document.getElementById('nav-contact').classList.remove('active');
          
        //prikazi gallery
    } else if (nav == 'nav-gallery') {
      document.getElementById('home').style.display = "none"; 
      document.getElementById('gallery').style.display = "block"; //prikazi se
      document.getElementById('blog').style.display = "none";
      document.getElementById('about').style.display = "none";
      document.getElementById('contact').style.display = "none";

        document.getElementById('nav-home').classList.remove('active');
        document.getElementById('nav-gallery').classList.add('active');
        document.getElementById('nav-blog').classList.remove('active');
        document.getElementById('nav-about').classList.remove('active');
        document.getElementById('nav-contact').classList.remove('active');
        
     //prikazi blog
    } else if (nav == 'nav-blog') {
        document.getElementById('home').style.display = "none"; 
        document.getElementById('gallery').style.display = "none";
        document.getElementById('blog').style.display = "block"; //prikazi se
        document.getElementById('about').style.display = "none";
        document.getElementById('contact').style.display = "none";

        document.getElementById('nav-home').classList.remove('active');
        document.getElementById('nav-gallery').classList.remove('active');
        document.getElementById('nav-blog').classList.add('active');
        document.getElementById('nav-about').classList.remove('active');
        document.getElementById('nav-contact').classList.remove('active');

    //prikazi about
    } else if (nav == 'nav-about') {
        document.getElementById('home').style.display = "none";
        document.getElementById('gallery').style.display = "none";
        document.getElementById('blog').style.display = "none";
        document.getElementById('about').style.display = "block"; //prikazi se
        document.getElementById('contact').style.display = "none";

        document.getElementById('nav-home').classList.remove('active');
        document.getElementById('nav-gallery').classList.remove('active');
        document.getElementById('nav-blog').classList.remove('active');
        document.getElementById('nav-about').classList.add('active');
        document.getElementById('nav-contact').classList.remove('active');
    }
     //prikazi contact
     else if (nav == 'nav-contact') {
      document.getElementById('home').style.display = "none";
      document.getElementById('gallery').style.display = "none";
      document.getElementById('blog').style.display = "none";
      document.getElementById('about').style.display = "none";
      document.getElementById('contact').style.display = "block"; //prikazi se

      document.getElementById('nav-home').classList.remove('active');
      document.getElementById('nav-gallery').classList.remove('active');
      document.getElementById('nav-blog').classList.remove('active');
      document.getElementById('nav-about').classList.remove('active');
      document.getElementById('nav-contact').classList.add('active');
  }
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}