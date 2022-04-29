import { GenericStore } from "./GenericStore";

const key = 'uphint-recording';

async function changeRecordingState(isRecording: boolean) {
    await GenericStore.save(key, isRecording);
}

async function getRecordingState(): Promise<boolean> {
    return GenericStore.get(key) as Promise<boolean>
}

export const StateService = {
    changeRecordingState,
    getRecordingState,
}