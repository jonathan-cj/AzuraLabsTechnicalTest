import { useEffect, useState } from 'react';
import { getItem } from '../api/ItemAPI';
import ItemDetail from '../modules/ItemDetail';
import List from '../modules/List'

const Home = (props) => {
  const [items, setItems] = useState([]);
  const [curItem, setCurItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      var res = await getItem("");
      console.log(res);
      setItems(res);
    };
  
    fetchData();
  }, [])
  

  const updateItemList = (id, newItem) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return newItem;
      }

      return item;
    });

    setItems(newItems);
  }

  return (
    <div className="flex flex-col h-full max-h-full px-8 py-5">
      <div className="flex-grow mt-6 relative">
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-row">
          <List 
            curItem={curItem}
            items={items}
            setCurItem={setCurItem}
          />

          <ItemDetail
            curItem={curItem}
            setCurMenu={setCurItem}
            setMenus={setItems}
            updateItemList={updateItemList}
          />
        </div>
      </div>
    </div>
  )
}

export default Home;
