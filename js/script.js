
let formContato = document.querySelector('#frm_contato');
let formContatoValidate = new JustValidate(formContato);

formContatoValidate
    .addField('#txt_email', [
        {
            rule: 'required',
            errorMessage: 'Esse campo é obrigatório!',
        },
        {
            rule: 'email',
            errorMessage: 'Esse campo deve conter um email válido!',
        }
    ])
    .addField('#txt_mensagem', [
        {
            rule: 'required',
            errorMessage: 'Esse campo é obrigatório!',
        }
    ])
    .onSuccess(function(event) {

        formContato.submit();

    });
