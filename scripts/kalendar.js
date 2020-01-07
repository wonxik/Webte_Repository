$(document).ready(function () {

    var info = document.getElementById("info");

    var today = new Date();
    var date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();

    var month = today.getMonth() + 1;
    month = `0${month}`.slice(-2);

    var day = today.getDate();
    day = `0${day}`.slice(-2);

    var CompareValue = (month + '' + day);
    $.getJSON('data/meniny.json', function (x) {

        for (i = 0; i < x.meniny.zaznam.length; i++) {

            if (x.meniny.zaznam[i].den == CompareValue) {
                info.innerHTML = "Dnes je "+ date + " a meniny má " + x.meniny.zaznam[i].SK;
                break;
            }
        }
    });
});

function changeFn(){
    var x = document.getElementById("id-moznost").value;
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var vypis2 = document.getElementById("vypisdata2");

    if(x == 1){
        
        input1.style.display="inline";
        input1.required = true;

        input2.style.display="none";
        input2.required = false;
        vypis2.style.display="none";
        vypis2.required = false;

    }
    else if(x == 2){
        input2.style.display="inline";
        input2.required = true;
        vypis2.style.display="inline";
        vypis2.required = true;

        input1.style.display="none";
        input1.required = false;
    }
}

function doSomething() {
    //inputs
    var CompareValue1 = document.getElementById("input1").value;
    var CompareValue2 = document.getElementById("input2").value;
    //select
    var FnValue = document.getElementById("id-moznost").value;
    //output
    var vypis1 = document.getElementById("vypisdata1");
    var vypis2 = document.getElementById("vypisdata2");

    $.getJSON('data/meniny.json', function (x) {
        if (FnValue == 1) {

            for (i = 0; i < x.meniny.zaznam.length; i++) {
                if(x.meniny.zaznam[i].hasOwnProperty('SK')){
                    
                    retazec = x.meniny.zaznam[i].SK;
                    array = retazec.split(',');
                    
                    for(j = 0; j < array.length; j++){
                        if (CompareValue1.localeCompare(array[j], 'en', {sensitivity: 'base'}) == 0 ) {
    
                            var today = new Date();
                            mesiacden = x.meniny.zaznam[i].den.slice(0, 2) + ' ' + x.meniny.zaznam[i].den.slice(2, 4);
                            var mydate = new Date(today.getFullYear() + ' ' + mesiacden);
                            vypis1.innerHTML = x.meniny.zaznam[i].SK + " má meniny dňa " + mydate.getDate() + "." + (mydate.getMonth() + 1);
                            break;
                        }
                    } 
                }
            }
        }

        else if(FnValue == 2){
            var today = new Date(CompareValue2);
            var month = today.getMonth() + 1;
            month = `0${month}`.slice(-2);

            var day = today.getDate();
            day = `0${day}`.slice(-2);
            var CompareValue = (month + '' + day);
            for (i = 0; i < x.meniny.zaznam.length; i++) {

                if (x.meniny.zaznam[i].den == CompareValue) {
                    vypis2.innerHTML="";
                    if(x.meniny.zaznam[i].hasOwnProperty('SK')){
                        vypis1.innerHTML = "V tento deň má meniny " + x.meniny.zaznam[i].SK;
                    }
                    else{
                        vypis1.innerHTML = "V tento deň nemá nikto meniny."
                    }
                        
                    
                    if(x.meniny.zaznam[i].hasOwnProperty('SKsviatky')){
                        vypis2.innerHTML = x.meniny.zaznam[i].SKsviatky;
                    }
                    
                    break;
                }

            }
        }
    });
}

// mena.normalize())
// search(mena)