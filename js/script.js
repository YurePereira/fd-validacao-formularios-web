
let formContato = document.querySelector('#frm_contato');
let formContatoValidate = new JustValidate(formContato);

formContatoValidate
    .addField('#txt_email', [
        {
            rule: 'required'
        },
        {
            rule: 'email'
        }
    ])
    .addField('#txt_mensagem', [
        {
            rule: 'required'
        }
    ])
    .onSuccess(function(event) {

        formContato.submit();

    });
