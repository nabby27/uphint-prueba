import './RecordingButton.css';

export function RecordingButton({
  isRecording,
  onClick,
}: {
  isRecording: boolean;
  onClick: () => void;
}): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={`Button ${isRecording ? 'ButtonStop' : 'ButtonStart'}`}
    >
      {isRecording ? 'Stop Recording' : 'Start Recording'}
    </button>
  )
}
