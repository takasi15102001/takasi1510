
$(document).ready(function () {
    $.ajaxSetup({ cache: false });
    setInterval(function () {
        $.getJSON("data.html", function (result) {
            console.log(result);
            let result0 = +result["Q0_0"];
            let result1 = +result["Q0_1"];
            let result2 = +result["Q0_2"];
            let result3 = +result["Q0_3"];

            console.log({ result0, result1, result2, result3 });

            let image1 = document.getElementById("image_1");
            let image2 = document.getElementById("image_2");

            if (result0 == 1 ) {
                console.log(1);
                image1.setAttribute("src", "./imgs/pupm_fwd.png");
            }
            else {
                image1.setAttribute("src","./imgs/pupm_off.png");
            }

            if ( result1 == 1) {
                console.log(2);
                image1.setAttribute("src", "./imgs/pupm_rev.png");
            }

            else{
                image2.setAttribute("src","./imgs/pupm_off.png");
            }

            if (result2 == 1 ) {
                console.log(3);
                image2.setAttribute("src", "./imgs/pupm_fwd.png");
            }
            if (result3 == 1) {
                console.log(4);
                image2.setAttribute("src", "./imgs/pupm_rev.png");
            }



        });
    }, 1000);
});


function set_u1() {
    ulr = 'data.html';
    name = '"T1_Up"';
    sdata = escape(name) + '=' + 1;
    $.post(ulr, sdata, function (result2) { console.log(result2) });
}

function reset_u1() {
    ulr = 'data.html';
    name = '"T1_Up"';
    sdata = escape(name) + '=' + 0;
    $.post(ulr, sdata, function (result2) { });
}

function set_u2() {
    ulr = 'data.html';
    name = '"Btn_2_Up"';
    sdata = escape(name) + '=' + 1;
    $.post(ulr, sdata, function (result2) { console.log(result2) });
}

function reset_u2() {
    ulr = 'data.html';
    name = '"Btn_2_Up"';
    sdata = escape(name) + '=' + 0;
    $.post(ulr, sdata, function (result2) { });
}

function set_u3() {
    ulr = 'data.html';
    name = '"Btn_3_Up"';
    sdata = escape(name) + '=' + 1;
    $.post(ulr, sdata, function (result2) { console.log(result2) });
}

function reset_u3() {
    ulr = 'data.html';
    name = '"Btn_3_Up"';
    sdata = escape(name) + '=' + 0;
    $.post(ulr, sdata, function (result2) { });
}

function set_d4() {
    ulr = 'data.html';
    name = '"Btn_4_Down"';
    sdata = escape(name) + '=' + 1;
    $.post(ulr, sdata, function (result2) { console.log(result2) });
}

function reset_d4() {
    ulr = 'data.html';
    name = '"Btn_4_Down"';
    sdata = escape(name) + '=' + 0;
    $.post(ulr, sdata, function (result2) { });
}

function set_d3() {
    ulr = 'data.html';
    name = '"Btn_3_Down"';
    sdata = escape(name) + '=' + 1;
    $.post(ulr, sdata, function (result2) { console.log(result2) });
}

function reset_d3() {
    ulr = 'data.html';
    name = '"Btn_3_Down"';
    sdata = escape(name) + '=' + 0;
    $.post(ulr, sdata, function (result2) { });
}

function set_d2() {
    ulr = 'data.html';
    name = '"Btn_2_Down"';
    sdata = escape(name) + '=' + 1;
    $.post(ulr, sdata, function (result2) { console.log(result2) });
}

function reset_d2() {
    ulr = 'data.html';
    name = '"Btn_2_Down"';
    sdata = escape(name) + '=' + 0;
    $.post(ulr, sdata, function (result2) { });
}

function set_1() {
    ulr = 'data.html';
    name = '"Btn_1"';
    sdata = escape(name) + '=' + 1;
    $.post(ulr, sdata, function (result2) { console.log(result2) });
}

function reset_1() {
    ulr = 'data.html';
    name = '"Btn_1"';
    sdata = escape(name) + '=' + 0;
    $.post(ulr, sdata, function (result2) { });
}

function set_2() {
    ulr = 'data.html';
    name = '"Btn_2"';
    sdata = escape(name) + '=' + 1;
    $.post(ulr, sdata, function (result2) { console.log(result2) });
}

function reset_2() {
    ulr = 'data.html';
    name = '"Btn_2"';
    sdata = escape(name) + '=' + 0;
    $.post(ulr, sdata, function (result2) { });
}

function set_3() {
    ulr = 'data.html';
    name = '"Btn_3"';
    sdata = escape(name) + '=' + 1;
    $.post(ulr, sdata, function (result2) { console.log(result2) });
}

function reset_3() {
    ulr = 'data.html';
    name = '"Btn_3"';
    sdata = escape(name) + '=' + 0;
    $.post(ulr, sdata, function (result2) { });
}

function set_4() {
    ulr = 'data.html';
    name = '"Btn_4"';
    sdata = escape(name) + '=' + 1;
    $.post(ulr, sdata, function (result2) { console.log(result2) });
}

function reset_4() {
    ulr = 'data.html';
    name = '"Btn_4"';
    sdata= escape(name) + '=' + 0;
    $.post(ulr, sdata, function (result2) { });
}

function set_m() {
    ulr = 'data.html';
    name = '"Btn_In_Open"';
    sdata = escape(name) + '=' + 1;
    $.post(ulr, sdata, function (result2) { console.log(result2) });
}

function reset_m() {
    ulr = 'data.html';
    name = '"Btn_In_Open"';
    sdata = escape(name) + '=' + 0;
    $.post(ulr, sdata, function (result2) { });
}

function set_d() {
    ulr = 'data.html';
    name = '"Btn_In_Close"';
    sdata = escape(name) + '=' + 1;
    $.post(ulr, sdata, function (result2) { console.log(result2) });
}

function reset_d() {
    ulr = 'data.html';
    name = '"Btn_In_Close"';
    sdata = escape(name) + '=' + 0;
    $.post(ulr, sdata, function (result2) { });
}