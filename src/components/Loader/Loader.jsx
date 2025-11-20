import { MoonLoader } from "react-spinners";
import './loader.scss';

export default function Loader() {
  return (
      <div className='loader-wrapper'>
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
