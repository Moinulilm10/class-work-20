const Koa = require("koa");
const dotenv = require("dotenv");
const bodyParser = require("koa-bodyparser");
const userRouter = require("./router/router");
const Router = require("koa-router");

const router = new Router();
dotenv.config();
const app = new Koa();
const PORT = process.env.PORT;

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

router.use("/user", userRouter);

app.listen(3000, () => {
  console.log(`Server is running ${PORT}`);
});
