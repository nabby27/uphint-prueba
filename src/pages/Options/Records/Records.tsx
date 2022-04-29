import { RecordData, RecordDataInDatetime } from '../../../service/RecordData.service';
import './RowRecord.css';

export function Records({
  records
}: {
  records: RecordDataInDatetime;
}): JSX.Element {
  return (
    <div className="Records">
      <div className="RowRecord RowRecordTitle">
        <div className="RowRecordCell">Datetime</div>
        <div className="RowRecordCell">Text</div>
      </div>

      {Object.keys(records).map((datetime => (
        <RowRecord
          dateTime={datetime}
          record={records[datetime]}
        />
      )))}
    </div>
  )
}

function RowRecord({
  dateTime,
  record
}: {
  dateTime: string;
  record: RecordData;
}): JSX.Element {
  return (
    <div className="RowRecord">
      <div className="RowRecordCell">{dateTime}</div>
      <div className="RowRecordCell">{record.text}</div>
    </div>
  )
}

