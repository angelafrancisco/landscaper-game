// ========== LANDSCAPER GAME ========== //
// 1. You are starting a landscaping business, but all you have are your teeth.
// 2. Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.
const landscaper = {
    tools: [],
    money: 0,
    payRate: [1, 5, 50, 100, 250]
}

const toolInventory = {
    name: ["teeth", "rusty scissors", "old-timey push lawnmower", "fancy battery-powered lawnmower", "team of starving students"],
    price: [0, 5, 25, 250, 500],
}
// Variables
let currentPayRate = 1;
let currentTool = null;
let currentMoney = 0;

document.getElementById("currentTool").innerHTML = currentTool;
document.getElementById("currentMoney").innerHTML = currentMoney;
document.getElementById("currentPayRate").innerHTML = currentPayRate;

// Html on button click "Start Game", alert shows first action
function startGame() {
    currentTool = toolInventory.name[0];
    landscaper.tools.push(currentTool)
    currentMoney = landscaper.money += currentPayRate;
    currentPayRate = landscaper.payRate[0]
    alert(`You used your ${currentTool} to mow the lawns and made $${currentPayRate}.00 today!`);
    document.getElementById("currentTool").innerHTML = currentTool;
    document.getElementById("currentMoney").innerHTML = currentMoney;
    alert(`It's a new day! Click the "Mow Lawn" button to earn some more $$$`)
    // console.log(landscaper.tools)
}

// Function to continue mowing the lawn every day
function mowLawn() {
    currentMoney += currentPayRate
    alert(`You mowed the lawn today with your ${currentTool} and earned $${currentPayRate}.00 more!`)
    document.getElementById("currentTool").innerHTML = currentTool;
    document.getElementById("currentMoney").innerHTML = currentMoney;
    document.getElementById("currentPayRate").innerHTML = currentPayRate;
    buyScissors()
    buyPushLawnmower()
    buyFancyLawnmower()
    hireTeam()
    endGame()
}

// 3. At any point, if you are currently using your teeth, you can buy a pair of rusty scissors for $5. You can do this once, assuming you have enough money.
// After mowing lawns with teeth for 5 days you will make $5, you are now able to use rusty scissors. scissors cost $5, money gets subtracted
function buyScissors() {
    let checkLandscaperTools = landscaper.tools.includes(toolInventory.name[1])
    if ((currentMoney >= toolInventory.price[1] && currentTool !== toolInventory.name[1]) && checkLandscaperTools == false) {
        let buyTool = `You earned enough to buy a new tool! You can buy some ${toolInventory.name[1]} for $${toolInventory.price[1]}.\nClick [OK] to buy or [Cancel] to not buy`;
        if (confirm(buyTool) == true) {
            currentMoney -= toolInventory.price[1];
            currentTool = toolInventory.name[1]
            currentPayRate = landscaper.payRate[1]
            landscaper.tools.push(currentTool);
            buyTool = alert(`You bought ${currentTool}! Now you'll earn $${currentPayRate} per day!`)
            document.getElementById("currentTool").innerHTML = currentTool;
            document.getElementById("currentMoney").innerHTML = currentMoney;
            document.getElementById("currentPayRate").innerHTML = currentPayRate;
        } else {
            buyTool = alert(`Okay, guess you'll be sticking with ${currentTool}`)
        }
    }
    // console.log(landscaper.tools)
}

// 4. Using the rusty scissors, you can spend the day cutting lawns and make $5. You can do this as much as you want.
// user clicks "Mow Lawn" button which resets to current item of scissors and current rate of $5

// 5. At any point, if you are currently using rusty scissors, you can buy an old-timey push lawnmower for $25. You can do this once, assuming you have enough money.
function buyPushLawnmower() {
    let checkLandscaperTools = landscaper.tools.includes(toolInventory.name[2])
    if ((currentMoney >= toolInventory.price[2] && currentTool !== toolInventory.name[2]) && checkLandscaperTools == false) {
        let buyTool = `You earned enough to buy a new tool! You can buy a ${toolInventory.name[2]} for $${toolInventory.price[2]}.\nClick [OK] to buy or [Cancel] to not buy`;
        if (confirm(buyTool) == true) {
            currentMoney -= toolInventory.price[2];
            currentTool = toolInventory.name[2]
            currentPayRate = landscaper.payRate[2]
            landscaper.tools.push(currentTool);
            buyTool = alert(`You bought an ${currentTool}! Now you'll earn $${currentPayRate} per day!`)
            document.getElementById("currentTool").innerHTML = currentTool;
            document.getElementById("currentMoney").innerHTML = currentMoney;
            document.getElementById("currentPayRate").innerHTML = currentPayRate;
        } else {
            buyTool = alert(`Okay, guess you'll be sticking with ${currentTool}`)
        }
    }
    // console.log(landscaper.tools)
}


