const User = require('../models/User');

async function createUser(userData) {
  try {
    const newUser = new User(userData);
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    throw error;
  }
}

async function getAllUsers() {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw error;
  }
}

async function getUserById(userId) {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    throw error;
  }
}

async function updateUser(userId, userData) {
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true });
    return updatedUser;
  } catch (error) {
    throw error;
  }
}

async function deleteUser(userId) {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    return deletedUser;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
