import PropTypes from "prop-types";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import TaskContext from "../../context/TaskContext";
import Button from "./Button";

const Header = ({ title }) => {
  const location = useLocation();
  const { showTaskForm, handleShowTaskForm } = useContext(TaskContext);

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showTaskForm ? "red" : "green"}
          text={showTaskForm ? "Close" : "Add"}
          onClick={() => {
            handleShowTaskForm();
          }}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Todolist Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
