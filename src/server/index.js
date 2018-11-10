import Koa from 'koa';
import Router from 'koa-router';
import views from 'koa-views';
import serve from 'koa-static';
import mount from 'koa-mount';

const app = new Koa();
const router = new Router();

router.get('/', async ctx => {
    ctx.status = 200;
    await ctx.render('index');
});

app.use(mount('/', serve(`${__dirname}/`)));
app.use(views(__dirname, { extension: 'ejs' }));
app.use(router.routes());

app.listen(3000, '0.0.0.0');