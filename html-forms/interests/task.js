const checkbox = document.getElementsByClassName("interest__check");

function CheckedChildren(e) {
  const children = e.target.closest(".interest").querySelectorAll("input");
  if (this.checked === true) {
    for (let index of children) {
      index.checked = true;
    }
  } else {
    for (let index of children) {
      index.checked = false;
    }
  }
}

for (let index of checkbox) {
  index.addEventListener("click", CheckedChildren);
}