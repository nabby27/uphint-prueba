async function save(key: string, data: unknown) {
    await chrome.storage.sync.set({ [key]: data });
}

async function get(key: string): Promise<unknown> {
    return new Promise((resolve) => {
        chrome.storage.sync.get(key, (dataSaved) => {
            resolve(dataSaved[key] ?? {})
        });
    })
}

export const GenericStore = {
    save,
    get,
}