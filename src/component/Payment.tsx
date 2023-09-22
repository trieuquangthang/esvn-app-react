import React, { useState } from 'react';
import { Modal, Table, Button, Popconfirm, Form, InputNumber, Input } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
function Payment() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<SelectedRowType | null>(null);
    const [userUpdate, setUserUpdate] = useState<any>();
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [isView, setIsView] = useState(false);
    const [form] = Form.useForm();
    const [formUpdate] = Form.useForm();
    interface SelectedRowType {
        PaymentID: number;
        FirstName: string;
        LastName: string;
        Phone: string;
        Email: string;
        Status: string;
        CreateDate: string;
    }
    const [data, setData] = useState(
        [
            {
                PaymentID: "0021",
                FirstName: "John Joe",
                LastName: "Hat",
                Email: "john@example.com",
                Phone: "0941399432",
                Status: "Chờ xử lý",
                CreateDate: "18/08/2017",

            },
            {
                PaymentID: "0021",
                FirstName: "John Joe",
                LastName: "Hat",
                Email: "john@example.com",
                Phone: "0941399432",
                Status: "Chờ xử lý",
                CreateDate: "18/08/2017",
            },
            {
                PaymentID: "0021",
                FirstName: "John Joe",
                LastName: "Hat",
                Email: "john@example.com",
                Phone: "0941399432",
                Status: "Chờ xử lý",
                CreateDate: "18/08/2017",
            },
            {
                PaymentID: "0021",
                FirstName: "John Joe",
                LastName: "Hat",
                Email: "john@example.com",
                Phone: "0941399432",
                Status: "Chờ xử lý",
                CreateDate: "18/08/2017",
            }
        ]);


    const columns = [
        {
            title: "PaymentID",
            dataIndex: "PaymentID",
            render: (_: any, record: any) => <>
                <a onClick={() => handleShowView(record)}>{record.PaymentID}</a>
            </>,
        },
        {
            title: "Họ",
            dataIndex: "FirstName",
        },
        {
            title: "Tên",
            dataIndex: "LastName",
        },
        {
            title: "Điện thoại",
            dataIndex: "Phone",
        },
        {
            title: "Email",
            dataIndex: "Email",
        },
        {
            title: "Trạng Thái",
            dataIndex: "Status",
        },
        {
            title: "Ngày tạo",
            dataIndex: "CreateDate",
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (_: any, record: any) => (
                <div className="action">
                    <EditOutlined onClick={() => handleEdit(record)} />

                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => handleDelete(record)}
                        onCancel={handleDeleteCancel}
                        okText="Delete"
                        cancelText="Cancel"
                    >
                        <DeleteOutlined />
                    </Popconfirm>
                </div>
            ),
        },
    ];
    const showModal = () => {
        setIsModalOpen(true);
    };
    // Thêm mới 
    const handleCreatedOk = () => {
        // setData([...data, item]);
        setIsModalOpen(false);
    };
    const handleCreateCancel = () => {
        setIsModalOpen(false)
    }

    // Xóa 
    const handleDelete = (item: any) => {
        const newData = data.filter((dataItem) => dataItem.PaymentID !== item.PaymentID);
        setData(newData);
    };
    const handleDeleteCancel = () => {
    }
    // Chỉnh sửa 
    const handleEdit = (record: any) => {
        console.log()
        setIsModalOpen(true);
        setUserUpdate(record)
        form.setFieldsValue({
            FirstName: record.FirstName,
            LastName: record.LastName,
            Phone: record.Phone,
            Email: record.Email,
            Status: record.Status,
        })

    };
    // Xem
    const handleViewCancel = () => {
        setIsView(false);
    }
    const handleShowView = (record: any) => {
        setSelectedRow(record);
        setIsView(true);
    };
    const onHandleCreate = (value: any) => {
        setData(prev => [...prev, value])
        setIsModalOpen(false)
        form.resetFields();
    }
    const validateName = (rule: any, value: any) => {
        if (!value) {
            return Promise.reject('Vui lòng nhập tên!');
        } else if (/\d/.test(value)) {
            return Promise.reject('Tên không thể chứa chữ số!');
        }
        return Promise.resolve();
    };

    const validateEmail = (rule: any, value: any) => {
        if (!value) {
            return Promise.reject('Vui lòng nhập email!');
        } else if (!/^\S+@\S+\.\S+$/.test(value)) {
            return Promise.reject('Email không hợp lệ!');
        }
        return Promise.resolve();
    };

    const validatePhone = (rule: any, value: any) => {
        if (!value) {
            return Promise.reject('Vui lòng nhập số điện thoại!');
        } else if (!/^[0-9]{10}$/.test(value)) {
            return Promise.reject('Số điện thoại không hợp lệ!');
        }
        return Promise.resolve();
    };
    return (
        <div className="main-body">
            <h1>Payment</h1>
            <Button type="primary" onClick={showModal}>
                Thêm mới<PlusOutlined />
            </Button>
            <Modal title="Thêm mới" visible={isModalOpen} onOk={handleCreatedOk} onCancel={handleCreateCancel} footer={null}>
                <Form form={form} onFinish={onHandleCreate}>
                    <Form.Item
                        name="FirstName"
                        label="FirstName"
                        rules={[
                            { required: true, message: 'Vui lòng nhập FirstName!' },
                            { validator: validateName },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="LastName"
                        label="LastName"
                        rules={[
                            { required: true, message: 'Vui lòng nhập LastName!' },
                            { validator: validateName },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="Phone"
                        label="Phone"
                        rules={[
                            { required: true, message: 'Vui lòng nhập số điện thoại!' },
                            { validator: validatePhone },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="Email"
                        label="Email"
                        rules={[
                            { required: true, message: 'Vui lòng nhập Email!' },
                            { validator: validateEmail },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <Modal
                title="Thông Tin Chi Tiết"
                visible={isView}
                onCancel={handleViewCancel}
                footer={null}
            >
                {selectedRow && (
                    <div>
                        <p>Payment: {selectedRow.PaymentID}</p>
                        <p>Họ: {selectedRow.FirstName}</p>
                        <p>Tên: {selectedRow.LastName}</p>
                        <p>Điện thoại: {selectedRow.Phone}</p>
                        <p>Email: {selectedRow.Email}</p>
                        <p>Trạng Thái: {selectedRow.Status}</p>
                        <p>Ngày tạo: {selectedRow.CreateDate}</p>
                    </div>
                )}
            </Modal>
            <Table
                columns={columns}
                dataSource={data}
            />
        </div>
    );
}
export default Payment;