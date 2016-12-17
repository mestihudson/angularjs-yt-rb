angular.module("listaTelefonica").config(function($httpProvider) {
  $httpProvider.interceptors.push("timestamp-interceptor");
  $httpProvider.interceptors.push("error-interceptor");
  $httpProvider.interceptors.push("loading-interceptor");
});
