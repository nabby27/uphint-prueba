// This script is injected into all pages used in chrome
// Should be use to capture all events and send them to the background page

import { StateService } from "../../service/State.service";

console.log("Content page loaded, event capture logic should appear here.");

window.addEventListener("click", async (e) => {
    const isRecording = await StateService.getRecordingState()
    if (isRecording) {
        chrome.runtime.sendMessage({
            type: "click",
            data: {
                text: (e.target as HTMLElement).innerText,
            },
        });
    }
});
