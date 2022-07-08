import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import FolderList from "./components/FolderList/FolderList";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Account from "./components/Account/Account";
import Task from "./components/Task/Task";
import Alltasks from "./components/Alltasks/Alltasks";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Form /> <FolderList />
              </>
            }
          />
          <Route path="/tasks" element={<Alltasks />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/:id" element={<Task />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
