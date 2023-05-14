import { useAuth } from "Context";

const Alert = () => {

    const {alert} = useAuth();
    return(
        <>
            {alert.type === "success" && (
                <div className="alert alert-success" role="alert">
                    {alert.message}
                </div>
            )}
            {alert.type === "error" && (
                <div className="alert alert-danger" role="alert">
                    {alert.message}
                </div>
            )}

        </>
    )
}

export default Alert;