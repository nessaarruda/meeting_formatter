var background = {

  templateName: '',
  userInput1: '',
  userInput2: '',
  userInput3: '',
  userInput4: '',

  init: function(){
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
      if(request.fn in background){
        background[request.fn](request,sender,sendResponse);
      }
    });
  },
  setTemplate: function(request, sender, sendResponse){
    this.templateName = request.name;
    this.userInput1 = request.userInput1;
    this.userInput2 = request.userInput2;
    this.userInput3 = request.userInput3;
    this.userInput4 = request.userInput4;
  },
  getTemplate: function(request, sender, sendResponse){
    sendResponse([this.templateName,this.userInput1, this.userInput2, this.userInput3, this.userInput4]);
  }
};

background.init();
