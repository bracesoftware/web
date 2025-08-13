document.addEventListener('DOMContentLoaded', function() {
	//console.log("Website loaded");
	user_utils.consoleOutput("Website loaded.");
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
const PAGE_NEWASM_PAGE = 3;

let current_page = -1;

//LINKIDS
const BRACE_LINK__DISCORD = 0;
const BRACE_LINK__GITHUB = 1;
const BRACE_LINK__PAWNSCRIPT = 2;
const BRACE_LINK__DAMNLARPER = 3;
const BRACE_LINK__HOMEPAGE = 4;
const BRACE_LINK__PAWNSCRIPTPAGE = 5;
const BRACE_LINK__DLPAGE = 6;
const BRACE_LINK__IG = 7;
const BRACE_LINK__YT = 8;
const BRACE_LINK__TT = 9;

const BRACE_LINK__HOMEBUTTON = 10;
const BRACE_LINK__ABOUTUSBUTTON = 11;
const BRACE_LINK__SERVICESBUTTON = 12;
const BRACE_LINK__PAWNSCRIPTBUTTON = 13;
const BRACE_LINK__DAMNLARPERBUTTON = 14;

const BRACE_LINK__PP = 15;
const BRACE_LINK__NEWASMBUTTON = 16;

const BRACE_LINK__NEWASM = 17;
const BRACE_LINK__NAPAGE = 18;

//AboutUs
const BRACE_DC_LINK = "https://discord.gg/wjxKdRDuUU";
const BRACE_GITHUB_LINK = "https://github.com/bracesoftware";

//PawnScript
const BRACE_PS_DW = "https://github.com/bracesoftware/pawnscript/releases";

//Damn Larper
const BRACE_DL_DW = "https://github.com/bracesoftware/damnlarper/releases";

//New-ASM
const BRACE_NA_DW = "https://github.com/bracesoftware/newasm/releases";

//Files
const BRACE_HOMEPAGE_HTML = "homepage.html";
const BRACE_PAWNSCRIPT_HTML = "pawnscript.html";
const BRACE_DAMNLARPER_HTML = "damnlarper.html";
const BRACE_NEWASM_HTML = "newasm.html";
const BRACE_PRIVACYPOLICY_HTML = "privacy_policy.html";

let MOBILE_ELEMENTS = {
	BRACE_HOMEPAGE_HTML: function(){
		return "mobile_hmpg.html";
	},
	BRACE_PRIVACYPOLICY_HTML: function(){
		return "mobile_pp.html";
	}
};

// Social media
const BRACE_INSTAGRAM_LINK = "https://www.instagram.com/bracesoftware";
const BRACE_YOUTUBE_LINK = "https://www.youtube.com/@bracesoftware";
const BRACE_TIKTOK_LINK = "https://www.tiktok.com/@bracesoftware";

//funcs
function brace_redirect(linkid)
{
	if(linkid == BRACE_LINK__NAPAGE ||
		linkid == BRACE_LINK__PP ||
		linkid == BRACE_LINK__DLPAGE ||
		linkid == BRACE_LINK__PAWNSCRIPTPAGE ||
		linkid == BRACE_LINK__HOMEPAGE
	){
		document.getElementById("fade-block").style.animation = "FadeAnimStart 0.25s forwards";
		document.getElementById("fade-block").style.zIndex = "100000";
	}
	setTimeout(function()
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
		if(linkid == BRACE_LINK__IG)
		{
			window.open(BRACE_INSTAGRAM_LINK,'_blank');
		}
		if(linkid == BRACE_LINK__YT)
		{
			window.open(BRACE_YOUTUBE_LINK,'_blank');
		}
		if(linkid == BRACE_LINK__TT)
		{
			window.open(BRACE_TIKTOK_LINK,'_blank');
		}

		if(linkid == BRACE_LINK__HOMEPAGE)
		{
			if(user_utils.isMobile())
			{
				window.location.href = MOBILE_ELEMENTS.BRACE_HOMEPAGE_HTML();
			}
			if(user_utils.isMobile() == false)
			{
				window.location.href = BRACE_HOMEPAGE_HTML;
			}
		}
		if(linkid == BRACE_LINK__PAWNSCRIPTPAGE)
		{
			window.location.href = BRACE_PAWNSCRIPT_HTML;
		}
		if(linkid == BRACE_LINK__DLPAGE)
		{
			window.location.href = BRACE_DAMNLARPER_HTML;
		}

		if(linkid == BRACE_LINK__HOMEBUTTON)
		{
			window.location.href = "#home";
		}
		if(linkid == BRACE_LINK__ABOUTUSBUTTON)
		{
			window.location.href = "#about";
		}
		if(linkid == BRACE_LINK__SERVICESBUTTON)
		{
			window.location.href = "#services";
		}
		if(linkid == BRACE_LINK__PAWNSCRIPTBUTTON)
		{
			window.location.href = "#PawnScript";
		}
		if(linkid == BRACE_LINK__DAMNLARPERBUTTON)
		{
			window.location.href = "#DamnLarper";
		}
		if(linkid == BRACE_LINK__NEWASMBUTTON)
		{
			window.location.href = "#NewASM";
		}

		if(linkid == BRACE_LINK__PP)
		{
			if(user_utils.isMobile())
			{
				window.location.href = MOBILE_ELEMENTS.BRACE_PRIVACYPOLICY_HTML();
			}
			if(user_utils.isMobile() == false)
			{
				window.location.href = BRACE_PRIVACYPOLICY_HTML;
			}
		}

		if(linkid == BRACE_LINK__NEWASM)
		{
			window.location.href = BRACE_NA_DW;
		}
		if(linkid == BRACE_LINK__NAPAGE)
		{
			window.location.href = BRACE_NEWASM_HTML;
		}
	}, 250);
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
	if(index < 0)
	{
		index = slides.length - 1; // Povratak na zadnji slajd ako je index manji od 0
	}
	else if(index >= slides.length)
	{
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
	if(user_utils.isMobile())
	{
		if(current_page == PAGE_BRACE_HOMEPAGE)
		{
			document.getElementById("home").style.textAlign = "left";
		}
		if(current_page == PAGE_DAMNLARPER_PAGE)
		{
			document.getElementById("home_damnlarper").style.textAlign = "left";
		}
		if(current_page == PAGE_PAWNSCRIPT_PAGE)
		{
			document.getElementById("home").style.textAlign = "left";
		}
	}

	setTimeout(function() {
		document.body.classList.add("loaded");
	}, 1000); // 1 sekunda

	user_utils.getClientOS_log();
	user_utils.isMobile_log();

	if(current_page == PAGE_BRACE_HOMEPAGE)
	{
		if(user_utils.getClientOS() != OS_WINDOWS)
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

		if(user_utils.isMobile() == false)
		{
			const headerbutton_home__ = document.getElementById("headerbutton_home");
			const headerbutton_about__ = document.getElementById("headerbutton_about");
			const headerbutton_services__ = document.getElementById("headerbutton_services");
			const headerbutton_more__ = document.getElementById("headerbutton_more");

			const headerbutton_home___ = document.getElementById("headerbutton_home_");
			const headerbutton_about___ = document.getElementById("headerbutton_about_");
			const headerbutton_services___ = document.getElementById("headerbutton_services_");

			const headerbutton_home_pos = user_utils.getElementYPos(headerbutton_home___);
			const headerbutton_about_pos = user_utils.getElementYPos(headerbutton_about___);
			const headerbutton_services_pos = user_utils.getElementYPos(headerbutton_services___);
			const headerbutton_more_pos = user_utils.getElementYPos(document.getElementById("headerbutton_more_"));

			console.log("headerbutton_home_pos: " + headerbutton_home_pos);

			console.log("headerbutton_about_pos: " + headerbutton_about_pos);

			console.log("headerbutton_services_pos: " + headerbutton_services_pos);

			console.log("headerbutton_more_pos: " + headerbutton_more_pos);


			window.addEventListener("scroll", function(){
				let scroll_pos_y = window.scrollY;

				//console.log("scroll_pos_y: " + scroll_pos_y);
				if(scroll_pos_y <= document.documentElement.scrollHeight)
				{
					headerbutton_home__.style.fontWeight = "normal";
					headerbutton_about__.style.fontWeight = "normal";
					headerbutton_services__.style.fontWeight = "normal";
					headerbutton_more__.style.fontWeight = "bold";
				}
				if(scroll_pos_y <= headerbutton_more_pos-user_utils.getReductIndex())
				{
					headerbutton_home__.style.fontWeight = "normal";
					headerbutton_about__.style.fontWeight = "normal";
					headerbutton_services__.style.fontWeight = "bold";
					headerbutton_more__.style.fontWeight = "normal";
				}
				if(scroll_pos_y <= headerbutton_services_pos-user_utils.getReductIndex())
				{
					headerbutton_home__.style.fontWeight = "normal";
					headerbutton_about__.style.fontWeight = "bold";
					headerbutton_services__.style.fontWeight = "normal";
					headerbutton_more__.style.fontWeight = "normal";
				}
				if(scroll_pos_y <= headerbutton_about_pos-user_utils.getReductIndex())
				{
					headerbutton_home__.style.fontWeight = "bold";
					headerbutton_about__.style.fontWeight = "normal";
					headerbutton_services__.style.fontWeight = "normal";
					headerbutton_more__.style.fontWeight = "normal";
				}
			});
		}
	}
});

document.querySelectorAll('headerbutton').forEach(button => {
    button.addEventListener('click', function() {
        setTimeout(() => {
            this.style.outline = 'none';
        }, 1000); // 1000 milisekundi = 1 sekunda
    });
});


/////////////

document.addEventListener("DOMContentLoaded", function()
{
	document.body.innerHTML +=
`<div id="POPUP_BODY" class="popup">
    <span id="closePopup-BUTTON_234" class="close">&times;</span>
    <p id="paragraph-for-popup">TEXT</p>
</div>`;
	
});

const popup = document.getElementById("POPUP_BODY");
const closeBtn = document.getElementById("closePopup-BUTTON_234");

function show_popup(msg, delay = 4000)
{	
	let para = document.getElementById("paragraph-for-popup");
	
	para.textContent = msg;
	
	popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, delay);
	return 0;
}

// Zatvori klikom na X
closeBtn.addEventListener("click", () => {
    popup.classList.remove("show");
});

