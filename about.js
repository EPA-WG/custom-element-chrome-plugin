function initCheckbox( input ){

    const id = input.id;
    chrome.storage.sync.get( { [id]: true }, items => input.checked = items[id] );
    input.onchange = ()=> chrome.storage.sync.set({ [id] : input.checked });
}
[...document.querySelectorAll('input')].forEach( initCheckbox);
