document.addEventListener('DOMContentLoaded', function() {
	console.log("Website loaded");
});
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


const PAGE_BRACE_HOMEPAGE = 0;
const PAGE_PAWNSCRIPT_PAGE = 1;
const PAGE_DAMNLARPER_PAGE = 2;

let current_page = -1;

//LINKIDS
const BRACE_LINK__DISCORD = 0;
const BRACE_LINK__GITHUB = 1;
const BRACE_LINK__PAWNSCRIPT = 2;
const BRACE_LINK__DAMNLARPER = 3;

const BRACE_LINK__HOMEPAGE = 4;
const BRACE_LINK__PAWNSCRIPTPAGE = 5;
const BRACE_LINK__DLPAGE = 6;


//AboutUs
const BRACE_DC_LINK = "https://discord.gg/wjxKdRDuUU";
const BRACE_GITHUB_LINK = "https://github.com/bracetm";

//PawnScript
const BRACE_PS_DW = "https://github.com/bracetm/pawnscript/releases";

//Damn Larper
const BRACE_DL_DW = "https://github.com/bracetm/damnlarper/releases";

//Files
const BRACE_HOMEPAGE_HTML = "index.html"
const BRACE_PAWNSCRIPT_HTML = "pawnscript.html"
const BRACE_DAMNLARPER_HTML = "damnlarper.html"

//funcs
function brace_redirect(linkid)
{
	if(linkid == BRACE_LINK__DISCORD)
	{
		window.open(BRACE_DC_LINK,'_blank');
	}
	if(linkid == BRACE_LINK__GITHUB)
	{
		window.open(BRACE_GITHUB_LINK,'_blank');
	}
	if(linkid == BRACE_LINK__PAWNSCRIPT)
	{
		window.open(BRACE_PS_DW,'_blank');
	}
	if(linkid == BRACE_LINK__DAMNLARPER)
	{
		window.open(BRACE_DL_DW,'_blank');
	}

	if(linkid == BRACE_LINK__HOMEPAGE)
	{
		window.location.href = BRACE_HOMEPAGE_HTML;
	}
	if(linkid == BRACE_LINK__PAWNSCRIPTPAGE)
	{
		window.location.href = BRACE_PAWNSCRIPT_HTML;
	}
	if(linkid == BRACE_LINK__DLPAGE)
	{
		window.location.href = BRACE_DAMNLARPER_HTML;
	}
}

// Slide

let BRACE_CURRENT_SLIDE = 0;
let BRACE_INTERVAL = null;

function changeSlide(direction)
{
	showSlide(BRACE_CURRENT_SLIDE + direction);
}

function nextSlide()
{
	changeSlide(1);
}

function showSlide(index)
{
	let slides = document.querySelectorAll('.slide');
	// Provjera da li je index u granicama broja slajdova
	if (index < 0) {
		index = slides.length - 1; // Povratak na zadnji slajd ako je index manji od 0
	} else if (index >= slides.length) {
		index = 0; // Povratak na prvi slajd ako je index veći ili jednak broju slajdova
	}

	// Skrivanje prethodnog slajda
	slides[BRACE_CURRENT_SLIDE].style.display = 'none';

	// Prikaz novog slajda
	slides[index].style.display = 'block';

	// Postavljanje trenutnog slajda na novi index
	BRACE_CURRENT_SLIDE = index;
	console.log("BRACE_CURRENT_SLIDE je: " + BRACE_CURRENT_SLIDE);
}

function showSlide__init() {
	showSlide(BRACE_CURRENT_SLIDE);
}

function Slide__init() {
	BRACE_INTERVAL = setInterval(nextSlide, 5000);
}


// Prikaz prvog slajda na početku

document.addEventListener("DOMContentLoaded", function() {
	setTimeout(function() {
		document.body.classList.add("loaded");
	}, 1000); // 1 sekunda

	brace_utils.getClientOS_log();

	if(current_page == PAGE_BRACE_HOMEPAGE)
	{
		if(brace_utils.getClientOS() == OS_LINUX)
		{
			const index_slogan = document.getElementById("headerbutton_home_");
			index_slogan.style.textAlign = 'left';
		}

		showSlide__init();
		Slide__init();

		const readButton = document.getElementById("readButton");
		const userInput = document.getElementById("userInput");
		const output1 = document.getElementById("output1");
		const output2 = document.getElementById("output2");

		readButton.addEventListener("click", function() {
			const inputValue = userInput.value;
			if(inputValue === "")
			{
				output1.textContent = "Input can't be empty.";
				output2.textContent = "";
			}
			else 
			{
				output1.textContent = "Thank you for your feedback!"; 
				output2.textContent = "You entered: " + inputValue;
			}
		});

		if(brace_utils.getClientOS() == OS_WINDOWS || brace_utils.getClientOS() == OS_MAC)
		{
			const headerbutton_home__ = document.getElementById("headerbutton_home");
			const headerbutton_about__ = document.getElementById("headerbutton_about");
			const headerbutton_services__ = document.getElementById("headerbutton_services");
			const headerbutton_more__ = document.getElementById("headerbutton_more");

			const headerbutton_home___ = document.getElementById("headerbutton_home_");
			const headerbutton_about___ = document.getElementById("headerbutton_about_");
			const headerbutton_services___ = document.getElementById("headerbutton_services_");
			const headerbutton_more___ = document.getElementById("headerbutton_more_");

			const headerbutton_home_pos = brace_utils.getElementYPos(headerbutton_home___);
			const headerbutton_about_pos = brace_utils.getElementYPos(headerbutton_about___);
			const headerbutton_services_pos = brace_utils.getElementYPos(headerbutton_services___);
			const headerbutton_more_pos = brace_utils.getElementYPos(headerbutton_more___);

			console.log("headerbutton_home_pos: " + headerbutton_home_pos);

			console.log("headerbutton_about_pos: " + headerbutton_about_pos);

			console.log("headerbutton_services_pos: " + headerbutton_services_pos);

			console.log("headerbutton_more_pos: " + headerbutton_more_pos);

			window.addEventListener("scroll", function(){
				let scroll_pos_y = window.scrollY;

				//console.log("scroll_pos_y: " + scroll_pos_y);

				if(scroll_pos_y <= headerbutton_more_pos-brace_utils.getReductIndex())
				{
					headerbutton_home__.style.textDecoration = "none";
					headerbutton_about__.style.textDecoration = "none";
					headerbutton_services__.style.textDecoration = "underline";
					headerbutton_more__.style.textDecoration = "none";
				}
				if(scroll_pos_y <= headerbutton_services_pos-brace_utils.getReductIndex())
				{
					headerbutton_home__.style.textDecoration = "none";
					headerbutton_about__.style.textDecoration = "underline";
					headerbutton_services__.style.textDecoration = "none";
					headerbutton_more__.style.textDecoration = "none";
				}
				if(scroll_pos_y <= headerbutton_about_pos-brace_utils.getReductIndex())
				{
					headerbutton_home__.style.textDecoration = "underline";
					headerbutton_about__.style.textDecoration = "none";
					headerbutton_services__.style.textDecoration = "none";
					headerbutton_more__.style.textDecoration = "none";
				}
			});
		}
	}
});