
"use strict";
  /*---------------------*/
  /* 1. desktom mega menu js */
  /*---------------------*/
  // Constants
  const dropdownItems = document.querySelectorAll(".has-dropdown");
  const overlay = document.createElement("div");
  overlay.classList.add("mega-menu-overlay");
  document.body.appendChild(overlay);
  
  // Event handling for dropdown menus
  dropdownItems.forEach(item => {
      const menuItem = item.querySelector("a");
      const subMenu = item.querySelector(".sub-menu");
  
      menuItem.addEventListener("click", function(event) {
          event.preventDefault();
  
          closeOtherMenus(item);
  
          if (item.classList.contains("active")) {
              overlay.classList.remove("show");
          } else {
              overlay.classList.add("show");
          }
  
          item.classList.toggle("active");
      });
  });
  
  // Close other active dropdown menus
  function closeOtherMenus(clickedItem) {
      dropdownItems.forEach(item => {
          if (item !== clickedItem && item.classList.contains("active")) {
              item.classList.remove("active");
              overlay.classList.remove("show");
          }
      });
  }
  
  // Event handling for clicking outside dropdowns
  document.addEventListener("click", function(event) {
      const target = event.target;
      if (!target.closest(".has-dropdown")) {
          closeOtherMenus(null);
      }
  });

  /*---------------------*/
  /* 2. search bar js */
  /*---------------------*/
  
  // Event handling for search bar
  document.querySelector(".search").addEventListener("click", (event) => {
      const searchBar = document.querySelector(".search-bar");
      searchBar.style.opacity = "1";
      searchBar.style.visibility = "visible";
      event.stopPropagation();
  });

  // Event handling for hiding search bar when clicking outside
  document.addEventListener("click", (event) => {
      const searchBar = document.querySelector(".search-bar");
      const searchIcon = document.getElementById("search");
  
      if (!searchBar.contains(event.target) && event.target !== searchIcon) {
          searchBar.style.opacity = "0";
          searchBar.style.visibility = "hidden";
      }
  });

 /*---------------------*/
  /* 3. mobile menu js */
  /*---------------------*/
  
  // Event handling for toggling sidebar
  const bars = document.querySelector(".bar");
  const sidebar = document.querySelector(".navbar");
  const closingButton = document.querySelector(".fa-xmark");
  
  bars.addEventListener("click", () => {
      sidebar.classList.toggle("offcanvas-menu");
  });
  
  closingButton.addEventListener("click", () => {
      sidebar.classList.remove("offcanvas-menu");
  });

   /*---------------------*/
  /* 4. header to mobile menu js */
  /*---------------------*/
  
  // Event handling for toggling sidebar
  const timebar = document.querySelector(".timebar");
  const topsidebar = document.querySelector(".navbar-mobile-top-menu");
  const closingButtons = document.querySelector(".crosse-bar");
  
  timebar.addEventListener("click", () => {
    topsidebar.classList.toggle("offcanvas-menu-right");
  });
  
  closingButtons.addEventListener("click", () => {
    topsidebar.classList.remove("offcanvas-menu-right");
  });
  
