angular.module("listaTelefonica").directive("ui-alert", function() {
  return {
    templateUrl: "view/ui-alert.html",
    replace: true,
    restrict: "AE",
    scope: {
      title: "@"
    },
    transclude: true
  };
});
