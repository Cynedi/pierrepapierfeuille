var pointUser = 0;
var pointOrdi = 0;

//On crée une boucle tant que les points n'ont pas atteint 3 points//
while (pointUser !==3 && pointOrdi !==3) {

  var choixUtilisateur = prompt("Choisissez-vous pierre, feuille, ou ciseaux ?");
  var choixOrdi = Math.random(); //valeur aleatoire entre 0 et 1//

//On traduit ce nombre aleatoire en un choix aleatoire entre pierre, papier, ciseaux//
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

//On crée une fonction avec les 2 choix qui retrournera le choix gagnant//
function comparer (choixOrdi, choixUtilisateur) {

//Si les 2 choix sont les même//
  if(choixOrdi === choixUtilisateur) {
         return("Egalité !");
    }

//Si le choix de l'ordi est pierre//
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




}
