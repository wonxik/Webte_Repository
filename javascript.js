var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var size_canvas = 700;
var i=1;
var z=0;
var counterdownright=0;
krizovatky(i);
var selectedOption = document.getElementById("krizovatky");
selectedOption.onchange = function() {
     i = Number(selectedOption.value);
    krizovatky(i)};
var tID;
/*
      animespirit(auto ako chcete vzor 0-6 je auto 7 je električka,
      vzdialenosť od vrchu,
      vdzialenosť auta odkraja,
      uhol ako sa ma auto otočiť,
      smerovka 0-neblika, 1 blika doľava, 2 bliak doprava
      car1,car2,..... toto su divy v ktorych je uložene autičko ked si pozriete div v canvas.html vidite tam 5 divov s piatimi idčkami
      (počital som s tym že v križovatke bude max 5 aut )a každemu autičku musite priradiť jeden div aby ho mal každy samostatne
      a dal sa jednoducho riešiť aj pohyb aut)
       */
function animateScript(cars,top,left,angle,blinker,car) {
    var position=0  ; //start position for the image slicer
    const  interval = 250; //100 ms of interval for the setInterval()
    var marginleft=left+"px";
    var margintop=top+"px";
    var transformm="rotate("+angle+"deg)";
    document.getElementById(car).style.visibility="visible";
    document.getElementById(car).style.transform=transformm;
    document.getElementById(car).style.marginLeft=marginleft;
    document.getElementById(car).style.marginTop=margintop;
    document.getElementById(car).style.backgroundPosition =
        `-${cars*200}px -0px`;
    if(blinker===1){
    tID = setInterval ( () => {
            document.getElementById(car).style.backgroundPosition =
                `-${cars*200}px -${position}px`;
            if (position ===0) {position =200;}
            else { position = 0;}
        }
        , interval );}
        else if(blinker===2){
    tID = setInterval ( () => {
            document.getElementById(car).style.backgroundPosition =
                `-${cars*200}px -${position}px`;
            if (position ===0) {position =400;}
            else { position = 0;}
        }
        , interval );}
}
function gostraigh(car,starttop,startleft,endtop,endleft) {
    var margintop = starttop;
    var marginleft = startleft;

    if (starttop < endtop)
        margintop++;
    else if (starttop > endtop)
        margintop--;
    if (startleft < endleft)
        marginleft++;
    else if (startleft > endleft)
        marginleft--;
    document.getElementById(car).style.marginLeft = marginleft + "px";
    document.getElementById(car).style.marginTop = margintop + "px";

    if ((starttop !== endtop) || (startleft !== endleft))
        setTimeout(function () {
            gostraigh(car, margintop, marginleft, endtop, endleft)
        }, 1);

}

function goleft_down(car,starttop,startleft,endtop,endleft) {
    var margintop = starttop;
    var marginleft = startleft;

    if (starttop < endtop)
        margintop++;
    else if (starttop > endtop)
        margintop--;
    if (startleft < endleft)
        marginleft++;
    else if (startleft > endleft)
        marginleft--;
    document.getElementById(car).style.marginLeft = marginleft + "px";
    document.getElementById(car).style.marginTop = margintop + "px";

    if ((starttop !== endtop) || (startleft !== endleft))
        setTimeout(function () {
            goleft_down(car, margintop, marginleft, endtop, endleft)
        }, 1);
    else
        goleftdown(car, endtop, endleft, 90,0);
}
function goleftdown(car,starttop,startleft,angle,counter) {
    angle++;
    var margintop=starttop;
    margintop++;

    var marginleft=startleft;
    marginleft++;
    var transformm="rotate("+angle+"deg)";
    document.getElementById(car).style.marginLeft=marginleft+"px";
    document.getElementById(car).style.marginTop=margintop+"px";
    document.getElementById(car).style.transform=transformm;
    counter++;
    if((counter<90))
        setTimeout(function() {
            goleftdown(car,margintop,marginleft,angle,counter)},10);
    else
        gostraigh(car,margintop,marginleft,1000,marginleft);
}

function goleft_up(car,starttop,startleft,endtop,endleft) {
    var margintop = starttop;
    var marginleft = startleft;

    if (starttop < endtop)
        margintop++;
    else if (starttop > endtop)
        margintop--;
    if (startleft < endleft)
        marginleft++;
    else if (startleft > endleft)
        marginleft--;
    document.getElementById(car).style.marginLeft = marginleft + "px";
    document.getElementById(car).style.marginTop = margintop + "px";

    if ((starttop !== endtop) || (startleft !== endleft))
        setTimeout(function () {
            goleft_up(car, margintop, marginleft, endtop, endleft)
        }, 1);
    else
        goleftup(car, endtop, endleft, 90,0);
}
function goleftup(car,starttop,startleft,angle,counter) {
    angle--;

    var margintop=starttop;
    margintop--;

    var marginleft=startleft;
    marginleft++;
    var transformm="rotate("+angle+"deg)";
    document.getElementById(car).style.marginLeft=marginleft+"px";
    document.getElementById(car).style.marginTop=margintop+"px";
    document.getElementById(car).style.transform=transformm;
    counter++;
    if((counter<90))
        setTimeout(function() {
            goleftup(car,margintop,marginleft,angle,counter)},10);
    else
        gostraigh(car,margintop,marginleft,-500,marginleft);
}

function goright_up(car,starttop,startleft,endtop,endleft) {
    var margintop = starttop;
    var marginleft = startleft;

    if (starttop < endtop)
        margintop++;
    else if (starttop > endtop)
        margintop--;
    if (startleft < endleft)
        marginleft++;
    else if (startleft > endleft)
        marginleft--;
    document.getElementById(car).style.marginLeft = marginleft + "px";
    document.getElementById(car).style.marginTop = margintop + "px";

    if ((starttop !== endtop) || (startleft !== endleft))
        setTimeout(function () {
            goright_up(car, margintop, marginleft, endtop, endleft)
        }, 1);
    else
        gorightup(car, endtop, endleft, 270,0);
}
function gorightup(car,starttop,startleft,angle,counter) {
    angle++;

    var margintop=starttop;
    margintop--;

    var marginleft=startleft;
    marginleft--;
    var transformm="rotate("+angle+"deg)";
    document.getElementById(car).style.marginLeft=marginleft+"px";
    document.getElementById(car).style.marginTop=margintop+"px";
    document.getElementById(car).style.transform=transformm;
    counter++;
    if((counter<90))
        setTimeout(function() {
            gorightup(car,margintop,marginleft,angle,counter)},10);
    else
        gostraigh(car,margintop,marginleft,-500,marginleft);
}

function goright_down(car,starttop,startleft,endtop,endleft) {
    var margintop = starttop;
    var marginleft = startleft;

    if (starttop < endtop)
        margintop++;
    else if (starttop > endtop)
        margintop--;
    if (startleft < endleft)
        marginleft++;
    else if (startleft > endleft)
        marginleft--;
    document.getElementById(car).style.marginLeft = marginleft + "px";
    document.getElementById(car).style.marginTop = margintop + "px";

    if ((starttop !== endtop) || (startleft !== endleft))
        setTimeout(function () {
            goright_down(car, margintop, marginleft, endtop, endleft)
        }, 1);
    else
        gorightdown(car, endtop, endleft, 270,0);
}
function gorightdown(car,starttop,startleft,angle,counter) {
    angle--;

    var margintop=starttop;
    margintop++;

    var marginleft=startleft;
    marginleft--;
    var transformm="rotate("+angle+"deg)";
    document.getElementById(car).style.marginLeft=marginleft+"px";
    document.getElementById(car).style.marginTop=margintop+"px";
    document.getElementById(car).style.transform=transformm;
    counter++;
    if((counter<90))
        setTimeout(function() {
            gorightdown(car,margintop,marginleft,angle,counter)},10);
    else
        gostraigh(car,margintop,marginleft,1000,marginleft);
}

