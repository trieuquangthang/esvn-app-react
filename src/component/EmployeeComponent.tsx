import React, { useState } from "react";
import {
    Button,
    Modal,
    Input,
    Table,
    Popconfirm,
} from "antd";
import {
    DeleteOutlined,
    PlusOutlined,
} from "@ant-design/icons";
import { Form, InputNumber, } from 'antd';
import type { ColumnsType, } from 'antd/es/table';


function EmployeeComponent() {

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
                employeeID: 1,
                name: 'Triệu Quang Đức',
                age: 18,
                phoneNumber: '0941399432',
                email: 'ductq@gmail.com',
                status: 'Đang làm việc',
                address: 'Xóm liều, Hà Nội 9',
                createdDate: 15 / 9 / 2023,
                createdBy: 'ĐứcTQ',

            },
            {
                key: '2',
                stt: 2,
                employeeID: 1,
                name: 'Triệu Quang Đức',
                age: 18,
                phoneNumber: '0941399432',
                email: 'ductq@gmail.com',
                status: 'Đang làm việc',
                address: 'Xóm liều, Hà Nội 9',
                createdDate: 15 / 9 / 2023,
                createdBy: 'ĐứcTQ',
            },
            {
                key: '3',
                stt: 3,
                employeeID: 1,
                name: 'Triệu Quang Đức',
                age: 18,
                phoneNumber: '0941399432',
                email: 'ductq@gmail.com',
                status: 'Đang làm việc',
                address: 'Xóm liều, Hà Nội 9',
                createdDate: 15 / 9 / 2023,
                createdBy: 'ĐứcTQ',
            },
            {
                key: '4',
                stt: 4,
                employeeID: 1,
                name: 'Triệu Quang Đức',
                age: 18,
                phoneNumber: '0941399432',
                email: 'ductq@gmail.com',
                status: 'Đang làm việc',
                address: 'Xóm liều, Hà Nội 9',
                createdDate: 15 / 9 / 2023,
                createdBy: 'ĐứcTQ',
            }
        ]
    );

    interface DataType {
        key: React.Key;
        stt: number;
        employeeID: number,
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
            title: 'EmployeeID',
            dataIndex: 'employeeID',
            render: (_: any, record: any) => <>
                <a onClick={() => showModal()}>{record.employeeID}</a>
            </>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
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
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'CreateDate',
            dataIndex: 'creatDate',
        },
        {
            title: 'CreateBy',
            dataIndex: 'creatBy',
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
        const newData = data.filter((item) => item! == record);
        setData(newData);
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

            <h1>Employee</h1>
            <Button type="primary" onClick={showModal}>
                Thêm Mới <PlusOutlined />
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
export default EmployeeComponent;