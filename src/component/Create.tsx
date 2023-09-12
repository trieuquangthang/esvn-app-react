import React, { useState, useEffect } from 'react';


function AddNewItem() {
  const [newItem, setNewItem] = useState({ orderId: '', Name: '' });

  const handleSave = () => {
    if (newItem.orderId.trim() === '' || newItem.Name.trim() === '') {
      alert('Vui lòng điền đầy đủ thông tin.');
      return;
    }

    // onAddItem(newItem);
    setNewItem({ orderId: '', Name: '' });
  };

  return (
    <div className="Modal">
      <input
        type="text"
        placeholder="Mã đơn"
        value={newItem.orderId}
        onChange={(e) => setNewItem({ ...newItem, orderId: e.target.value })}
      />
      <input
        type="text"
        placeholder="Họ Tên"
        value={newItem.Name}
        onChange={(e) => setNewItem({ ...newItem, Name: e.target.value })}
      />
      <button onClick={handleSave}>Lưu</button>
    </div>
  );
}

export default AddNewItem