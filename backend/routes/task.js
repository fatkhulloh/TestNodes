const express = require("express");
const router = express.Router();
const db = require("../db");

/**
 * GET all tasks
 */
router.get("/", (req, res) => {
  db.query("SELECT * FROM tasks", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

/**
 * GET task by id
 */
router.get("/:id", (req, res) => {
  db.query(
    "SELECT * FROM tasks WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result[0]);
    }
  );
});

/**
 * CREATE task
 */
router.post("/", (req, res) => {
  const { title, description, status, due_date } = req.body;

  const sql =
    "INSERT INTO tasks (title, description, status, due_date) VALUES (?,?,?,?)";

  db.query(sql, [title, description, status, due_date], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Task created", id: result.insertId });
  });
});

/**
 * UPDATE task
 */
router.put("/:id", (req, res) => {
  const { title, description, status, due_date } = req.body;

  const sql =
    "UPDATE tasks SET title=?, description=?, status=?, due_date=? WHERE id=?";

  db.query(
    sql,
    [title, description, status, due_date, req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Task updated" });
    }
  );
});

/**
 * DELETE task
 */
router.delete("/:id", (req, res) => {
  db.query(
    "DELETE FROM tasks WHERE id=?",
    [req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Task deleted" });
    }
  );
});

module.exports = router;
