import logo from '../../../assets/img/icon-128.png';
import './Logo.css';

export function Logo({
  isRecording,
}: {
  isRecording: boolean;
}) {
  return (
    <div className="ImageContainer">
      <img className={`
                Logo
                ${isRecording && 'LogoAnimation'}
            `}
        src={logo}
        alt="uphint logo"
      />
    </div>
  );
};
