var budgetController = (function() {})();

var UIController = (function() {
  return {
    getinput: function() {
      return {
        type: document.querySelector(".add__type").value, //will be either inc(+) or exp(-)
        description: document.querySelector(".add__description").value,
        value: document.querySelector(".add__value").value
      };
    }
  };
})();

var controller = (function(budgetCtrl, UICtrl) {
  var ctrlAddItem = function() {
    // 1. get the filled input data
    var input = UICtrl.getinput();
    console.log(input);

    // 2. add the item to budget controller
    // 3. add the item to UI
    // 5. calculate the budget
    // 4. display the budget on UI
    console.log("aDDiTEM FUNC CALLED");
  };

  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      // console.log("Enter Key was Pressed");
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
