if (screen.width < 600) {
  let div1 = document.querySelector(".intro-description");
  let div4 = document.querySelector(".intro-image");
  let temp = div1.cloneNode(true);

  div1.innerHTML = div4.innerHTML;
  div1.className = div4.className;

  div4.innerHTML = temp.innerHTML;
  div4.className = temp.className;
}