Font Unit Conversion Tool
===========================

Tool for converting screen font sizes from one unit (px, pt, em or %) to another.

NOTES:

-Pixel unit conversions use a baseline font size of 14px; as this is the default font size of most browsers/HTMLframeworks.

-Round up if the first decimel place is 5 or greater; NEVER round down.

-A pt is 1/72 of an in, and a px is 1/96 of an in. On screen everything is scaled to be consistent with a hypothetical 96 ppi device viewed at normal reading distance, meaning that on screens that differ significantly from 96 ppi or from normal reading distance, everything will be scaled, but still maintain the same relationships ie a pt will still be 1.33334 px units and still be 1/72 of an in unit.

-DPI refers to print and PPI to pixel display. 

PRINT UNITS:

-centimeters (cm)

-millimeters (mm)

-inches (in): 1in is equal to 2.54cm.

-points (pt): the points used by CSS are equal to 1/72nd of 1in.

-picas (pc): 1pc is equal to 12pt.


SCREEN UNITS:

-pixel (px): 1px is equal to 0.75pt.

-"em" (em): An em is equal to the current font-size and a scable unit. (i.e. i ffont size = 12px then 1em = 12px).

-percent (%): Similar to the em and also scalabe, the current font-size is equal to 100%. (i.e. 12pt = 100%).


