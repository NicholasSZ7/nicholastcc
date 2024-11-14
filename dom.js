function myFunction() {
    document.getElementById("demo").innerHTML = "Olá, seja bem vindo! Este site será utilizado para um melhor vizualização do metodo RESPONSIVO.";
  }
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
  }