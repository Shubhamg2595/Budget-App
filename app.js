var budgetController = (function() {
  var x = 23;
  var add = function(a) {
    return x + a;
  };

  return {
    publicTest: function(b) {
      return add(b);
    }
  };
})();
/*
in above lines of code, we have actually created a closure where variable x and method add are private ones .

These private variables and methods cannot be  accessed by outside , however the public function publicTest can use these methods and  provide output as needed.
*/

var UIController = (function() {
  //some code
})();

var controller = (function(budgetCtrl, UICtrl) {
  var z = budgetCtrl.publicTest(5);

  return {
    anotherPublic: function() {
      console.log(z);
    }
  };
})(budgetController, UIController);
