var console = chrome.extension.getBackgroundPage().console;
var app = {
  init: function() {

    var userInput1 = document.getElementById("userInput1");
    var saveTemplate = document.getElementById("saveTemplate");

    chrome.runtime.sendMessage({fn: "getTemplate"}, function(response){
      userInput1.value = response;
    });
    saveTemplate.addEventListener("click", function(){
      chrome.runtime.sendMessage({fn: "setTemplate", userInput1: userInput1.value});
    });
  }
};

document.addEventListener("DOMContentLoaded", function(){
  app.init();
});
