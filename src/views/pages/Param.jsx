import { useParams } from "react-router-dom";

const Param = props => {

    const {id} = useParams()

    return(
        <>
            <div className="Param">
                <h1>Component Param</h1>
                <p>Parâmetro {id}</p>
            </div>
        </>
    )
}

export default Param;