/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


const FRESH_PRINCE_URL = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

const STAR_PLATINUM = "https://static.jojowiki.com/images/thumb/c/ca/latest/20200927002609/Star_Platinum_SC_Infobox_Anime.png/800px-Star_Platinum_SC_Infobox_Anime.png";
const MAGICIANS_RED = "https://static.jojowiki.com/images/4/48/latest/20220916201225/Magician%27s_Red_Infobox_Anime.png";
const HERMIT_PURPLE = "https://static.jojowiki.com/images/c/c1/latest/20191015212906/Hermit_Purple_SC_Infobox_Manga.png";
const HIEROPHANT_GREEN = "https://static.jojowiki.com/images/thumb/3/3e/latest/20210616200106/Hierophant_Green_Infobox_Anime.png/800px-Hierophant_Green_Infobox_Anime.png";
const SILVER_CHARIOT = "https://static.jojowiki.com/images/9/9b/latest/20220502142632/Silver_Chariot_SC_Infobox_Manga.png";
const THE_FOOL = "https://static.jojowiki.com/images/thumb/1/10/latest/20210312225357/The_Fool_Infobox_Anime.png/800px-The_Fool_Infobox_Anime.png";
const THE_WORLD = "https://static.jojowiki.com/images/7/7e/latest/20221004175724/The_World_Infobox_Anime.png";
const CRAZY_DIAMOND = "https://static.jojowiki.com/images/b/b5/latest/20191015215419/Crazy_Diamond_Infobox_Anime.png";
const THE_HAND = "https://static.jojowiki.com/images/thumb/a/ae/latest/20210111150120/The_Hand_Infobox_Anime.png/800px-The_Hand_Infobox_Anime.png";
const ECHOES_ACT1 = "https://static.jojowiki.com/images/d/dc/latest/20210424210829/Echoes_ACT1_DU_Infobox_Anime.png";
const ECHOES_ACT2 = "https://static.jojowiki.com/images/thumb/6/69/latest/20231215131846/Echoes_ACT2_DU_Infobox_Anime.png/800px-Echoes_ACT2_DU_Infobox_Anime.png";
const ECHOES_ACT3 = "https://static.jojowiki.com/images/8/8e/latest/20210422175130/Echoes_ACT3_DU_Infobox_Anime.png";
const HEAVENS_DOOR = "https://static.jojowiki.com/images/5/50/latest/20210203193008/Heaven%27s_Door_Infobox_Anime.png";
const KILLER_QUEEN = "https://static.jojowiki.com/images/f/fb/latest/20210420222949/Killer_Queen_Infobox_Manga.png";
const SHEER_HEART_ATTACK = "https://static.jojowiki.com/images/f/fc/latest/20191015215748/Sheer_Heart_Attack_Infobox_Manga.png";
const BITES_THE_DUST = "https://static.jojowiki.com/images/f/f9/latest/20191015213645/Bites_the_Dust_Infobox_Manga.png";
const GOLD_EXPERIENCE = "https://static.jojowiki.com/images/8/81/latest/20210707053105/Gold_Experience_Infobox_Anime.png";
const GOLD_EXPERIENCE_REQUIEM = "https://static.jojowiki.com/images/1/19/latest/20220802141706/GER_Infobox_Anime.png";
const STICKY_FINGERS = "https://static.jojowiki.com/images/7/78/latest/20221006032155/Sticky_Fingers_Infobox_Anime.png";
const MOODY_BLUES = "https://static.jojowiki.com/images/9/91/latest/20220916205647/Moody_Blues_Infobox_Anime.png";
const SEX_PISTOLS = "https://static.jojowiki.com/images/b/b9/latest/20210521114106/Sex_Pistols_Infobox_Anime.png";
const AEROSMITH = "https://static.jojowiki.com/images/7/7c/latest/20210701024635/Aerosmith_Infobox_Anime.png";
const PURPLE_HAZE = "https://static.jojowiki.com/images/c/ca/latest/20191015214140/Purple_Haze_Infobox_Anime.png";
const SPICE_GIRL = "https://static.jojowiki.com/images/2/21/latest/20200118002424/Spice_Girl_Infobox_Anime.png";
const MR_PRESIDENT = "https://static.jojowiki.com/images/9/9e/latest/20191015214038/Mr.President_Infobox_Manga.png";
const CHARIOT_REQUIEM = "https://static.jojowiki.com/images/1/12/latest/20211210020712/Chariot_Requiem_Infobox_Anime.png";
const KING_CRIMSON = "https://static.jojowiki.com/images/thumb/c/c6/latest/20191015213856/King_Crimson_Infobox_Anime.png/800px-King_Crimson_Infobox_Anime.png";


// This is an array of strings (TV show titles)
let titles = [
    "Fresh Prince of Bel Air",
    "Curb Your Enthusiasm",
    "East Los High"
];

let 
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < titles.length; i++) {
        let title = titles[i];

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let imageURL = "";
        if (i == 0) {
            imageURL = FRESH_PRINCE_URL;
        } else if (i == 1) {
            imageURL = CURB_POSTER_URL;
        } else if (i == 2) {
            imageURL = EAST_LOS_HIGH_POSTER_URL;
        }

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
