/*

The ORIGINAL CODE is the `BRACE WEBSITE` Source Code.
The INITIAL DEVELOPER is Brace Inc., DEntisT.

Version: MPL 1.1

The contents of this file are subject to the Mozilla Public License Version 
1.1 the "License"; you may not use this file except in compliance with 
the License. You may obtain a copy of the License at 
http://www.mozilla.org/MPL/

Software distributed under the License is distributed on an "AS IS" basis,
WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
for the specific language governing rights and limitations under the
License.

Portions created by the Initial Developer are Copyright (c) 2022
the Initial Developer. All Rights Reserved.

*/

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.querySelectorAll("headerbutton,other-button");

    buttons.forEach(button => {
        button.addEventListener("click", function(){
            button.style.outline = "2px dotted var(--bright_green_color)";
            button.style.animation = "fadeInOutline 0.2s forwards";

            setTimeout(function() {
                button.style.outline = "none";
                //button.style.animation = "none";
                button.style.animation = "fadeOutOutline 0.3s forwards";
                setTimeout(function() {
                    button.style.animation = "none";
                }, 300);
            }, 500);
        });
    });
});