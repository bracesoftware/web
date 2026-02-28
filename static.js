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

const HTML = {
    contact_info: `
    <div id="ContactInfo" class="modal">
		<div class="modal-content">
			<img class="apply_border_radius" src="brace_slogan.png">
			<span class="close" onclick="closeModal()">&times;</span>
			<h2>Contact Mail</h2>
			<p>Contact us via mail at <code>bracetm.official@gmail.com</code>.</p>
		</div>
	</div>
    `,
    footer: `
    <img class="apply_border_radius" src="brace_tinylogo.png">
        <p><b>&copy; 2026 Brace&#8482; Co.</b> All rights reserved.</p>
        <headerbutton onclick="brace_redirect(BRACE_LINK__PP)">PRIVACY POLICY</headerbutton>
        <headerbutton onclick="brace_redirect(BRACE_LINK__GITHUB)"><code>GitHub</code></headerbutton>
        <headerbutton onclick="brace_redirect(BRACE_LINK__DISCORD)">Discord</headerbutton>
        <headerbutton onclick="brace_redirect(BRACE_LINK__IG)">Instagram</headerbutton>
        <headerbutton onclick="brace_redirect(BRACE_LINK__YT)">YouTube</headerbutton>
        <headerbutton onclick="brace_redirect(BRACE_LINK__TT)">TikTok</headerbutton>
        <headerbutton onclick="openModal('ContactInfo')">Contact</headerbutton>
    `,
    not_found: `
        <p>Not found 404</p>
    `,
    header: `
        <div class="container___"><div class="logo">
			<img class="apply_border_radius" src="brace_logo.png" alt="BRACE Logo">
		</div>
		<h3 id="whiteText">Brace Software Co.</h3></div>
		<nav>
			<ul><!--HEADER-->
				<div class="dropdown_container">
					<headerbutton id="headerbutton_refresh" onclick="brace_redirect(BRACE_LINK__HOMEPAGE)">HOME</headerbutton>
					<headerbutton id="headerbutton_about" onclick="brace_redirect(BRACE_LINK__HOMEPAGE)">ABOUT</headerbutton>
					<headerbutton id="headerbutton_services" onclick="brace_redirect(BRACE_LINK__SERVICESBUTTON)">SERVICES</headerbutton>
				</div>
				<div class="dropdown_container">
					<headerbutton id="headerbutton_more" onclick="openDropdown('headerbutton_more','mydropdown')">PRODUCTS &#8595;</headerbutton>
					<div class="dropdown" id="mydropdown">
						<headerbutton onclick="brace_redirect(BRACE_LINK__PAWNSCRIPTBUTTON)">PawnScript</headerbutton>
						<headerbutton onclick="brace_redirect(BRACE_LINK__DAMNLARPERBUTTON)">Damn Larper</headerbutton>
						<headerbutton onclick="brace_redirect(BRACE_LINK__NEWASMBUTTON)">New-ASM</headerbutton>
					</div>
				</div>
				<div class="dropdown_container">
					<headerbutton id="headerbutton_more2" onclick="openDropdown('headerbutton_more2','mydropdown2')">MORE &#8595;</headerbutton>
					<div class="dropdown" id="mydropdown2">
						<!--<headerbutton onclick="openModal('ContactInfo')">CONTACT</headerbutton>-->
						<!--HEADER-<headerbutton onclick="handleAccountRequest()">LOGIN</headerbutton>--HEADER-->
						<headerbutton id="headerbutton_refresh" onclick="brace_redirect(BRACE_LINK__HOMEPAGE)">&#8635; REFRESH</headerbutton>
					</div>
				</div>

			</ul><!--HEADER-->
		</nav>
    `
};