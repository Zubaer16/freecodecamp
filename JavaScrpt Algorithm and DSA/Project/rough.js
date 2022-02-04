//check Cash Register
function checkCashRegister(price, cash, cid) {
  let change = cash - price
  let drwaer = 0
  let arr = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]
  let changeArr = []
  cid.map((elem) => (drwaer += elem[1]))
  if (drwaer < change) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] }
  } else if (drwaer === change) {
    return { status: 'CLOSED', change: cid }
  } else {
    for (let i = arr.length - 1; i >= 0; i--) {
      let temp = Math.floor(change / arr[i])
      console.log(temp)
      if (temp > 0) {
        let temp1 = temp * arr[i]
        console.log('t1' + temp1)
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
          console.log(change)
          changeArr.push([cid[i][0], temp1])
        }
      }
    }

    return { status: 'OPEN', change: changeArr }
  }
}
console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.01],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 1],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0],
  ])
)
