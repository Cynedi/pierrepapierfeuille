/*var choixUser = prompt("Choisissez-vous pierre, feuille, ou ciseaux ?");
var choixOrdi = Math.random();

var pointOrdi
var pointUser

if (choixOrdi < 0.34) {
	choixOrdi = "pierre";
}
  else if(choixOrdi <= 0.67) {
	choixOrdi = "feuille";
}

  else {
	choixOrdi = "ciseaux";
}



if (choixOrdi === choixUser){
  alert ("Egalité!");
}

else {

  switch(choixUser) {


    case "pierre":
      console.log("l'ordinateur avait choisit : " + choixOrdi);

    if (choixOrdi===ciseaux) {
      alert ("gagné!");
      pointUser ++
    }

    else {
      alert ("perdu!");
    pointOrdi ++
    }

  break;

  case "ciseaux":

  if (choixOrdi===feuille) {
    alert ("gagné!");
    pointUser ++
}
  else {
    alert ("perdu");
    pointOrdi ++

}
  break;

  case "feuille":

  if (choixOrdi===pierre) {
    alert ("gagné!");
  pointUser ++
}
  else {
    alert ("perdu");
    pointOrdi ++
  }
    break;

    default:
    alert ("n'importe quoi!");

}
}*/







var pointUser = 0;
var pointOrdi = 0;







  while (pointUser !==3 && pointOrdi !==3) {



        var choixUtilisateur = prompt("Choisissez-vous pierre, feuille, ou ciseaux ?");
        var choixOrdi = Math.random();

        if (choixOrdi < 0.34) {
        	choixOrdi = "pierre";
        }
          else if(choixOrdi <= 0.67) {
        	choixOrdi = "feuille";
        }

          else {
        	choixOrdi = "ciseaux";
        }

        alert("l'Ordinateur avait choisit : " + choixOrdi);

function comparer (choixOrdi, choixUtilisateur) {

if(choixOrdi === choixUtilisateur) {
         return("Egalité !");
    }

  else if(choixOrdi === "pierre") {

  if(choixUtilisateur === "ciseaux") {
        pointOrdi++;
    return("pierre gagne!");

    }
  else {
    pointUser++;
        return("feuille gagne !");

    }
}

else if(choixOrdi==="feuille") {

    if(choixUtilisateur==="pierre") {
      pointOrdi++;
        return (" feuille gagne !");

    }
    else {
      pointUser++;
        return ("ciseaux gagne !");

    }

}

else if(choixOrdi==="ciseaux") {

    if(choixUtilisateur==="pierre") {
      pointUser++;
        return(" pierre gagne !");

    }
    else {
      pointOrdi++;
        return("ciseaux gagne !");

    }

}



    }

alert ( comparer (choixOrdi, choixUtilisateur));
    alert ("ordinateur: " + pointOrdi +"."+" "+ "vous: " + pointUser + ".");


}
