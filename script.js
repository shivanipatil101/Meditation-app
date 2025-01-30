const nameSpan = document.getElementById('name');
const greeting = document.querySelector('.greeting');


function setGreeting() {
  const currentHour = new Date().getHours();

  if (currentHour < 12) {
    greeting.textContent = 'Good Morning';
  } else if (currentHour < 18) {
    greeting.textContent = 'Good Afternoon';
  } else {
    greeting.textContent = 'Good Evening';
  }
}


function handleNameEdit() {
  nameSpan.contentEditable = true; // Make the span editable
  nameSpan.focus(); // Focus the span for the user to start typing
}


function handleNameSave() {
  const name = nameSpan.textContent.trim(); // Get the name entered
  localStorage.setItem('username', name); // Save to local storage


  if (!name) {
    nameSpan.textContent = '[Your Name]';
  }
}


function initializePage() {
  setGreeting(); 


  const storedName = localStorage.getItem('username');
  if (storedName) {
    nameSpan.textContent = storedName;
  }


  nameSpan.addEventListener('click', handleNameEdit); // Start editing on click
  nameSpan.addEventListener('blur', handleNameSave); // Save the name on blur
}

document.addEventListener('DOMContentLoaded', initializePage);

const quotes = [
    "Breathe in peace, breathe out stress.",
    "You are exactly where you need to be.",
    "Inhale calm, exhale worries.",
    "The present moment is all there is.",
    "Quiet the mind, and the soul will speak.",
    "Let go of what you can't control.",
    "Be still and listen to the silence.",
    "Calmness is the cradle of power.",
    "In the stillness, you will find clarity.",
    "Peace begins with a smile.",
    "Meditation is the soul's perspective of truth.",
    "When you let go of who you think you should be, you become who you are.",
    "The greatest prayer is patience.",
    "Stillness is where creativity and solutions are found.",
    "You don’t have to be perfect; you just have to be present.",
    "The more you meditate, the more you will see the peace within.",
    "Silence is not empty, it is full of answers.",
    "Don't just do something, sit there.",
    "Your calm mind is the ultimate weapon against your challenges.",
    "The quieter you become, the more you can hear."
  ];
  
  const quoteElement = document.querySelector(".typing");
  
  let index = 0;
  function updateQuote() {
    quoteElement.textContent = quotes[index];
    index = (index + 1) % quotes.length; 
  }
  
  setInterval(updateQuote, 5000);
  
  updateQuote();

  function toggleText(id) {
    const textElement = document.getElementById(id);
    textElement.classList.toggle('visible-text');
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
  
    navbar.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });
  });
  
  
 
  window.addEventListener('load', () => {
    const loader=document.querySelector(".loader");

    loader.classList.add("loader-hidden");
     
    loader.addEventListener("transitionend", ()=>{
    document.body.removeChild("loader");
  })
 });