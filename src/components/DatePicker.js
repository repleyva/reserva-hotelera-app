import "../styles/datepicker.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { Button, InputBase } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectStart, setStart } from "../features/startSlice";
import { selectEnd, setEnd } from "../features/endSlice";
import { useState } from "react";

const DatePicker = () => {
  const start = useSelector(selectStart);
  const end = useSelector(selectEnd);
  const dispatch = useDispatch();
  const [startChange, setStartChange] = useState(start);
  const [endChange, setEndChange] = useState(end);

  const selectionRange = {
    startDate: startChange,
    endDate: endChange,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartChange(ranges.selection.startDate);
    setEndChange(ranges.selection.endDate.getTime());

    /* console.log(ranges.selection.startDate.getTime());
    console.log(ranges.selection.endDate.getTime()); */

    dispatch(setStart(ranges.selection.startDate.getTime()));
    dispatch(setEnd(ranges.selection.endDate.getTime()));
		// console.log(start, end);
  };
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
