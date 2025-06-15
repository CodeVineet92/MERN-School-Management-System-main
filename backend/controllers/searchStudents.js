// Controller: searchStudents.js
const searchStudents = async (req, res) => {
  const { query } = req.query;
  try {
    const students = await Student.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { email: { $regex: query, $options: 'i' } },
        { className: { $regex: query, $options: 'i' } }
      ]
    });
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
