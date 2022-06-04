import { useState } from "react";
import Button from "./Button";

const MenuEdit = (props) => { 
  const { item, onModalClose, handleSaveBtn } = props;

  const [name, setName] = useState(item.name);
  const [quantity, setQty] = useState(item.quantity);
  const [desc, setDesc] = useState(item.description);

  return (
    <div className={`flex flex-col w-[500px]`}>
      <div className="flex flex-row justify-between items-center">
          <p className="text-subtitle font-semibold text-primary-1000">Name</p>
          <input
            type="text"
            className="text-center w-[200px] p-1 border-2 rounded-md text-subtitle font-semibold"
            value={name}
            onChange={(e) => setName(e.target.value)}/>
      </div>
      <div className="flex flex-row justify-between items-center mt-2">
          <p className="text-subtitle font-semibold text-primary-1000">Quantity</p>
          <input
            type="number"
            className="text-center w-[200px] p-1 border-2 rounded-md text-subtitle font-semibold"
            value={quantity}
            onChange={(e) => setQty(parseInt(e.target.value))}
            step={1}/>
      </div>
      <div className="mt-2">
          <p className="text-subtitle font-semibold text-primary-1000">Desc</p>
          <textarea
            className="w-full p-1 border-2 rounded-md text-subtitle font-semibold"
            onChange={(e) => setDesc(e.target.value)}
            rows={5}
            value={desc}
          >
          </textarea>
      </div>
      <div className="flex justify-end mt-10">
        <div className="w-[100px]">
          <Button onClick={()=>{
            handleSaveBtn(item.id, name, quantity, desc);
            onModalClose();
          }}>
            <p className="text-h4 text-primary-0 font-bold text-center">Save</p>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MenuEdit;
