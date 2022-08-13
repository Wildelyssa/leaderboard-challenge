import "./Error.css";
import { useSelector } from 'react-redux';

const Error = () => {

  const { players: { error } } = useSelector(state => state);
  console.log(error);

  return (
    <div className="error_container">
      <h1 className='error-text'>{error}</h1>  
    </div>
  );
};

export default Error;