const Koa = require("koa");
const dotenv = require("dotenv");
const bodyParser = require("koa-bodyparser");
const userRouter = require("./router/router");
const Router = require("koa-router");

dotenv.config();

const router = new Router();
const app = new Koa();
const PORT = process.env.PORT;

app.use(bodyParser());

router.use("", userRouter);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
