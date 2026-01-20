import { useState } from "react";

const DateDropdown = ({ dates, selectedDate, onChange }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (date) => {
    onChange(date);
    setOpen(false);
  };

  return (
    <div className="custom-dropdown">
      <div className="dropdown-header" onClick={() => setOpen(!open)}>
        {selectedDate}
        <span className={`arrow ${open ? "up" : ""}`}>⌄</span>
      </div>

      {open && (
        <div className="dropdown-list">
          {dates.map((date) => (
            <div
              key={date}
              className="dropdown-item"
              onClick={() => handleSelect(date)}
            >
              {date}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DateDropdown;
