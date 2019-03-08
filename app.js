var budgetController = (function() {})();

var UIController = (function() {
  //some code
})();

var controller = (function(budgetCtrl, UICtrl) {
  var ctrlAddItem = function() {
    // 1. get the filled input data
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
