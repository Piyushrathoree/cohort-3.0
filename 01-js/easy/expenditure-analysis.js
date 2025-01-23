/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
    const totalByCategory = {};

    transactions.forEach((t) => {
        const { category, price } = t;

        // check for the category in totalByCategory if exist then ill add the price to it and if not exist then it will create a new object
        if (totalByCategory[category]) {
            totalByCategory[category] += price;
        } else {
            totalByCategory[category] = price;
        }
    });

    const result = Object.keys(totalByCategory).map((category) => ({
        category,
        totalSpent: totalByCategory[category],
    }));

    return result;
}

calculateTotalSpentByCategory();

module.exports = calculateTotalSpentByCategory;
