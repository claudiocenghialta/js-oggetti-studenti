$(document).ready(function(){
    
    // Creare un oggetto che descriva uno studente con le seguenti proprietà:
    // nome, cognome ed età.
    var studente = {
        'nome': 'Claudio',
        'cognome': 'Cenghialta',
        'eta': 31,
    };
    console.log(studente);


    //Stampare a schermo attraverso il for in tutte le proprietà.
    for (var k in studente){
        console.log(k+': '+studente[k]);
    }

    //Creare un array di oggetti di studenti.
    var studenti = [
        {
            'nome': 'Mario',
            'cognome': 'Rossi',
            'eta': 31,
        },
        {
            'nome': 'Fabio',
            'cognome': 'Bianchi',
            'eta': 28,
        },
        {
            'nome': 'Luca',
            'cognome': 'Verdi',
            'eta': 34,
        },
    ];

    
    // Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.
    for (var i =0; i<studenti.length; i++){
        console.log(studenti[i].nome +' '+ studenti[i].cognome);

    }


    //Dare la possibilità all’utente attraverso 
    //3 prompt di aggiungere un nuovo oggetto studente inserendo
    //nell’ordine: nome, cognome e età.

    var nome = prompt('inserire il nome');
    var cognome = prompt('inserire il cognome');
    var eta = parseInt(prompt('inserire l\'età'));
    studenti.push({
        'nome': nome,
        'cognome': cognome,
        'eta': eta,
    }) 
    console.log(studenti);
});