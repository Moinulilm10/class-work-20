const Koa = require("koa");
const dotenv = require("dotenv");
const bodyParser = require("koa-bodyparser");
const Router = require("koa-router");

const router = new Router();
dotenv.config();
const app = new Koa();
const PORT = process.env.PORT;

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (ctx) => {
  ctx.body = "Hello User";
});

app.listen(3000, () => {
  console.log(`Server is running ${PORT}`);
});
