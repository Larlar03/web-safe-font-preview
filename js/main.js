$(document).ready(() => {
    //Adding keyup event to text area
    $('#text').keyup(event, () => {
        /*When a key releases show the value of the current target (textarea) in the preview class element */
        $('.preview').html($(event.currentTarget).val())
    });

    /* Change the font family in the preview text to the current font selected in the font family input*/
    $('#font').on('change', (event) => {
        $('.preview').css({fontFamily: $(event.currentTarget).val()
        })
    });

     /* Change the font weight in the preview text to the current weight selected in the font weight input*/
     $('#weight').on('change', (event) => {
         $('.preview').css({fontWeight: $(event.currentTarget).val()
        })
     });

       /* When a key releases in the font size input, change the size of the font in the preview text to the current size value*/
       $('#size').keyup(event, () => {
           /*Variable with the current value in input field and 'px'*/
           let fontSize = $(event.currentTarget).val() + 'px';
           $('.preview').css({fontSize: fontSize});
       })
})