import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import { TaskProvider } from "./context/TaskContext";
import { userRoute } from "./routes/UserRoute";
function App() {
  return (
    <TaskProvider>
      <Router>
        <div className="container">
          <Header />

          <Routes>
            {userRoute.map((route) => {
              return (
                <Route
                  path={route.path}
                  exact={route.exact}
                  element={route.element}
                />
              );
            })}
          </Routes>

          <Footer />
        </div>
      </Router>
    </TaskProvider>
  );
}

export default App;
