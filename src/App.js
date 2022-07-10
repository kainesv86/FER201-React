import "./App.css";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "./redux/configureStore";
import { Provider } from "react-redux";

function App() {
        const store = configureStore();

        return (
                <Provider store={store}>
                        <BrowserRouter>
                                <div className="App">
                                        <Main />
                                </div>
                        </BrowserRouter>
                </Provider>
        );
}

export default App;
