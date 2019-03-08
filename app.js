var budgetController = (function() {})();

var UIController = (function() {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputButton: ".add__btn"
  };

  return {
    getinput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, //will be either inc(+) or exp(-)
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(".add__value").value
      };
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})();

var controller = (function(budgetCtrl, UICtrl) {
  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();
    document
      .querySelector(DOM.inputButton)
      .addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        // console.log("Enter Key was Pressed");
        ctrlAddItem();
      }
    });
  };

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

  return {
    init: function() {
      console.log("Application has Started");
      setupEventListeners();
    }
  };
})(budgetController, UIController);

controller.init();
