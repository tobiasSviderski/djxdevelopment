$('#contact-form').on('submit', function(event) {
    event.preventDefault(); // prevent reload
    var formData = new FormData();
    formData.append('from_name', document.querySelector("#email_input").value);
    formData.append('to_name', document.querySelector('#form_firstname').value + ' ' + document.querySelector('#form_lastname').value);
    formData.append('message_html', document.querySelector('#validationTextarea').value);
    formData.append('service_id', 'bh37ur_student_sunderland_ac_uk');
    formData.append('template_id', 'template_hfmMoeRx');
    formData.append('user_id', 'user_JHgFym3fQpbGAd7YwrkMu');
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {
        alert('Your mail is sent!');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
});