
    var nome = document.getElementById('nome');
        var email = document.getElementById('email');
        var password = document.getElementById('passe');
        var idade = document.getElementById('idade');

        const mostrarDadosPreenchidos = ()=>{
            if (nome.value !== ''){
                var showNome = document.getElementById('showNome');
                showNome.innerHTML = nome.value;
            }
            if (email.value !== ''){
                var showEmail = document.getElementById('showEmail');
                showEmail.innerHTML = email.value;
            }
            if (idade.value !== ''){
                var showIdade = document.getElementById('showIdade');
                showIdade.innerHTML = idade.value;
            }
        }