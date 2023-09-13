import React, { useState } from 'react';
import { Divider, Modal, Radio, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Space, Tag } from 'antd';
// import View from './View';

interface DataType {
    key: React.Key;
    stt: number;
    CustomerID: number;
    name: string;
    age: number;
    phoneNumber: number;
    email: string;
    address: string;

}

const columns: ColumnsType<DataType> = [
    {
        title: 'STT',
        dataIndex: 'stt',
    },
    {
        title: 'CustomerID',
        dataIndex: 'CustomerID',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Phone',
        dataIndex: 'phoneNumber',

    },
    {
        title: 'Email',
        dataIndex: 'email',

    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
    {
        title: 'Actions',
        dataIndex: '',
        render: (_,record) => <button onClick={()=>handleDelete(record)}>delete</button>,
    },
];

const data: DataType[] = [
    {
        key: '1',
        stt: 1,
        CustomerID: 1,
        name: 'Triệu Quang Đức',
        age: 18,
        phoneNumber: 941399432,
        email: 'ductq@gmail.com',
        address: 'Xóm liều, Hà Nội 9',

    },
    {
        key: '2',
        stt: 1,
        CustomerID: 1,
        name: 'Triệu Quang Đức',
        age: 18,
        phoneNumber: 941399432,
        email: 'ductq@gmail.com',
        address: 'Xóm liều, Hà Nội 9',
    },
    {
        key: '3',
        stt: 1,
        CustomerID: 1,
        name: 'Triệu Quang Đức',
        age: 18,
        phoneNumber: 941399432,
        email: 'ductq@gmail.com',
        address: 'Xóm liều, Hà Nội 9',
    },
    {
        key: '4',
        stt: 1,
        CustomerID: 1,
        name: 'Triệu Quang Đức',
        age: 18,
        phoneNumber: 941399432,
        email: 'ductq@gmail.com',
        address: 'Xóm liều, Hà Nội 9',
    }
];


const handleDelete = (record:any)=>{
console.log(record)
}

 

function TableComponent () {



    const [isModalOpen , setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
      };
      const handleOk = () => {
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };
    return (
    <>
    <Button type="primary" onClick={showModal}>
    Open Modal
  </Button>
  <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Modal>
    <Table dataSource={data} columns={columns}>
    </Table>
    </>)
}
export default TableComponent;