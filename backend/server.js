const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// In-memory storage
let camels = [
  { id: 1, name: 'Ali', humpCount: 2 },
  { id: 2, name: 'Sahara', humpCount: 1 },
  { id: 3, name: 'Desert King', humpCount: 2 },
  { id: 4, name: 'Mirage', humpCount: 1 },
  { id: 5, name: 'Sultan', humpCount: 2 }
];

let nextId = 6;

// CREATE
app.post("/api/camels", (req, res) => {
  const camel = {
    id: nextId++,
    name: req.body.name,
    humpCount: req.body.humpCount,
  };

  camels.push(camel);
  res.status(201).json(camel);
});

// READ ALL
app.get("/api/camels", (req, res) => {
  res.json(camels);
});

// READ ONE
app.get("/api/camels/:id", (req, res) => {
  const id = Number(req.params.id);
  const camel = camels.find((c) => c.id === id);

  if (!camel) {
    return res.status(404).json({ message: "Camel not found" });
  }

  res.json(camel);
});

// UPDATE
app.put("/api/camels/:id", (req, res) => {
  const id = Number(req.params.id);
  const camel = camels.find((c) => c.id === id);

  if (!camel) {
    return res.status(404).json({ message: "Camel not found" });
  }

  camel.name = req.body.name ?? camel.name;
  camel.humpCount = req.body.humpCount ?? camel.humpCount;

  res.json(camel);
});

// DELETE (optional but useful)
app.delete("/api/camels/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = camels.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Camel not found" });
  }

  camels.splice(index, 1);
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Camel backend running on http://localhost:${PORT}`);
});
