const prisma = require("../utils/prisma");
const bycrpt = require("bcryptjs");

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
