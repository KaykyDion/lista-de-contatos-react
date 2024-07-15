import GlobalStyle, { Container } from "./styles";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
