console.log('hello');

$(document).ready(function () {
    $("body").css("opacity", "0.5");
    $(".centerDiv").css("background", "rgba(0,0,0,0.9)");
    $("h1").css("text-align", "center");
    $("#color").css("color", "white");
    $("h1").click(function () {
        $(this).hide();
    });
});

$(document).ready(Sum);

function Sum() {
    $("#button1").click(function () {
        if (($("#num1").val() >= 0) && ($("#num2").val() >= 0)) {
            var a = parseInt($("#num1").val());
            var b = parseInt($("#num2").val());
            var sum = a + b;
            alert(sum);
            console.log(sum);
        } 
        else { alert("enter  values");}
    });
    siblings1();
}
function siblings1() {

    console.log($(".CenterForm").siblings());
}

$(document).ready(function () {
    $("button").click(function () {
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
    });
});

