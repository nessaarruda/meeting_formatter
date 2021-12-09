document.getElementById('fillForm').addEventListener('click', function(){
  var input1 = document.getElementById("userInput1").value
  var input2 = document.getElementById("userInput2").value
  var input3 = document.getElementById("userInput3").value
  var input4 = document.getElementById("userInput4").value
  chrome.storage.sync.set({input1: input1}, function() {
  ;
});
  chrome.storage.sync.set({input2: input2}, function() {
  ;
});
  chrome.storage.sync.set({input3: input3}, function() {
  ;
});
  chrome.storage.sync.set({input4: input4}, function() {
  ;
});
  chrome.tabs.executeScript({
    file: "injector.js"
  });
});
