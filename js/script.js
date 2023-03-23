const team = [
    {
        username : 'Wayne',
        surname: 'Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        username : 'Angela',
        surname: 'Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },
    {
        username : 'Walter',
        surname: 'Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },
    {
        username : 'Angela',
        surname: 'Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },
    {
        username : 'Scott',
        surname: 'Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },
    {
        username : 'Barbara',
        surname: 'Ramos',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    },

]

// Preso la row dall'index e dichiarata rowHtml vuoto per poi inserire il contenuto delle card create

const row = document.querySelector('.row');

let rowHtml = '';


// ciclo per creare le card con all'interno i dati forniti dalla array

    team.forEach((teams) => {
   let card = `
    <div class="col-4">
    <div class="card mt-5">
        <div class="card-head">
                <img class="card-img-top" src="./img/${teams.img}" alt="${teams.img}">
    </div>
    <div class="card-body">
        <div>Nome :<h3>${teams.username}</h3>
        </div>
        <div>Cognome :<h4>${teams.surname}</h4>
        </div>
        <div>Ruolo :<h5>${teams.role}</h5>
        </div>
     
    </div>
    </div>
</div>
    `;
    rowHtml += card;
    } )
   
 
// }

// inserito da JS a INDEX

row.innerHTML += rowHtml;


