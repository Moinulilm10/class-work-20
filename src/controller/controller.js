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

exports.updateUser = async (ctx) => {
  const { id } = ctx.params;
  const { name, email, password } = ctx.request.body;

  try {
    const updatedData = await User.updateUser({ id, name, email, password });
    console.log("User updated successfully");
    ctx.status = 200;
    ctx.body = { message: "User updated successfully", updatedData };
  } catch (error) {
    console.error("Failed to update user:", error);
    ctx.status = 500;
    ctx.body = { error: "Failed to update user" };
  }
};

exports.deleteUser = async (ctx) => {
  const { id } = ctx.params;

  try {
    await User.deleteUser(id);
    console.log("User deleted successfully");
    ctx.status = 200;
    ctx.body = { message: "User deleted successfully" };
  } catch (error) {
    console.error("Failed to delete user:", error);
    ctx.status = 500;
    ctx.body = { error: "Failed to delete user" };
  }
};
