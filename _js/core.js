/**
 * @author PXLVZN
 */

// Namespace to avoid collisions
var pxlvznTools={
    // Function to handle Ui events
    addEvent: function(obj, evType, fn) {
        if(obj.addEventListener) {
            obj.addEventListener(evType, fn, false);
            return true;
            // 'Cuz MS sucks ballz!
        } else if(obj.attachEvent) {
            var forIE=obj.attachEvent("on"+evType, fn);
            return forIE;
        } else {
            return false;
        }
    },
    // Pixel/Point Conversion Function
    cvrtPxPt: function() {
        var valueToConvert = document.getElementById('basesize').value;
        var pxSize=valueToConvert*(96/72); // Points to Pixels
        var ptSize=valueToConvert*(72/96); // Pixels to Points
        //
        document.getElementById('result').innerHTML=ptSize+'pt';
        //document.getElementById('result').innerHTML=pxSize+'pt';
    }
};
//
pxlvznTools.addEvent(document.getElementById('btn_convert'), 'click', pxlvznTools.cvrtPxPt);