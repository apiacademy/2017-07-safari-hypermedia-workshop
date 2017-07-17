/*******************************************************
 * task service implementation
 * json representor (server)
 * Mike Amundsen (@mamund)
 *******************************************************/

// json representor
// strip out action info
module.exports = json;

function json(object) {
  var i, x;
  
  for (var p in object) {
    switch (p) {
    case "actions":
      delete object[p];
      break;
    case "todo":
    default:
      delete object[p].actions;
      if (object[p].data) {
        object[p] = object[p].data;
        delete object[p].data;
        for(i=0,x=object[p].length;i<x;i++) {
          delete object[p][i].completed;
          delete object[p][i].meta;
        } 
      } 
      break;
    }
  }

  return JSON.stringify(object, null, 2);
}

// EOF

