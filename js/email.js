const listamail = ['primamail@gmail.com', 'secondamail@gmail.com', 'terzamail@gmail.com']

let mailutente = prompt('Metti la tua email');
mailutente = mailutente.trim();

let b = true;
for (i = 0; i < listamail.length; i++){
    if(listamail[i] == mailutente){
        alert('Email corretta');
        break
    } else if(listamail[i] != mailutente){
        b = false
    }
}

if(b == false){
    alert('Email non corretta')
}