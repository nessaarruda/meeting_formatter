document.getElementById('fillForm').addEventListener('click', function(){
  var input1 = document.getElementById("userInput1").value || 'Objective(s)'
  var input2 = document.getElementById("userInput2").value || 'Meeting Materials(s)'
  var input3 = document.getElementById("userInput3").value || 'Subject Matter Expert(s)'
  var input4 = document.getElementById("userInput4").value || 'Goal(s)/Next Steps(s)'
  chrome.storage.local.set({input1: input1}, function() {
  ;
});
  chrome.storage.local.set({input2: input2}, function() {
  ;
});
  chrome.storage.local.set({input3: input3}, function() {
  ;
});
  chrome.storage.local.set({input4: input4}, function() {
  ;
});
  chrome.tabs.executeScript({
    file: "injector.js"
  });
});


document.getElementById('saveTemplate').addEventListener('click', function(){
  var name = document.getElementById("templateName").value
  var input1 = document.getElementById("userInput1").value
  var input2 = document.getElementById("userInput2").value
  var input3 = document.getElementById("userInput3").value
  var input4 = document.getElementById("userInput4").value

  var template =
  {
  name: name,
  line1: input1,
  line2: input2,
  line3: input3,
  line4: input4
}

  localStorage.setItem("template", JSON.stringify(template));
  var jsonString = localStorage.getItem("template");
  var retrievedObject = JSON.parse(jsonString);
  var element = document.getElementById("box");
  chrome.storage.local.set({input1: input1}, function() {
  ;
});
  chrome.storage.local.set({input2: input2}, function() {
  ;
});
  chrome.storage.local.set({input3: input3}, function() {
  ;
});
  chrome.storage.local.set({input4: input4}, function() {
  ;
});
  let btn = document.createElement("button");
  btn.innerHTML = retrievedObject.name;
  btn.type = "submit";
  btn.id = "insertSaved";
  btn.name = "saveBtn";
  element.appendChild(btn);
  document.getElementById('insertSaved').addEventListener('click', function(){
    chrome.tabs.executeScript({
      file: "injector.js"
    });
  })
});
