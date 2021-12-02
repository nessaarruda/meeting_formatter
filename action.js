console.log('hey');
document.getElementById('fillForm').addEventListener('click', function(){
  chrome.tabs.executeScript({
    file: "injector.js"
  });
});
