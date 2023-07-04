function jourtravaille(date) {
    var jour = date.getDate();
    var mois = date.getMonth() + 1; // Les mois commencent à partir de zéro (0 = janvier)
    var annee = date.getFullYear();

    var joursFeries2020 = [
        "2020-01-01",
        "2020-04-13",
        "2020-05-01",
        "2020-05-08",
        "2020-05-21",
        "2020-06-01",
        "2020-07-14",
        "2020-08-15",
        "2020-11-01",
        "2020-11-11",
        "2020-12-25"
    ];

    var jourSemaine = date.getDay();

    var dateString = jour + " " + mois + " " + annee;

    var isWeekend = (jourSemaine === 0 || jourSemaine === 6);
    var isFerie = (joursFeries2020.includes(date.toISOString().split('T')[0]));

    if (isFerie) {
        console.log("Le " + dateString + " est un jour férié");
    } else if (isWeekend) {
        console.log("Non, " + dateString + " est un week-end");
    } else {
        console.log("Oui, " + dateString + " est un jour travaillé");
    }
}
