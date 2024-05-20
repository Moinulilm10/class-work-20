const { dynamodbClient } = require("../config/aws");

const TABLE_NAME = "users";
// const GSI_NAME = "email_index";

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
};

module.exports = User;
