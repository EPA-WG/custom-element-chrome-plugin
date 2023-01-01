const props =
{       flatten: true
,   declaration: true
,          xslt: true
,          html: true
,   templatedom: true
,           xml: true
,       datadom: true
};

const getProperties = function( props )
{
    const xml2str = x =>
    {   if( !x?.nodeType )
            return;
        const s = new XMLSerializer().serializeToString( x );
        return s.startsWith( '<?xml' ) ? s : '<?xml version="1.0" encoding="UTF-8"?>\n' + s;
    };
    const tagNattrs = h => h.substring( 1, h.indexOf( '>' ) )
    const xml2obj = x =>
    {
        if( !x )
            return;
        if( !x.children?.length )
            return x?.textContent;
        const ret = { __proto__: null };
        [ ...x.children ].map( c => ret[ tagNattrs( c.outerHTML ) ] = xml2obj( c ) );
        return ret;
    }
    const parentByProp = ( el, prop ) => el && ( prop in el ? el : parentByProp( el.parentNode, prop ) );

    const current       = $0
        , customElement = parentByProp( current, 'xml' )
        , xml           = customElement?.xml
        , dce           = customElement?.dce || parentByProp( current, 'dce' )?.dce;

    const data =    { __proto__: null
                    , ...( props.xml     ? {     xml: xml2str( xml ) } : {} )
                    , ...( props.datadom ? { datadom: xml2obj( xml ) } : {} )
                    };

    const template = !dce ? null :
                    {   __proto__: null
                    , ...( props.declaration? { declaration: dce                    } : {} )
                    , ...( props.       xslt? {        xslt: xml2str( dce?.xslt )   } : {} )
                    , ...( props.       html? {        html: dce?.innerHTML         } : {} )
                    , ...( props.templatedom? { templatedom: xml2obj( dce )         } : {} )
                    };

    return          { __proto__: null
                    , current, customElement
                    ,   ...( props.flatten ? { ...template, ...data } : { template, data } )
                    };
}

chrome.devtools.panels.elements.createSidebarPane(
    "Transformation",
    function( sidebar )
    {
        const updateElementProperties = () => sidebar.setExpression( `(${ getProperties.toString() })(${JSON.stringify(props)})` );

        updateElementProperties();
        chrome.storage.sync.get( props, items =>
        {
            Object.keys(props).forEach( k => props[ k ] = items[ k ] );
            updateElementProperties();
        } );
        chrome.storage.onChanged.addListener( ( changes/*, namespace*/ ) =>
        {
            for( let [ key, { /*oldValue,*/ newValue } ] of Object.entries( changes ) )
            {   props[ key ] = newValue;
                updateElementProperties();
            }
        } );
        chrome.devtools.panels.elements.onSelectionChanged.addListener( updateElementProperties );
    } );
