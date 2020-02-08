require('./journal.js');

function phi([n00, n01, n10, n11]){
    return (n11 * n00 - n10 * n01) / 
        Math.sqrt((n10 + n11) *
                  (n00 + n01) *
                  (n01 + n11) *
                  (n00 + n10));
}

function tableFor(event, journal) {
//              00 01 10 11       (squirrel <---> event)
    let table = [0, 0, 0, 0];
    for (let entry of journal) {
        index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index +=2;
        table[index] += 1;
    }

    return table;
}

function journalEvents(jornal) {
    let events = [];
    for (let entry of jornal){
        for (let event of entry.events){
            if (!events.includes(event)){
                events.push(event);
            }
        }
    }
    return events;
}

function formatAnswer () {
    console.log('\n\n')
    console.log('  00 01 10 11       (squirrel <---> event)')
    console.log(tableFor("pizza", JOURNAL));
    console.log('\n\n')
    console.log(journalEvents(JOURNAL));
    console.log(phi([76,9,4,1]));
}

/* for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event, JOURNAL));
    if (correlation > 0.1 || correlation < -0.1) {
        console.log(event + ':', correlation);
    }
} */

for (let entry of JOURNAL) {
    if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")) {
        entry.events.push("peanut teeth");
    }
}

console.log(phi(tableFor("peanut teeth", JOURNAL)))