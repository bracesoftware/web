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

const wiki_content = {
    _getting_started: `# Getting Started
NewASM is an interpreted low-level programming language which combines explicit memory and register control, giving it a breeze of assembly-like feel, with high-level functionalities such as objects, threads and more.

- Writing your first NewASM program:

~~~
.$using %ios
.data
    txt string : "Hello world"
    num len : $-string
.start
    mov tlr, string
    mov stl, 0c1
    mov fdx, 1
    mov bos, len

    sysenter %ios
    
    syscall

    ret 0
~~~
`,_default_text: `# Welcome!
Welcome to the NewASM Wiki.
Press the topic you want to read.
`
};

const default_text = 0;
const getting_started = 1;

function updateWiki(id)
{
    let query = document.querySelector("#NewASM #wiki");
    if(id == default_text)
    {
        query.innerHTML = marked.parse(wiki_content._default_text);
    }
    if(id == getting_started)
    {
        query.innerHTML = marked.parse(wiki_content._getting_started);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    updateWiki(default_text);
});