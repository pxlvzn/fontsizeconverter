/**
 * @author PXLVZN
 */

// Namespace to avoid collisions
var pxlvznTools = {
    // Function to handle UI events
    addEvent : function(obj, evType, fn) {
        if (obj.addEventListener) {
            obj.addEventListener(evType, fn, false);
            return true;
            // and 'Cuz MS sucks ballz!
        } else if (obj.attachEvent) {
            var forIE = obj.attachEvent("on" + evType, fn);
            return forIE;
        } else {
            return false;
        }
    },
    // Pixel/Point Conversion Function
    convertUnit : function() {
        // Baseline font unit is pixels
        var baselineFontSize = 16;
        // Number enbtered by the user
        var valueToConvert = document.getElementById('basesize').value;
        // conversion formula selected by the user
        var convformula = document.getElementById('formula').value;
        // Pixels to Points
        var ptpxSize = valueToConvert * (96 / 72);
        // Points to Pixels
        var pxptSize = valueToConvert * (72 / 96);
        // Pixels to EM
        var pxemSize = valueToConvert / baselineFontSize;
        // EM to Pixels
        var empxSize = valueToConvert * baselineFontSize;
        // Pixels to Percent
        var pxPercentSize = 100 * (valueToConvert / baselineFontSize);
        // Percent to Pixel
        var percentPxSize = baselineFontSize * (valueToConvert / 100);
        // EM to Percent
        var emPercentSize = valueToConvert * 100;
        // Percent to Em
        var percentEmSize = valueToConvert / 100;

        if (valueToConvert > 0) {
            //
            switch(convformula) {
                case 'empercent':
                    document.getElementById('result').innerHTML = '<p>' + emPercentSize + '&#37;</p>';
                    break;
                case 'empx':
                    document.getElementById('result').innerHTML = '<p>' + empxSize + 'px</p>';
                    break;
                case 'percentem':
                    document.getElementById('result').innerHTML = '<p>' + percentEmSize + 'em</p>';
                    break;
                case 'percentpx':
                    document.getElementById('result').innerHTML = '<p>' + percentPxSize + 'px</p>';
                    break;
                case 'pxem':
                    document.getElementById('result').innerHTML = '<p>' + pxemSize + 'em</p>';
                    break;
                case 'pxpercent':
                    document.getElementById('result').innerHTML = '<p>' + pxPercentSize + '&#37;</p>';
                    break;
                case 'pxpt':
                    document.getElementById('result').innerHTML = '<p>' + pxptSize + 'pt</p>';
                    break;
                case 'ptpx':
                    document.getElementById('result').innerHTML = '<p>' + ptpxSize + 'px</p>';
                    break;
                default:
                // alert('Please select a font unit.')
            };
        } else {
            document.getElementById('result').innerHTML = '<p class="error">Please enter a number.</p>';
        };
    },
    clearField : function() {
        this.value === this.defaultValue ? this.value = '' : null;
        document.getElementById('formula').selectedIndex = 0;
    },
    resetField : function() {
        this.value === '' ? this.value = 'Enter a Number' : null;
    }
};
//
pxlvznTools.addEvent(document.getElementById('basesize'), 'focus', pxlvznTools.clearField);
pxlvznTools.addEvent(document.getElementById('basesize'), 'blur', pxlvznTools.resetField);
pxlvznTools.addEvent(document.getElementById('formula'), 'change', pxlvznTools.convertUnit);
