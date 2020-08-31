$(document).ready(function () {

    // Creare un oggetto che descriva uno studente con le seguenti proprietà:
    // nome, cognome ed età.
    // var studente = {
    //     'nome': 'Claudio',
    //     'cognome': 'Cenghialta',
    //     'eta': 31,
    // };
    // console.log(studente);


    //Stampare a schermo attraverso il for in tutte le proprietà.
    // for (var k in studente){
    //     console.log(k+': '+studente[k]);
    // }

    //Creare un array di oggetti di studenti.
    var arrayStudenti = [
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

    //carico l'elenco degli studenti in html
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    for (var i = 0; i < arrayStudenti.length; i++) {
        var stampaStudente = {
            'nome': arrayStudenti[i].nome,
            'cognome': arrayStudenti[i].cognome,
            'eta': arrayStudenti[i].eta
        }
        var html = template(stampaStudente);
        $('#studenti').append(html);
    }

    //funzione per inserimento nuovo studente
    $('#nuovoStud').click(function () {
        //inserimento dati da parte dell'utente
        var nuovoStudente = {
            'nome': prompt('inserire il nome'),
            'cognome': prompt('inserire il cognome'),
            'eta': parseInt(prompt('inserire l\'età'))
        }
        //aggiungo nuovo studente all'array
        arrayStudenti.push(nuovoStudente);
        //stampo su html il nuovo studente
        var stampaStudente = {
            'nome': nuovoStudente.nome,
            'cognome': nuovoStudente.cognome,
            'eta': nuovoStudente.eta
        }
        var html = template(stampaStudente);
        $('#studenti').append(html);
    })
});

