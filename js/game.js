console.log(presidents);

function game() {
    var newDeal = shuffle(presidents),
        newDealCounter = 0,
        totalPresidents = newDeal.length,
        idCount,
        htmlID;

        console.log(htmlID);
        console.log(newDeal);
        console.log(newDeal[newDealCounter]);


    for (i = 0, idCount = 1; i < totalPresidents; i++) {
        htmlID = '#' + idCount;
        console.log(htmlID);
        console.log(i);
        console.log(idCount);
        console.log(newDeal[newDealCounter]);
        $(htmlID).html(newDeal[newDealCounter]);
        idCount++;
        newDealCounter++;

        console.log(idCount);
        console.log(newDealCounter);

    }
}
game();