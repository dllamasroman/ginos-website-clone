let slideIndex2 = 0;
showSlides2();

function showSlides2() {
  let i2;
  let slides2 = document.getElementsByClassName("slide2");
  let dots2 = document.getElementsByClassName("dot2");
  for (i2 = 0; i2 < slides2.length; i2++) {
    slides2[i2].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {
    slideIndex2 = 1;
  }
  for (i2 = 0; i2 < dots2.length; i2++) {
    dots2[i2].className = dots2[i2].className.replace(" active2", "");
  }
  slides2[slideIndex2 - 1].style.display = "block";
  dots2[slideIndex2 - 1].className += " active2";
  setTimeout(showSlides2, 2000);
}
