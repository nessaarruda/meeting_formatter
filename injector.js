alert(document.getElementById("userInput1")
var element = document.activeElement;
var h1 = document.createElement("h1");
h1.innerHTML = "<div style='font-weight:normal; font-size: 12px'>" +
                    "<p><strong><span style='font-size: 14px;'>Objective(s):</span></strong></p>" +
                    "<p><br></p><p><strong><span style='font-size: 14px;'>Meeting Material:</span></strong></p>" +
                    "<p><br></p><p><strong><span style='font-size: 14px;'>Subject Matter Expert(s):</span></strong></p>" +
                    "<p><br></p><p><strong><span style='font-size: 14px;'>Goals/Next Steps:</span></strong></p>" +
                "</div>";
element.append(h1);
