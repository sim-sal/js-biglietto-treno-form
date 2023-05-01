// dichiaro le variabili
var userName, kmViaggio, prezzoBiglietto, userAge;

var bottoneGenera = document.querySelector("button.generate-button");


// stampo il nome e prendo i km
bottoneGenera.addEventListener('click',

    function(){
        
        // nome
        userName = document.getElementById("name-surname").value;
        document.getElementById("nome-passeggero").innerHTML = userName;
        
        // km
        kmViaggio = document.getElementById("km-viaggio").value;
        console.log(kmViaggio);

        // prezzo generico del biglietto
         prezzoBiglietto = (0.21 * kmViaggio);
        // console.log(prezzoBiglietto);

        // prezzo biglietto minorenni
        if (userAge = document.getElementById("Minorenne") ){

            prezzoBiglietto = (prezzoBiglietto * 0.8);
            console.log(prezzoBiglietto);

        } 
        // prezzo standard
        else if (userAge = document.getElementById("Maggiorenne") ){

            prezzoBiglietto = prezzoBiglietto;
            console.log(prezzoBiglietto);

        }

        // prezzo over
        else if (userAge = document.getElementById("over") ){

            prezzoBiglietto = (prezzoBiglietto * 0.6);
            console.log(prezzoBiglietto);

        }




        document.getElementById("ticket-price").innerHTML = prezzoBiglietto;


    }


);

