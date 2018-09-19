$(document).ready(function () {
    $(".head1").click(function () {
        //dbclick  
        $("h1").addClass("head1new");
    });

    $(".head2").mouseenter(function () {

        $("h2").addClass("head2new");
    });

    $(".head2").mouseleave(function () {

        $("h2").css("color", "white");
    });

    $(".head3").on({

        mouseenter: (function () {

            $(".head3").css("color","yellow");
        }),

        mouseleave: (function () {

            $(".head3").css("color","blue");
        })
    });
    $("#button1").click(function () {
        $("input[type=text]").val(null);
        $("input[type=number]").val(null);
        alert("clear");
    });

    //$("input").change(function () {
    //        var $input = $(this);
    //        $("p").html(".attr( 'checked' ): <b>" + $input.attr("checked") + "</b><br>" +
    //            ".prop( 'checked' ): <b>" + $input.prop("checked") + "</b><br>" +
    //            ".is( ':checked' ): <b>" + $input.is(":checked") + "</b>");
    //});
    $("#button2").click(function () {
        $(".container").empty()
    });
    $(function () {
        var rows = $("tr");
        rows.filter(":even").css("background", "red","opacity","0.9");
        rows.filter(":odd").css("background", "blue", "opacity", "0.9");
    });
    var filePath;
    $('input[type=file]').change(function () {
        filePath = $(this).val();
        $("img").attr({
            src: filePath,
             title: "jQuery",
            alt: "jQuery Logo",
        });
        console.log(filePath);
        $("img").css("height", "200px", "width", "100px","display block");
    });
  
})
 
