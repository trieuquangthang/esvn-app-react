import React, { useState } from 'react';
import { Modal, Table, Button, Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

function TableComponent() {

  const [isInfor, setIsInfor] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      render: (_, record) => <>
        <a onClick={() => showInfor(record)}>{record.CustomerID}</a>
        <Modal title="thong tin" open={isInfor}  onOk={handleOk} onCancel={handleCancel}>
        </Modal>
      </>,
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
      render: (_, record) =>
        <>
          <EditOutlined style={{ color: 'orange' }} onClick={() => handleEdit(record)} />
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
          ><DeleteOutlined style={{ color: 'red' }} onClick={() => handleDelete(record)} /></Popconfirm>
        </>,
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

  const handleDelete = (record: any) => {
    console.log(record)
  }

  const showInfor = (record: any) => {
    console.log(record)
    setIsInfor(true)
  }

  const handleEdit = (record: any) => {
    console.log(record)
  }

  const confirm = (e: any) => {
    console.log(e);

  };
  
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    setIsInfor(false)
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setIsInfor(false)
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Them moi
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      </Modal>
      <Table dataSource={data} columns={columns}>
      </Table>
    </>)
}
export default TableComponent;