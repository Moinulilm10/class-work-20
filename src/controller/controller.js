const User = require("../model/User");

exports.createUser = async (ctx) => {
  const { name, email, password } = ctx.request.body;

  if (!name || !email || !password) {
    ctx.status = 400;
    ctx.body = { error: "Missing required fields" };
    return;
  }

  try {
    const newUser = await User.createUser({ name, email, password });
    console.log("User added successfully");
    ctx.status = 201;
    ctx.body = { message: "User created successfully", newUser };
  } catch (error) {
    console.error("Failed to add user:", error);
    ctx.status = 500;
    ctx.body = { error: "Failed to add user" };
  }
};
