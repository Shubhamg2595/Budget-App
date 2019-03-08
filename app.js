var budgetController = (function() {
  //creating fn cons for expenses

  var Expense = function(id, description, value) {
    (this.id = id), (this.description = description), (this.value = value);
  };

  var Income = function(id, description, value) {
    (this.id = id), (this.description = description), (this.value = value);
  };

  var allExpenses = [];
  var allIncomes = [];
  var totalExpenses = 0;
  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };

  return {
    addItem: function(type, des, val) {
      var newItem, ID;
      ID = 0;

      //create new ID

      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }
      //create new Item
      if (type === "exp") {
        newItem = new Expense(ID, des, val);
      } else if (type === "inc") {
        newItem = new Income(ID, des, val);
      }
      //push the new item to DS
      data.allItems[type].push(newItem);

      //return the new Element
      return newItem;
    },
    testing: function() {
      console.log(data);
    }
  };
})();

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
    var input, newItem;
    // 1. get the filled input data

    input = UICtrl.getinput();

    console.log(input);

    // 2. add the item to budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);

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
