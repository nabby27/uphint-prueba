import { useEffect, useState } from 'react';
import { StateService } from '../../service/State.service';
import { Logo } from './Logo/Logo';
import './Popup.css';
import { RecordingButton } from './RecordingButton/RecordingButton';

export function Popup(){
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    const initializeState = async () => {
      const isRecording = await StateService.getRecordingState()
      setIsRecording(isRecording)
    }

    initializeState()
  }, [])

  return (
    <div className="App">

      <Logo isRecording={isRecording}/>
      
      {isRecording &&
        <h1 className="RecordingText">
          Recording
        </h1>
      }

      <RecordingButton
        isRecording={isRecording}
        onClick={() => {
          setIsRecording(!isRecording)
          StateService.changeRecordingState(!isRecording)
        }}
      />
    </div>
  );
};
