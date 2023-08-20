"use strict";

//buttons
const trendingBtn = document.getElementById("trendingBtn");
const preOrdersBtn = document.getElementById("preOrdersBtn");
const upcomingBtn = document.getElementById("upcomingBtn");
const supportBtn = document.getElementById("supportBtn");
const closeBtn = document.getElementById('closeBtn');

// Search Icon Work
const floatingNavbarList = document.querySelector('.floatingNavbarList');
const searchIcon = document.getElementById('searchIcon');
const crossIcon = document.getElementById('crossIcon');
const searchField = document.getElementById('searchField');

searchIcon.addEventListener('click', () => {
  searchField.classList.toggle('active');
  crossIcon.classList.toggle('active');
  searchIcon.style.display = searchField.classList.contains('active') ? 'none' : 'flex';
  floatingNavbarList.style.display = searchField.classList.contains('active') ? 'none' : 'flex'; // Hide the nav menu items when search is active
});

crossIcon.addEventListener('click', () => {
  searchField.classList.toggle('active');
  crossIcon.classList.toggle('active');
  searchIcon.style.display = searchField.classList.contains('active') ? 'none' : 'flex';
  floatingNavbarList.style.display = searchField.classList.contains('active') ? 'none' : 'flex'; // Hide the nav menu items when search is active
});

//pages
const pcChiledComponent = document.querySelector(".pcChiledComponent");

//button clicks events
trendingBtn.addEventListener("click", function () {
  pcChiledComponent.classList.toggle('active');
  pcChiledComponent.style.display = 'flex';
});

closeBtn.addEventListener('click', closeModal);

pcChiledComponent.addEventListener('click', (event) => {
  if (event.target === pcChiledComponent) {
    closeModal();
  }
});


//functions

function closeModal() {
  pcChiledComponent.style.display = 'none';
}










