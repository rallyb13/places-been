$(document). ready(function(){
  $('form#places-gone').submit(function(event) {
    event.preventDefault();

    var inputLocale = $('input#locale').val();
    var inputWhen = $('input#when').val();
    var inputNotes = $('input#notes').val();


    var newLocation = {locale: inputLocale,
                        when: inputWhen,
                        notes: inputNotes};

    $('ul#places').append("<li><span class= 'place'>" +
                          newLocation.locale + "</span></li>")

    $('input#locale').val("");
    $('input#when').val("");
    $('input#notes').val("");

    $(".place").last().click(function(){
      $('#this-place').show();
      $('#this-place h4').text(newLocation.locale);

      $(".locale").text(newLocation.locale);
      $(".when").text(newLocation.when);
      $(".notes").text(newLocation.notes);


    });
  });
});
