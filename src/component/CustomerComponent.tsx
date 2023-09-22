import React, { useState, useEffect } from 'react';
import { Modal, Table, Button, Popconfirm, Form, InputNumber, Input } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { ICustomer } from '../interfaces/customer';
import customerService from '../apis/Customer';
function CustomerComponent() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<SelectedRowType | null>(null);
    const [userUpdate, setUserUpdate] = useState<any>();
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [isView, setIsView] = useState(false);
    const [form] = Form.useForm();
    const [formUpdate] = Form.useForm();
    interface SelectedRowType {
        customerID: number,
        firstName: string,
        lastName: string,
        email: string,
        phoneNumber: number,
        status: boolean,
        orders: null
    }
    
    const [data, setData] = useState<ICustomer[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const{data} = await customerService.getList();
                setData(data);

                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, [])
    




    const columns = [
        {
            title: "CustomerID",
            dataIndex: "customerID",
            render: (_: any, record: any) => <>
                <a onClick={() => handleShowView(record)}>{record.customerID}</a>
            </>,
        },
        {
            title: "Họ",
            dataIndex: "firstName",
        },
        {
            title: "Tên",
            dataIndex: "lastName",
        },
        {
            title: "Điện thoại",
            dataIndex: "phoneNumber",
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Trạng Thái",
            dataIndex: "status",
        },
        {
            title: "Ngày tạo",
            dataIndex: "order",
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
        const newData = data.filter((dataItem) => dataItem.customerID !== item.customerID);
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
            FirstName: record.firstName,
            LastName: record.lastName,
            Phone: record.phoneNumber,
            Email: record.email,
            Status: record.status,
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
            <h1>Customer</h1>
            <Button type="primary" onClick={showModal}>
                Thêm mới<PlusOutlined />
            </Button>
            <Modal title="Thêm mới" open={isModalOpen} onOk={handleCreatedOk} onCancel={handleCreateCancel} footer={null}>
                <Form form={form} onFinish={onHandleCreate}>
                    <Form.Item
                        name="FirstName"
                        label="firstName"
                        rules={[
                            { validator: validateName },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="LastName"
                        label="lastName"
                        rules={[
                            { validator: validateName },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="Phone"
                        label="phoneNumber"
                        rules={[
                            { validator: validatePhone },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="Email"
                        label="email"
                        rules={[
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
                        <p>CustomerID: {selectedRow.customerID}</p>
                        <p>Họ: {selectedRow.firstName}</p>
                        <p>Tên: {selectedRow.lastName}</p>
                        <p>Điện thoại: {selectedRow.phoneNumber}</p>
                        <p>Email: {selectedRow.email}</p>
                        <p>Trạng Thái: {selectedRow.status}</p>
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
export default CustomerComponent;
