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


let dropdown = document.getElementById('-');
let dropdown_button = document.getElementById('-');

function openDropdown(buttonid, dropdownid)
{
	if(dropdown != null && dropdown != document.getElementById(dropdownid))
	{
		dropdown.classList.remove('show');
	}
	dropdown_button = document.getElementById(buttonid);
	dropdown = document.getElementById(dropdownid);
	openDropdown__();
}

function openDropdown__() 
{
	if(dropdown.classList.contains('show'))
	{
		dropdown.classList.remove('show');
	}
	else
	{
		dropdown.classList.add('show');
	}
}

// Zatvaranje dropdown menija klikom izvan njega
document.addEventListener('click', function(event) 
{
	if(dropdown != null)
	{
		if(!dropdown_button.contains(event.target) && !dropdown.contains(event.target))
		{
			dropdown.classList.remove('show');
		}
	}
});
