var background = {

  userInput1: '',

  init: function(){
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
      if(request.fn in background){
        background[request.fn](request,sender,sendResponse);
      }
    });
  },
  setTemplate: function(request, sender, sendResponse){
    this.userInput1 = request.userInput1;
  },
  getTemplate: function(request, sender, sendResponse){
    sendResponse(this.userInput1);
  }
};

background.init();
