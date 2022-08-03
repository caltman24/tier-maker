const ToggleSwitch = ({ isChecked, toggleTheme }) => {
  return (
    <>
      <input
        type="checkbox"
        id="switch"
        className="toggle-switch"
        checked={isChecked}
        onChange={toggleTheme}
      />
      <label htmlFor="switch" className="switch-label">
        Toggle
      </label>
      <small className="switch-text">Toggle {isChecked ? "Dark" : "Light"} Mode</small>
    </>
  );
};

export default ToggleSwitch;
