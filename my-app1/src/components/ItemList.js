import React from 'react';

const ItemList = ({ items, onEdit, onDelete }) => {
  return (
    <div>
      <h4>All Items List</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th><th>Description</th><th>Price</th><th>Actions</th>
          </tr>
        </thead>
        npm install axios bootstrap
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>₹{item.price}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(item)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => onDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;

