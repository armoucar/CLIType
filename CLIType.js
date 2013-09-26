var CLIType = (function(window, undefined) {
  "use strict";

  var doc = window.document;

  var _transformToSpans = function(label) {
    var letters = label.split(""),
        htmlLetters = [];
    var i, l;
    for (i = 0, l = letters.length; i < l; i ++) {
      var letter = doc.createTextNode(letters[i]),
          htmlLetter = doc.createElement("span");

      htmlLetter.className += "untyped"
      htmlLetter.appendChild(letter);
      htmlLetters.push(htmlLetter);
    }

    return htmlLetters;
  };

  var _showTypingEffect = function(place) {
    var letters = place.children;
    var i, l;
    for (i = 0, l = letters.length; i < l; i ++) {
      var v = letters[i];
    }
  };

  var ColdTime = function(sel, htmlLetter, timeoutToShow) {
    this.sel = sel;
    this.htmlLetter = htmlLetter;
    this.timeoutToShow = timeoutToShow;
  };

  ColdTime.prototype.func = function() {
    var place = doc.querySelector(this.sel);
    place.appendChild(this.htmlLetter);
  };

  var _applyCLIType = function(sel) {
    var place = document.querySelector(sel);
    var htmlLetters = _transformToSpans(place.innerHTML);

    place.innerHTML = "";

    var i, l, functions = [];
    for (i = 0, l = htmlLetters.length; i < l; i++) {

      var functionColded = new ColdTime(sel, htmlLetters[i], 150);
      functions.push(functionColded);
    }

    var timeoutSum = 0;
    for (i = 0, l = functions.length; i < l; i ++) {
      var v = functions[i];
      timeoutSum += v.timeoutToShow;
      setTimeout((function (v) {
        return function() { v.func.apply(v); };
      })(v), timeoutSum);
    }
  };

  return {
    go: _applyCLIType,

    // PRIVATE
    transformToSpans: _transformToSpans
  }
})(window);
