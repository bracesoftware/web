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

const aside_image = document.getElementById("aside-image");
const aside_content = document.getElementById("aside-content");
const aside_button1 = document.getElementById("aside-button-1");
const aside_button2 = document.getElementById("aside-button-2");

const asidebox = document.getElementById("aside-menu-whole");

//options
const option_newasm = 1;
const option_damnlarper = 2;
const option_pawnscript = 3;

function aside_update(option)
{
    // Dodajemo klasu koja pokreće animaciju
    asidebox.classList.remove('show');  // Uklonimo klasu pre nego što je ponovo dodamo
    void asidebox.offsetWidth;  // Forsiramo reflow kako bi animacija radila
    asidebox.classList.add('show');  // Ponovo dodajemo klasu za animaciju

    if(option == option_newasm)
    {
        asidebox.style.backgroundImage = "url('visual_resources/brace_naimage1.png')"
        aside_image.src = "visual_resources/newasm_logo.png";
        aside_image.style.width = "300px";
        aside_content.textContent = "New-ASM is an interpreted language written in C++ that mimics assembly language, which somehow makes it a portable version of assembly.";
        aside_button1.onclick = function()
        {
            brace_redirect(BRACE_LINK__NEWASM);
        };
        aside_button2.onclick = function()
        {
            brace_redirect(BRACE_LINK__NAPAGE);
        };
    }
    if(option == option_damnlarper)
    {
        asidebox.style.backgroundImage = "url('visual_resources/brace_dlimage1.png')"
        aside_image.src = "visual_resources/damnlarper_logo.png";
        aside_image.style.width = "300px";
        aside_content.textContent = "\
        Damn Larper is a multipurpose bot with many commands and features. It is basically a text-based game right in your server! This bot has a verification system, which is not allowing the unverified to send messages until they verify themselves. Besides verification, there are also moderation commands such as ban and kick commands.\n\
        In case you're searching for a fun bot, there are categories of commands for economy, custom text commands, miscellaneous commands, levelling system, bump system in development, list system with which you can make your own list and for example write down your chores on them.\n\
        And it's not over yet, you can basically take care of your virtual pet! You can get one at a petshop (it helps you gain sweet bonuses on economy commands!). There's also roleplaying, where you can buy items, craft items, go mining, hunting, fishing and chopping wood - in basic terms, get resources and be a boss (there are command cooldowns though, get premium to avoid them!).\n\
        You can also unlock achievements and get spectacular rewards once you complete them! Regarding to server security, there is a anti-raid and security system which is customizeable! There is also social media-like system where you can post messages and view them on a global feed. More features are waiting you once you add Damn Larper to your server!\n\
        ";
        aside_button1.onclick = function()
        {
            brace_redirect(BRACE_LINK__DAMNLARPER);
        };
        aside_button2.onclick = function()
        {
            brace_redirect(BRACE_LINK__DLPAGE);
        };
    }
    if(option == option_pawnscript)
    {
        asidebox.style.backgroundImage = "url('visual_resources/brace_psimage1.png')"
        aside_image.src = "visual_resources/pawnscript_logo.png";
        aside_image.style.width = "100px";
        aside_content.textContent = "PawnScript is a small interpreted semi-statically-typed object-oriented (and really memory-consuming) language written in Pawn and thus it is its extension (similar to C/C++ in terms of functionality or Java/JavaScript in terms of naming). It is designed with the role of enabling modification of the gamemode code on the server during run-time. It contains various features and things that aren't even introduced into Pawn itself. PawnScript has a very complex syntax which makes it very hard to learn but also fragile to small mistakes.";
        aside_button1.onclick = function()
        {
            brace_redirect(BRACE_LINK__PAWNSCRIPT);
        };
        aside_button2.onclick = function()
        {
            brace_redirect(BRACE_LINK__PAWNSCRIPTPAGE);
        };
    }

    //animateHeight(asidebox);
}
