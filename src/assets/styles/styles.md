# Usage Guide

<pre>
  * mixins
   @include box(200px, 100px);
   @include box(50px);
   @include colorize(bg, white, 0.8);
   @include colorize(color, black, 0.5);
   @include position(absolute, 0, 0, auto, auto);
   @include position(fixed, 0, 0, auto, auto);
   @include placeholder(#cccccc);
   @include transition(width);
   @include transition(height, 0.2s, ease-in-out);
   @include font-face("My Font", my-font);
  * functions
   background-image: gradient(header);
   box-shadow: shadow(header);
   z-index: z(header);
   margin-top: margin(3);

 </pre>
