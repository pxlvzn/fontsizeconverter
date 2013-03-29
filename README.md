Font Unit Conversion Tool
===========================

Tool for converting screen font sizes from one unit (px, pt, em or %) to another.


NOTES:

1.) Pixel unit conversions use a baseline font size of 14px; as this is the default font size of most browsers/HTMLframeworks.

2.) Round up if the first decimel place is 5 or greater; NEVER round down.

3.)  pt is 1/72 of an in, and a px is 1/96 of an in. On screen everything is scaled to be consistent with a hypothetical 96 ppi device viewed at normal reading distance. Meaning that, on screens that differ significantly from 96 ppi or from normal reading distance, everything will be scaled but still maintain the same relationships.

4.) PI refers to print and PPI to pixel display. 

5.) PRINT UNITS (non-scaling):

-centimeters (cm)

-millimeters (mm)

-inches (in): 1in is equal to 2.54cm.

-points (pt): the points used by CSS are equal to 1/72nd of 1in.

-picas (pc): 1pc is equal to 12pt.


6.) SCREEN UNITS:

-pixel (px): 1px is equal to 0.75pt. Pixels don't scale with screen resolution.

-"em" (em): An em is equal to the current font-size and a scable unit. (i.e. i ffont size = 12px then 1em = 12px).

-percent (%): Similar to the em and also scalabe, the current font-size is equal to 100%. (i.e. 12pt = 100%).

