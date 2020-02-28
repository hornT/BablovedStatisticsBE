const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const config = require('./config');
const db = require('./db');


const router = new Router()

router.get('/product', async (ctx, next) => {
    //ctx.body = await product.getAll()
    ctx.body = { id: 123 };
});

app.use(router.routes());
app.listen(config.PORT);