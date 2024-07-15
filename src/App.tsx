import GlobalStyle, { Container } from "./styles";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={router} />
      </Container>
    </Provider>
  );
}

export default App;
