let button = document.querySelector("button");
button.addEventListener('click', function(){
  var input1 = document.getElementById("userInput1").value
  var input2 = document.getElementById("userInput2").value
  var input3 = document.getElementById("userInput3").value
  var input4 = document.getElementById("userInput4").value
  chrome.tabs.create({
    url: 'https://calendar.google.com/calendar',
    active: true
  });
});
