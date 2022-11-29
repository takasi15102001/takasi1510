var Q0_0;
var Q0_1;
var Q0_2;
var Q0_3;


$(document).ready( function () {
    $.ajaxSetup({cache : false});
    setInterval( function () {
        $.getJSON("data.html", function(result) {
            Q0_0 = result["q0_0"];
            Q0_1 = result["q0_1"];
            Q0_2 = result["q0_2"];
            Q0_3 = result["q0_3"];

            if(Q0_0 == 1 ){
                document.getElementById("state1").src = './img/motor.jpg';
            }
            else {
                document.getElementById("state1"). src = 'https://thumbs.dreamstime.com/z/motor-pump-irrigation-icon-outline-style-motor-pump-irrigation-icon-outline-motor-pump-irrigation-vector-icon-web-design-135519421.jpg';
            }

            if(Q0_1 == 1 ){
                document.getElementById("state1").src = 'https://th.bing.com/th?q=Drive+Motor+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=vi&adlt=moderate&t=1&mw=247';
            }
            else {
                document.getElementById("state1"). src = 'https://thumbs.dreamstime.com/z/motor-pump-irrigation-icon-outline-style-motor-pump-irrigation-icon-outline-motor-pump-irrigation-vector-icon-web-design-135519421.jpg';
            }

            if(Q0_2 == 1 ){
                document.getElementById("state2").src = 'https://th.bing.com/th?q=AC+Motor+Icons&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=vi&adlt=moderate&t=1&mw=247';
            }
            else {
                document.getElementById("state2"). src = 'https://thumbs.dreamstime.com/z/motor-pump-irrigation-icon-outline-style-motor-pump-irrigation-icon-outline-motor-pump-irrigation-vector-icon-web-design-135519421.jpg';
            }

            if(Q0_3 == 1 ){
                document.getElementById("state2").src = 'https://th.bing.com/th?q=Drive+Motor+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=vi&adlt=moderate&t=1&mw=247';
            }
            else {
                document.getElementById("state2"). src = 'https://thumbs.dreamstime.com/z/motor-pump-irrigation-icon-outline-style-motor-pump-irrigation-icon-outline-motor-pump-irrigation-vector-icon-web-design-135519421.jpg';
            }
        });
    }),500;

});