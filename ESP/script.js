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

//gallery

var imageThumbs = document.getElementById("image-thumbs");
var currentImage = document.getElementById("current-image");

for (var i = 1; i <= 10; i++) {
  var thumb = document.createElement("img");
  thumb.src = "images/image" + i + ".jpg";
  thumb.alt = "Image " + i;
  thumb.classList.add("thumb");
  imageThumbs.appendChild(thumb);
  thumb.addEventListener(
    "click", function() {
      currentImage.src = this.src;
    }
  );
}

