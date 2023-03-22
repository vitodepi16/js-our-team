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
const row = document.querySelector('.row');
let rowHtml = '';

for (let i = 0 ; i < team.length; i++){
    const teams = team[i];
    let card = `
    <div class="col-4">
    <div class="card mt-5">
        <div class="card-head">
                <img class="card-img-top" src="./img/${teams.img}" alt="${teams.img}">
    </div>
    <div class="card-body">
        <div>${teams.username}</div>
        <div>${teams.surname}</div>
        <div>${teams.role}</div>
     
    </div>
    </div>
</div>
    `;
    rowHtml += card;
}
 console.log(rowHtml)

row.innerHTML += rowHtml;


