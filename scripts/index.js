$( document ).ready( function () {
  $( '.about-box' ).hover(
      function () {
        var info = this.dataset.type
        $( '#info-subheader' ).html( info )
      }, function () {
        $( '#info-subheader').html( 'About Me' )
    }
  )
});

