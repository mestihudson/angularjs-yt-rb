angular.module("listaTelefonica").filter("ellipsis", function() {
  return function(input, size) {
    if(input.length <= size + 3) return input;
    return input.substring(0, size || 2) +  "...";
  };
});
