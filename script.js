
var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

$('#cmd').click(function () {   
    doc.fromHTML($('article').html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save('sample-file.pdf');
});


/*------------------------------MENU------------------------------------*/
$(document).ready(function(){
    $(".menu").click(function(){
        $(this).toggleClass("active");
        $(".lista").toggleClass("active");
    })
});
