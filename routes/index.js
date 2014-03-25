
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};


exports.media = function(req, res){
  
  if (req.err) {
	
	res.json(
	
		{"result": [], "session_id": req.sessionID, "error_code": null, "error_message": ""}
	
	);
	  
	} else {
  
  	res.json( {"result": [ req.media ], "session_id": req.sessionID, "error_code": null, "error_message": ""} );
  	
  	}
};


exports.angular = function(req, res){
  res.render('angular');
};