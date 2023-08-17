import React, { useEffect, useState } from "react";
import data from "./data/folderData";
import { insertItem } from "./helper";
import Menu from "./components/Menu";
import "./index.css";

export default function Index() {
  const [menu, setMenu] = useState<any>(data);
  const addItem = (menuItem: any, id: any) => {
    console.log(menu, id);
    const newTree = insertItem(menu, id, menuItem);
    console.log(newTree);
    setMenu(newTree);
  };
  console.log(menu);

  return (
    <>
      <h1>Side Menu</h1>
      <div className="mainContainer">
        <Menu handleInsert={addItem} menuItem={menu} />
      </div>
    </>
  );
}
