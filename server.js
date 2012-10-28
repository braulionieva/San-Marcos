var http=require("http");
var url=require("url");
function iniciar(route,handle){
function onRequest(req,res){
var dataPosteada="";	
var pathname=url.parse(req.url).pathname;
console.log("Peticion para" + pathname+"recibida.");
req.setEncoding("utf8");
req.addListener("data",function(trozoPosteado){
dataPosteada+= trozoPosteado;
console.log("Recibido trozo POST '" + trozoPosteado + "'.");	
});

req.addListener("end",function(){
	route(handle,pathname,res,dataPosteada);
});
}
http.createServer(onRequest).listen(8888);
console.log("Servidor Iniciado");
}
exports.iniciar=iniciar;