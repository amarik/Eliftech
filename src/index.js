const koa = require('koa');
const app = koa();

app.use(function *(){
	this.body = 'List of companies';
});

function *reqlogger(next){
  console.log('%s - %s %s',new Date().toISOString(), this.req.method, this.req.url);
  yield next;
}


app.listen(3000, ()=> { 
	console.log('app is listening on http://localhost:3000/')
});