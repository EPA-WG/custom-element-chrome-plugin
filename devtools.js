const getProperties = function()
{
    const xml2str = x => x?.nodeType ? new XMLSerializer().serializeToString( x ): undefined;
    const tagNattrs = h => h.substring(1, h.indexOf('>'))
    const xml2obj = x => {
        if(!x)
            return;
        if( !x.children?.length )
            return x?.textContent;
        const ret = { __proto__: null };
        [ ...x.children ].map( c => ret[ tagNattrs(c.outerHTML) ] = xml2obj( c ) );
        return ret;
    }
    const parentByProp = ( el, prop )=>  el && (prop in el ? el: parentByProp( el.parentNode, prop ));

    const current = $0
    , customElement = parentByProp( current, 'xml' )
    , xml = customElement?.xml
    , dce = customElement?.dce || parentByProp( current, 'dce' )?.dce;
    return { current, customElement, dce
            , xslt: xml2str( dce?.xslt )
            , 'xml-string': xml2str(xml)
            , 'xml-as-object': xml2obj(xml)
            , __proto__: null };
}

chrome.devtools.panels.elements.createSidebarPane(
    "Transformation",
    function( sidebar )
    {
        const updateElementProperties = () => sidebar.setExpression( "(" + getProperties.toString() + ")()" );

        updateElementProperties();
        chrome.devtools.panels.elements.onSelectionChanged.addListener( updateElementProperties );
    } );
