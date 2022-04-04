const links = [...document.querySelectorAll("li a")];

links.forEach((link) => {
  link.addEventListener("click", click);
});

function click(e) {
  links.forEach((link) => {
    link.classList.remove("highlight");
  });
  let link = e.currentTarget;
  link.classList.add("highlight");
}

// comment
