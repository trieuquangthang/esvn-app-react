import React, { useState } from 'react';
import { Modal, Table, Button, Popconfirm, Form, InputNumber, Input } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

function TableComponent() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    // sử dụng form để quản lý dữ liệu
    const [form] = Form.useForm(
        
    );

    // Dữ liệu của bảng
    const [data, setData] = useState(
        [
            {
                key: '1',
                stt: 1,
                CustomerID: 1,
                name: 'Triệu Quang Đức',
                age: 18,
                phoneNumber: '0941399432',
                email: 'ductq@gmail.com',
                address: 'Xóm liều, Hà Nội 9',
    
            },
            {
                key: '2',
                stt: 1,
                CustomerID: 1,
                name: 'Triệu Quang Đức',
                age: 18,
                phoneNumber: '0941399432',
                email: 'ductq@gmail.com',
                address: 'Xóm liều, Hà Nội 9',
            },
            {
                key: '3',
                stt: 1,
                CustomerID: 1,
                name: 'Triệu Quang Đức',
                age: 18,
                phoneNumber: '0941399432',
                email: 'ductq@gmail.com',
                address: 'Xóm liều, Hà Nội 9',
            },
            {
                key: '4',
                stt: 1,
                CustomerID: 1,
                name: 'Triệu Quang Đức',
                age: 18,
                phoneNumber: '0941399432',
                email: 'ductq@gmail.com',
                address: 'Xóm liều, Hà Nội 9',
            }
        ]
    );

    interface DataType {
        key: React.Key;
        stt: number;
        CustomerID: number;
        name: string;
        age: number;
        phoneNumber: string;
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
                <a onClick={() => showModal()}>{record.CustomerID}</a>
            </>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            render: (_, record) => <>
                <a onClick={() => showModal()}>{record.name}</a>
            </>,
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
            render: (_: any, record: any) => (
                <div className="action" style={{ display: 'flex' }}>
                    <div>
                        <Button type="primary" onClick={showModal}>
                            Edit
                        </Button>
                    </div>

                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => handleDelete(record)}
                        okText="Delete"
                        cancelText="Cancel"
                    >
                       <Button type="primary" danger><DeleteOutlined className="delete-btn" /></Button>
                    </Popconfirm>

                </div>
            ),
        },
    ];

    const handleDelete = (record: any) => {
        console.log(record)
    }

    const showModal = () => {
        setIsModalOpen(true);
    };
    // xử lý dữ liệu khi nhấn nút lưu trong modal
    const handleOk = () => {
        form.validateFields().then((values) => {
            //Lấy dữ liệu từ Form và thêm vào mảng data 
            const newData = [...data, values];
            setData(newData);
            //Đóng modal và làm rỗng Form
            setIsModalOpen(false);
            form.resetFields();
        });
    }; 
    //xử lý đóng modal khi nhấn nút hủy
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    //Xử lý xóa dữ liệu
    // const handleDelete = (record) => {
    //     const newData = data.filter((item) => item! == record);
    //     setData(newData);

    // }


    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };


    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };


    const onFinish = (values: any) => {
        console.log(values);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Thêm Mới
            </Button>
            <Modal title="Thêm mới" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    style={{ maxWidth: 600 }}
                    validateMessages={validateMessages}
                >
                    <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name={['user', 'phoneNumber']} label="Phone" >
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'address']} label="Address">
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    </Form.Item>
                </Form>
            </Modal>
            <Table dataSource={data} columns={columns}>
            </Table>
        </>)
}
export default TableComponent;