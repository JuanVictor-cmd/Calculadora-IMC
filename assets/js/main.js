
    const form = document.querySelector('#formulario');

    form.addEventListener('submit', function (evento) {
        evento.preventDefault();
        const inputpeso = document.querySelector('#peso');
        const inputaltura = document.querySelector('#altura');
        
        const peso = Number(inputpeso.value);
        const altura = Number(inputaltura.value);

        if(!peso){
            resultado('Peso inválido', false);
            return;
        }

        if(!altura){
            resultado('Altura inválido', false);
            return;
        }

        const imc = pegarIMC(peso, altura);
        const nivel = nivelImc(imc);
        
        const msg = `Seu IMC é ${imc} (${nivel}.)`;

        resultado(msg, true);

    });


    function nivelImc(imc){
        const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1',
        'Obesidade grau 2', 'Obesidade grau 3'];

        if(imc >=39.9) return nivel[5];
        if(imc >= 34.9) return nivel[4];
        if(imc >= 29.9) return nivel[3];
        if(imc >= 24.9) return nivel[2];
        if(imc >= 18.5) return nivel[1];
        if(imc < 18.5) return nivel[0];
    }

    function pegarIMC(peso, altura){
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
    }

    function criaP(){
        const paragrafo = document.createElement('p');
        paragrafo.classList.add('paragrafo-res');
        return paragrafo;
    }

    function resultado(res, isValid){
        const resultado = document.querySelector('#resultado')
        resultado.innerHTML = '';

        const p = criaP();

        if(isValid){
            p.classList.add('paragrafo-res')
        }else{
            p.classList.add('bad')
        }

        p.innerHTML = res;
        resultado.appendChild(p);
    }
