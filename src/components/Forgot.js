import { Link } from "react-router-dom";
import useClass from './../hooks/add-class-body';

const Forgot = () => {
    useClass('bg-blue')
    return (
      <div>
        <h1>Forgot</h1>
        <Link to="/login">Login</Link>
      </div>
    );
}

export default Forgot;