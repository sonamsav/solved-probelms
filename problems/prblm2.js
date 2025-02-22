// Minimizing Loss
// Rajeev has a chart of distinct projected prices for a house over the next several years. He must buy the house in one year and sell it in another, and he must do so at a loss. He wants to minimize her financial loss.
// Eg:

// price = [20, 15, 7, 2, 13]


// His minimum loss is incurred by purchasing in year 2 at price[1] and selling in year 5 at price[4]
// Write code that takes as input the number of years and prices for those years and outputs the year to buy and sell in with the loss value

// Evaluation Guidelines:
// Code will be evaluated on the basis of efficiency, proper use of data structures and correct output return.


// code

function minimizeFinancialLoss (prices){
    let minimumLoss = infinity;
    let buyYear = -1, 
    sellYear = -1;

    for(let i = 0; i< prices.length) {
        for(let j = 1; j < prices.length ; j++){
            let loss = prices[i] - prices[j];

            if(loss > 0 && loss < minimumLoss){
                minimumLoss = loss;
                buyYear = i + 1;
                sellingYear = j + 1;
            }
        }
        return {
            buyYear, sellingYear, minimumLoss
        }
    }
}