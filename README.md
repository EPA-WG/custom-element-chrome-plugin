# custom-element-chrome-plugin
devtools helper for [@epa-wg/custom-element][dce-url] as 'Transformation' tab of DOM inspector

[![git][github-image] GitHub][git-url]
| Live demo: [custom-element][demo-url]

`@epa-wg/custom-element` is based on XSLT template backward compatible with HTML. 
I.e. when plain HTML is used as content, it would be cloned as is. There is no need for much of troubleshooting, 
the DOM inspector suffice. 

But when `slots`, `{}` in attributes, or XSLT constructs like `xsl:if` and `xsl:for` are used in the template,
the ability to look onto data and into actual XSLT under the hood is needed. 

This chrome plugin for devtools DOM inspector comes to rescue. You can see and inspect the data and XSLT, 
copy into string, save to XML/XSLT file and debug in your favorite IDE.

Declarative Custom Element
# Transformation tab of DOM inspector

`current` selected in DOM inspector node
Parent `customElement`
Declarative Custom Element `dce` for custom element ^^
## Data source for transformation

`xml-as-object` for easier inspection
`xml-string` as a string
`xslt` as a string

# Debugging
`xml-string` and `xslt` can be saved to file via for "_copy string contents_" into clipboard.

The XSLT debugger from your favorite IDE can set the breakpoints withing those files and 
run transformation under debugger.


# todo
* author
* screenshot
* video
* reference in custom-element demo 
* custom-element next version

[github-image]:   https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mark-github.svg
[git-url]:        https://github.com/EPA-WG/custom-element-plugin
[dce-url]:        https://github.com/EPA-WG/custom-element
[demo-url]:       https://unpkg.com/@epa-wg/custom-element@0.0/index.html
