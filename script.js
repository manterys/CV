const menu = () => {
  const columnLeft = document.querySelector(".column-left");
  const button = document.querySelector('button');
  const menu = document.querySelector('.menu');
  const close = document.querySelector('.close');

  button.addEventListener("click", function () {
    columnLeft.classList.toggle("open");

    if (columnLeft.classList.contains("open")) {
      menu.style.display = "none";
      close.style.display = "block";
    } else {
      menu.style.display = "block";
      close.style.display = "none";
    }
  });
}
menu();