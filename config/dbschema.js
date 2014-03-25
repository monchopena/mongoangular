var mongoose = require('mongoose');

exports.mongoose = mongoose;


// Database connect
var uristring = 
  process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 
  'mongodb://localhost/mediatests';

var mongoOptions = { db: { safe: true }};

mongoose.connect(uristring, mongoOptions, function (err, res) {
  if (err) { 
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Successfully connected to: ' + uristring);
  }
});


var Schema = mongoose.Schema, 
	ObjectId = Schema.ObjectId;

//Scheme media


/*

{
"Type" : "CD",
"Artist" : "Nirvana",
"Title" : "Nevermind",
"Tracklist" : [
{
"Track" : "1",
"Title" : "Smells Like Teen Spirit",
"Length" : "5:02"
},
{
"Track" : "2",
"Title" : "In Bloom",
"Length" : "4:15"
}
]
}
)

*/

var mediaSchema = new Schema(

	{
	Type: { type: String, required: true },
	Artist: String,
	Title: String,
	Tracklist: [
					{
					Track: Number,
					Title : String,
					Lengh: String
					}
	           ]
	
	}

);


var mediaModel = mongoose.model('Media', mediaSchema);
exports.mediaModel = mediaModel;
