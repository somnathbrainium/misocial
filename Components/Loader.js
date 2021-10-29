import { Spinner } from "react-bootstrap";

export default function Loader() {

    return (
        <div className="loading">
            <div className="loader-content">
                <div className="spin">
                    <Spinner animation="grow" size="sm" />
                    <Spinner animation="grow" size="md" />
                    <Spinner animation="grow" size="sm" />
                </div>
                <p> loading....</p>
            </div>

        </div>
    )
}