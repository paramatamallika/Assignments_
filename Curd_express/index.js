import express from "express";
import fs from "fs/promises";

const app = express();
const PORT = 3000;

app.use(express.json());

const DB_FILE = "./db.json";

// Read data
const readData = async () => {
  const data = await fs.readFile(DB_FILE, "utf-8");
  return JSON.parse(data);
};

// Write data
const writeData = async (data) => {
  await fs.writeFile(DB_FILE, JSON.stringify(data, null, 2));
};

// GET all students
app.get("/students", async (req, res) => {
  const data = await readData();
  res.json(data.students);
});

// POST add student
app.post("/students", async (req, res) => {
  const { name, course, year } = req.body;

  if (!name || !course || !year) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const data = await readData();

  const newStudent = {
    id: Date.now(),
    name,
    course,
    year
  };

  data.students.push(newStudent);
  await writeData(data);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent
  });
});

// PUT update student
app.put("/students", async (req, res) => {
  const { id, name, course, year } = req.body;

  const data = await readData();
  const student = data.students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  if (name) student.name = name;
  if (course) student.course = course;
  if (year) student.year = year;

  await writeData(data);

  res.json({
    message: "Student updated successfully",
    student
  });
});

// DELETE student
app.delete("/students/:id", async (req, res) => {
  const id = Number(req.params.id);

  const data = await readData();
  const index = data.students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  data.students.splice(index, 1);
  await writeData(data);

  res.json({ message: "Student deleted successfully" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
