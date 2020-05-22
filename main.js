$(document).ready(function (){
  chiamataApi();

  function chiamataApi (data){
    $.ajax ({
      url: "pagamenti.php",
      method: "GET",
      success: function(data) {
        console.log(data);
        for (var dati of data) {
          console.log(dati);
          $('#pagamenti').append('<li>' + dati + '</li>')
        }

      },
      error: function(err) {
        alert ('è avvenuto un errore')
      }
    })
  }
})
