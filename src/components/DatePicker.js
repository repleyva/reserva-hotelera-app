import "../styles/datepicker.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { Button, InputBase } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import { Link } from "react-router-dom";

const DatePicker = () => {
  const selectionRange = {
    startDate: new Date(2021, 3, 10),
    endDate: new Date(2021, 3, 15),
    key: "selection",
  };
  const handleSelect = () => {};
  return (
    <div className="date-container">
      <DateRangePicker
        className="date-picker"
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
      <div className="input-guest">
        <h3>Number of guest</h3>
        <div className="input-guest-number">
          <InputBase placeholder="2pax" className="input-base" />
          <GroupIcon />
        </div>
        <Link to="/search" className="input-link">
          <Button className="button-link">
            <h4>SEARCH ROOMS</h4>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DatePicker;
