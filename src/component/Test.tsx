
import React, { useState } from 'react';
import { Modal, Table, Button, Popconfirm, Form, InputNumber, Input } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';

function Test() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isCreated, setIsCreated] = useState(false);
    const [isView, setIsView] = useState(false);
    const [data, setData] = useState([
        {
            id: 1,
            stt: 1,
            ID: "0021",
            Tên: "John Joe",
            SĐT: "0941399432",
            Tuổi: "Chờ xử lý",
            Address: "18/08/2017",
        },
        {
            id: 2,
            stt: 2,
            ID: "0021",
            Tên: "John Joe",
            SĐT: "0941399432",
            Tuổi: "Chờ xử lý",
            Address: "18/08/2017",
        },
        {
            id: 3,
            stt: 3,
            ID: "0021",
            Tên: "John Joe",
            SĐT: "0941399432",
            Tuổi: "Chờ xử lý",
            Address: "18/08/2017",
        },
        {
            id: 4,
            stt: 4,
            ID: "0021",
            Tên: "John Joe",
            SĐT: "0941399432",
            Tuổi: "Chờ xử lý",
            Address: "18/08/2017",
        },
    ]);

    const handleEdit = () => {
        setIsModalOpen(true)
    };
    const handleDelete = () => {
        setIsDeleteOpen(true)
    };
    const handleEditCancel = () => {
        setIsModalOpen(false)
        setIsDeleteOpen(false)
    }
    const handleEditOK = () => {
        setIsModalOpen(false)
    }
    const handleDeleteOk = () => {
        setIsDeleteOpen(false)
    }
    const handleCreatedCancle = () =>{
        setIsCreated(false)
    }
    const handleCreatedOk = () =>{
        setIsCreated(false)
    }
    const handleCreated = () => {
        setIsCreated(true)
    }
    const handleViewCancel = () =>{
        setIsView(false)
    }
    const handleView = () =>{
        setIsView(true)
    }
    


    return (
        <>
            <button onClick={() => handleCreated()}>Thêm mới</button>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>SĐT</th>
                        <th>Tuổi</th>
                        <th>Địa chỉ</th>
                        <th>Ngày tạo</th>
                        <th>Quản lý</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.stt}</td>
                            <td>{item.ID}</td>
                            <td>{item.Tên}</td>
                            <td>{item.SĐT}</td>
                            <td>{item.Tuổi}</td>
                            <td>{item.Address}</td>
                            <td><button onClick={() => handleEdit()}>Edit</button><button onClick={() => handleDelete()}>Delete</button><button onClick={() => handleView()}>View</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal
                title="Thêm mới"
                visible={isCreated}
                onCancel={handleCreatedCancle}
                onOk={handleCreatedOk}
            >
                Ok
            </Modal>

            <Modal
                title="Sửa"
                visible={isModalOpen}
                onCancel={handleEditCancel}
                onOk={handleEditOK}
            >
                Ok
            </Modal>
            <Modal
                title="Xóa"
                visible={isDeleteOpen}
                onCancel={handleEditCancel}
                onOk={handleDeleteOk}
            >
                Ok
            </Modal>
            <Modal
                title="Chỉ xem"
                visible={isView}
                onCancel={handleViewCancel}
                footer={null}
            >
                Ok
            </Modal>
        </>

    )
}

export default Test;