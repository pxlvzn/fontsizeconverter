/**
 * @author PXLVZN
 */

// Namespace to avoid collisions
var pxlvznTools = {
    baselineFontSize: 14,
    // Function to handle UI events
    addEvent : function(obj, evType, fn) {
        "use strict";
        if (obj.addEventListener) {
            obj.addEventListener(evType, fn, false);
            return true;
            // and 'Cuz MS sucks ballz!
        } else if (obj.attachEvent) {
            var forIE = obj.attachEvent("on" + evType, fn);
            return forIE;
        } else {
            return false;}
    },
    // Font Unit Conversion Functionoints
    convertUnit : function() {
        "use strict";
        // Baseline font unit is pixels
        var baselineFontSize = document.getElementById('baseline').value;
        // Number entered by the user
        var valueToConvert = document.getElementById('basesize').value;
        // conversion formula selected by the user
        var convformula = document.getElementById('formula').value;
        // Test to make sure that the input value is a number
        if (valueToConvert > 0) {
            // Run selected conversion formula.
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
                // alert('Please select a font unit.')
            }
        } else {
            document.getElementById('result').innerHTML = '<p class="error">Please enter a number, only.</p>';
        }
    },
    // Function to clear input field of preset/default value and reset select menu index to zero.
    clearField : function() {
        "use strict";
        if(this.value !== ''){
            this.value = '';
        }
        document.getElementById('formula').selectedIndex = 0;
        document.getElementById('baseline').selectedIndex = 0;
    },
    // Function to reset input field to preset/default value
    resetField : function() {
        "use strict";
          if(this.value === ''){
            this.value = 'Enter a Number';
        }
    }
};
// Initialze functions to call upon user action(s)
pxlvznTools.addEvent(document.getElementById('basesize'), 'focus', pxlvznTools.clearField);
pxlvznTools.addEvent(document.getElementById('basesize'), 'blur', pxlvznTools.resetField);
pxlvznTools.addEvent(document.getElementById('btn_convert'), 'click', pxlvznTools.convertUnit);
//EOF