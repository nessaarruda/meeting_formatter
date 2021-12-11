chrome.storage.local.get(['input1','input2','input3','input4'], function(result) {
  var element = document.activeElement;
  var h1 = document.createElement("h1");
  h1.innerHTML = `<div style='font-weight:normal; font-size: 12px'>` +
  `<p><strong><span style='font-size: 14px;'>${result.input1}:</span></strong></p>` +
  `<p><br></p><p><strong><span style='font-size: 14px;'>${result.input2}:</span></strong></p>` +
  `<p><br></p><p><strong><span style='font-size: 14px;'>${result.input3}:</span></strong></p>` +
  `<p><br></p><p><strong><span style='font-size: 14px;'>${result.input4}:</span></strong></p>` +
  "</div>";
  element.append(h1);
});
