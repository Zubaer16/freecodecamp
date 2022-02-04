//check Cash Register
function checkCashRegister(price, cash, cid) {
  let change = cash - price
  let drwaer = 0
  let arr = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]
  let changeArr = []
  let check = 0
  cid.map((elem) => (drwaer += elem[1]))
  if (drwaer < change) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] }
  } else if (drwaer === change) {
    return { status: 'CLOSED', change: cid }
  } else {
    for (let i = arr.length - 1; i >= 0; i--) {
      let temp = Math.floor(change / arr[i])
      if (temp > 0) {
        let temp1 = temp * arr[i]
        if (temp1 > cid[i][1]) {
          change = change - cid[i][1]

          if (change < 1) {
            change = change.toFixed(2)
          }
          changeArr.push([cid[i][0], cid[i][1]])
        } else {
          change = change - temp1
          if (change < 1) {
            change = change.toFixed(2)
          }
          changeArr.push([cid[i][0], temp1])
        }
      }
    }
    changeArr.map((elem) => (check += elem[1]))
    if (check.toFixed(2) == cash - price) {
      return { status: 'OPEN', change: changeArr }
    } else {
      return { status: 'INSUFFICIENT_FUNDS', change: [] }
    }
  }
}

console.log(
  checkCashRegister(3.26, 100, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
  ])
)
