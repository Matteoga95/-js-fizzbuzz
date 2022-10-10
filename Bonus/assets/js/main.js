// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

//Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.


//cicliamo i numeri da 1 a 100
for (let num = 1; num < 101; num++) {

    let li = document.createElement('li');
   
    //se il numero che sto ciclando è un multiplo sia di 5 che di 3 stampo a console FizzBuzz  
    if (num % 15 === 0) {
        console.log("FizzBuzz");
      
        li.textContent= "FizzBuzz";
    }
    //se il numero che sto ciclando è un multiplo di 3 stampo a console Fizz
    else if (num % 3 === 0) {
        console.log("Fizz");
        li.textContent= "Fizz";
        
    }
    //se il numero che sto ciclando è un multiplo di 5 stampo a console Buzz
    else if (num % 5 === 0) {
        console.log("Buzz");
        li.textContent= "Buzz";
    }
    //se non è nulla di quello sopra stampo il numero normalmente
    else {
        console.log(num);
        li.textContent= num;
    }

    document.querySelector("ul").appendChild(li)
}