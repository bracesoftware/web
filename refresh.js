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

let page_key = "_BRACE_reloaded_" + window.location.pathname;
function handle_refresh()
{
	//window.location.href = "index.html";
	return 0;
}

document.addEventListener("DOMContentLoaded", async function()
{
	if (sessionStorage.getItem(page_key))
	{
        sessionStorage.removeItem(page_key); 
        await handle_refresh();
    }
	else
	{
        sessionStorage.setItem(page_key, "true");
    }
});