function goup_right(car, starttop, startleft, endtop, endleft) {
    var margintop = starttop;
    var marginleft = startleft;

    if (starttop < endtop)
        margintop++;
    else if (starttop > endtop)
        margintop--;
    if (startleft < endleft)
        marginleft++;
    else if (startleft > endleft)
        marginleft--;
    document.getElementById(car).style.marginLeft = marginleft + "px";
    document.getElementById(car).style.marginTop = margintop + "px";

    if ((starttop !== endtop) || (startleft !== endleft))
        setTimeout(function () {
            goup_right(car, margintop, marginleft, endtop, endleft)
        }, 1);
    else
        goupright(car, endtop, endleft, 180,0);
}
function goupright(car,starttop,startleft,angle,counter) {
    angle--;
    var margintop=starttop;
    margintop++;

    var marginleft=startleft;
    marginleft++;
    var transformm="rotate("+angle+"deg)";
    document.getElementById(car).style.marginLeft=marginleft+"px";
    document.getElementById(car).style.marginTop=margintop+"px";
    document.getElementById(car).style.transform=transformm;
    counter++;
    if((counter<90))
        setTimeout(function() {
            goupright(car,margintop,marginleft,angle,counter)},10);
    else
        gostraigh(car,margintop,marginleft,margintop,1050);
}

function goup_left(car,starttop,startleft,endtop,endleft) {
    var margintop = starttop;
    var marginleft = startleft;

    if (starttop < endtop)
        margintop++;
    else if (starttop > endtop)
        margintop--;
    if (startleft < endleft)
        marginleft++;
    else if (startleft > endleft)
        marginleft--;
    document.getElementById(car).style.marginLeft = marginleft + "px";
    document.getElementById(car).style.marginTop = margintop + "px";

    if ((starttop !== endtop) || (startleft !== endleft))
        setTimeout(function () {
            goup_left(car, margintop, marginleft, endtop, endleft)
        }, 1);
    else
        goupleft(car, endtop, endleft, 180,0);
}
function goupleft(car,starttop,startleft,angle,counter) {
    angle++;

    var margintop=starttop;
    margintop++;

    var marginleft=startleft;
    marginleft--;
    var transformm="rotate("+angle+"deg)";
    document.getElementById(car).style.marginLeft=marginleft+"px";
    document.getElementById(car).style.marginTop=margintop+"px";
    document.getElementById(car).style.transform=transformm;
    counter++;
    if((counter<90))
        setTimeout(function() {
            goupleft(car,margintop,marginleft,angle,counter)},10);
    else
        gostraigh(car,margintop,marginleft,margintop,-200);
}

function godown_left(car,starttop,startleft,endtop,endleft) {
    var margintop = starttop;
    var marginleft = startleft;

    if (starttop < endtop)
        margintop++;
    else if (starttop > endtop)
        margintop--;
    if (startleft < endleft)
        marginleft++;
    else if (startleft > endleft)
        marginleft--;
    document.getElementById(car).style.marginLeft = marginleft + "px";
    document.getElementById(car).style.marginTop = margintop + "px";

    if ((starttop !== endtop) || (startleft !== endleft))
        setTimeout(function () {
            godown_left(car, margintop, marginleft, endtop, endleft)
        }, 1);
    else
        godownleft(car, endtop, endleft, 0,0);
}
function godownleft(car,starttop,startleft,angle,counter) {
    angle--;

    var margintop=starttop;
    margintop--;

    var marginleft=startleft;
    marginleft--;
    var transformm="rotate("+angle+"deg)";
    document.getElementById(car).style.marginLeft=marginleft+"px";
    document.getElementById(car).style.marginTop=margintop+"px";
    document.getElementById(car).style.transform=transformm;
    counter++;
    if((counter<90))
        setTimeout(function() {
            godownleft(car,margintop,marginleft,angle,counter)},10);
    else
        gostraigh(car,margintop,marginleft,margintop,-200);
}

