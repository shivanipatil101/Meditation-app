document.addEventListener("DOMContentLoaded", function () {
    const btn1 = document.getElementById("btn1"); // Deep Breathing Button
    const btn2 = document.getElementById("btn2"); // 4-7-8 Breathing Button
    const breathingPage = document.getElementById("breathingPage");
    const backBtn = document.getElementById("backBtn");
    const instructionText = document.querySelector(".instruction");
    const circle = document.querySelector(".circle");
  
    let breathingTimeout, breathingInterval;
  
    // Function to show the breathing page
    function showBreathingPage() {
      breathingPage.style.display = "flex";
    }
  
    // Function to hide the breathing page
    function hideBreathingPage() {
      breathingPage.style.display = "none";
      clearBreathingCycle();
      instructionText.textContent = "Inhale...";
      circle.style.transform = "scale(1)";
    }
  
    // Function to clear previous breathing cycles
    function clearBreathingCycle() {
      clearInterval(breathingInterval);
      clearTimeout(breathingTimeout);
    }
  
    // Event Listener for Deep Breathing (btn1)
    btn1.addEventListener("click", function (event) {
      event.preventDefault();
      clearBreathingCycle();
      showBreathingPage();
      startDeepBreathing();
    });
  
    // Event Listener for 4-7-8 Breathing Technique (btn2)
    btn2.addEventListener("click", function (event) {
      event.preventDefault();
      clearBreathingCycle();
      showBreathingPage();
      start478Breathing();
    });
  
    // Back button to return to the main page
    backBtn.addEventListener("click", function () {
      hideBreathingPage();
    });
  
    // 🌿 Function for Deep Breathing (Simple Inhale-Exhale)
    function startDeepBreathing() {
      let cycle = 0;
      breathingInterval = setInterval(() => {
        if (cycle % 2 === 0) {
          instructionText.textContent = "Inhale...";
          circle.style.transform = "scale(1.5)";
        } else {
          instructionText.textContent = "Exhale...";
          circle.style.transform = "scale(1)";
        }
        cycle++;
      }, 4000); // 4 seconds inhale-exhale cycle
    }
  
    // 🌬 Function for 4-7-8 Breathing (Inhale 4s, Hold 7s, Exhale 8s)
    function start478Breathing() {
      function cycle478() {
        instructionText.textContent = "Inhale (4s)...";
        circle.style.transform = "scale(1.5)";
        breathingTimeout = setTimeout(() => {
          instructionText.textContent = "Hold (7s)...";
          circle.style.transform = "scale(1.5)";
          breathingTimeout = setTimeout(() => {
            instructionText.textContent = "Exhale (8s)...";
            circle.style.transform = "scale(1)";
            breathingTimeout = setTimeout(cycle478, 8000); // Restart after exhale
          }, 8000); // Exhale for 8 seconds
        }, 7000); // Hold for 7 seconds
      }
  
      cycle478(); // Start the cycle
    }
  });
  