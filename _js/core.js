/**
 * @author PXLVZN
 */

// Namespace to avoid collisions
var pxlvznTools = {
    addEvent : function(obj, evType, fn)
    {"use strict";
        if (obj.addEventListener) {
            obj.addEventListener(evType, fn, false);
            return true;
            // This is why we can't have nice things Microsoft!
        } else if (obj.attachEvent) {
            var forIE = obj.attachEvent("on" + evType, fn);
            return forIE;
        } else {
            return false;
        }
    },
    // Font Unit Conversion Functionoints
    convertUnit : function()
    {"use strict";
        var baselineFontSize = document.getElementById('baseline').value;
        var valueToConvert = document.getElementById('basesize').value;
        var convformula = document.getElementById('formula').value;
        if (valueToConvert > 0) {
            switch(convformula) {
                case 'empercent':
                    // EM to Percent
                    document.getElementById('result').innerHTML = '<p>' + (valueToConvert * 100) + '&#37;</p>';
                    break;
                case 'empx':
                    // EM to Pixels
                    document.getElementById('result').innerHTML = '<p>' + (valueToConvert * baselineFontSize) + 'px</p>';
                    break;
                case 'percentem':
                    // Percent to Em
                    document.getElementById('result').innerHTML = '<p>' + (valueToConvert / 100) + 'em</p>';
                    break;
                case 'percentpx':
                    // Percent to Pixel
                    document.getElementById('result').innerHTML = '<p>' + (baselineFontSize * (valueToConvert / 100)) + 'px</p>';
                    break;
                case 'pxem':
                    // Pixels to EM
                    document.getElementById('result').innerHTML = '<p>' + (valueToConvert / baselineFontSize) + 'em</p>';
                    break;
                case 'pxpercent':
                    // Pixels to Percent
                    document.getElementById('result').innerHTML = '<p>' + (100 * (valueToConvert / baselineFontSize)) + '&#37;</p>';
                    break;
                case 'pxpt':
                    // Pixel to Point
                    document.getElementById('result').innerHTML = '<p>' + (valueToConvert * (72 / 96)) + 'pt</p>';
                    break;
                case 'ptpx':
                    // Point to Pixel
                    document.getElementById('result').innerHTML = '<p>' + (valueToConvert * (96 / 72)) + 'px</p>';
                    break;
                default:
                // console.log('Please select a font unit.')
            }
        } else {
            document.getElementById('result').innerHTML = '<p class="error">Please enter a number, only.</p>';
        }
    },
    clearField : function()
    {"use strict";
        if (this.value !== '') {
            this.value = '';
        }
        document.getElementById('formula').selectedIndex = 0;
    },
    resetField : function()
    {"use strict";
        if (this.value === '') {
            this.value = 'Enter a Number';
        }
    }
};

pxlvznTools.addEvent(document.getElementById('basesize'), 'focus', pxlvznTools.clearField);
pxlvznTools.addEvent(document.getElementById('basesize'), 'blur', pxlvznTools.resetField);
pxlvznTools.addEvent(document.getElementById('btn_convert'), 'click', pxlvznTools.convertUnit);
//EOF