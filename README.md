# custom-element-chrome-plugin
devtools helper for [@epa-wg/custom-element][dce-url] as 'Transformation' tab of DOM inspector

`@epa-wg/custom-element` is based on XSLT template backward compatible with HTML. 
I.e. when plain HTML is used as content, it would be cloned as is. There is no need for much of troubleshooting, 
the DOM inspector suffice. 

But when `slots`, `{}` in attributes, or XSLT constructs like `xsl:if` and `xsl:for` are used in the template,
the ability to look onto data and into actual XSLT under the hood is needed. 

This chrome plugin for devtools DOM inspector comes to rescue. You can see and inspect the data and XSLT, 
copy into string, save to XML/XSLT file and debug in your favorite IDE.

Declarative Custom Element
Transformation tab of DOM inspector shows:

current selected in DOM inspector node
Parent customElement
Declarative Custom Element dce for custom element ^^
current selected in DOM inspector node
Data source for transformation:

xml-as-object for easier inspection
xml-string as a string
xslt as a string
Debugging
xml-string and xslt can be saved to file via for "copy string contents" into clipboard.
The XSLT debugger from your favorite IDE can set the breakpoints withing those files and run transformation under debugger.


# todo
* change the icon
* author
* screenshot
* video
* custom-element next version

[github-image]:   https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mark-github.svg
[git-url]:        https://github.com/EPA-WG/custom-element-plugin
[dce-url]:        https://github.com/EPA-WG/custom-element
