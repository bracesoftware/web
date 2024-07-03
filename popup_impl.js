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

// Dohvati modal
let modal = document.getElementById("myModal");
let previous_modal = null;
let modal_opened = false;
let modal_interaction_allowed = false;
function openModal(modalid)
{
	modal = document.getElementById(modalid);
	modal_interaction_allowed = false;
	openModal__();
	setTimeout(updateModalInteraction,10);
}

// Kada korisnik klikne na dugme, otvori modal
function openModal__() 
{
	modal_opened = true;
	modal.style.display = "block";
	modal.classList.add("fade-in");
}

// Kada korisnik klikne bilo gde van modala, zatvori modal
window.onclick = function(event)
{
	if(modal_interaction_allowed) if(event.target == modal)
	{
		closeModal();
	}
}

// Funkcija za zatvaranje modala sa animacijom
function closeModal() {
	previous_modal = modal;
	modal_opened = false;
	modal.classList.remove("fade-in");
	modal.classList.add("fade-out");
	modal.addEventListener("animationend", function() {
		modal.style.display = "none";
		modal.classList.remove("fade-out");
	}, { once: true });
}

function closePreviousModal()
{
	previous_modal.classList.remove("fade-in");
	previous_modal.classList.add("fade-out");
	previous_modal.addEventListener("animationend", function() {
		previous_modal.style.display = "none";
		previous_modal.classList.remove("fade-out");
	}, { once: true });
}

let header = document.getElementById('page_header');
header.addEventListener('click', function()
{
	if(modal_opened == true && modal_interaction_allowed)
	{
		closeModal();
		if(previous_modal != null)
		{
			closePreviousModal();
		}

	}
});

function updateModalInteraction(){
	modal_interaction_allowed = true;
}