import './App.css';
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Routes/Routes";

function App() {
  return (
    <div className="App" data-theme="cmyk">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
