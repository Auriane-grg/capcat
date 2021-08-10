const navbar = () => {
  let nav = document.getElementById("nav");
  let firstPosition = 0;
  const spotify = document.querySelector(".music");

  if (!nav) { 
    return };

  window.addEventListener("scroll", () => {
    // console.log(window.scrollY);

    if (window.scrollY  > firstPosition) {
      nav.classList.add('nonav');
      if (spotify) {
        spotify.classList.remove('nonav');
      }
    }
    
    else {
      nav.classList.remove('nonav');
      if (spotify){
        spotify.classList.add('nonav');
      }
    }

    firstPosition = window.scrollY;
  });

}

export { navbar }