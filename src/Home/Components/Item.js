const Item = ({ id, note, date, time, deleteData }) => {
  
    function deleteItem() {
    deleteData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  }

  return (
    <div className="Item">
        <div className="flex">
        <input type="checkBox" className="checkBox"></input>
            <div className="word1">{note}</div>
            <div className="word2">
                {date} {time}
            </div>
            <div onClick={deleteItem} className="btn2">刪除</div>
        </div>
    </div>
  );
};

export default Item;
