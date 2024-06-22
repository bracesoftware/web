/*

The ORIGINAL CODE is the `PawnScript: the Language` Source Code.
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

//LINKIDS
const BRACE_LINK__DISCORD = 0;
const BRACE_LINK__GITHUB = 1;
const BRACE_LINK__PAWNSCRIPT = 2;
const BRACE_LINK__DAMNLARPER = 3;


//AboutUs
const BRACE_DC_LINK = "https://discord.gg/wjxKdRDuUU";
const BRACE_GITHUB_LINK = "https://github.com/bracetm";

//PawnScript
const BRACE_PS_DW = "https://github.com/bracetm/pawnscript/releases";

//Damn Larper
const BRACE_DL_DW = "https://github.com/bracetm/damnlarper/releases";

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
	return 1;
}