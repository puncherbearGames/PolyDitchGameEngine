function openMenu(){
        document.getElementById("LinksForMenu").style.width="19.21%";
          document.getElementById("MenuAn").innerHTML="<i class='fa fa-home'></i>";
           document.getElementById("MenuAn").style.left="19.21%";
        document.getElementById("MenuAn").onclick=CloseMenu;
    }
     function CloseMenu(){
        document.getElementById("LinksForMenu").style.width="0%";
        document.getElementById("MenuAn").innerHTML="<i class='fa fa-close'></i>";
 document.getElementById("MenuAn").style.left="0%";
        document.getElementById("MenuAn").onclick=openMenu;
    }
