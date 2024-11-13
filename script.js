//DATI INIZIALI
const price = 0.21 //€ al km
const discountKid = 0.2;
const discountSenior = 0.4;

//DATI RICHIESTI ALL'UTENTE
const lengthKilometers = parseInt(prompt ('Inserisci i kilometri che vuoi percorrere'));
const agePassenger = parseInt(prompt ('Inserisci la tua età'));

//DATI RICAVATI
const priceTicket = price * lengthKilometers 
const priceYoung = priceTicket * (1 - discountKid);
const priceSenior = priceTicket * (1 - discountSenior);


