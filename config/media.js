var db = require('./dbschema');

exports.show = function mediaShow(req, res, next) {
	
	db.mediaModel.findById(
            req.params.uid,
            function(err, media) {
            if (!err){ 
               //console.log(req.camera);
               req.media = media;
			   next();
            }
            else { 
            
            	req.err=err;
            	next();
           }

            }
    );
	

}


exports.search = function mediaSearch(req, res, next) {
	
	
	var search_text = new RegExp(req.params.search, 'i');
	
	db.mediaModel.find(
            { $or: [ { Title: search_text }, { Artist: search_text } ] },
            function(err, media) {
            if (!err){ 
               //console.log(req.camera);
               req.media = media;
               console.log("req.params.search: "+req.params.search);
			   next();
            }
            else { 
            
            	req.err=err;
            	
            	next();
           }

            }
    );
	

}