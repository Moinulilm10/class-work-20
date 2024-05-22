const { dynamodbClient } = require("../config/aws");

const TABLE_NAME = "users";
const GSI_EMAIL = "email-index";
const GSI_PHONE = "phone-index";

const User = {
  async createUser({ name, email, phone, password }) {
    const id = Date.now().toString();
    const params = {
      TableName: TABLE_NAME,
      Item: {
        id,
        name,
        email,
        phone,
        password,
      },
    };
    try {
      await dynamodbClient.put(params).promise();
      return { id, name, email, phone, password };
    } catch (error) {
      console.error("Failed to add user:", error);
      throw new Error("Error adding user");
    }
  },

  async updateUser({ id, name, email, password }) {
    const params = {
      TableName: TABLE_NAME,
      Key: { id },
      UpdateExpression:
        "set #name = :name, email = :email, password = :password",
      ExpressionAttributeNames: {
        "#name": "name",
      },
      ExpressionAttributeValues: {
        ":name": name,
        ":email": email,
        ":password": password,
      },
      ReturnValues: "UPDATED_NEW",
    };
    try {
      const data = await dynamodbClient.update(params).promise();
      return data.Attributes;
    } catch (error) {
      console.error("Error updating user:", error);
      throw new Error("Error updating user");
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

  async getByEmail(email) {
    const params = {
      TableName: TABLE_NAME,
      IndexName: GSI_EMAIL,
      KeyConditionExpression: "email = :email",
      ExpressionAttributeValues: {
        ":email": email,
      },
    };
    try {
      const data = await dynamodbClient.query(params).promise();
      return data.Items;
    } catch (error) {
      console.error("Failed retrieving user by email:", error);
      throw new Error("Failed retrieving user by email");
    }
  },
};

module.exports = User;
