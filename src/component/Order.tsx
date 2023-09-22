import React, { useState } from 'react';
import { Modal, Table, Button, Popconfirm, Form, InputNumber, Input } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
function Order() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<SelectedRowType | null>(null);
    const [userUpdate, setUserUpdate] = useState<any>();
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [isView, setIsView] = useState(false);
    const [form] = Form.useForm();
    const [formUpdate] = Form.useForm();
    interface SelectedRowType {
        OrderID: string;
        CustomerID: string;
        OrderDate: string;
        Phone: string;
        EmployeeSubmit: string;
    }
    const [data, setData] = useState(
        [
            {
                OrderID: "1",
                CustomerID: "1",
                OrderDate: "1",
                Phone: "0941399432",
                EmployeeSubmit: "Đức",

            },
            {
                OrderID: "1",
                CustomerID: "1",
                OrderDate: "1",
                Phone: "0941399432",
                EmployeeSubmit: "Đức",

            },
            {
                OrderID: "1",
                CustomerID: "1",
                OrderDate: "1",
                Phone: "0941399432",
                EmployeeSubmit: "Đức",

            },
            {
                OrderID: "1",
                CustomerID: "1",
                OrderDate: "1",
                Phone: "0941399432",
                EmployeeSubmit: "Đức",

            }
        ]);


    const columns = [
        {
            title: "OrderID",
            dataIndex: "OrderID",
            render: (_: any, record: any) => <>
                <a onClick={() => handleShowView(record)}>{record.OrderID}</a>
            </>,
        },
        {
            title: "CustomerID",
            dataIndex: "CustomerID",
        },
        {
            title: "OrderDate",
            dataIndex: "OrderDate",
        },
        {
            title: "Phone",
            dataIndex: "Phone",
        },
        {
            title: "EmployeeSubmit",
            dataIndex: "EmployeeSubmit",
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
        const newData = data.filter((dataItem) => dataItem.OrderID !== item.OrderID);
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
            OrderID: record.OrderID,
            CustomerID: record.CustomerID,
            Phone: record.Phone,
            OrderDate: record.OrderDate,
            EmployeeSubmit: record.EmployeeSubmit,
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
            <h1>Order</h1>
            <Button type="primary" onClick={showModal}>
                Thêm mới<PlusOutlined />
            </Button>
            <Modal title="Thêm mới" visible={isModalOpen} onOk={handleCreatedOk} onCancel={handleCreateCancel} footer={null}>
                <Form form={form} onFinish={onHandleCreate}>
                    <Form.Item
                        name="CustomerID"
                        label="CustomerID"
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
                        name="OrderDate"
                        label="OrderDate"
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
                        <p>OrderID: {selectedRow.OrderID}</p>
                        <p>CustomerID: {selectedRow.CustomerID}</p>
                        <p>OrderDate: {selectedRow.OrderDate}</p>
                        <p>Phone: {selectedRow.Phone}</p>
                        <p>EmployeeSubmit: {selectedRow.EmployeeSubmit}</p>
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
export default Order;