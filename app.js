const pantalla = document.querySelector('.pantalla'); // variables para obtener informacion del html
const botones = document.querySelectorAll('.boton');

botones.forEach(boton => {      //para cada elemento del boton
    boton.addEventListener('click',() =>{ //cual un boton sea clickeado
        const botonApretado= boton.textContent;// variable para que el texto del boton se guarde
        




        if(boton.id==='borrarTodo'){
            pantalla.textContent ="0";
            return;
        }

        if (boton.id ==='borrarDijito'){
            if(pantalla.textContent.length === 1 || pantalla.textContent==='Error'){
                pantalla.textContent = '0';
            }else{
            pantalla.textContent = pantalla.textContent.slice(0,-1)
            }
            return;
        }

        if (boton.id==='Bigual'){
            try{
            pantalla.textContent = eval(pantalla.textContent);//evalua lo escrito en la pantalla
            
            }catch{
                pantalla.textContent='Error!';
            }
            return;

        }
        if (boton.id === 'Bporcentaje') {
            pantalla.textContent = eval(pantalla.textContent) / 100;
            return;
        }

        if (pantalla.textContent==='0'|| pantalla.textContent==='Error'){
            pantalla.textContent = botonApretado;
        }else{
            pantalla.textContent += botonApretado;

        }
    })
})