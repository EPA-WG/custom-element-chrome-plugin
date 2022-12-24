const rule1 = {
    conditions: [
        new chrome.declarativeContent.PageStateMatcher({
            css: ["custom-element"]
        })
    ],
    // And shows the extension's page action.
    actions: [new chrome.declarativeContent.ShowAction()]
};
const rule2 = {
    conditions: [
        new chrome.declarativeContent.PageStateMatcher({
            css: ["custom-element"]
        })
    ],
    // And shows the extension's page action.
    actions: [new chrome.declarativeContent.ShowAction()]
};

// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function (details) {
    // chrome.action.disable();

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([rule1]);
    });
});
