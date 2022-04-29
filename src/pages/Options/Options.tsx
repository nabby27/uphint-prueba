import { useEffect, useState } from 'react';
import { RecordDataInDatetime, RecordDataService } from '../../service/RecordData.service';
import './Options.css';
import { Records } from './Records/Records';

interface Props {
  title: string;
}

export function Options({ title }: Props) {
  const [data, setData] = useState<RecordDataInDatetime>();

  
  useEffect(() => {
    async function loadData() {
      const loadedData = await RecordDataService.getRecordDataInDatetime();
      setData(loadedData);
    }
    
    loadData()

    chrome.storage.onChanged.addListener((allData) => {
      setData(allData.uphint?.newValue);
    })
  }, []);

  return (
    <div className="OptionsContainer">
      <h1 className="Title">
        User clicks should be displayed here.
      </h1>

      {data && <Records records={data}/>}
    </div>
  );
};
