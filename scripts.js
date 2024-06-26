


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



let standsArray = [
  {
    standName: "Star Platinum",
    characterName: "Jotaro Kujo",
    imageURL: STAR_PLATINUM,
    debutSeasons: [3, 4]
  },
  {
    standName: "Magician's Red",
    characterName: "Muhammad Avdol",
    imageURL: MAGICIANS_RED,
    debutSeasons: [3]
  },
  {
    standName: "Hermit Purple",
    characterName: "Joseph Joestar",
    imageURL: HERMIT_PURPLE,
    debutSeasons: [3, 4]
  },
  {
    standName: "Hierophant Green",
    characterName: "Noriaki Kakyoin",
    imageURL: HIEROPHANT_GREEN,
    debutSeasons: [3]
  },
  {
    standName: "Silver Chariot",
    characterName: "Jean Pierre Polnareff",
    imageURL: SILVER_CHARIOT,
    debutSeasons: [3]
  },
  {
    standName: "The Fool",
    characterName: "Iggy",
    imageURL: THE_FOOL,
    debutSeasons: [3]
  },
  {
    standName: "The World",
    characterName: "DIO",
    imageURL: THE_WORLD,
    debutSeasons: [3]
  },
  {
    standName: "Crazy Diamond",
    characterName: "Josuke Higashikata",
    imageURL: CRAZY_DIAMOND,
    debutSeasons: [4]
  },
  {
    standName: "The Hand",
    characterName: "Okuyasu Nijimura",
    imageURL: THE_HAND,
    debutSeasons: [4]
  },
  {
    standName: "Echoes ACT 1",
    characterName: "Koichi Hirose",
    imageURL: ECHOES_ACT1,
    debutSeasons: [4]
  },
  {
    standName: "Echoes ACT 2",
    characterName: "Koichi Hirose",
    imageURL: ECHOES_ACT2,
    debutSeasons: [4]
  },
  {
    standName: "Echoes ACT 3",
    characterName: "Koichi Hirose",
    imageURL: ECHOES_ACT3,
    debutSeasons: [4, 5]
  },
  {
    standName: "Heaven's Door",
    characterName: "Rohan Kishibe",
    imageURL: HEAVENS_DOOR,
    debutSeasons: [4]
  },
  {
    standName: "Killer Queen",
    characterName: "Yoshikage Kira",
    imageURL: KILLER_QUEEN,
    debutSeasons: [4]
  },
  {
    standName: "Sheer Heart Attack",
    characterName: "Yoshikage Kira",
    imageURL: SHEER_HEART_ATTACK,
    debutSeasons: [4]
  },
  {
    standName: "Killer Queen Bites the Dust",
    characterName: "Yoshikage Kira",
    imageURL: BITES_THE_DUST,
    debutSeasons: [4]
  },
  {
    standName: "Gold Experience",
    characterName: "Giorno Giovanna",
    imageURL: GOLD_EXPERIENCE,
    debutSeasons: [5]
  },
  {
    standName: "Gold Experience Requiem",
    characterName: "Giorno Giovanna",
    imageURL: GOLD_EXPERIENCE_REQUIEM,
    debutSeasons: [5]
  },
  {
    standName: "Sticky Fingers",
    characterName: "Bruno Bucciarati",
    imageURL: STICKY_FINGERS,
    debutSeasons: [5]
  },
  {
    standName: "Moody Blues",
    characterName: "Leone Abbacchio",
    imageURL: MOODY_BLUES,
    debutSeasons: [5]
  },
  {
    standName: "Sex Pistols",
    characterName: "Guido Mista",
    imageURL: SEX_PISTOLS,
    debutSeasons: [5]
  },
  {
    standName: "Aerosmith",
    characterName: "Narancia Ghirga",
    imageURL: AEROSMITH,
    debutSeasons: [5]
  },
  {
    standName: "Purple Haze",
    characterName: "Pannacotta Fugo",
    imageURL: PURPLE_HAZE,
    debutSeasons: [5]
  },
  {
    standName: "Spice Girl",
    characterName: "Trish Una",
    imageURL: SPICE_GIRL,
    debutSeasons: [5]
  },
  {
    standName: "Mr.President",
    characterName: "Coco Jumbo",
    imageURL: MR_PRESIDENT,
    debutSeasons: [5]
  },
  {
    standName: "Chariot Requiem",
    characterName: "Jean Pierre Polnareff",
    imageURL: CHARIOT_REQUIEM,
    debutSeasons: [5]
  },
  {
    standName: "King Crimson",
    characterName: "Diavolo",
    imageURL: KING_CRIMSON,
    debutSeasons: [5]
  },
  // maybe more
];

function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < standsArray.length; i++) {
        let standName = (i+1)+", "+standsArray[i].standName;
        let characterName = standsArray[i].characterName;
        let imageURL = standsArray[i].imageURL;
        let debutSeasons = standsArray[i].debutSeasons;
        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, standName, characterName, imageURL, debutSeasons); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newStandName, newCharacterName, newImageURL, newDebutSeasons) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newStandName;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newStandName + " Poster";

    const cardStandUser = card.querySelector(".stand-user");
    cardStandUser.textContent =  "Stand user: "+ newCharacterName;

    const cardSeasons = card.querySelector(".seasons");
    cardSeasons.textContent = " Appeared season: "+newDebutSeasons.join(', ');

    console.log("new card:", newStandName, "- html: ", card);
}


// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    standsArray.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}

function quickSort(standsArray) {//This quick sort I just wanted to try to see if I remembered the logic that
    if (standsArray.length <= 1) {
        return standsArray;
    }

    const pivotIndex = Math.floor(standsArray.length / 2);
    const pivot = standsArray[pivotIndex];
    const left = [];
    const right = [];

    for (let i = 0; i < standsArray.length; i++) {
        if (i === pivotIndex) continue;

        if (standsArray[i].standName < pivot.standName) {
            left.push(standsArray[i]);
        } else {
            right.push(standsArray[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

function sortingByCharacter() {
    for(let i = standsArray.length-1; i>0; i--){
        for(let j = i-1; j>=0; j--){
            if(standsArray[i].characterName > standsArray[j].characterName){
                [standsArray[j], standsArray[i]] = [standsArray[i], standsArray[j]];
            }
        }
    }
    showCards();
}

function sortingBySeason() {
    for(let i = standsArray.length-1; i>0; i--){
        for(let j = i-1; j>=0; j--){
            if(standsArray[i].debutSeasons[0] < standsArray[j].debutSeasons[0]){
                [standsArray[j], standsArray[i]] = [standsArray[i], standsArray[j]];
            }
        }
    }
    showCards();
}

function sortingByStand() {
    standsArray = quickSort(standsArray);
    showCards();
}



function removeCard(){
    const index = parseInt(prompt("Who do you want to remove? Enter the number:"))-1;
    if(index>=1||index<=standsArray.length){
        standsArray.splice(index,1);
        showCards();
    }else{
        console.log("this card isn't exit");
    }
}


function editCard(){
    const index = parseInt(prompt("Who do you want to edit? Enter the number:"))-1;
    if(index<1||index>standsArray.length){
        console.log("this card is not exit");
        return; 
    }
    const inputStand = prompt("Enter the Stand Name : ");
    const inputCharacter = prompt("Enter the Stand User: ");
    const inputImage = prompt("Enter the URL of image of the Stand : ");
    const inputSeasonNumbers = parseInt(prompt("Enter the Number of seasons of appearance : "));
    const inputSeason = [];
    if(inputStand!=null&&inputStand!=""){
        standsArray[index].standName = inputStand;
    }
    if(inputCharacter!=null&&inputCharacter!=""){
        standsArray[index].characterName = inputCharacter;
    }
    if(inputImage!=null&&inputImage!=""){
        standsArray[index].imageURL = inputImage;
    }
    if(isNaN(inputSeasonNumbers)&&inputSeasonNumbers!=null&&inputSeasonNumbers>0){
        for(let i=0; i<inputSeasonNumbers; i++){
            inputSeason.push(parseInt(prompt("Enter the NO."+(1+i)+"seasons of appearance : ")))
        }
        standsArray[index].debutSeasons = inputSeason;
    }
    showCards();
}

function addCard(){
    const index = standsArray.length;
    const inputStand = prompt("Enter the Stand Name : ");
    const inputCharacter = prompt("Enter the Stand User: ");
    const inputImage = prompt("Enter the URL of image of the Stand : ");
    const inputSeasonNumbers = parseInt(prompt("Enter the Number of seasons of appearance : "));
    const inputSeason = [];
    standsArray.push({
        standName: inputStand,
        characterName: inputCharacter,
        imageURL: inputImage,
        debutSeasons: inputSeason
    });
    if(isNaN(inputSeasonNumbers)&&inputSeasonNumbers!=null&&inputSeasonNumbers>0){
        for(let i=0; i<inputSeasonNumbers; i++){
            inputSeason.push(parseInt(prompt("Enter the NO."+(1+i)+"seasons of appearance : ")))
        }
        standsArray[index].debutSeasons = inputSeason;
    }
    showCards();
}

function showCategoryBySeason(){
    const inputSeason = parseInt(prompt("Enter the season you are looking for (number please): "));
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < standsArray.length; i++) {
        let isSeason = false;
        for(let j =0; j<standsArray[i].debutSeasons.length;j++){
            if(standsArray[i].debutSeasons[j]==inputSeason){
                isSeason=true;
            }
        }
        if(isSeason){
            let standName = (i+1)+", "+standsArray[i].standName;
            let characterName = standsArray[i].characterName;
            let imageURL = standsArray[i].imageURL;
            let debutSeasons = standsArray[i].debutSeasons;
            const nextCard = templateCard.cloneNode(true); 
            editCardContent(nextCard, standName, characterName, imageURL, debutSeasons); 
            cardContainer.appendChild(nextCard); 
        }
    }
}

function showCategoryByCharacter(){
    const inputName = prompt("Enter the Character you are looking for: ");
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < standsArray.length; i++) {
        if(standsArray[i].characterName==inputName){
            let standName = (i+1)+", "+standsArray[i].standName;
            let characterName = standsArray[i].characterName;
            let imageURL = standsArray[i].imageURL;
            let debutSeasons = standsArray[i].debutSeasons;
            const nextCard = templateCard.cloneNode(true); 
            editCardContent(nextCard, standName, characterName, imageURL, debutSeasons); 
            cardContainer.appendChild(nextCard); 
        }
    }
}



