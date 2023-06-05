import './Loading-page.css';
import tiuLu from '../../assets/loading-images/tiuLu.png'

function LoadingPage() {
  return (
    <div className="loading-page">
            <img
            src={tiuLu}  // Substitua a URL pela imagem desejada
            alt="Loading Spinner"
            className="loading-spinner"
            />
    </div>
  );
}

export default LoadingPage;