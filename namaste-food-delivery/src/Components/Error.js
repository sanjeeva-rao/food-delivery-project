import { useRouteError } from "react-router-dom";

const Error = () => {
    const errorObj = useRouteError();
    console.log(errorObj);
    
    return <div>
        <div>Oops !!!!!!!!!</div>
        <div>{errorObj.error.message}</div>
    </div>
}

export default Error;