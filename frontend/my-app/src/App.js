import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    category: "",
    transaction_date: "",
    payment_method: "",
    user_id: 1,
  });

  const apiUrl = "http://localhost:3010/api/transactions";

  // Fetch all transactions for a user
  const fetchTransactions = async () => {
    try {
      const userId = 1; // Replace with dynamic user ID if needed
      const response = await axios.get(`${apiUrl}/getAllByUserID/${userId}`);
      setTransactions(response.data);
    } catch (error) {
      console.error("Error fetching transactions:", error.message);
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Add a new transaction
  const addTransaction = async (e) => {
    e.preventDefault();
    try {
      await axios.post(apiUrl, formData);
      fetchTransactions(); // Refresh the transaction list
      setFormData({
        description: "",
        amount: "",
        category: "",
        transaction_date: "",
        payment_method: "",
        user_id: 1,
      });
    } catch (error) {
      console.error("Error adding transaction:", error.message);
    }
  };

  // Delete a transaction
  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      fetchTransactions(); // Refresh the transaction list
    } catch (error) {
      console.error("Error deleting transaction:", error.message);
    }
  };

  // Load transactions on component mount
  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="App">
      <h1>Transaction Manager</h1>
      <form onSubmit={addTransaction}>
        <input
          type="text"
          name="description"
          value={formData.description}
          placeholder="Description"
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="amount"
          value={formData.amount}
          placeholder="Amount"
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          placeholder="Category"
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="transaction_date"
          value={formData.transaction_date}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="payment_method"
          value={formData.payment_method}
          placeholder="Payment Method"
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Transaction</button>
      </form>

      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description} - ${transaction.amount}
            <button onClick={() => deleteTransaction(transaction.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
