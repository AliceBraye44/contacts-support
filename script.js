const wilders = [
  { name: "Emmanuel", 
   email : "📧 emmanuel@gmail.com", 
   campus : "Marseille", 
   hasMac : true 
 },
 { name: "Judith", 
   email : "📧 judith@gmail.com", 
   campus : "Marseille", 
   hasMac : false
 },
 { name: "Sophie", 
   email : "📧 sophie@gmail.com", 
   campus : "Lyon", 
   hasMac : false
 },
 { name: "Jean", 
   email : "📧 jean@gmail.com", 
   campus : "Lyon", 
   hasMac : true
 },
 { name: "Jeanne", 
   email : "📧 jeanne@gmail.com", 
   campus : "Lyon", 
   hasMac : false
 }
]

const cards = document.querySelector(".cards");

console.log("ok");
// compléter la fonction 
function createCard(campus, name, email, computer) {
    const card = document.createElement("div");
    card.classList.add("card");
    cards.appendChild(card);
  

    // Step1: Create a head div, add the the class head and and it to the card 
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);
    //  set the text inside the tag to be "campus"
    cardHeader.innerHTML = campus;
    
    // Step2: Create the cardBody div, add the class card-body and add it to the card
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    // Create the cardTitle h2, add the class card-title and add it to the cardBody
    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardBody.appendChild(cardTitle);
    // set the text inside the tag to the "name" parameter of this function
    cardTitle.innerHTML = name

    
    // Create the cardMail (h3), add it to the cardBody
    const cardEmail = document.createElement("h3");
    cardEmail.classList.add("card-email");
    cardBody.appendChild(cardEmail);
    // set the text inside the tag to the "email" parameter of this function
    cardEmail.innerHTML = email

    // Create a new h3 (cardComputer), add it to the cardBody
    const cardComputer = document.createElement("h3");
    cardBody.appendChild(cardComputer);
    cardComputer.innerHTML = (computer ? "a un mac" : "n'a pas de mac")
    // if the wilder as a mac , add a text "a un mac", else display "n'a pas de mac"
    
    // Step3: Create the cardButton button, add the class card-button,
    const button = document.createElement("button");
    button.classList.add("card-button")
    cardBody.appendChild(button);
    button.innerHTML = "contacter"

    // set the text inside the tag to be "contacter"
    // and add it to the cardBody

  }  


  // Boucler sur le tableau de contact pour afficher les cartes contacts
  for (let i = 0; i < wilders.length; i++) {
    createCard(wilders[i].campus, wilders[i].name, wilders[i].email, wilders[i].hasMac )
  }
