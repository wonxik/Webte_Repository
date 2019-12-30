function prepnikrizovatku(value) {
    var krizovatky=document.getElementsByClassName('krizovatka');
    for (var i = 0; i < krizovatky.length; ++i)
    {
        krizovatky[i].style.display = "none" ;
    }
    krizovatky[value-1].style.display="block";
}
