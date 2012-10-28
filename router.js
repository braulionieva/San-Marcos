function route(handle,pathname,res,postData){
console.log("A punto de rutear una peticion para"+pathname);
if (typeof handle[pathname]==='function') {
	handle[pathname](res,postData);
}else{
   console.log("No se ha encontrado manipulador para " + pathname);
   res.writeHead(404,{"Content-Type": "text/html"});
   res.write("404 No encontrado");
   res.end();
  }
}
exports.route=route;