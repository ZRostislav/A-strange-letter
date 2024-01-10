var TimerHighlighter = /** @class */ (function () {
  function TimerHighlighter(elementId) {
    this.element = document.getElementById(elementId);
    this.timerId = null;
    this.setupListeners();
  }

  TimerHighlighter.prototype.setupListeners = function () {
    var _this = this;
    document.addEventListener("keydown", function () {
      return _this.resetTimer();
    });

    // Add a listener for a custom event named "stopTimer"
    document.addEventListener("stopTimer", function () {
      return _this.stopTimer();
    });

    this.startTimer();
  };

  TimerHighlighter.prototype.startTimer = function () {
    var _this = this;
    this.timerId = setTimeout(function () {
      _this.element.style.opacity = "1"; // Set the desired opacity level (e.g., 0.5)
    }, 5000);
  };

  TimerHighlighter.prototype.resetTimer = function () {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
    this.element.style.opacity = "0"; // Set full opacity
    this.startTimer();
  };

  // New method to stop the timer
  TimerHighlighter.prototype.stopTimer = function () {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.element.style.opacity = "0"; // Set full opacity
      console.log("Timer stopped");
    }
  };

  return TimerHighlighter;
})();

// Create an instance of the class with the specified element ID
var timerHighlighter = new TimerHighlighter("whitespaceID");
