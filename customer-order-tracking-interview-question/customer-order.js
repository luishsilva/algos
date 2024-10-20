const fs = require('fs');

const readCSVFile = () => {
    try {
        const csvData = fs.readFileSync('orders.csv', 'utf8');
        return csvData;
    } catch (error) {
        throw new Error(error.message);
    }
}

const parseCSV = (str) => {
    const lines = str.split('\n');
    
    const values = lines.map((row) => {
        return row.split(','); 
    });
    // Remove CSV file header
    values.shift();

    return values;
}

const orders = parseCSV(readCSVFile());

// Part 1
const totalExpenditureByCustomer = (customerOrders) => {
    // https://coreui.io/blog/how-to-round-a-number-to-two-decimal-places-in-javascript/#:~:text=1.-,Using%20toFixed()%20Method,the%20result%20as%20a%20string.&text=Note%3A%20Since%20toFixed()%20returns,necessary%20for%20further%20numerical%20operations.
    const totalOrderByCustomer = [];
    for (let i = 0; i < customerOrders.length; i++) {
        const foundCustomer =  totalOrderByCustomer.find(customer => customer.customerId === customerOrders[i][1])

        if (foundCustomer) {
            const total = foundCustomer.totalSpent + (customerOrders[i][5] * customerOrders[i][4]);
            foundCustomer.totalSpent = Math.round((total + Number.EPSILON) * 100) / 100;
        } else {
            totalOrderByCustomer.push(
                {
                    customerId: customerOrders[i][1],
                    totalSpent: Math.round((customerOrders[i][5] * customerOrders[i][4] + Number.EPSILON) * 100) / 100
                }
            )
        }
    }
    return totalOrderByCustomer;
}

const topFiveCustomers = (ordersByCustomer) => {
    if (!ordersByCustomer) return;
    ordersByCustomer.sort((orderTotal1, orderTotal2) => orderTotal2.totalSpent - orderTotal1.totalSpent)
    return ordersByCustomer.splice(0,5);
}

const ordersByCustomer = totalExpenditureByCustomer(orders);
topFiveCustomers(ordersByCustomer);

/* Part 2 
    2. Calculate the most popular product** (by number of units sold). Output the `product_id` and the total units sold.
*/
customersHighestNumberOfOrders = (orders) => {
    const customerOrdersAmount = [];
    for (let i = 0; i < orders.length; i++) {
        const foundCustomer = customerOrdersAmount.find(item => item.customerId === orders[i][1]);

        if (foundCustomer) {
            foundCustomer.orderAmount += foundCustomer.orderAmount;
        } else {
            customerOrdersAmount.push({customerId: orders[i][1], orderAmount: 1});
        }
    }
    customerOrdersAmount.sort((order, item) => item.orderAmount - order.orderAmount );
    const maxAmount = customerOrdersAmount[0].orderAmount;

    return customerOrdersAmount.filter(order => order.orderAmount === maxAmount);
}

customersHighestNumberOfOrders(orders);

/* Part 2 
    2. Calculate the most popular product** (by number of units sold). Output the `product_id` and the total units sold.
*/

const mostPopularProduct = (orders) => {
    const popularProduct = [];
    for ( let i = 0; i < orders.length; i++) {
        foundProduct = popularProduct.find(product => product.productId === orders[i][3]);
        let units = parseFloat(orders[i][4]);
        
        if (foundProduct) {
            foundProduct.totalUnits += units;
        } else {
            popularProduct.push({productId: orders[i][3], totalUnits: units});
        }
    }
    return popularProduct
        .sort((product1, product2) => product2.totalUnits - product1.totalUnits)
        .filter(product => product.totalUnits === popularProduct[0].totalUnits);
}

mostPopularProduct(orders);

/* 
    Part 3: Revenue Insights

    1. **Calculate the total revenue generated for each month**. Your output should display the `year-month` (e.g., `2023-07`) 
    and the corresponding `total_revenue`. 
*/

const totalRevenueMonth = (orders) => {
    const ordersByDate = [];
     for (let i = 0; i < orders.length; i++) {
        const date = new Date(orders[i][2]);
        let monthTwoDigits = String(date.getMonth() +1).padStart(2, '0');
        let yearMonth = date.getFullYear()+'-'+monthTwoDigits;
        let orderTotal = (orders[i][5] * orders[i][4]);
        total = Math.round((orderTotal + Number.EPSILON) * 100) / 100;
        ordersByDate.push(
            {
                yearMonth: yearMonth, 
                total: total
            }
        );
     }
     
    // https://dev.to/marinamosti/removing-duplicates-in-an-array-of-objects-in-js-with-sets-3fep
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
    const orderWithUniqueDates = [...new Map(ordersByDate.map(item => [item.yearMonth, item])).values()];

    const totalMonthRevenue = [];
    for (order of orderWithUniqueDates) {
        let monthYearTotal = ordersByDate
        .filter((item) => item.yearMonth === order.yearMonth)
        .reduce((accumulator, value) => Math.round(((accumulator + value.total) + Number.EPSILON) * 100) / 100, 0)

        totalMonthRevenue.push({yearMonth: order.yearMonth, totalRevenue: monthYearTotal})
    }

    return totalMonthRevenue.sort((month1, month2) => Number(month2.yearMonth.replace("-", "")) - Number(month1.yearMonth.replace("-", "")));
    

}

totalRevenueMonth(orders);

/* 
    2. **Identify any customers who haven't placed an order in the last 6 months** (based on the most recent order date in the dataset).
    List their `customer_id` and the date of their last order. 
*/

const inactiveCustomers = (orders) => {
    const dateFinal = getMostCurrentOrderDate(orders);

    const customers = [];
    for (let i = 0; i < orders.length; i++) {
        const dateInitial = new Date(orders[i][2]);
        const differenceInMonths = calculateDateMonthDifference(dateInitial, dateFinal);
        if (differenceInMonths > 6) {
            customers.push({customerId: orders[i][1], yearMonth: orders[i][2]});
        }
    }

    return customers;
}

// https://www.30secondsofcode.org/js/s/date-difference/
const calculateDateMonthDifference = (dateInitial, dateFinal) => {
     const monthDifference = Math.max(
        (dateFinal.getFullYear() - dateInitial.getFullYear()) * 12 + dateFinal.getMonth() - dateInitial.getMonth(), 0
    );
    return monthDifference;
}

const getMostCurrentOrderDate = (orders) => {
    const ordersDate = [];
     for (let i = 0; i < orders.length; i++) {
        ordersDate.push(new Date(orders[i][2]));
     }
     const maxDate = ordersDate.sort((date1, date2) => date2 - date1);
     return maxDate[0];
}

inactiveCustomers(orders);