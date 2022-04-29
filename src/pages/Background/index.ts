// This page is the background page for the extension. 
// It is always running and should be used for any background tasks.

import { RecordDataService } from "../../service/RecordData.service";

console.log("Background page loaded, logic should be written here.");

chrome.runtime.onMessage.addListener(async function (msg, sender) {
    if (msg.type === "click") {
        const currentDatetime = new Date().toISOString();
        await RecordDataService.addNewData(currentDatetime, msg.data);
    }
});
