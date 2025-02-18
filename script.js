function estado(button){
     const alocacao = button.parentElement;
     const estadoAtual = alocacao.classList.contains('disponivel') ? 'disponivel' : 
     alocacao.classList.contains('reservada') ? 'reservada' : 'em uso';
     const estadoSpan = alocacao.querySelector('span');


     if(estadoAtual === 'disponivel'){ 
            alocacao.classList.remove('disponivel');
            alocacao.classList.add('reservada');
            estadoSpan.textContent = 'RESERVADA';
            alocacao.style.backgroundColor='#0000ff'
            
    } 

    else if(estadoAtual === 'reservada'){ 
            alocacao.classList.remove('reservada');
            alocacao.classList.add('ocupada');
            estadoSpan.textContent = 'EM USO'; 
            alocacao.style.backgroundColor='#ff0000';
    } 

    else if(estadoAtual === 'ocupada'){ 
            alocacao.classList.remove('ocupada');
            alocacao.classList.add('disponivel'); 
            estadoSpan.textContent = 'DISPONÍVEL'; 
            alocacao.style.backgroundColor='#008000';
    } 

    else { 
        alocacao.classList.remove('ocupada');
        alocacao.classList.add('disponivel'); 
        estadoSpan.textContent = 'DISPONÍVEL'; 
        alocacao.style.backgroundColor='#008000';
   } 
}