// 6. Using the old-timey push lawnmower, you can spend the day cutting lawns and make $50. You can do this as much as you want.
// user clicks "Mow Lawn" button which resets to current item of push lawnmower and current rate of $50.

// 7. At any point, if you are currently using the old-timey push lawnmower, you can buy a fancy battery-powered lawnmower for $250. You can do this once, assuming you have enough money.
function buyFancyLawnmower() {
    let checkLandscaperTools = landscaper.tools.includes(toolInventory.name[3])
    if ((currentMoney >= toolInventory.price[3] && currentTool !== toolInventory.name[3]) && checkLandscaperTools == false) {
        let buyTool = `You earned enough to buy a new tool! You can buy a ${toolInventory.name[3]} for $${toolInventory.price[3]}.\nClick [OK] to buy or [Cancel] to not buy`;
        if (confirm(buyTool) == true) {
            currentMoney -= toolInventory.price[3];
            currentTool = toolInventory.name[3]
            currentPayRate = landscaper.payRate[3]
            landscaper.tools.push(currentTool);
            buyTool = alert(`You bought a ${currentTool}! Now you'll earn $${currentPayRate} per day!`)
            document.getElementById("currentTool").innerHTML = currentTool;
            document.getElementById("currentMoney").innerHTML = currentMoney;
            document.getElementById("currentPayRate").innerHTML = currentPayRate;
        } else {
            buyTool = alert(`Okay, guess you'll be sticking with the ${currentTool}`)
        }
    }
}

// 8. Using the the fancy battery-powered lawnmower, you can spend the day cutting lawns and make $100. You can do this as much as you want.
// user clicks "Mow Lawn" button which resets to current item of fancy battery-powered lawnmower and current rate of $100.

// 9. At any point, if you are currently using the fancy battery-powered lawnmower, you can hire a team of starving students for $500. You can do this once, assuming you have enough money.
function hireTeam() {
    let checkLandscaperTools = landscaper.tools.includes(toolInventory.name[4])
    if ((currentMoney >= toolInventory.price[4] && currentTool !== toolInventory.name[4]) && checkLandscaperTools == false) {
        let buyTool = `You earned enough to buy a whole new TEAM! You can buy a ${toolInventory.name[4]} for $${toolInventory.price[4]}.\nClick [OK] to buy or [Cancel] to not buy`;
        if (confirm(buyTool) == true) {
            currentMoney -= toolInventory.price[4];
            currentTool = toolInventory.name[4]
            currentPayRate = landscaper.payRate[4]
            landscaper.tools.push(currentTool);
            buyTool = alert(`You bought a ${currentTool}! Now you'll earn $${currentPayRate} per day!`)
            document.getElementById("currentTool").innerHTML = currentTool;
            document.getElementById("currentMoney").innerHTML = currentMoney;
            document.getElementById("currentPayRate").innerHTML = currentPayRate;
        } else {
            buyTool = alert(`Okay, guess you'll be sticking with the ${currentTool}`)
        }
    }
}

// 10. Using the the team of starving students, you can spend the day cutting lawns and make $250. You can do this as much as you want.
// user clicks "Mow Lawn" button which resets to current item of fancy battery-powered lawnmower and current rate of $100.

// 11. You win the game when you have a team of starving students and $1000. In this situation, send a message to the user telling them, they've won.
function endGame() {
    if (currentMoney >= 1000 && currentTool === toolInventory.name[4]) {
        alert(`Congratulations! Your landscaping business is thriving and you made a profit of $${currentMoney}! YOU WON!`)
    }
}