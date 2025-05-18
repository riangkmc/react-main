import {Container } from "react-bootstrap"
import {Routes,Route} from "react-router-dom"

function AppRoutes(){
    return(
        <Container>
            <Routes>
                <Route path="/" element={""}></Route>
            </Routes>
        </Container>
    )
}

export default AppRoutes