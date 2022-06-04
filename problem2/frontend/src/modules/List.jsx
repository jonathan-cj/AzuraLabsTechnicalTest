import { useState } from 'react';
import { createItem } from '../api/ItemAPI';
import { ReactComponent as PlusIcon } from '../assets/icons/ic_plus.svg';
import ListItem from '../components/ListItem';
import Button from '../components/Button';
import Modal from '../components/Modal';
import ItemEdit from '../components/ItemEdit';

const List = (props) => {
  const { curItem, items, setItems, setCurItem } = props;

  const [addModal, setAddModal] = useState(false);

  const handleAddBtn = async (_, name, qty, desc) => {
    var res = await createItem(name, qty, desc);
    console.log(res);

    setItems([...items, res]);
  }

  return (
    <section className="w-[360px] h-full bg-primary-0 relative">
      <div className="h-full max-h-full overflow-y-auto overflow-x-hidden">
        {items.map((item, idx) => (
          <ListItem
            key={idx}
            item={item.name}
            active={curItem && curItem.id === item.id}
            onClick={() => setCurItem(item)}
          />
        ))}

        <div className="h-[100px]"></div>
            <div className="absolute bottom-4 right-4 w-32 h-20">
              <Button onClick={() => setAddModal(true)}>
                <PlusIcon className="w-[48px] h-[48px]" />
              </Button>
            </div>
            {addModal && (
              <Modal closeModal={() => setAddModal(false)}>
                <ItemEdit
                  item = {{
                    name: '',
                    qty: 0,
                    desc: ''
                  }}
                  onModalClose = {() => setAddModal(false)}
                  handleSaveBtn = {handleAddBtn}
                />
              </Modal>
            )}
      </div>
    </section>
  );
};

export default List;
