document.addEventListener("DOMContentLoaded", () => {
    const dropdownContent = document.querySelector(".dropdown-content");
    const dropdownCategory = document.querySelector(".dropdown-category");
    const dropdownIcon = dropdownContent.querySelector("i");

    dropdownContent.addEventListener("click", () => {
        dropdownCategory.classList.toggle("show");
        dropdownIcon.classList.toggle("rotate");
    });

    const options = dropdownCategory.querySelectorAll("a");
    options.forEach(option => {
        option.addEventListener("click", (event) => {
            const selectedText = event.target.textContent;
            dropdownContent.firstChild.textContent = selectedText;
            dropdownCategory.classList.remove("show");
            dropdownIcon.classList.remove("rotate");
        });
    });
});

// Function to fetch meditation sounds and images from Freesound and Unsplash APIs
async function fetchMeditationSounds() {
    const apiKey = '3BFPwyLgoYnMOtyXvvOkk0AzZuqpBbVSfb4S2fVn'; // Replace with your Freesound API key
    const searchQuery = 'meditation'; // Keyword for sound search
    const soundUrl = `https://freesound.org/apiv2/search/text/?query=${searchQuery}&fields=id,name,previews&token=${apiKey}`;

    try {
        const soundResponse = await fetch(soundUrl);
        const soundData = await soundResponse.json();
        
        // Fetch random images from Unsplash
        const imageResponse = await fetch(`https://api.unsplash.com/photos/random?query=meditation&client_id=yZJy-eDCu5dYBrDamzoLN5srzmfHbH1AnDIdJEeu6HM&count=${soundData.results.length}`);
        const imageData = await imageResponse.json();

        // Process the fetched sounds and images
        const sounds = soundData.results.map((sound, index) => ({
            heading: sound.name,
            sound: sound.previews['preview-lq-mp3'], // Low-quality MP3 preview URL
            image: imageData[index] ? imageData[index].urls.regular : '', // Get the image URL
        }));

        displaySounds(sounds); // Display the sounds on the page
    } catch (error) {
        console.error('Error fetching sounds or images:', error);
    }
}

// Function to display fetched sounds as cards
function displaySounds(sounds) {
    const postContainer = document.querySelector('.card-container');
    postContainer.innerHTML = ''; // Clear any existing content

    sounds.forEach((sound, index) => {
        // Create a new card element
        const soundCard = document.createElement('div');
        soundCard.classList.add('card');

        // Add card content
        soundCard.innerHTML = `
            <img src="${sound.image}" alt="${sound.heading}" class="card-image" loading="lazy" />
            <h2 class="card-heading">${sound.heading}</h2>
            <div class="controls">
                <button id="play-${index}" class="play-button">Play</button>
                <button id="pause-${index}" class="pause-button" style="display: none;">Pause</button>
                <input id="volume-${index}" type="range" min="0" max="1" step="0.1" value="1" class="volume-slider">
            </div>
        `;

        postContainer.appendChild(soundCard);

        // Add event listeners for play, pause, and volume controls
        const audio = new Audio(sound.sound);
        const playButton = soundCard.querySelector(`#play-${index}`);
        const pauseButton = soundCard.querySelector(`#pause-${index}`);
        const volumeSlider = soundCard.querySelector(`#volume-${index}`);

        playButton.addEventListener('click', () => {
            audio.play();
            playButton.style.display = 'none';
            pauseButton.style.display = 'inline-block';
        });

        pauseButton.addEventListener('click', () => {
            audio.pause();
            playButton.style.display = 'inline-block';
            pauseButton.style.display = 'none';
        });

        volumeSlider.addEventListener('input', (event) => {
            audio.volume = event.target.value;
        });
    });
}

// Fetch and display meditation sounds on page load
document.addEventListener('DOMContentLoaded', fetchMeditationSounds);

document.querySelector('.collapsed').addEventListener('click', function() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
});

  window.addEventListener('load', () => {
    const loader=document.querySelector(".loader");

    loader.classList.add("loader-hidden");
     
    loader.addEventListener("transitionend", ()=>{
    document.body.removeChild("loader");
  })
 });