// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var haystack, foo;

  arguments.length > 1 ? 
    haystack = arguments[1] :
    haystack = document.body.childNodes;
  
  arguments.length > 2 ? 
    foo = arguments[2] :
    foo = [];


  if (haystack === document.body.childNodes) {
    if (_.contains(document.body.classList, className)) {
      foo.push(document.body);
    }
  }
  // search haystack for elms that have className
  _.each(haystack, function(elm) {
    // if elm.classlist contains className
    if (_.contains(elm.classList, className)) {
      foo.push(elm);
    }
    // for each child node, search the node's children
    if (elm.childNodes.length) {
      getElementsByClassName(className, elm.childNodes, foo);
    }
  });
  return foo;
};


// You should use document.body, element.childNodes, and element.classList
// haystack ==> array of elms
// document.body.childNodes ==> array of elms
// document.body.childNodes[1] ==> an element
// document.body.childNodes[1].classlist ==> array of classes of the element
// document.body.childNodes[1].childNodes ==> array of grandchildren nodes 
// 