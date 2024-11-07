const express = require('express');
const Employee = require('../models/Employee');

const router = express.Router();

router.post('/add', async (req, res) => {
  const { image, name, email, mobile, designation } = req.body;
  try {
    const newEmployee = new Employee({
      image,
      name,
      email,
      mobile,
      designation,
    });
    await newEmployee.save();
    res.json(newEmployee);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
