import React, { useState, useEffect } from 'react';


const ItemForm = ({ onSubmit, selectedItem, clearSelection }) => {
  const [formData, setFormData] = useState({ name: '', description: '', price: '' });

  useEffect(() => {
    if (selectedItem) {
      setFormData(selectedItem);
    }
  }, [selectedItem]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', description: '', price: '' });
  };

  const clear= (e) => {
    setFormData({ name: '', description: '', price: '' });
    clearSelection();
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input name="name" className="form-control mb-2" placeholder="Item Name"
      value={formData.name} 
      onChange={handleChange} required 
      />
      <input name="description" className="form-control mb-2" placeholder="Description" value={formData.description} onChange={handleChange} required />
      <input type="number" name="price" className="form-control mb-2" placeholder="Price" value={formData.price} onChange={handleChange} required />
      <button type="submit" className="btn btn-primary me-2">{selectedItem ? 'Update' : 'Add'} Item</button>
      {selectedItem && <button type="button" className="btn btn-secondary" 
      onClick={clear}
      >Cancel</button>}
    </form>
  );
};

export default ItemForm;
