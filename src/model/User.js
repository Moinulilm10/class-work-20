const { dynamodbClient } = require("../config/aws");

const TABLE_NAME = "users";
const GSI_NAME = "email_index";

const User = {
  async createUser({ name, email, password }) {
    const id = Date.now().toString();
    const params = {
      TableName: TABLE_NAME,
      Item: {
        id,
        name,
        email,
        password,
      },
    };
    try {
      await dynamodbClient.put(params).promise();
      return { id, name, email, password };
    } catch (error) {
      console.error("Failed to add user:", error);
      throw new Error("Error adding user");
    }
  },

  async deleteUser(id) {
    const params = {
      TableName: TABLE_NAME,
      Key: { id },
    };
    try {
      await dynamodbClient.delete(params).promise();
      return { message: "User deleted successfully" };
    } catch (error) {
      console.error("Error deleting user:", error);
      throw new Error("Error deleting user");
    }
  },
};

module.exports = User;
