
# Advanced Customer Order Tracking & Insights

You are provided with a CSV file (`orders.csv`) that contains customer order information. Each row in the CSV represents an order and has the following columns:

- `order_id` (string): Unique identifier for the order
- `customer_id` (string): Unique identifier for the customer
- `order_date` (date in YYYY-MM-DD format): Date when the order was placed
- `product_id` (string): Unique identifier for the product ordered
- `quantity` (integer): Number of units ordered
- `price_per_unit` (float): Price per single unit of the product

Your task is to analyze this data and answer the following questions:

---

## Part 1: Total Expenditure per Customer

1. **Calculate the total expenditure for each customer** across all their orders. Output the result as a list of dictionaries or a DataFrame containing `customer_id` and `total_spent`.

2. **Find the top 5 customers who spent the most** and display their `customer_id` along with their `total_spent`.

---

## Part 2: Order Frequency and Product Popularity

1. **Determine the customer who placed the highest number of orders**. If there is a tie, list all tied customers.

2. **Calculate the most popular product** (by number of units sold). Output the `product_id` and the total units sold.

---

## Part 3: Revenue Insights

1. **Calculate the total revenue generated for each month**. Your output should display the `year-month` (e.g., `2023-07`) and the corresponding `total_revenue`.

2. **Identify any customers who haven't placed an order in the last 6 months** (based on the most recent order date in the dataset). List their `customer_id` and the date of their last order.

---

## Part 4: Advanced Filtering and Querying (Bonus)

1. **Implement a function that allows filtering orders by multiple criteria**. The function should take the following parameters:
   - `start_date`: Only include orders placed after this date (inclusive).
   - `end_date`: Only include orders placed before this date (inclusive).
   - `min_spent`: Only include customers who have spent at least this amount across all their orders.
   - `product_id`: Only include orders for this specific product.

   The function should return a filtered list of orders or customers based on these criteria.

2. **Allow filtering by customers who placed orders in consecutive months**. For example, if a customer placed orders in January, February, and March, they should appear in the results.

---

## Additional Requirements

1. **I want to see your commits.** Please ensure that your commits are broken up and clearly labeled for each of the requirements.

2. Provide a short summary of your approach, including **time and space complexity considerations**.

---

### Input Format
The input will be a CSV file named `orders.csv` with the structure described above.

### Output Format
- For each part, the output should be clearly printed in the console or saved into a file in a well-formatted manner (CSV or JSON).
- For filtering functions, ensure the results are displayed neatly and sorted logically (e.g., by `customer_id`, by `total_spent`, etc.).

---
