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

let account = {
	loggedInKey: function() {
		return "brace.guest.account";
	},
	loggedIn: function(){
		return "brace.loggedIn";
	},
	notLoggedIn: function(){
		return "brace.notLoggedIn";
	}
};

let Guest = {
	Username: function()
	{
		return "Guest";
	},
	Password: function()
	{
		return "";
	}
};

/**************************/
let __modalid = 0;

const sucLogin__modalid = 1;
const LoggedOut__modalid = 2;
function ReopenModal()
{
	if(__modalid == sucLogin__modalid)
	{
		openModal('sucLogin');
	}
	if(__modalid == LoggedOut__modalid)
	{
		openModal('LoggedOut');
	}
}
/**************************/

function handleAccountRequest()
{
	user_utils.consoleOutput("`handleAccountRequest` called.");
	if(window.localStorage.getItem(account.loggedInKey()) === null)
	{
		user_utils.consoleOutput("ishere");
		window.localStorage.getItem(account.loggedInKey(), account.notLoggedIn());
		openModal('AccountPage');
		return 1;
	}
	if(window.localStorage.getItem(account.loggedInKey()) == account.notLoggedIn())
	{
		openModal('AccountPage');
		return 1;
	}
	if(window.localStorage.getItem(account.loggedInKey()) == account.loggedIn())
	{
		openModal("AlreadyLoggedIn");
		document.getElementById('display_username').textContent = Guest.Username();
		return 1;
	}
	return 1;
}

function AccountLogin()
{
	const username = document.getElementById("data_username").value;
	const password = document.getElementById("data_password").value;
	if(username == Guest.Username() && password == Guest.Password())
	{
		window.localStorage.setItem(account.loggedInKey(), account.loggedIn());
		closeModal();
		__modalid = sucLogin__modalid; setTimeout(ReopenModal,1000);
		return 1;
	}
	document.getElementById("account_popup_warntext").textContent = "Wrong username or password.";
	return 1;
}

function AccountLogOut()
{
	closeModal();
	window.localStorage.setItem(account.loggedInKey(), account.notLoggedIn());
	__modalid = LoggedOut__modalid; setTimeout(ReopenModal,1000);
}