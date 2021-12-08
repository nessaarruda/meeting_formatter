let button = document.querySelector("button");
button.addEventListener('click', function(){
  chrome.tabs.create({
    url: 'https://calendar.google.com/calendar',
    active: true
  });
  chrome.tabs.executeScript({
    file: "injector.js"
  });;
});
