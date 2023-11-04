const Clients = [
    {nom:'Sy',
    prenom:'Bintou',
    email:'Bs@gmail.com',
    solde: 23000,
    telephone:'+1 652 34 23 33',
    photo:"https://img.freepik.com/free-photo/young-african-american-woman-smiling-with-confidence-indoors-generated-by-ai_24640-90164.jpg",
    transactions:[
        {numero: 1, date :"10-10-2022", sens: 1, montant : 2000},
        {numero: 2, date :"15-10-2022", sens: -1, montant : 500},
    ]
},

    {nom:'Austin',
    prenom:'Reaves',
    email:'reaves@gmail.com',
    solde: 1227900,
    telephone:'+1 652 34 23 33',
    photo:"https://www.hindustantimes.com/ht-img/img/2023/03/26/1600x900/BASKETBALL-NBA-LAL-OKC--36_1679823886771_1679823886771_1679823927859_1679823927859.JPG",
    transactions:[
        {numero: 1, date :"11-10-2022", sens: -1, montant : 5000},
        {numero: 2, date :"12-10-2022", sens: 1, montant : 2000},
    ]
},

    {nom:'Scott',
    prenom:'Travis',
    email:'LaFlame@gmail.com',
    solde: 3325939,
    telephone:'+1 652 52 84 33',
    photo:"https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2021-12/211209-travis-scott-mn-0845-f3c4d7.jpg",
    transactions:[
        {numero: 1, date :"14-10-2022", sens: 1, montant : 3000},
        {numero: 2, date :"17-10-2022", sens: 1, montant : 2000},
    ]
},

    {nom:'Karim',
    prenom:'Benzema',
    email:'Nueve@gmail.com',
    solde: 4930040,
    telephone:'+1 738 34 84 65',
    photo:"https://english.mathrubhumi.com/image/contentid/policy:1.7986803:1666599086/sda%20(5).jpg?$p=775a9d3&&q=0.8",
    transactions:[
        {numero: 1, date :"21-2-2023", sens: 1, montant : 8000},

    ]
},

    {nom:'Bellingham',
    prenom:'Jude',
    email:'Bell@gmail.com',
    solde: 2814588,
    telephone:'+34 09 34 88 94',
    photo:"https://cdn1.manchestercity.news/uploads/30/2023/09/GettyImages-1678438861-1140x760.jpg",
    transactions:[
        {numero: 1, date :"3-5-2023", sens: 1, montant : 10000},

    ]
}
]

//Recuperation des elements a manipuler

// const lastname = document.querySelector('#lastname');

const lastname = document.getElementById('lastname');

const firstname = document.getElementById('firstname');

const email = document.getElementById('email');

const solde = document.getElementById('solde');

const phone = document.getElementById('phone');

const img = document.querySelector('img');

const btnNext = document.querySelector('.next');

const num = document.getElementById('nul');

const data = document.getElementById('sapa')

const way = document.getElementById('lawa')

const mont = document.getElementById ('monta')


//Functions

function loadData(Clients){

    lastname.innerText = Clients.nom;

    firstname.innerText = Clients.prenom;

    email.innerText = Clients.email;

    solde.innerText = Clients.solde;

    phone.innerText = Clients.telephone;

    img.src = Clients.photo;

    num.innerText = Clients.transactions.numero;

    data.innerText = Clients.transactions.date;

    way.innerText = Clients.transactions.sens;

    mont.innerText = Clients.transactions.montant;

}

let i = 0;

//appel de fonction 

loadData(Clients[i]);


//Events:

btnNext.addEventListener('click', function(){
    
    if(i<Clients.length){
        i++
    }else{
        i = 0
    }
    loadData(Clients[i])

});
