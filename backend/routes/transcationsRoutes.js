const express = require("express");
const router = express.Router();
const db = require("../db/db"); 


router.get("/getAllByUserID/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const query = "SELECT * FROM Transactions WHERE user_id = ?";
    db.query(query, [userId], (err, results) => {
      if (err) {
        return res.status(500).send("Error retrieving transactions: " + err.message);
      }

      if (results.length === 0) {
        return res.status(404).send("No transactions found for the user.");
      }

      res.status(200).json(results);
    });
  } catch (err) {
    res.status(500).send("Server error: " + err.message);
  }
});

// Add a new transaction
router.post("/", async (req, res) => {
  console.log("Incoming request data:", req.body);
  const { description, amount, category, transaction_date, payment_method, user_id } = req.body;

  try {
    const query = `
      INSERT INTO Transactions (description, amount, category, transaction_date, payment_method, user_id)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    db.query(query, [description, amount, category, transaction_date, payment_method, user_id], (err, result) => {
      if (err) {
        console.error("Error adding transaction:", err.message);
        return res.status(500).send("Error adding transaction: " + err.message);
      }
      res.status(201).send("Transaction added successfully.");
    });
  } catch (err) {
    console.error("Server error:", err.message);
    res.status(500).send("Server error: " + err.message);
  }
});


// Update a transaction by ID
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { description, amount, category, transaction_date, payment_method } = req.body;

  try {
    const query = `
      UPDATE Transactions 
      SET description = ?, amount = ?, category = ?, transaction_date = ?, payment_method = ? 
      WHERE id = ?
    `;
    db.query(query, [description, amount, category, transaction_date, payment_method, id], (err, result) => {
      if (err) {
        return res.status(500).send("Error updating transaction: " + err.message);
      }

      if (result.affectedRows === 0) {
        return res.status(404).send("Transaction not found.");
      }

      res.status(200).send("Transaction updated successfully.");
    });
  } catch (err) {
    res.status(500).send("Server error: " + err.message);
  }
});

// Delete a transaction by ID
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const query = "DELETE FROM Transactions WHERE id = ?";
    db.query(query, [id], (err, result) => {
      if (err) {
        return res.status(500).send("Error deleting transaction: " + err.message);
      }

      if (result.affectedRows === 0) {
        return res.status(404).send("Transaction not found.");
      }

      res.status(200).send("Transaction deleted successfully.");
    });
  } catch (err) {
    res.status(500).send("Server error: " + err.message);
  }
});

module.exports = router;
