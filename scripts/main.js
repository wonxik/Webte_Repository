function setCookie(cname, value) {
    document.cookie = cname + "=" + value ;
}

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    var vypis2 = document.getElementById("countnavsteva");
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      
      if (c.indexOf(name) == 0) {
        var count = c.replace(name,"");
        count++;

        setCookie(cname, count);

        
        vypis2.innerHTML = "Toto je v poradí Vaša " + count + ". návšteva na našom WEBE :)";
        
      }
      else{

        setCookie(cname, 1);
        vypis2.innerHTML = "Toto je v poradí Vaša " + 1 + ". návšteva na našom WEBE :)";
      }
    }
    return "";
  }

  getCookie('counter');