function godown_right(car,starttop,startleft,endtop,endleft) {
    var margintop = starttop;
    var marginleft = startleft;

    if (starttop < endtop)
        margintop++;
    else if (starttop > endtop)
        margintop--;
    if (startleft < endleft)
        marginleft++;
    else if (startleft > endleft)
        marginleft--;
    document.getElementById(car).style.marginLeft = marginleft + "px";
    document.getElementById(car).style.marginTop = margintop + "px";

    if ((starttop !== endtop) || (startleft !== endleft))
        setTimeout(function () {
            godown_right(car, margintop, marginleft, endtop, endleft)
        }, 1);
    else
        godownright(car, endtop, endleft, 0,0);
}
function godownright(car,starttop,startleft,angle,counter) {
    angle++;

    var margintop=starttop;
    margintop--;

    var marginleft=startleft;
    marginleft++;
    var transformm="rotate("+angle+"deg)";
    document.getElementById(car).style.marginLeft=marginleft+"px";
    document.getElementById(car).style.marginTop=margintop+"px";
    document.getElementById(car).style.transform=transformm;
    counter++;
    if((counter<90))
        setTimeout(function() {
            godownright(car,margintop,marginleft,angle,counter)},10);
    else
        gostraigh(car,margintop,marginleft,margintop,1200);
}

     function krizovatky(i) {

    if (i === 1) {
        /*animespirit(auto ako chcete vzor 0-6 je auto 7 je električka,
            vzdialenosť od vrchu,
            vdzialenosť auta odkraja,
            uhol ako sa ma auto otočiť,
            smerovka 0-neblika, 1 blika doľava, 2 bliak doprava
        car1,car2,..... toto su divy v ktorych je uložene autičko ked si pozriete div v canvas.html vidite tam 5 divov s piatimi idčkami
        (počital som s tym že v križovatke bude max 5 aut )a každemu autičku musite priradiť jeden div aby ho mal každy samostatne
        a dal sa jednoducho riešiť aj pohyb aut)
    */
        animateScript(1,size_canvas/2-50,size_canvas/2-300,90,1,"car1");
        animateScript(5,size_canvas/2+100,size_canvas/2-50,0,2,"car2");
        animateScript(0,size_canvas/2-300,size_canvas/2-150,180,1,"car3");
        animateScript(4,size_canvas/2-150,size_canvas/2+100,270,0,"car4");

        $('#car1').click(function(event) {
            //rovno sa cez križovatku sa ide //gostraigh(car,starttop,startleft,endtop,endleft) end left alebo end top treba dať väčšie aby to vyšlo z obrázka
            //zákruty meno funkcie je go+ odkial:up down right left +kamidete: left up right down,
            //musí to byť rovná čira takŽe platí endtop==startop alebo endleft==startleft
            //súradnice sú iba po zákrutu treba si ich napasovať

            goleft_up("car1",size_canvas/2-50,size_canvas/2-300, size_canvas / 2-50, size_canvas/2-125);

        });
        $('#car2').click(function(event) {

            //meno funkcie je go+ odkial:top down right left +kamidete: left top right down,
            //súradnice sú iba po zákrutu treba si ich napasovať

            godown_right("car2", size_canvas/2+100,size_canvas/2-50, size_canvas / 2+40, size_canvas/2-50,);

        });
        $('#car3').click(function(event) {

            //meno funkcie je go+ odkial:top down right left +kamidete: left top right down,
            //súradnice sú iba po zákrutu treba si ich napasovať

            goup_right("car3", size_canvas/2-300,size_canvas/2-150, size_canvas / 2-145, size_canvas/2-150);

        });
        $('#car4').click(function(event) {

            //meno funkcie je go+ odkial:top down right left +kamidete: left top right down,
            //súradnice sú iba po zákrutu treba si ich napasovať

            gostraigh("car4", size_canvas/2-150,size_canvas/2+100, size_canvas / 2-150, -200);

        });




        //document.getElementById("car5").onclick="gostraight("car5",size_canvas/2,0,size_canvas/2,size_canvas)";


        ctx.fillStyle = "green";
        ctx.setLineDash([0, 0]);
        ctx.strokeStyle="#000000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#585759";
        ctx.lineWidth = 2;
        ctx.fillRect(size_canvas / 2 - 105, 0, 210, size_canvas);
        ctx.fillRect(0, size_canvas / 2 - 105, size_canvas, 210);
        ctx.beginPath();
        ctx.moveTo(size_canvas / 2 - 100, 0);
        ctx.lineTo(size_canvas / 2 - 100, size_canvas / 2 - 100);
        ctx.moveTo(size_canvas / 2 + 100, 0);
        ctx.lineTo(size_canvas / 2 + 100, size_canvas / 2 - 100);

        ctx.moveTo(size_canvas / 2 - 100, size_canvas / 2 + 100);
        ctx.lineTo(size_canvas / 2 - 100, size_canvas);
        ctx.moveTo(size_canvas / 2 + 100, size_canvas / 2 + 100);
        ctx.lineTo(size_canvas / 2 + 100, size_canvas);

        ctx.moveTo(0, size_canvas / 2 + 100);
        ctx.lineTo(size_canvas / 2 - 100, size_canvas / 2 + 100);
        ctx.moveTo(0, size_canvas / 2 - 100);
        ctx.lineTo(size_canvas / 2 - 100, size_canvas / 2 - 100);

        ctx.moveTo(size_canvas / 2 + 100, size_canvas / 2 + 100);
        ctx.lineTo(size_canvas, size_canvas / 2 + 100);
        ctx.moveTo(size_canvas / 2 + 100, size_canvas / 2 - 100);
        ctx.lineTo(size_canvas, size_canvas / 2 - 100);
        ctx.fill();
        ctx.stroke();


        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(size_canvas / 2, size_canvas / 2 + 100, 4, size_canvas / 2);
        ctx.fillRect(size_canvas / 2, size_canvas / 2 + 100, 100, 4);
        ctx.fillRect(0, size_canvas / 2, size_canvas / 2 - 100, 4);
        ctx.fillRect(size_canvas / 2 - 104, size_canvas / 2, 4, 100);
        ctx.beginPath();
        ctx.strokeStyle = "#FFFFFF";
        ctx.setLineDash([20, 30]);
        ctx.moveTo(size_canvas / 2, 0);
        ctx.lineTo(size_canvas / 2, size_canvas / 2 - 100);
        ctx.moveTo(size_canvas / 2 + 100, size_canvas / 2);
        ctx.lineTo(size_canvas, size_canvas / 2);
        ctx.stroke();
        ctx.setLineDash([0, 0]);
        ctx.strokeStyle = "#000000";
        ctx.beginPath();
        ctx.fillStyle = "#ff4125";
        ctx.moveTo(size_canvas / 2 + 110, size_canvas / 2 + 110);
        ctx.lineTo(size_canvas / 2 + 160, size_canvas / 2 + 110);
        ctx.lineTo(size_canvas / 2 + 135, size_canvas / 2 + 160);
        ctx.lineTo(size_canvas / 2 + 110, size_canvas / 2 + 110);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.moveTo(size_canvas / 2 + 120, size_canvas / 2 + 115);
        ctx.lineTo(size_canvas / 2 + 150, size_canvas / 2 + 115);
        ctx.lineTo(size_canvas / 2 + 135, size_canvas / 2 + 148);
        ctx.lineTo(size_canvas / 2 + 120, size_canvas / 2 + 115);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#ff4125";
        ctx.moveTo(size_canvas / 2 - 110, size_canvas / 2 + 110);
        ctx.lineTo(size_canvas / 2 - 160, size_canvas / 2 + 135);
        ctx.lineTo(size_canvas / 2 - 110, size_canvas / 2 + 160);
        ctx.lineTo(size_canvas / 2 - 110, size_canvas / 2 + 110);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.moveTo(size_canvas / 2 - 115, size_canvas / 2 + 118);
        ctx.lineTo(size_canvas / 2 - 150, size_canvas / 2 + 135);
        ctx.lineTo(size_canvas / 2 - 115, size_canvas / 2 + 152);
        ctx.lineTo(size_canvas / 2 - 115, size_canvas / 2 + 118);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.moveTo(size_canvas / 2 - 135, size_canvas / 2 - 160);
        ctx.lineTo(size_canvas / 2 - 160, size_canvas / 2 - 135);
        ctx.lineTo(size_canvas / 2 - 135, size_canvas / 2 - 110);
        ctx.lineTo(size_canvas / 2 - 110, size_canvas / 2 - 135);
        ctx.lineTo(size_canvas / 2 - 135, size_canvas / 2 - 160);
        ctx.stroke();
        ctx.fill();


        ctx.beginPath();
        ctx.fillStyle = "#fff63f";
        ctx.moveTo(size_canvas / 2 - 135, size_canvas / 2 - 150);
        ctx.lineTo(size_canvas / 2 - 150, size_canvas / 2 - 135);
        ctx.lineTo(size_canvas / 2 - 135, size_canvas / 2 - 120);
        ctx.lineTo(size_canvas / 2 - 120, size_canvas / 2 - 135);
        ctx.lineTo(size_canvas / 2 - 135, size_canvas / 2 - 150);
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.moveTo(size_canvas / 2 + 135, size_canvas / 2 - 160);
        ctx.lineTo(size_canvas / 2 + 160, size_canvas / 2 - 135);
        ctx.lineTo(size_canvas / 2 + 135, size_canvas / 2 - 110);
        ctx.lineTo(size_canvas / 2 + 110, size_canvas / 2 - 135);
        ctx.lineTo(size_canvas / 2 + 135, size_canvas / 2 - 160);
        ctx.stroke();
        ctx.fill();


        ctx.beginPath();
        ctx.fillStyle = "#fff63f";
        ctx.moveTo(size_canvas / 2 + 135, size_canvas / 2 - 150);
        ctx.lineTo(size_canvas / 2 + 150, size_canvas / 2 - 135);
        ctx.lineTo(size_canvas / 2 + 135, size_canvas / 2 - 120);
        ctx.lineTo(size_canvas / 2 + 120, size_canvas / 2 - 135);
        ctx.lineTo(size_canvas / 2 + 135, size_canvas / 2 - 150);
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.moveTo(size_canvas / 2 - 110, size_canvas / 2 - 160);
        ctx.lineTo(size_canvas / 2 - 110, size_canvas / 2 - 210);
        ctx.lineTo(size_canvas / 2 - 160, size_canvas / 2 - 210);
        ctx.lineTo(size_canvas / 2 - 160, size_canvas / 2 - 160);
        ctx.lineTo(size_canvas / 2 - 110, size_canvas / 2 - 160);
        ctx.moveTo(size_canvas / 2 - 115, size_canvas / 2 - 185);
        ctx.stroke();
        ctx.fillStyle = "white";
        ctx.fill();

        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.moveTo(size_canvas / 2 - 115, size_canvas / 2 - 185);
        ctx.quadraticCurveTo(size_canvas / 2 - 140, size_canvas / 2 - 180, size_canvas / 2 - 140, size_canvas / 2 - 205);
        ctx.stroke();
        ctx.lineWidth = 2;
        ctx.moveTo(size_canvas / 2 - 135, size_canvas / 2 - 180);
        ctx.lineTo(size_canvas / 2 - 135, size_canvas / 2 - 165);
        ctx.moveTo(size_canvas / 2 - 140, size_canvas / 2 - 185);
        ctx.lineTo(size_canvas / 2 - 155, size_canvas / 2 - 185);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.moveTo(size_canvas / 2 + 160, size_canvas / 2 - 110);
        ctx.lineTo(size_canvas / 2 + 160, size_canvas / 2 - 160);
        ctx.lineTo(size_canvas / 2 + 210, size_canvas / 2 - 160);
        ctx.lineTo(size_canvas / 2 + 210, size_canvas / 2 - 110);
        ctx.lineTo(size_canvas / 2 + 160, size_canvas / 2 - 110);
        ctx.moveTo(size_canvas / 2 + 165, size_canvas / 2 - 125);
        ctx.stroke();
        ctx.fillStyle = "white";
        ctx.fill();

        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.moveTo(size_canvas / 2 + 205, size_canvas / 2 - 135);
        ctx.quadraticCurveTo(size_canvas / 2 + 180, size_canvas / 2 - 130, size_canvas / 2 + 180, size_canvas / 2 - 155);
        ctx.stroke();
        ctx.lineWidth = 2;
        ctx.moveTo(size_canvas / 2 + 185, size_canvas / 2 - 130);
        ctx.lineTo(size_canvas / 2 + 185, size_canvas / 2 - 115);
        ctx.moveTo(size_canvas / 2 + 180, size_canvas / 2 - 135);
        ctx.lineTo(size_canvas / 2 + 165, size_canvas / 2 - 135);
        ctx.stroke();
    } else if (i === 2) {
        ctx.fillStyle = "green";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 2;
        ctx.fillStyle = "#585759";
        ctx.fillRect(size_canvas / 3 - 105, 0, 210, size_canvas);
        ctx.fillRect(size_canvas / 3 - 105, size_canvas / 2 - 105, size_canvas, 210);
        ctx.beginPath();
        ctx.moveTo(size_canvas / 3 - 100, 0);
        ctx.lineTo(size_canvas / 3 - 100, size_canvas);
        ctx.moveTo(size_canvas / 3 + 100, 0);
        ctx.lineTo(size_canvas / 3 + 100, size_canvas / 2 - 100);

        ctx.moveTo(size_canvas / 3 - 100, size_canvas / 2 + 100);
        ctx.lineTo(size_canvas / 3 - 100, size_canvas);
        ctx.moveTo(size_canvas / 3 + 100, size_canvas / 2 + 100);
        ctx.lineTo(size_canvas / 3 + 100, size_canvas);

        ctx.moveTo(size_canvas / 3 + 100, size_canvas / 2 + 100);
        ctx.lineTo(size_canvas, size_canvas / 2 + 100);
        ctx.moveTo(size_canvas / 3 + 100, size_canvas / 2 - 100);
        ctx.lineTo(size_canvas, size_canvas / 2 - 100);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = "#ff4125";
        ctx.moveTo(size_canvas / 3 + 110, size_canvas / 2 - 110);
        ctx.lineTo(size_canvas / 3 + 160, size_canvas / 2 - 135);
        ctx.lineTo(size_canvas / 3 + 110, size_canvas / 2 - 160);
        ctx.lineTo(size_canvas / 3 + 110, size_canvas / 2 - 110);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.moveTo(size_canvas / 3 + 115, size_canvas / 2 - 118);
        ctx.lineTo(size_canvas / 3 + 150, size_canvas / 2 - 135);
        ctx.lineTo(size_canvas / 3 + 115, size_canvas / 2 - 152);
        ctx.lineTo(size_canvas / 3 + 115, size_canvas / 2 - 118);
        ctx.fill();


        ctx.beginPath();
        ctx.fillStyle = "#ff4125";
        ctx.moveTo(size_canvas / 3 + 135, size_canvas / 2 + 110);
        ctx.lineTo(size_canvas / 3 + 160, size_canvas / 2 + 160);
        ctx.lineTo(size_canvas / 3 + 110, size_canvas / 2 + 160);
        ctx.lineTo(size_canvas / 3 + 135, size_canvas / 2 + 110);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.moveTo(size_canvas / 3 + 135, size_canvas / 2 + 120);
        ctx.lineTo(size_canvas / 3 + 152, size_canvas / 2 + 155);
        ctx.lineTo(size_canvas / 3 + 118, size_canvas / 2 + 155);
        ctx.lineTo(size_canvas / 3 + 135, size_canvas / 2 + 120);
        ctx.fill();
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.moveTo(size_canvas / 3 + 135, size_canvas / 2 + 130);
        ctx.lineTo(size_canvas / 3 + 135, size_canvas / 2 + 150);
        ctx.stroke();
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(size_canvas / 3 + 135, size_canvas / 2 + 142);
        ctx.lineTo(size_canvas / 3 + 144, size_canvas / 2 + 142);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "#FFFFFF";
        ctx.setLineDash([20, 30]);
        ctx.moveTo(size_canvas / 3, 0);
        ctx.lineTo(size_canvas / 3, size_canvas);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(size_canvas / 3 + 100, size_canvas / 2);
        ctx.lineTo(size_canvas, size_canvas / 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.setLineDash([0, 0]);
        ctx.fillStyle = "#ff4125";
        ctx.moveTo(size_canvas / 3 - 160, size_canvas / 2 - 160);
        ctx.lineTo(size_canvas / 3 - 135, size_canvas / 2 - 110);
        ctx.lineTo(size_canvas / 3 - 110, size_canvas / 2 - 160);
        ctx.lineTo(size_canvas / 3 - 160, size_canvas / 2 - 160);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.moveTo(size_canvas / 3 - 152, size_canvas / 2 - 155);
        ctx.lineTo(size_canvas / 3 - 135, size_canvas / 2 - 120);
        ctx.lineTo(size_canvas / 3 - 118, size_canvas / 2 - 155);
        ctx.lineTo(size_canvas / 3 - 152, size_canvas / 2 - 155);
        ctx.fill();

        ctx.beginPath();
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 4;
        ctx.moveTo(size_canvas / 3 - 135, size_canvas / 2 - 130);
        ctx.lineTo(size_canvas / 3 - 135, size_canvas / 2 - 150);
        ctx.stroke();
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(size_canvas / 3 - 135, size_canvas / 2 - 142);
        ctx.lineTo(size_canvas / 3 - 126, size_canvas / 2 - 142);
        ctx.stroke();
    } else if (i === 3) {
        ctx.fillStyle = "green";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.fillStyle = "#585759";
        ctx.arc(size_canvas / 2, size_canvas / 2, 95, 0, Math.PI * 2, true);
        ctx.arc(size_canvas / 2, size_canvas / 2, 205, 0, Math.PI * 2, true);
        ctx.fill('evenodd');
        ctx.beginPath();
        ctx.fillRect(size_canvas / 2 - 105, 0, 210, size_canvas / 2 - 150);
        ctx.fillRect(size_canvas / 2 - 105, size_canvas / 2 + 150, 210, size_canvas / 2 - 150);
        ctx.fillRect(0, size_canvas / 2 - 105, size_canvas / 2 - 150, 210);
        ctx.fillRect(size_canvas / 2 + 150, size_canvas / 2 - 105, size_canvas / 2 - 150, 210);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(size_canvas / 2, size_canvas / 2, 100, 0, Math.PI * 2, true);
        ctx.moveTo(size_canvas / 2 - 100, 0);
        ctx.lineTo(size_canvas / 2 - 100, size_canvas / 2 - 175);
        ctx.moveTo(size_canvas / 2 + 100, 0);
        ctx.lineTo(size_canvas / 2 + 100, size_canvas / 2 - 175);
        ctx.moveTo(size_canvas / 2 - 100, size_canvas / 2 + 175);
        ctx.lineTo(size_canvas / 2 - 100, size_canvas);
        ctx.moveTo(size_canvas / 2 + 100, size_canvas / 2 + 175);
        ctx.lineTo(size_canvas / 2 + 100, size_canvas);
        ctx.moveTo(0, size_canvas / 2 - 100);
        ctx.lineTo(size_canvas / 2 - 175, size_canvas / 2 - 100);
        ctx.moveTo(0, size_canvas / 2 + 100);
        ctx.lineTo(size_canvas / 2 - 175, size_canvas / 2 + 100);
        ctx.moveTo(size_canvas / 2 + 175, size_canvas / 2 - 100);
        ctx.lineTo(size_canvas, size_canvas / 2 - 100);
        ctx.moveTo(size_canvas / 2 + 175, size_canvas / 2 + 100);
        ctx.lineTo(size_canvas, size_canvas / 2 + 100);
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = "#FFFFFF";
        ctx.setLineDash([20, 30]);
        ctx.arc(size_canvas / 2, size_canvas / 2, 200, 0, Math.PI * 2, true);
        ctx.moveTo(size_canvas / 2, 0);
        ctx.lineTo(size_canvas / 2, size_canvas / 2 - 200);
        ctx.moveTo(size_canvas / 2, size_canvas);
        ctx.lineTo(size_canvas / 2, size_canvas / 2 + 200);
        ctx.moveTo(0, size_canvas / 2);
        ctx.lineTo(size_canvas / 2 - 200, size_canvas / 2);
        ctx.moveTo(size_canvas, size_canvas / 2);
        ctx.lineTo(size_canvas / 2 + 200, size_canvas / 2);
        ctx.stroke();
    }
    else if(i===4)
    {
        ctx.fillStyle = "green";
        ctx.setLineDash([0, 0]);
        ctx.strokeStyle="#000000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#585759";
        ctx.lineWidth = 2;
        ctx.fillRect(size_canvas / 2 - 155, 0, 310, size_canvas);
        ctx.fillRect(0, size_canvas / 2 - 105, size_canvas, 210);

        ctx.beginPath();
        ctx.moveTo(size_canvas / 2 - 150, 0);
        ctx.lineTo(size_canvas / 2 - 150, size_canvas / 2 - 100);
        ctx.moveTo(size_canvas / 2 + 150, 0);
        ctx.lineTo(size_canvas / 2 + 150, size_canvas / 2 - 100);

        ctx.moveTo(size_canvas / 2 - 150, size_canvas / 2 + 100);
        ctx.lineTo(size_canvas / 2 - 150, size_canvas);
        ctx.moveTo(size_canvas / 2 + 150, size_canvas / 2 + 100);
        ctx.lineTo(size_canvas / 2 + 150, size_canvas);

        ctx.moveTo(0, size_canvas / 2 + 100);
        ctx.lineTo(size_canvas / 2 - 150, size_canvas / 2 + 100);
        ctx.moveTo(0, size_canvas / 2 - 100);
        ctx.lineTo(size_canvas / 2 - 150, size_canvas / 2 - 100);

        ctx.moveTo(size_canvas / 2 + 150, size_canvas / 2 + 100);
        ctx.lineTo(size_canvas, size_canvas / 2 + 100);
        ctx.moveTo(size_canvas / 2 + 150, size_canvas / 2 - 100);
        ctx.lineTo(size_canvas, size_canvas / 2 - 100);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(size_canvas / 2 +50   , size_canvas / 2 + 100, 4, size_canvas / 2);
        ctx.fillRect(size_canvas / 2+50, size_canvas / 2 + 100, 100, 4);
        ctx.fillRect(size_canvas / 2 -50   , size_canvas / 2 + 100, 4, size_canvas / 2);
        ctx.fillRect(size_canvas / 2-50, size_canvas / 2 + 100, 100, 4);
        ctx.fillRect(0, size_canvas / 2, size_canvas / 2 - 150, 4);
        ctx.fillRect(size_canvas / 2 - 154, size_canvas / 2, 4, 100);
        ctx.fillRect(size_canvas/2+150, size_canvas / 2, size_canvas / 2 - 100, 4);
        ctx.fillRect(size_canvas / 2 + 150, size_canvas / 2-100, 4, 100);

        ctx.fillRect(size_canvas / 2 +50   , 0, 4, size_canvas / 2-100);
        ctx.fillRect(size_canvas / 2-50, size_canvas / 2 - 104, 100, 4);
        ctx.fillRect(size_canvas / 2 -50   , 0, 4, size_canvas / 2-100);
        ctx.fillRect(size_canvas / 2-150, size_canvas / 2 - 104, 100, 4);
        ctx.beginPath();
        ctx.fillStyle="#000000";
        ctx.fillRect(size_canvas / 2 +160   , size_canvas / 2 + 110, 30, 100);
        ctx.fillRect(size_canvas / 2 +200   , size_canvas / 2 + 110, 30, 100);
        ctx.fillRect(size_canvas / 2 -190   , size_canvas / 2 - 210, 30, 100);
        ctx.fillRect(size_canvas / 2 -230   , size_canvas / 2 - 210, 30, 100);
        ctx.fillRect(size_canvas / 2 +160   , size_canvas / 2 - 140, 100,30);
        ctx.fillRect(size_canvas / 2 -260   , size_canvas / 2 + 110, 100,30);
        ctx.beginPath();
        ctx.fillStyle="#ff4125";
        ctx.arc(size_canvas / 2 +175 , size_canvas / 2 + 125, 15, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(size_canvas / 2 -175 , size_canvas / 2 - 125, 15, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(size_canvas / 2 -215 , size_canvas / 2 - 125, 15, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(size_canvas / 2 +215 , size_canvas / 2 + 125, 15, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.fillStyle="#ffa70b";
        ctx.beginPath();
        ctx.arc(size_canvas / 2 +175 , size_canvas / 2 + 160, 15, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(size_canvas / 2 -175 , size_canvas / 2 - 160, 15, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(size_canvas / 2 -215 , size_canvas / 2 - 160, 15, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.fillStyle="#59ff6d";
        ctx.beginPath();
        ctx.arc(size_canvas / 2 +175 , size_canvas / 2 + 195, 15, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(size_canvas / 2 -175 , size_canvas / 2 - 195, 15, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(size_canvas / 2 -215 , size_canvas / 2 - 195, 15, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle="#ffa70b";
        ctx.arc(size_canvas / 2 +215 , size_canvas / 2 + 160, 15, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle="#59ff6d";
        ctx.arc(size_canvas / 2 +215 , size_canvas / 2 + 195, 15, 0, Math.PI * 2, true);
        ctx.fill();

    }
    else if(i===5)
    {
        ctx.fillStyle = "green";
        ctx.setLineDash([0, 0]);
        ctx.strokeStyle="#000000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#585759";
        ctx.lineWidth = 2;
        ctx.fillRect(size_canvas / 2-105, size_canvas / 3, 210, size_canvas);
        ctx.fillRect(0, size_canvas / 3 - 105, size_canvas, 210);
        ctx.beginPath();


        ctx.moveTo(size_canvas / 2 - 100, size_canvas / 3 + 100);
        ctx.lineTo(size_canvas / 2 - 100, size_canvas);
        ctx.moveTo(size_canvas / 2 + 100, size_canvas / 3 + 100);
        ctx.lineTo(size_canvas / 2 + 100, size_canvas);

        ctx.moveTo(0, size_canvas / 3 + 100);
        ctx.lineTo(size_canvas / 2 - 100, size_canvas / 3 + 100);
        ctx.moveTo(size_canvas / 2+ 100, size_canvas / 3 + 100);
        ctx.lineTo(size_canvas , size_canvas / 3 + 100);
        ctx.moveTo(0, size_canvas / 3 - 100);
        ctx.lineTo(size_canvas , size_canvas / 3    - 100);
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = "#FFFFFF";
        ctx.setLineDash([20, 30]);
        ctx.moveTo(10, size_canvas/3);
        ctx.lineTo(size_canvas , size_canvas / 3);
        ctx.moveTo(size_canvas / 2 , size_canvas / 3+200);
        ctx.lineTo(size_canvas/2, size_canvas );
        ctx.stroke();
        ctx.beginPath();
        ctx.setLineDash([15, 15]);
        ctx.lineWidth=80;
        ctx.moveTo(size_canvas / 2 -97.5, size_canvas / 3+150);
        ctx.lineTo(size_canvas/2+100, size_canvas/3+150 );
        ctx.stroke();
        ctx.setLineDash([0, 0]);
        ctx.lineWidth=2;
        ctx.strokeStyle = "#000000";
    }
         /*var img = document.getElementById("car"); //Creates an HTMLImageElement
         img.style.backgroundPosition =
             `0px 0px`;

         img.addEventListener("load", function() {
             // ctx.drawImage(img, 256*2, 0,256,256,size_canvas/2-75,size_canvas/2+80,256,256);
             //   animateScript(img);

         });*/

    else if(i===6) {

        //2 cesty
        ctx.fillStyle = "green";
        ctx.setLineDash([0, 0]);
        ctx.strokeStyle = "#000000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#585759";
        ctx.lineWidth = 2;
        ctx.fillRect(size_canvas / 2 - 105, size_canvas/2, 210, size_canvas/2);
        ctx.fillRect(0, size_canvas / 2 - 210, size_canvas, 210);
        ctx.fillRect(0, size_canvas / 2 , size_canvas, 210);
        ctx.fillStyle = "yellow";
        ctx.fillRect(0 , 50, size_canvas, 60);
        ctx.fillStyle = "#585759";
        ctx.fillRect(0 , 60, size_canvas, 40);
        ctx.beginPath();


        ctx.strokeStyle = "#FFFFFF";
        ctx.moveTo(0, size_canvas / 2-100);
        ctx.lineTo(size_canvas / 2 - 100, size_canvas / 2-100);
        ctx.moveTo(size_canvas /2 + 100, size_canvas / 2-100);
        ctx.lineTo(size_canvas , size_canvas / 2-100);
        ctx.moveTo(0, size_canvas / 2+100);
        ctx.lineTo(size_canvas / 2 - 100, size_canvas / 2+100);

        ctx.moveTo(size_canvas /2 + 100, size_canvas / 2+100);
        ctx.lineTo(size_canvas , size_canvas / 2+100);
        ctx.stroke();
        ctx.beginPath();
        ctx.setLineDash([20, 30]);
        ctx.moveTo(size_canvas / 2, size_canvas / 2+220);
        ctx.lineTo(size_canvas / 2, size_canvas );
        ctx.moveTo(0,80);
        ctx.lineTo(size_canvas,80);
        ctx.stroke();
        ctx.beginPath();
        ctx.setLineDash([0, 0]);
        ctx.fillStyle = "#000000";
        ctx.strokeStyle = "#000000";
        ctx.moveTo(0, size_canvas / 2+85);
        ctx.lineTo(size_canvas , size_canvas / 2+85);
        ctx.moveTo(0, size_canvas / 2+15);
        ctx.lineTo(size_canvas , size_canvas / 2+15);
        ctx.moveTo(0, size_canvas / 2-85);
        ctx.lineTo(size_canvas , size_canvas / 2-85);
        ctx.moveTo(0, size_canvas / 2-15);
        ctx.lineTo(size_canvas , size_canvas / 2-15);

        ctx.moveTo(0, size_canvas / 2-85);
        ctx.lineTo(size_canvas , size_canvas / 2-85);
        ctx.moveTo(0, size_canvas / 2-15);
        ctx.lineTo(size_canvas , size_canvas / 2-15);
        ctx.stroke();




    }


    else if(i===7) {


        //2 cesty
        ctx.fillStyle = "green";
        ctx.setLineDash([0, 0]);
        ctx.strokeStyle = "#000000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#585759";
        ctx.lineWidth = 2;
        ctx.fillRect(size_canvas / 2 - 105, 0, 210, size_canvas);
        ctx.fillRect(0, size_canvas / 2 - 105, size_canvas, 210);
        ctx.beginPath();
        //plne ciary
        ctx.fillStyle = "#FFFFFF";
        //dlha
        ctx.fillRect(size_canvas / 2, 0, 4, size_canvas / 2 - 100);
        //kratka
        ctx.fillRect(size_canvas / 2 - 100, size_canvas / 2 - 104, 100, 4);
        ctx.fillRect(size_canvas / 2, size_canvas / 2+100, 4, size_canvas);
        ctx.fillRect(size_canvas / 2 , size_canvas / 2+100, 100, 4);
        ctx.beginPath();
        //prerusovane ciary
        ctx.strokeStyle = "#FFFFFF";
        ctx.setLineDash([20, 30]);
        ctx.moveTo(0, size_canvas/2);
        ctx.lineTo(size_canvas / 2-100, size_canvas / 2 );
        ctx.moveTo(size_canvas / 2 + 100, size_canvas / 2);
        ctx.lineTo(size_canvas, size_canvas / 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = "#ff4125";
        ctx.moveTo(size_canvas / 2 + 110, size_canvas / 2 + 110);
        ctx.lineTo(size_canvas / 2 + 160, size_canvas / 2 + 110);
        ctx.lineTo(size_canvas / 2 + 135, size_canvas / 2 + 160);
        ctx.lineTo(size_canvas / 2 + 110, size_canvas / 2 + 110);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.moveTo(size_canvas / 2 + 120, size_canvas / 2 + 115);
        ctx.lineTo(size_canvas / 2 + 150, size_canvas / 2 + 115);
        ctx.lineTo(size_canvas / 2 + 135, size_canvas / 2 + 148);
        ctx.lineTo(size_canvas / 2 + 120, size_canvas / 2 + 115);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#ff4125";
        ctx.moveTo(size_canvas / 2 - 110, size_canvas / 2 - 110);
        ctx.lineTo(size_canvas / 2 - 135, size_canvas / 2 - 160);
        ctx.lineTo(size_canvas / 2 - 160, size_canvas / 2 - 110);
        ctx.lineTo(size_canvas / 2 - 110, size_canvas / 2 - 110);
        ctx.fill();


        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.moveTo(size_canvas / 2 - 152, size_canvas / 2 - 115);
        ctx.lineTo(size_canvas / 2 - 135, size_canvas / 2 - 150);
        ctx.lineTo(size_canvas / 2 - 118, size_canvas / 2 - 115);
        ctx.lineTo(size_canvas / 2 - 152, size_canvas / 2 - 115);
        ctx.fill();
/////////////////////////////////////////
        ctx.setLineDash([0, 0]);
        ctx.strokeStyle = "#000000";

        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.moveTo(size_canvas / 2 + 135, size_canvas / 2 - 160);
        ctx.lineTo(size_canvas / 2 + 160, size_canvas / 2 - 135);
        ctx.lineTo(size_canvas / 2 + 135, size_canvas / 2 - 110);
        ctx.lineTo(size_canvas / 2 + 110, size_canvas / 2 - 135);
        ctx.lineTo(size_canvas / 2 + 135, size_canvas / 2 - 160);
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#fff63f";
        ctx.moveTo(size_canvas / 2 + 135, size_canvas / 2 - 150);
        ctx.lineTo(size_canvas / 2 + 150, size_canvas / 2 - 135);
        ctx.lineTo(size_canvas / 2 + 135, size_canvas / 2 - 120);
        ctx.lineTo(size_canvas / 2 + 120, size_canvas / 2 - 135);
        ctx.lineTo(size_canvas / 2 + 135, size_canvas / 2 - 150);
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.moveTo(size_canvas / 2 + 160, size_canvas / 2 - 110);
        ctx.lineTo(size_canvas / 2 + 160, size_canvas / 2 - 160);
        ctx.lineTo(size_canvas / 2 + 210, size_canvas / 2 - 160);
        ctx.lineTo(size_canvas / 2 + 210, size_canvas / 2 - 110);
        ctx.lineTo(size_canvas / 2 + 160, size_canvas / 2 - 110);
        ctx.moveTo(size_canvas / 2 + 165, size_canvas / 2 - 125);
        ctx.stroke();
        ctx.fillStyle = "white";
        ctx.fill();

        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.moveTo(size_canvas / 2 + 205, size_canvas / 2 - 135);
        ctx.lineTo(size_canvas / 2 + 165, size_canvas / 2 - 135);
        ctx.stroke();

        ctx.lineWidth = 2;
        ctx.moveTo(size_canvas / 2 + 185, size_canvas / 2 - 155);
        ctx.lineTo(size_canvas / 2 + 185, size_canvas / 2 - 140);
        ctx.moveTo(size_canvas / 2 + 185, size_canvas / 2 - 130);
        ctx.lineTo(size_canvas / 2 + 185, size_canvas / 2 - 115);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.moveTo(size_canvas / 2 - 135, size_canvas / 2 + 160);
        ctx.lineTo(size_canvas / 2 - 160, size_canvas / 2 + 135);
        ctx.lineTo(size_canvas / 2 - 135, size_canvas / 2 + 110);
        ctx.lineTo(size_canvas / 2 - 110, size_canvas / 2 + 135);
        ctx.lineTo(size_canvas / 2 - 135, size_canvas / 2 + 160);
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#fff63f";
        ctx.moveTo(size_canvas / 2 - 135, size_canvas / 2 + 150);
        ctx.lineTo(size_canvas / 2 - 150, size_canvas / 2 + 135);
        ctx.lineTo(size_canvas / 2 - 135, size_canvas / 2 + 120);
        ctx.lineTo(size_canvas / 2 - 120, size_canvas / 2 + 135);
        ctx.lineTo(size_canvas / 2 - 135, size_canvas / 2 + 150);
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.moveTo(size_canvas / 2 - 160, size_canvas / 2 + 110);
        ctx.lineTo(size_canvas / 2 - 160, size_canvas / 2 + 160);
        ctx.lineTo(size_canvas / 2 - 210, size_canvas / 2 + 160);
        ctx.lineTo(size_canvas / 2 - 210, size_canvas / 2 + 110);
        ctx.lineTo(size_canvas / 2 - 160, size_canvas / 2 + 110);
        ctx.moveTo(size_canvas / 2 - 165, size_canvas / 2 + 125);
        ctx.stroke();
        ctx.fillStyle = "white";
        ctx.fill();

        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.moveTo(size_canvas / 2 - 205, size_canvas / 2 + 135);
        ctx.lineTo(size_canvas / 2 - 165, size_canvas / 2 + 135);
        ctx.stroke();

        ctx.lineWidth = 2;
        ctx.moveTo(size_canvas / 2 - 185, size_canvas / 2 + 155);
        ctx.lineTo(size_canvas / 2 - 185, size_canvas / 2 + 140);
        ctx.moveTo(size_canvas / 2 - 185, size_canvas / 2 + 130);
        ctx.lineTo(size_canvas / 2 - 185, size_canvas / 2 + 115);

        ctx.stroke();}
    else if(i===8) {


        //2 cesty
        ctx.fillStyle = "green";
        ctx.setLineDash([0, 0]);
        ctx.strokeStyle = "#000000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#585759";
        ctx.lineWidth = 2;
        ctx.fillRect(size_canvas / 2 - 105, 0, 210, size_canvas);
        ctx.fillRect(0, size_canvas / 2 - 105, size_canvas, 210);


        //prerusovane ciary
        ctx.strokeStyle = "#FFFFFF";
        ctx.setLineDash([20, 30]);
        ctx.beginPath();
        ctx.moveTo(0, size_canvas / 2);
        ctx.lineTo(size_canvas / 2 - 100, size_canvas / 2);
        ctx.moveTo(size_canvas / 2 + 100, size_canvas / 2);
        ctx.lineTo(size_canvas, size_canvas / 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(size_canvas / 2, size_canvas);
        ctx.lineTo(size_canvas/2, size_canvas / 2+100);
        ctx.moveTo(size_canvas / 2, size_canvas/2-100);
        ctx.lineTo(size_canvas/2 , 0 );
        ctx.stroke();

    }

    else if(i===9) {

        //2 cesty
        ctx.fillStyle = "green";
        ctx.setLineDash([0, 0]);
        ctx.strokeStyle = "#000000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#585759";
        ctx.lineWidth = 2;
        ctx.fillRect(size_canvas / 2 - 105, 0, 210, size_canvas/2);
        ctx.fillRect(0, size_canvas / 2 - 210, size_canvas, 210);
        ctx.fillRect(0, size_canvas / 2 , size_canvas, 210);
        ctx.beginPath();


        ctx.strokeStyle = "#FFFFFF";
        ctx.moveTo(0, size_canvas / 2-100);
        ctx.lineTo(size_canvas / 2 - 100, size_canvas / 2-100);
        ctx.moveTo(size_canvas /2 + 100, size_canvas / 2-100);
        ctx.lineTo(size_canvas , size_canvas / 2-100);
        ctx.moveTo(0, size_canvas / 2+100);
        ctx.lineTo(size_canvas / 2 - 100, size_canvas / 2+100);

        ctx.moveTo(size_canvas /2 + 100, size_canvas / 2+100);
        ctx.lineTo(size_canvas , size_canvas / 2+100);
        ctx.stroke();
        ctx.beginPath();
        ctx.setLineDash([20, 30]);
        ctx.moveTo(size_canvas / 2, 0);
        ctx.lineTo(size_canvas / 2, size_canvas / 2-220);
        ctx.stroke();
        ctx.beginPath();
        ctx.setLineDash([0, 0]);
        ctx.fillStyle = "#000000";
        ctx.strokeStyle = "#000000";
        ctx.moveTo(0, size_canvas / 2+85);
        ctx.lineTo(size_canvas , size_canvas / 2+85);
        ctx.moveTo(0, size_canvas / 2+15);
        ctx.lineTo(size_canvas , size_canvas / 2+15);
        ctx.moveTo(0, size_canvas / 2-85);
        ctx.lineTo(size_canvas , size_canvas / 2-85);
        ctx.moveTo(0, size_canvas / 2-15);
        ctx.lineTo(size_canvas , size_canvas / 2-15);

        ctx.moveTo(0, size_canvas / 2-85);
        ctx.lineTo(size_canvas , size_canvas / 2-85);
        ctx.moveTo(0, size_canvas / 2-15);
        ctx.lineTo(size_canvas , size_canvas / 2-15);
        ctx.stroke();




    }
    else if(i===10)
    {

        //2 cesty
        ctx.fillStyle = "green";
        ctx.setLineDash([0, 0]);
        ctx.strokeStyle="#000000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#585759";
        ctx.lineWidth = 2;
        ctx.fillRect(size_canvas / 2 - 105, 0, 210, size_canvas);
        ctx.fillRect(0, size_canvas / 2 - 105, size_canvas, 210);
        ctx.beginPath();
        //plne ciary
        ctx.fillStyle = "#FFFFFF";
        //dlha
        ctx.fillRect(size_canvas/2, 0 , 4, size_canvas / 2-100);
        //kratka
        ctx.fillRect(size_canvas / 2-100, size_canvas/2-104, 100, 4);
        ctx.fillRect(0, size_canvas / 2, size_canvas / 2 - 100, 4);
        ctx.fillRect(size_canvas / 2 - 100, size_canvas / 2, 4, 100);
        ctx.beginPath();
        //prerusovane ciary
        ctx.strokeStyle = "#FFFFFF";
        ctx.setLineDash([20, 30]);
        ctx.moveTo(size_canvas / 2, size_canvas);
        ctx.lineTo(size_canvas/2, size_canvas / 2+100);
        ctx.moveTo(size_canvas / 2+100, size_canvas/2);
        ctx.lineTo(size_canvas , size_canvas/2 );
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = "#ff4125";
        ctx.moveTo(size_canvas / 2 - 110, size_canvas / 2 + 110);
        ctx.lineTo(size_canvas / 2 - 160, size_canvas / 2 + 135);
        ctx.lineTo(size_canvas / 2 - 110, size_canvas / 2 + 160);
        ctx.lineTo(size_canvas / 2 - 110, size_canvas / 2 + 110);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.moveTo(size_canvas / 2 - 115, size_canvas / 2 + 118);
        ctx.lineTo(size_canvas / 2 - 150, size_canvas / 2 + 135);
        ctx.lineTo(size_canvas / 2 - 115, size_canvas / 2 + 152);
        ctx.lineTo(size_canvas / 2 - 115, size_canvas / 2 + 118);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#ff4125";
        ctx.moveTo(size_canvas / 2 - 110, size_canvas / 2 - 110);
        ctx.lineTo(size_canvas / 2 - 135, size_canvas / 2 - 160);
        ctx.lineTo(size_canvas / 2 - 160, size_canvas / 2 - 110);
        ctx.lineTo(size_canvas / 2 - 110, size_canvas / 2 - 110);
        ctx.fill();


        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.moveTo(size_canvas / 2 - 152, size_canvas / 2 - 115);
        ctx.lineTo(size_canvas / 2- 135, size_canvas / 2 -150);
        ctx.lineTo(size_canvas / 2 - 118, size_canvas / 2 - 115);
        ctx.lineTo(size_canvas / 2 - 152, size_canvas / 2  -115);
        ctx.fill();
/////////////////////////////////////////
        ctx.setLineDash([0, 0]);
        ctx.strokeStyle="#000000";

        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.moveTo(size_canvas / 2 + 135, size_canvas / 2 - 160);
        ctx.lineTo(size_canvas / 2 + 160, size_canvas / 2 - 135);
        ctx.lineTo(size_canvas / 2 + 135, size_canvas / 2 - 110);
        ctx.lineTo(size_canvas / 2 + 110, size_canvas / 2 - 135);
        ctx.lineTo(size_canvas / 2 + 135, size_canvas / 2 - 160);
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#fff63f";
        ctx.moveTo(size_canvas / 2 + 135, size_canvas / 2 - 150);
        ctx.lineTo(size_canvas / 2 + 150, size_canvas / 2 - 135);
        ctx.lineTo(size_canvas / 2 + 135, size_canvas / 2 - 120);
        ctx.lineTo(size_canvas / 2 + 120, size_canvas / 2 - 135);
        ctx.lineTo(size_canvas / 2 + 135, size_canvas / 2 - 150);
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.moveTo(size_canvas / 2 + 160, size_canvas / 2 - 110);
        ctx.lineTo(size_canvas / 2 + 160, size_canvas / 2 - 160);
        ctx.lineTo(size_canvas / 2 + 210, size_canvas / 2 - 160);
        ctx.lineTo(size_canvas / 2 + 210, size_canvas / 2 - 110);
        ctx.lineTo(size_canvas / 2 + 160, size_canvas / 2 - 110);
        ctx.moveTo(size_canvas / 2 + 165, size_canvas / 2 - 125);
        ctx.stroke();
        ctx.fillStyle = "white";
        ctx.fill();

        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.moveTo(size_canvas / 2 + 205, size_canvas / 2 - 135);
        ctx.quadraticCurveTo(size_canvas / 2 + 180, size_canvas / 2 - 135, size_canvas / 2 + 180, size_canvas / 2 - 115);
        ctx.stroke();
        ctx.lineWidth = 2;
        ctx.moveTo(size_canvas / 2 + 185, size_canvas / 2 - 155);
        ctx.lineTo(size_canvas / 2 + 185, size_canvas / 2 - 140);
        ctx.moveTo(size_canvas / 2 + 180, size_canvas / 2 - 135);
        ctx.lineTo(size_canvas / 2 + 165, size_canvas / 2 - 135);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.moveTo(size_canvas / 2 + 135, size_canvas / 2 + 160);
        ctx.lineTo(size_canvas / 2 + 160, size_canvas / 2 + 135);
        ctx.lineTo(size_canvas / 2 + 135, size_canvas / 2 + 110);
        ctx.lineTo(size_canvas / 2 + 110, size_canvas / 2 + 135);
        ctx.lineTo(size_canvas / 2 + 135, size_canvas / 2 + 160);
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "#fff63f";
        ctx.moveTo(size_canvas / 2 + 135, size_canvas / 2 + 150);
        ctx.lineTo(size_canvas / 2 + 150, size_canvas / 2 + 135);
        ctx.lineTo(size_canvas / 2 + 135, size_canvas / 2 + 120);
        ctx.lineTo(size_canvas / 2 + 120, size_canvas / 2 + 135);
        ctx.lineTo(size_canvas / 2 + 135, size_canvas / 2 + 150);
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.moveTo(size_canvas / 2 + 110, size_canvas / 2 + 160);
        ctx.lineTo(size_canvas / 2 + 110, size_canvas / 2 + 210);
        ctx.lineTo(size_canvas / 2 + 160, size_canvas / 2 + 210);
        ctx.lineTo(size_canvas / 2 + 160, size_canvas / 2 + 160);
        ctx.lineTo(size_canvas / 2 + 110, size_canvas / 2 + 160);
        ctx.moveTo(size_canvas / 2 + 115, size_canvas / 2 + 175);
        ctx.stroke();
        ctx.fillStyle = "white";
        ctx.fill();

        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.moveTo(size_canvas / 2 + 155, size_canvas / 2 + 185);
        ctx.quadraticCurveTo(size_canvas / 2 + 135, size_canvas / 2 + 185, size_canvas / 2 + 135 , size_canvas / 2 + 205);
        ctx.stroke();
        ctx.lineWidth = 2;
        ctx.moveTo(size_canvas / 2 + 135, size_canvas / 2 + 180);
        ctx.lineTo(size_canvas / 2 + 135, size_canvas / 2 + 165);
        ctx.moveTo(size_canvas / 2 + 130, size_canvas / 2 + 185);
        ctx.lineTo(size_canvas / 2 + 115, size_canvas / 2 + 185);
        ctx.stroke();
    }
     }