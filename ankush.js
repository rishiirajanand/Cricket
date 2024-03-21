function toggleDropdown(element, isHovering) {
    const dropdownContent = element.querySelector(".dropdown-content");
    dropdownContent.style.display = isHovering ? "block" : "none";
  }
  
  function makeActive(element) {
    let items = document.querySelectorAll(".match-scores .info");
    items.forEach((item) => {
      item.classList.remove("active");
    });
    element.classList.add("active");
  }
  