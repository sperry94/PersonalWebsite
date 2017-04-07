$(() => {
  var contactForm = $('#contactForm');
  var contentDiv = $('#content');
  contactForm.submit((event) => {
    $('#resMsg').remove();
    $.ajax({
      //update this when server is deployed
      url: 'https://personal-website-server.herokuapp.com/',
      type: 'POST',
      data: contactForm.serialize(),
    }).done(() => {
      contentDiv.html('<div id="resMsg" class="contentSection">' +
                        '<h2>Message sent</h2>' +
                        '<p>I will get back to you soon!</p>' +
                      '</div>');
    }).fail(() => {
      contentDiv.prepend('<div id="resMsg" class="contentSection">' +
                           '<h2>Message send failed</h2>' +
                           '<p>Try again later!</p>' +
                         '</div>');
    });
    event.preventDefault();
  });
});