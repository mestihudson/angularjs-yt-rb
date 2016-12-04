angular.module("listaTelefonica").directive("uiAlert", function() {
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
