import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TestProvider } from "./context/TestContext";
import Home from "./pages/Home";
import Result from "./pages/Result/index";
import Test from "./pages/Test/index";

function App() {
  return (
    <BrowserRouter>
      <TestProvider>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="test" element={<Test />} />
            <Route path="result" element={<Result />} />
          </Route>
        </Routes>
      </TestProvider>
    </BrowserRouter>
  );
}

export default App;
