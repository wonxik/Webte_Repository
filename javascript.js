var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var size_canvas = 700;
var i=1;
krizovatky(i);
var selectedOption = document.getElementById("krizovatky");
selectedOption.onchange = function() {
     i = Number(selectedOption.value);
    krizovatky(i)};

     function krizovatky(i) {
         var img = new Image(); //Creates an HTMLImageElement
         img.src = "cars+tram.png";
         img.addEventListener("load", function() {
         });
    if (i === 1) {
        img.addEventListener("load", function() {
            ctx.drawImage(img, 256*2, 0,256,256,size_canvas/2-75,size_canvas/2+80,256,256);
        });

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

}