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

const OS_WINDOWS = 1;
const OS_MAC = 2;
const OS_LINUX = 3;

let user_utils = {
	consoleOutput: function(text)
	{
		console.log("[Brace-Util] WEBSITE CONSOLE - Info: " + text);
	},
	getElementYPos: function(element)
	{
		return element.getBoundingClientRect().top + window.scrollY;
	},
	getReductIndex: function()
	{
		return 100;
	},
	getClientOS: function()
	{
		if(window.navigator.platform.indexOf("Win") != -1)
		{
			return OS_WINDOWS;
		}
		if(window.navigator.platform.indexOf("Mac") != -1)
		{
			return OS_MAC;
		}
		if(window.navigator.platform.indexOf("Linux") != -1)
		{
			return OS_LINUX;
		}
		return 0;
	},
	getClientOS_log: function()
	{
		if(window.navigator.platform.indexOf("Win") != -1)
		{
			user_utils.consoleOutput("Client is running Windows.");
			return OS_WINDOWS;
		}
		if(window.navigator.platform.indexOf("Mac") != -1)
		{
			user_utils.consoleOutput("Client is running MacOS.");
			return OS_MAC;
		}
		if(window.navigator.platform.indexOf("Linux") != -1)
		{
			user_utils.consoleOutput("Client is running Linux.");
			return OS_LINUX;
		}
		user_utils.consoleOutput("Client's OS is unknown.");
		return 0;
	},
	isMobile: function()
	{
		return (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
	},
	isMobile_log: function()
	{
		let check = ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
		if(check)
		{
			user_utils.consoleOutput("Client is using a mobile device.");
		}
		if(!check)
		{
			user_utils.consoleOutput("Client is not using a mobile device.");
		}
		return check;
	}
}

user_utils.consoleOutput("Module loaded.");