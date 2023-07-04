function tri(numbers, order) {
    var sortedNumbers = numbers.slice(); // Crée une copie du tableau pour éviter de modifier l'original

    if (order === "asc") {
        // Tri dans l'ordre ascendant
        for (var i = 0; i < sortedNumbers.length - 1; i++) {
            for (var j = 0; j < sortedNumbers.length - i - 1; j++) {
                if (sortedNumbers[j] > sortedNumbers[j + 1]) {
                    var temp = sortedNumbers[j];
                    sortedNumbers[j] = sortedNumbers[j + 1];
                    sortedNumbers[j + 1] = temp;
                }
            }
        }
    } else if (order === "desc") {
        // Tri dans l'ordre décroissant
        for (var i = 0; i < sortedNumbers.length - 1; i++) {
            for (var j = 0; j < sortedNumbers.length - i - 1; j++) {
                if (sortedNumbers[j] < sortedNumbers[j + 1]) {
                    var temp = sortedNumbers[j];
                    sortedNumbers[j] = sortedNumbers[j + 1];
                    sortedNumbers[j + 1] = temp;
                }
            }
        }
    }

    return sortedNumbers;
}
