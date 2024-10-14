const customerOrder = () => {
    // customer-order-tracking-interview-question
    // /Users/luishsilva/Sites/devslopes/algos/customer-order-tracking-interview-question/orders.csv

    // 1 - Pase data into array
    // 2- loop over the date and separate each element 
}

const testCSV = `order_id,customer_id,order_date,product_id,quantity,price_per_unit
fe7936d1-e1d7-4dbd-8af7-f611e878a48c,d89361e1-c0d7-444c-af5e-062f5b7df5d8,2022-10-15,0b22e4da-115f-44ed-9941-47862ecbc027,2,7.38
fe7936d1-e1d7-4dbd-8af7-f611e878a123,d89361e1-c0d7-444c-af5e-062f5b7df5d8,2022-10-15,0b22e4da-115f-44ed-9941-47862ecbc027,2,1.00
a429769a-9f38-43ec-af7b-0fb3a61e4138,c003a139-5af1-4bea-8c79-0ba014056956,2022-12-02,80045c84-3e6d-4d8a-b2b1-ea36cbcc01ec,4,18.26
7b2a8ddc-c8a6-4702-99db-712c85887a40,e9e12fd1-2ad1-4ba9-93fd-06c989425ff2,2023-05-12,232a1e81-1e73-435e-ba84-04ca8f624767,9,13.26
7fe096fa-9a11-476b-b6ec-a5ae18b3a7a5,83d50b28-1230-4cab-8da7-b72c17b2baed,2023-12-19,37ab904d-b639-4db5-ab4a-68612c7ce808,1,13.9
4546ae35-5a38-4aef-91b1-7d4ab5b946c3,3626c0da-1f8c-4cc5-b5be-dea6f3b20bec,2023-09-24,0be947da-a513-42ad-a35d-1ffe9b13a61d,10,7.52
ddf33d61-ef09-48e3-99e6-26bf53ccdb15,2411c86c-250d-41f7-9549-cf321c3d1dc7,2024-09-05,a38755d6-b717-49e4-a313-aff8fa354043,9,44.85
cc539661-e4e8-4b2d-ada3-00de258f8d17,INVALID_ID,2024-02-11,1729ef73-5af8-4750-a118-076c34fd2a07,5,81.9
706af248-493e-43d3-aa32-e2b6d0f11126,da8c66d3-b7f8-428d-aecc-e84aa33187d4,2024-02-14,3127f2f1-be1c-4814-ba00-4952214d8787,6,14.71
706af248-493e-43d3-aa32-e2b6d0f11127,da8c66d3-b7f8-428d-aecc-e84aa33187d4,2024-02-14,3127f2f1-be1c-4814-ba00-4952214d8787,6,10.00
8620602c-745b-4a18-b62e-efe48d6c94cf,6c5024ac-a252-4994-a6cc-12467b5cafe5,2024-07-17,5e4e1eee-f8f5-453b-901b-6ee6beec4bac,6,85.51`

const parseCSV = (str) => {
    const lines = str.split('\n');
    
    const values = lines.map((row) => {
        return row.split(','); 
    });

    // Remove CSV file header
    values.shift();

    return values;
}

const orders = parseCSV(testCSV);

// Part 1
const totalExpenditureByCustomer = (customerOrders) => {
    // https://coreui.io/blog/how-to-round-a-number-to-two-decimal-places-in-javascript/#:~:text=1.-,Using%20toFixed()%20Method,the%20result%20as%20a%20string.&text=Note%3A%20Since%20toFixed()%20returns,necessary%20for%20further%20numerical%20operations.
    const orders = [];
    totalByCustomer = [];
    for (let i = 0; i < customerOrders.length; i++) {
        if (orders.includes(customerOrders[i][1])) {
            const number = totalByCustomer[0].total_spent + (customerOrders[i][5] * customerOrders[i][4]);
            const rounded = Math.round((number + Number.EPSILON) * 100) / 100;
            totalByCustomer[0].total_spent = rounded;
        } else {
            totalByCustomer.push(
                {
                    customer_id: customerOrders[i][1],
                    total_spent: Math.round((customerOrders[i][5] * customerOrders[i][4] + Number.EPSILON) * 100) / 100
                }
            )
        }
        orders.push(customerOrders[i][1]);
    }
    return totalByCustomer;
}

const topFiveCustomers = (ordersByCustomer) => {
    ordersByCustomer.sort((orderTotal1, orderTotal2) => orderTotal2.total_spent - orderTotal1.total_spent)
    return ordersByCustomer.splice(0,5);
}

const ordersByCustomer = totalExpenditureByCustomer(orders);
topFiveCustomers(ordersByCustomer)

/* Part 2 
    1. Determine the customer who placed the highest number of orders**. If there is a tie, list all tied customers. 
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