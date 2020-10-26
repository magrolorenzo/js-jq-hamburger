// Al click sull'icona dell'hamburger menu, deve essere visualizzato il menu mobile e al click sull'icona "X" il menu mobile deve scomparire.

// Apertura menu
$(".fa-bars").click(function() {
    $(".hamburger-menu").show();
});

// Chiusura menu
$(".close").click(function() {
    $(".hamburger-menu").hide();
});
