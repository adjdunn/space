// Fun Facts Array
const funFacts = [
    "One day on Venus is longer than its year!",
    "Jupiter has 79 moons!",
    "A year on Mercury is just 88 days long!",
    "Neutron stars can spin 600 times per second!",
    "There's a planet made of diamonds named 55 Cancri e!",
    "Mars has the tallest volcano in the solar system, Olympus Mons!",
    "Saturn could float in water because it's mostly made of gas!",
    "A day on Saturn is only about 10.7 hours long!",
    "The Milky Way galaxy is 105,700 light-years wide!",
    "The footprints on the Moon will be there for 100 million years!",
];

// Function to Display a Random Fun Fact
function displayRandomFact() {
    const factElement = document.getElementById('fun-fact');
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    factElement.textContent = randomFact;
}

// Function to Show Planet Info
function showPlanetInfo(planet) {
    alert(`Welcome to ${planet}! Here's a cool fact about ${planet}: ${getPlanetFact(planet)}`);
}

// Function to Get Planet Fact
function getPlanetFact(planet) {
    const planetFacts = {
        Mars: "Mars is home to the tallest mountain in the solar system!",
        Jupiter: "Jupiter's Great Red Spot is a giant storm larger than Earth!",
        Saturn: "Saturn's rings are made of ice and rock!",
        // Add more planets and facts as desired
    };
    return planetFacts[planet] || "It's a wonderful place to explore!";
}

// Display a fun fact on page load
window.onload = function() {
    displayRandomFact();
};

const spaceImages = [
    {
        url: "https://images-assets.nasa.gov/image/PIA12348/PIA12348~thumb.jpg",
        description: "The Pinwheel Galaxy, also known as Messier 101, is a face-on spiral galaxy located 21 million light-years away in the constellation Ursa Major."
    },
    {
        url: "https://images-assets.nasa.gov/image/PIA00342/PIA00342~thumb.jpg",
        description: "The Great Red Spot on Jupiter, a storm bigger than Earth that has been raging for hundreds of years."
    },
    {
        url: "https://images-assets.nasa.gov/image/PIA17563/PIA17563~thumb.jpg",
        description: "The Pillars of Creation in the Eagle Nebula, towering columns of cosmic dust and gas where new stars are born."
    },
    {
        url: "https://images-assets.nasa.gov/image/PIA14293/PIA14293~thumb.jpg",
        description: "Saturn's rings and moons, a breathtaking view captured by the Cassini spacecraft."
    }
];

let currentImageIndex = 0;

function changeSpaceImage() {
    const showcaseImage = document.getElementById('showcase-image');
    const showcaseDescription = document.getElementById('showcase-description');
    
    // Fade out
    showcaseImage.style.opacity = 0;
    showcaseDescription.style.opacity = 0;
    
    setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % spaceImages.length;
        const newImage = spaceImages[currentImageIndex];
        
        showcaseImage.src = newImage.url;
        showcaseDescription.textContent = newImage.description;
        
        // Fade in
        showcaseImage.style.opacity = 1;
        showcaseDescription.style.opacity = 1;
    }, 500);
}

// Change image every 5 seconds
setInterval(changeSpaceImage, 5000);

// Initial call to set first image
changeSpaceImage();
