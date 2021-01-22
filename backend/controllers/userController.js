import e from 'express';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// @desc    Authenticate User & Get token
// @route   POST/api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // @desc    Find User by Email
  const user = await User.findOne({ email });

  // @desc     User Authentication
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null,
    });
  } else {
    res.status(401);
    throw new Error('Invalid Email or Password 😔');
  }
});

export { authUser };
