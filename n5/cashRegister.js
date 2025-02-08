function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let units = [
        ["ONE HUNDRED", 100],
        ["TWENTY", 20],
        ["TEN", 10],
        ["FIVE", 5],
        ["ONE", 1],
        ["QUARTER", 0.25],
        ["DIME", 0.1],
        ["NICKEL", 0.05],
        ["PENNY", 0.01]
    ];
    let total = cid.reduce((sum, el) => sum + el[1], 0).toFixed(2);
    if (change > total) return {status: "INSUFFICIENT_FUNDS", change: []};
    if (change.toFixed(2) === total) return {status: "CLOSED", change: cid};
    let arr = [];
    let reversedCid = cid.reverse();
    for (let i = 0; i < units.length; i++) {
        let val = 0;
        while (change >= units[i][1] && reversedCid[i][1] >= units[i][1]) {
            change -= units[i][1];
            reversedCid[i][1] -= units[i][1];
            val += units[i][1];
            change = Math.round(change * 100) / 100;
        }
        if (val) arr.push([units[i][0], val]);
    }
    if (change > 0) return {status: "INSUFFICIENT_FUNDS", change: []};
    return {status: "OPEN", change: arr};
}
