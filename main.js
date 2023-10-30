$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(xx) xxxxx-xxxx'
    })

    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true 
            },
        },

        messages: {
            nome:'<span class="message-error">Por favor, insira seu nome</span>',
            email:'<span class="message-error">Por favor, insira seu e-mail</span>',
            mensagem: '<span class="message-error">Este campo é obrigatório</span>',
        },

        submitHandler: function(form) {
            swal({
                title:  "Obrigado!",
                text:   "Formulário cadastrado",
                icon:   "success",
            });
            /*alert('Formulário cadastrado')*/
            form.reset();
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                /*swal({
                    title:  "Atenção!",
                    text:   "campo(s) incorreto(s)",
                    icon:   "error",
                });*/
                /*swal("Good job!", "You clicked the button!", "success");*/
                swal("Atenção", `${camposIncorretos} campo(s) incorreto(s)`, "error");
            /* alert(`Existe ${camposIncorretos} campo(s) incorreto(s)`)*/
            }
        }
    })