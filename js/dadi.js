let utente = Math.floor(Math.random() * 6 + 1);
let computer = Math.floor(Math.random() * 6 + 1);

if (computer > utente){
    alert('Ha vinto il computer')
} else if(computer < utente){
    alert('Ha vinto il giocatore')
} else{
    alert('Pareggio')
}