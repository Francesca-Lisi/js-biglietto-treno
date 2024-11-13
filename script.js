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

//OUTPUT
if (agePassenger < 18) {
  console.log( `Applicando lo sconto Young, il prezzo della tratta è di € ${priceYoung.toFixed(2)}.`)
} else if (agePassenger > 65) {
  console.log( `Applicando lo sconto Senior, il prezzo della tratta è di € ${priceSenior.toFixed(2)}.`)  
} else {
  console.log(`Il prezzo della tratta è di € ${priceTicket.toFixed(2)}.`)
}
