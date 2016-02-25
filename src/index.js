const koa = require('koa');
const router = require('koa-router');
const app = koa();
const publicRouter = new router();

function *reqlogger(next){
  console.log('%s - %s %s',new Date().toISOString(), this.req.method, this.req.url);
  yield next;
}

app.use(reqlogger);

publicRouter.get('/auth/github',function *(){

});

app.listen(3000, ()=> { 
	console.log('app is listening on http://localhost:3000/')
});