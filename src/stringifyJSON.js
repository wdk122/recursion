// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(input) {
  var result = '';
  
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
    return result;
  } else { // if obj and not array
    var objResult = "{";
    var trailingComma = false;

    for (var j in input) {
      if ((typeof input[j] !== 'function') && (input[j] !== undefined)) {
        trailingComma = true;
        objResult += '"' + j + '":' + stringifyJSON(input[j]) + ",";
      }
    }

    if (trailingComma) {
      objResult = objResult.slice(0, objResult.length-1);
    }

    result += objResult + "}";
    return result;

  }


  return result;
};

// typeof null returns object
