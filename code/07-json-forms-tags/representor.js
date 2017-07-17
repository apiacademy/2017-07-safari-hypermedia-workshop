/*******************************************************
 * task service implementation
 * representation router (server)
 * Mike Amundsen (@mamund)
 *******************************************************/

// handles internal representation routing (based on conneg)

// load representors
var json = require('./representors/json.js');
var repjson = require('./representors/repjson.js');
var jsonurls = require('./representors/jsonurls.js');
var jsonforms = require('./representors/jsonforms.js');

module.exports = processDoc;

function processDoc(object, mimeType, root) {
  var doc;

  // clueless? assume JSON
  if (!mimeType) {
    mimeType = "application/vnd.collection+json";
  }

  // dispatch to requested representor
  switch (mimeType.toLowerCase()) {
    case "application/json":
      doc = json(object, root);
      break;
    case "application/representor+json":
      doc = repjson(object, root);
      break;
    case "application/json;profile=urls":
      doc = jsonurls(object, root);
      break;
    case "application/json;profile=forms":
      doc = jsonforms(object, root);
      break;      
    default:
      doc = jsonforms(object, root);
      break;
  }

  return doc;
}

// EOF

