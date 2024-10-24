function botoes(){
    var btnfunc = document.getElementById("btnfunc");
    var btncli = document.getElementById("btncli");
    var btnpets = document.getElementById("btnpets");

    var container1 = document.querySelector(".formfunc");
    var container2 = document.querySelector(".formcli");
    var container3 = document.querySelector(".formpet");

    btnfunc.addEventListener("click", function(){
        container1.style.display = 'flex';

        container2.style.display = 'none', container3.style.display = 'none'
    });

    btncli.addEventListener("click", function(){
        container2.style.display = 'flex';

        container1.style.display = 'none', container3.style.display = 'none'
    });

    btnpets.addEventListener("click", function(){
        container3.style.display = 'flex';

        container1.style.display = 'none', container2.style.display = 'none'
    });

}