import { useState } from 'react';
import { deleteItem, updateItem } from '../api/ItemAPI';
import Button from '../components/Button';
import ItemEdit from '../components/ItemEdit';
import Modal from '../components/Modal';

const ItemDetail = (props) => {
  const { curItem, setCurItem, setItems, updateItemList } = props;
  
  const [delModal, setDelModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const handleEditBtn = async (id, nama, qty, desc) => {
    var res = await updateItem(id, nama, qty, desc);
    console.log(res);
    setCurItem(res);
    updateItemList(id, res);
  }

  const handleDelBtn = async (id) => {
    var res = await deleteItem(id);
    console.log(res);
    setItems(o => o.filter(x => x.id !== id));
    setCurItem(null);
  }

  const formatDate = (date) => {
    const d = new Date(date);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return d.toLocaleDateString("en-US", options) + " - " + d.toLocaleTimeString("en-US");
  }

  return (
    <section className="bg-primary-0 ml-4 p-5 pb-0 relative flex-grow">
      {curItem && (
        <div className="h-full relative">
          <header>
            <div className="flex justify-between items-baseline">
              <p className="text-h2 font-bold">{curItem.name}</p>
              <p className="text-h4 font-bold">{curItem.quantity} Buah</p>
            </div>
            
            <div className="flex flex-row">
              <div className="flex flex-col w-max">
                <p className="text-subtitle text-primary-600 font-semibold mt-1">
                  Created
                </p>          
                <p className="text-subtitle text-primary-600 font-semibold mt-1">
                  Last updated
                </p>
              </div>
              <div className="flex flex-col w-max ml-2">
                <p className="text-subtitle text-primary-600 font-semibold mt-1">
                  : {formatDate(curItem.createdAt)}
                </p>
                <p className="text-subtitle text-primary-600 font-semibold mt-1">
                  : {formatDate(curItem.updatedAt)}
                </p>
              </div>
            </div>
          </header>

          <section className="mt-10">
            <p className="text-p1">
              {curItem.description}
            </p>
          </section>

          <section className="absolute bottom-4 right-3 flex">
            <div className="w-40 h-20">
              <Button onClick={() => setDelModal(true)}>
                <p className="text-h4 text-primary-0 font-bold">Delete Item</p>
              </Button>
            </div>

            <div className="w-40 h-20 ml-2">
              <Button onClick={() => setEditModal(true)}>
                <p className="text-h4 text-primary-0 font-bold">Edit Item</p>
              </Button>
            </div>
          </section>
        </div>
      )}
      {
        delModal && (
          <Modal closeModal={() => setDelModal(false)}>
            <p className="text-h4">Confirm delete item { curItem && curItem.name} ?</p>
            <div className="grid grid-cols-2 gap-8 mt-6 text-button h-12">
              <Button onClick={async () => {
                curItem && await handleDelBtn(curItem.id);
                setDelModal(false);
              }}>Yes</Button>
              <Button onClick={() => setDelModal(false)}>No</Button>
            </div>
          </Modal>
        )
      }
      {
        editModal && (
          <Modal closeModal={() => setEditModal(false)}>
            <ItemEdit
              item={curItem}
              handleSaveBtn={handleEditBtn}
              onModalClose={() => setEditModal(false)}
            />
          </Modal>
        )
      }
    </section>
  );
};

export default ItemDetail;
