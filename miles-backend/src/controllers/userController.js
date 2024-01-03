const userService = require('../services/userService');

async function createUser(req, res) {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getUserById(req, res) {
  try {
    const userId = req.params.userId;
    const user = await userService.getUserById(userId);

    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateUser(req, res) {
  try {
    const userId = req.params.userId;
    const updatedUser = await userService.updateUser(userId, req.body);

    if (!updatedUser) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(200).json(updatedUser);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteUser(req, res) {
  try {
    const userId = req.params.userId;
    const deletedUser = await userService.deleteUser(userId);

    if (!deletedUser) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(200).json(deletedUser);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
