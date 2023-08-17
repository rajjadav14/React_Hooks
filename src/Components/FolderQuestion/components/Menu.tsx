import React, { useState } from "react";

function Menu({ handleInsert, menuItem }: any) {
  const [showItems, setShowItems] = useState(false);
  const [showFolder, setShowFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

  const handleItemClick = () => setShowItems((pre) => !pre);
  const handleAddFile = (e: any) => {
    if (e.keyCode === 13 && e.target.value) {
      console.log("in enter folder", e.target.value, menuItem.id);
      console.log(handleInsert);
      handleInsert(e.target.value, menuItem.id);
      setShowFolder(false);
      setShowItems(true);
    }
  };
  return (
    <>
      <div className="folder" onClick={handleItemClick}>
        <div>{menuItem.name}</div>
        <div className="addIcons">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowFolder(true);
              setShowItems(true);
            }}
            className="icons"
          >
            Add +
          </button>
        </div>
      </div>

      {showFolder && (
        <div className="items">
          <div className="folder">
            <span className="iconFolder"></span>
            <input
              value={newFolderName}
              onKeyDown={handleAddFile}
              onChange={(e: any) => setNewFolderName(e.target.value)}
              onBlur={() => setShowFolder(false)}
            ></input>
          </div>
        </div>
      )}

      {showItems && (
        <div className="items">
          {menuItem.items.map((item: any) => (
            <Menu handleInsert={handleInsert} menuItem={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default Menu;
