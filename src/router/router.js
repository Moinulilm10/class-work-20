const Router = require("koa-router");
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const { createUser, deleteUser } = require("../controller/controller");

const app = new Koa();
app.use(bodyParser());
const router = new Router();

router.post("/user", createUser);
router.delete("/user/:id", deleteUser);

module.exports = router.routes();
