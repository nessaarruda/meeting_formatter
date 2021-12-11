var console = chrome.extension.getBackgroundPage().console;
var app = {
  init: function() {

    var userInput1 = document.getElementById("userInput1");
    var userInput2 = document.getElementById("userInput2");
    var userInput3 = document.getElementById("userInput3");
    var userInput4 = document.getElementById("userInput4");
    var saveTemplate = document.getElementById("saveTemplate");

    chrome.runtime.sendMessage({fn: "getTemplate"}, function(response){
      userInput1.value = response[0];
    });
    chrome.runtime.sendMessage({fn: "getTemplate"}, function(response){
      userInput2.value = response[1];
    });
    chrome.runtime.sendMessage({fn: "getTemplate"}, function(response){
      userInput3.value = response[2];
    });
    chrome.runtime.sendMessage({fn: "getTemplate"}, function(response){
      userInput4.value = response[3];
    });
    saveTemplate.addEventListener("click", function(){
      chrome.runtime.sendMessage({fn: "setTemplate", userInput1: userInput1.value, userInput2: userInput2.value, userInput3: userInput3.value, userInput4: userInput4.value});
    });
  }
};

document.addEventListener("DOMContentLoaded", function(){
  app.init();
});
