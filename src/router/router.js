const Router = require("koa-router");
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");

const app = new Koa();
app.use(bodyParser());
const router = new Router();

router.post("/", createUser);
router.get("/:id", getUserById);
router.get("/phone/:phone", getUserByPhone);
router.put("/", updateUser);
router.delete("/:id", deleteUser);
