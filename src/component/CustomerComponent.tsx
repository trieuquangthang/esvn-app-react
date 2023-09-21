import React, { useState } from 'react';
import { Modal, Table, Button, Popconfirm, Form, InputNumber, Input } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import * as yup from 'yup';
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
        CustomerID: number;
        FirstName: string;
        LastName: string;
        Phone: string;
        Email: string;
        Status: string;
        CreateDate: string;
    }
    const [data, setData] = useState([
        {
            CustomerID: "0021",
            FirstName: "John Joe",
            LastName: "Hat",
            Email: "john@example.com",
            Phone: "0941399432",
            Status: "Chờ xử lý",
            CreateDate: "18/08/2017",
        },
        {
            CustomerID: "0022",
            FirstName: "John Joe",
            LastName: "Hat",
            Email: "john@example.com",
            Phone: "0941399432",
            Status: "Chờ xử lý",
            CreateDate: "18/08/2017",
        },
        {
            CustomerID: "0023",
            FirstName: "John Joe",
            LastName: "Hat",
            Email: "john@example.com",
            Phone: "0941399432",
            Status: "Chờ xử lý",
            CreateDate: "18/08/2017",
        },
        {
            CustomerID: "0024",
            FirstName: "John Joe",
            LastName: "Hat",
            Email: "john@example.com",
            Phone: "0941399432",
            Status: "Chờ xử lý",
            CreateDate: "18/08/2017",
        },
    ]);


    const columns = [
        {
            title: "CustomerID",
            dataIndex: "CustomerID",
            render: (_: any, record: any) => <>
                <a onClick={() => handleShowView(record)}>{record.CustomerID}</a>
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
        const newData = data.filter((dataItem) => dataItem.CustomerID !== item.CustomerID);
        setData(newData);
    };
    const handleDeleteCancel = () => {
    }
    // Chỉnh sửa 
    const handleEdit = (record: any) => {
        setIsModalUpdateOpen(true);
        setUserUpdate(record)

        formUpdate.setFieldsValue({
            FirstName: record.FirstName,
            LastName: record.LastName,
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
    const onHandleUpdate = (value: any) => {
        if(!userUpdate) return;


        const customerUpdate = data.findIndex(customer => customer.CustomerID === userUpdate?.CustomerID)

        console.log(customerUpdate);
    }
    return (
        <div className="main-body">
            <h1>Customer</h1>
            <Button type="primary" onClick={showModal}>
                Thêm mới<PlusOutlined />
            </Button>
            <Modal title="Thêm mới" visible={isModalOpen} onOk={handleCreatedOk} onCancel={handleCreateCancel} footer={null}>
            <Form
                    form={form}
                    onFinish={onHandleCreate}
                    style={{ maxWidth: 600 }}
                    
                >
                    <Form.Item name="FirstName" label="FirstName" >
                        <Input />
                    </Form.Item>
                    <Form.Item name="LastName"label="LastName" >
                        <Input />
                    </Form.Item>
                    <Form.Item name="Phone" label="Phone" >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name="Email" label="Email" >
                        <Input />
                    </Form.Item>
                    <Form.Item name="Status" label="Status">
                        <Input />
                    </Form.Item>

                    <Button htmlType='submit'>OK</Button>
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
                        <p>CustomerID: {selectedRow.CustomerID}</p>
                        <p>Họ: {selectedRow.FirstName}</p>
                        <p>Tên: {selectedRow.LastName}</p>
                        <p>Điện thoại: {selectedRow.Phone}</p>
                        <p>Email: {selectedRow.Email}</p>
                        <p>Trạng Thái: {selectedRow.Status}</p>
                        <p>Ngày tạo: {selectedRow.CreateDate}</p>
                    </div>
                )}
            </Modal>
            <Modal title="Chỉnh sửa" visible={isModalUpdateOpen}  footer={null}>
            <Form
                    form={formUpdate}
                    onFinish={onHandleUpdate}
                    style={{ maxWidth: 600 }}
                >
                    <Form.Item name="FirstName" label="FirstName" >
                        <Input />
                    </Form.Item>
                    <Form.Item name="LastName"label="LastName" >
                        <Input />
                    </Form.Item>
                    <Form.Item name="Phone" label="Phone" >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name="Email" label="Email" >
                        <Input />
                    </Form.Item>
                    <Form.Item name="Status" label="Status">
                        <Input />
                    </Form.Item>

                    <Button htmlType='submit'>OK</Button>
                </Form>
            </Modal>
            <Table
                columns={columns}
                dataSource={data}
            />
        </div>
    );
}

export default CustomerComponent;
