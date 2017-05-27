/*jslint evil: true*/
var log = function log(val) {
    "use strict";
    window.console.log(val);
    /*elle ne me retourne rien donc undefined*/
};


var afficherInfosUtilisateur = function afficherInfosUtilisateur(user) {
    document.write("l'utilisateur s'appelle " + user.nom + " " + user.age + user.profession +'<br>');
};

var comprendreReturn = function comprendreReturn(res) {
    "use strict";
    return typeof res;
};

/*var entrainement1 =  function entrainement1() {
    "use strict";
    log("app is ready!");

    var valeur1 = true;
    var valeur2 = 30;
    var valeur3 = "unestring";
    var valeur4 = null;
    var valeur5 = {};
    var valeurUndefined;
    document.write("la valeur de valeur1 =" + valeur1 + '<br>');
    document.write("la valeur de valeur1 =" + valeur2 + '<br>');   
    document.write("la valeur de valeur1 =" + valeur3 + '<br>');
    document.write("la valeur de valeur1 =" + valeur4 + '<br>');
    document.write("la valeur de valeur1 =" + valeur5 + '<br>');
    document.write("la valeur de valeur1 =" + valeurUndefined);
};*/


var entrainement1 =  function entrainement1() {
    "use strict";
    log("app is ready!");


    var str, bool, nb, und, isnull, obj, res ;

    /*    str= « unechainedecaractère » ;
    bool = true ;
    nb = 1 ;
    und ;
    isnull = null ;
    obj={} ;*/

    str="unechainedecaracts";
    bool = typeof str === "string";
    nb = window.innerWidth;
    isnull = document.getElementById("vide");
    obj = {};

    document.write("la valeur de str =" + str + '<br>');
    document.write("la valeur de bool =" + bool + '<br>');
    document.write("la valeur de nb=" + nb + '<br>');
    document.write("la valeur de und =" + und + '<br>');
    document.write("la valeur de isnull =" + isnull + '<br>');
    document.write("la valeur de obj=" + obj + '<br>');

    obj.estPratique = true;
    obj.estmultiforme = true;
    obj.estDifficile = false;
    document.write("les objets sont pratiques ? " + obj.estPratique + '<br>');

    var utilisateur1 = {
        nom: "Toto",
        prenom: "Jean",
        age: 27,
        profession: "routier",
        couleurPref: "noir",
        hobbies: ["macarons", "galettes", "chocolat", "cawette"],
    };    

    var utilisateur2 = {
        nom: "Tata",
        prenom: "Chloé",
        age: 22,
        profession: "etudiante",
        couleurPref: "vert",
        hobbies: ["foret", "montagne", "desert", "mer"],
    };

    document.write("l'utilisateur 1 s'appelle " + utilisateur1.nom + " " + utilisateur1.prenom + '<br>');
    document.write("l'utilisateur 2 s'appelle " + utilisateur2['nom'] + " " + utilisateur2.prenom + '<br>');

    afficherInfosUtilisateur(utilisateur1);
    afficherInfosUtilisateur(utilisateur2);

    if (utilisateur1.nom === "Barg") {
        document.write("l'user se nomme Barg");
    } else if (utilisateur2.prenom === "chloé") {
        document.write("l'user se nomme chloé");
    } else {
        document.write("faux");
    };


    log(comprendreReturn("une chaine"));
    res = comprendreReturn({name: "Jack"});
    log(res);

    if (log(comprendreReturn({})) === log({}) ) {
        alert("c'est un objet!")
    };

    var utilisateur3 = {
        nom: "Lulu",
        prenom: "Gigi",
        age: NaN,
        profession: "chomeuse",
        couleurPref: "vert",
        hobbies: ["combat sabre laser", "manger", "dormir", "boire"],
    };

    log(utilisateur3);
    log(utilisateur3.hobbies);
    log(utilisateur3.hobbies[2]);


    var hobbies = utilisateur3.hobbies;
    log(hobbies[0] + " et " + hobbies[1]);
    var compteur = 0;
    while (compteur < hobbies.length) {
        log('tour de boucle n°' + (compteur + 1));
        log(hobbies[compteur]);
        compteur += 1;
    }

    log('fin de boucle');

    for(compteur = 0; compteur < hobbies.length; compteur +=1) {
        log('tour de boucle n°' + (compteur + 1));
        log(hobbies[compteur]);
    };

    var x = document.createElement('div');
    x.id = "nom_element_cree_dynamiquement_par_js";
    x.className = "module inutile";
    x.innerHTML = "<br>"  
    x.textContent += "Je suis une div crée en JS !!";
    log(x);
    document.body.appendChild(x);
};

entrainement1();