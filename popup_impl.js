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

let dynamicModalList = [
	"1","2"
];

let modal_interaction_allowed = true;
function openModal(modalid)
{
	//closeAllModals();
	if(dropdown != null)
	{
		dropdown.classList.remove('show');
	}
	modal = document.getElementById(modalid);
	modal_interaction_allowed = false;
	dynamicModalList.push(modalid);
	modal.style.display = "block";
	modal.classList.add("fade-in");
	setTimeout(updateModalInteraction,100);
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
function closeModal() 
{
	modal.classList.remove("fade-in");
	modal.classList.add("fade-out");
	modal.addEventListener("animationend", function()
	{
		modal.style.display = "none";
		modal.classList.remove("fade-out");
	}, 
	{
		once: true 
	});
}


let header = document.getElementById('page_header');
header.addEventListener('click', function()
{
	if(modal_interaction_allowed)
	{
		closeModal();
	}
});

function updateModalInteraction(){
	modal_interaction_allowed = true;
}
/***************/
function closeAllModals()
{
	for (let i = 0; i < dynamicModalList.length; i++)
	{
		if(document.getElementById(dynamicModalList[i])==null)
		{
			continue;
		}
		document.getElementById(dynamicModalList[i]).classList.remove("fade-in");
		document.getElementById(dynamicModalList[i]).classList.add("fade-out");
		document.getElementById(dynamicModalList[i]).addEventListener("animationend", function()
		{
			document.getElementById(dynamicModalList[i]).style.display = "none";
			document.getElementById(dynamicModalList[i]).classList.remove("fade-out");
		}, 
		{
			once: true 
		});
	}
}