function prepnikrizovatku(value) {
    var krizovatky=document.getElementsByClassName('krizovatka');
    for (var i = 0; i < krizovatky.length; ++i)
    {
        krizovatky[i].style.display = "none" ;
    }
    krizovatky[value-1].style.display="block";
}

//počítadlo koľko krát sa z daného počítača otvorila osoba stránku
function GetCookie (name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg)
            return getCookieVal (j);
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
    }
    return null;
}
function setCookie(name, value, expires, path, domain, secure) {  var thisCookie = name + "=" + escape(value) +
    ((expires) ? "; expires=" + expires.toGMTString() : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
    document.cookie = thisCookie;
}

function getCookieVal (offset) {
    var endstr = document.cookie.indexOf (";", offset);
    if (endstr === -1)
        endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
}

function VisitCounter(){
    var visits = GetCookie("counter");
    if (!visits) { visits = 1;
    }
    else {
        visits = parseInt(visits) + 1;
    }
    var date=new Date ();
    document.getElementById('visit_counter').innerHTML="Túto stránku ste navštívili: "+visits+"krát"  ;
    date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
    setCookie("counter", visits,date);}
