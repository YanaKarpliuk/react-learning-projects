import { MoonLoader } from "react-spinners";
import './loader.scss';

export default function Loader({local}) {
  return (
      <div className={`loader-wrapper ${local ? 'local-loader' : ''}`}>
        <MoonLoader
            color={'#fff'}
            loading={true}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
      </div>
  );
}
