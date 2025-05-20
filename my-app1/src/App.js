import React, { useState, useEffect } from 'react';
import api from './api';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // Fetch all items
  const fetchItems = async () => {
    const res = await api.get('/');
    setItems(res.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);
  // console.log(selectedItem)

  const handleAddOrUpdate = async (item) => {
    //console.log
    if (item._id) {  //for edit
      await api.put(`/${item._id}`, item);
    } else {
      await api.post('/add', item);
    }
    setSelectedItem(null);
    fetchItems();
  };

  const handleDelete = async (id) => {
    await api.delete(`/${id}`);
    fetchItems();
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🛒 MERN Item CRUD App</h2>
      <ItemForm onSubmit={handleAddOrUpdate} selectedItem={selectedItem} clearSelection={() => setSelectedItem(null)} />
      <ItemList items={items} onEdit={setSelectedItem} onDelete={handleDelete} />
    </div>
  );
}

export default App;

