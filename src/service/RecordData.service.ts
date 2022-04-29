import { GenericStore } from "./GenericStore";

export interface RecordDataInDatetime {
    [datetime: string]: RecordData;
}

export interface RecordData {
    pageX: string;
    pageY: string;
    text: string;
}

const key = 'uphint-data';

async function addNewData(id: string, recordData: RecordData) {
    let data: RecordDataInDatetime = await getRecordDataInDatetime()
    data[id] = recordData;

    await GenericStore.save(key, data);
}

async function getRecordDataInDatetime(): Promise<RecordDataInDatetime> {
    return GenericStore.get(key) as Promise<RecordDataInDatetime>
}

export const RecordDataService = {
    addNewData,
    getRecordDataInDatetime,
}