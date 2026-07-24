document.addEventListener("DOMContentLoaded", () => {
  // --- DOM ELEMENTS ---
  // Scenes
  const scene1 = document.getElementById("scene1");
  const scene2 = document.getElementById("scene2");
  const scene3 = document.getElementById("scene3");
  const scene4 = document.getElementById("scene4");
  const scene5 = document.getElementById("scene5");

  // Scene 1 Elements
  const beginBtn = document.getElementById("beginBtn");

  // Scene 2 Elements
  const letter = document.getElementById("letter");
  const blackPaperBtn = document.getElementById("blackPaperBtn");

  // Scene 3 Elements
  const enemyInput = document.getElementById("enemy");
  const recordBtn = document.getElementById("recordBtn");
  const recordResult = document.getElementById("recordResult");
  const giftBtn = document.getElementById("giftBtn");

  // Scene 4 Elements
  const openGiftBtn = document.getElementById("openGift");
  const giftReveal = document.getElementById("giftReveal");
  const countDisplay = document.getElementById("count");
  const acceptGiftBtn = document.getElementById("acceptGift");
  const giftMessage = document.getElementById("giftMessage");

  // Helper Function for Smooth Scene Switching
  function switchScene(currentScene, nextScene) {
    currentScene.classList.remove("active");
    setTimeout(() => {
      nextScene.classList.add("active");
    }, 400);
  }

  // ==========================================
  // 1. 📜 TYPEWRITER ANIMATION (Scene 1 -> Scene 2)
  // ==========================================
  const decreeText = 
    "By order of the Royal Feline Court, you are hereby cordially invited to celebrate your special day.\n\n" +
    "Prepare yourself for royal honors, mischief, and very serious cat business...";
  
  let typeIndex = 0;

  function typeWriter() {
    if (typeIndex < decreeText.length) {
      letter.textContent += decreeText.charAt(typeIndex);
      typeIndex++;
      setTimeout(typeWriter, 35); // Typing speed in ms
    }
  }

  beginBtn.addEventListener("click", () => {
    switchScene(scene1, scene2);
    // Start typing after scene transition finishes
    setTimeout(typeWriter, 500);
  });

  // ==========================================
  // 2. 👑 SCENE TRANSITION (Scene 2 -> Scene 3)
  // ==========================================
  blackPaperBtn.addEventListener("click", () => {
    switchScene(scene2, scene3);
  });

  // ==========================================
  // 3. 📖 BLACK PAPER RECORDING (Scene 3)
  // ==========================================
  recordBtn.addEventListener("click", () => {
    const name = enemyInput.value.trim();

    if (name === "") {
      recordResult.textContent = "Please enter a name first! 🐾";
      recordResult.style.color = "#ff6b6b";
      return;
    }

    // Display confirmation message
    recordResult.style.color = "#f9e9bb";
    recordResult.textContent = `⚡ "${name}" has been permanently recorded into the Black Paper! ⚡`;
    enemyInput.value = ""; // Clear input box

    // Reveal the "Claim Royal Gift" button
    giftBtn.style.display = "inline-block";
  });

  giftBtn.addEventListener("click", () => {
    switchScene(scene3, scene4);
  });

  // ==========================================
  // 4. 🎁 GIFT REVEAL & 😂 SUBSCRIBER COUNTER (Scene 4)
  // ==========================================
  openGiftBtn.addEventListener("click", () => {
    openGiftBtn.style.display = "none";
    giftReveal.style.display = "block";

    // Animate Subscriber Count: 1 -> 2
    let currentSubs = 1;
    setTimeout(() => {
      const subInterval = setInterval(() => {
        if (currentSubs < 2) {
          currentSubs++;
          countDisplay.textContent = currentSubs;
          
          // Bounce effect on count change
          countDisplay.style.transform = "scale(1.4)";
          setTimeout(() => countDisplay.style.transform = "scale(1)", 200);
        } else {
          clearInterval(subInterval);
        }
      }, 700);
    }, 400);
  });

  // ==========================================
  // 5. 🤣 "ACCEPT GIFT" → ERROR → ❤️ FINAL MESSAGE
  // ==========================================
  acceptGiftBtn.addEventListener("click", () => {
    // Show error message first
    giftMessage.innerHTML = "<span style='color: #ff3366; font-weight: bold;'>⚠️ ERROR: Gift cannot be refused! Forcing acceptance... 🎁✨</span>";

    // Transition to the final birthday scene after 2 seconds
    setTimeout(() => {
      switchScene(scene4, scene5);
    }, 2000);
  });
});
