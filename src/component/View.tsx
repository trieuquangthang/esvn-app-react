import React, { useState } from 'react';
import { Table, Modal, Button } from 'antd';

const data = [
  {
    key: '1',
    stt: 1,
    CustomerID: 1001,
    name: 'John Doe',
    age: 30,
    phoneNumber: 1234567890,
    email: 'john@example.com',
    address: '123 Main St',
  },
];

const columns = [
  { title: 'STT', dataIndex: 'stt', key: 'stt' },
  { title: 'Customer ID', dataIndex: 'CustomerID', key: 'CustomerID' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Phone Number', dataIndex: 'phoneNumber', key: 'phoneNumber' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: (_:any, record:any) => (
      <Button onClick={View}>View</Button>
    ),
  },
];

function View() {
  const [visible, setVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <Table dataSource={data} columns={columns} />

      <Modal
        title="View Record"
        visible={visible}
        onCancel={handleCancel}
        footer={[
          <Button key="close" onClick={handleCancel}>
            Close
          </Button>,
        ]}
      >
        {selectedRecord && (
          <div>
            {/* <p>STT: {selectedRecord}</p>
            <p>Customer ID: {setselectedRecord.CustomerID}</p>
            <p>Name: {selectedRecord.name}</p>
            <p>Age: {selectedRecord.age}</p>
            <p>Phone Number: {selectedRecord.phoneNumber}</p>
            <p>Email: {selectedRecord.email}</p>
            <p>Address: {selectedRecord.address}</p> */}
          </div>
        )}
      </Modal>
    </div>
  );
}

export default View;