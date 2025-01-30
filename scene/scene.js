document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById("cardContainer");
    const fullscreenContainer = document.getElementById("fullscreenContainer"); 
    const fullscreenVideo = document.getElementById("fullscreenVideo"); 
    const closeButton = document.getElementById("closeButton"); 
    const fullscreenAudio = new Audio(); 

    const cardsData = [
        { title: "Lake Sunset", img: "../asset/sunset-lake.jpg", video: "../../scene/videos/sunset-lake.mp4", audio: "../../scene/audio/ice lake.mp3" },
        { title: "River Forest", img: "../asset/river-forest.webp", video: "../scene/videos/river.mp4", audio: "../../scene/audio/river.mp3" },
        { title: "Rain", img: "../asset/rain.jpg", video: "../scene/videos/rain.mp4", audio: "../../scene/audio/rain.mp3" },
        { title: "Waterfall", img: "../asset/waterfall.jpg", video: "../scene/videos/fall.mp4", audio: "../../scene/audio/fall.mp3" },
        { title: "Snow", img: "../asset/snowfall.jpg", video: "../scene/videos/snow.mp4", audio: "../../scene/audio/snow.mp3" },
        { title: "Mountain Lake", img: "../asset/mountain-lake.jpg", video: "../scene/videos/ics-lake.mp4", audio: "../../scene/audio/ice lake.mp3" }
    ];

    function createCards() {
        cardsData.forEach((data) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.style.backgroundImage = `url('${data.img}')`;

            const span = document.createElement("span");
            span.textContent = data.title;

            const playIcon = document.createElement("div");
            playIcon.classList.add("play-icon");
            playIcon.innerHTML = '<i class="fas fa-play"></i>'; 

            playIcon.addEventListener("click", (event) => {
                event.stopPropagation();


                fullscreenVideo.src = data.video;
                fullscreenAudio.src = data.audio;

                fullscreenContainer.style.display = "flex";
                fullscreenVideo.play();
                fullscreenAudio.play();

            });

            card.appendChild(span);
            card.appendChild(playIcon);
            cardContainer.appendChild(card);
        });
    }

    closeButton.addEventListener("click", () => {
        fullscreenVideo.pause();
        fullscreenAudio.pause();
        fullscreenContainer.style.display = "none"; // Hide Fullscreen
        fullscreenVideo.src = ""; // Reset video
        fullscreenAudio.src = ""; // Reset audio
    });

    createCards();
});

window.addEventListener('load', () => {
    const loader=document.querySelector(".loader");

    loader.classList.add("loader-hidden");
     
    loader.addEventListener("transitionend", ()=>{
    document.body.removeChild("loader");
  })
 });