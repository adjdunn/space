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
        description: "The Pinwheel Galaxy (M101) is a face-on spiral galaxy located about 21 million light-years away in the constellation Ursa Major."
    },
    {
        url: "https://images-assets.nasa.gov/image/PIA17563/PIA17563~thumb.jpg",
        description: "The Pillars of Creation in the Eagle Nebula (M16), as seen by NASA's Hubble Space Telescope. These elephant trunks of interstellar gas and dust are sites of ongoing star formation."
    },
    {
        url: "https://images-assets.nasa.gov/image/PIA14293/PIA14293~thumb.jpg",
        description: "Saturn and its rings, as viewed by NASA's Cassini spacecraft. The rings are made mostly of water ice, with some rocky debris."
    },
    {
        url: "https://images-assets.nasa.gov/image/PIA17669/PIA17669~thumb.jpg",
        description: "The Orion Nebula, a stellar nursery where new stars are being born. It's visible to the naked eye in the constellation Orion."
    },
    {
        url: "https://images-assets.nasa.gov/image/PIA16239/PIA16239~thumb.jpg",
        description: "The Andromeda Galaxy (M31), the nearest major galaxy to our Milky Way. It's approximately 2.5 million light-years away."
    },
    {
        url: "https://images-assets.nasa.gov/image/PIA16008/PIA16008~thumb.jpg",
        description: "The Crab Nebula, a supernova remnant in the constellation Taurus. It's the expanding debris of a massive star that exploded in 1054 AD."
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
