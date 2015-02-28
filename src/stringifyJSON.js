// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(input) {
  var result = '';
  // handle non-objects
  
  if (input === null) {
    result += 'null';
    return result;
  }

  if (typeof input !== 'object') {
    if (typeof input === 'string') {
      result += '"' + input + '"';
    } else {
      result += input;
    }
    return result;
  }
  
  if (Array.isArray(input)) {
    var arrayResult = "[";

    for (var i = 0; i < input.length; i++) {
      arrayResult += stringifyJSON(input[i]);
      if (i !== input.length - 1) {
        arrayResult += ",";
      }
    }
    
    result += arrayResult + "]";
    // use recursion here
  }


  return result;
};

// typeof null returns object



/*
if input is array, 
*/