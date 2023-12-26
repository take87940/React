import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add }) => {
  const [note, setNote] = useState("None");
  function noteChange(e) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState("xxxx/xx/xx");
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("xx:xx");
  function timeChange(e) {
    setTime(e.target.value);
  }

  function addItem() {
    add(function (prevData) {
      return [{ id: v4(), note, date, time }, ...prevData];
    });
  }
  function clear() {
    add([]);
  }

  return (
    <div className="Edit">
      <h1>TodoList</h1>
      <p>Event:</p>
      <input type="text" className="input" value={note} onChange={noteChange} />
      <p>Day:</p>
      <input type="date" className="input" value={date} onChange={dateChange} />
      <p>Time:</p>
      <input type="time" className="input" value={time} onChange={timeChange} />
      <div onClick={addItem} className="btn1">
        新增
      </div>
      <div onClick={clear} className="btn1">
        清空
      </div>
    </div>
  );
};

export default Edit;
