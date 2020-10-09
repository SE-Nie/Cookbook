$(document).ready(function() {
    $(".btn-filter").click(function() {
        var value = $(this).attr('data-filter');
        if(value == "all") { 
            $('.filter').show('1000');
        } else { 
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
        }
        $(".btn-filter").removeClass('active');
        $(this).addClass('active');
    });
});

/* Alert with URL */
function myShareFunction() {
    alert('Thank you for sharing our recipe: '+document.URL);
}
