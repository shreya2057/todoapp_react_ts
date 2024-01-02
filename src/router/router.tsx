import { 
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import App from "../App";
import CreateTodoScreen from "../screen/CreateTodo";
import EditTodoScreen from "../screen/EditTodo";

function AppRouter(){
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="/create" element={<CreateTodoScreen/>}/>
                    <Route path="/edit" element={<EditTodoScreen/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default AppRouter;