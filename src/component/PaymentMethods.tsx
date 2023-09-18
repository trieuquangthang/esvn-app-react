import React, { useState } from 'react';
import { Modal, Table, Button, Popconfirm, Form, InputNumber, Input } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';

function PaymentMethods() {

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
                paymentMethodID: 1,
                methodName: 'Triệu Quang Đức',
                description: '',
                createdDate: 15 / 9 / 2023,
                createdBy: 'ĐứcTQ',

            },
            {
                key: '1',
                stt: 1,
                paymentMethodID: 1,
                methodName: 'Triệu Quang Đức',
                description: '',
                createdDate: 15 / 9 / 2023,
                createdBy: 'ĐứcTQ',
            },
            {
                key: '1',
                stt: 1,
                paymentMethodID: 1,
                methodName: 'Triệu Quang Đức',
                description: '',
                createdDate: 15 / 9 / 2023,
                createdBy: 'ĐứcTQ',
            },
            {
                key: '1',
                stt: 1,
                paymentMethodID: 1,
                methodName: 'Triệu Quang Đức',
                description: '',
                createdDate: 15 / 9 / 2023,
                createdBy: 'ĐứcTQ',
            }
        ]
    );

    interface DataType {
        key: React.Key;
        stt: number;
        paymentMethodID: number;
        methodName: string;
        description: string;

    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            dataIndex: 'stt',
        },
        {
            title: 'PaymentMethodID',
            dataIndex: 'paymentMethodID',
            render: (_, record) => <>
                <a onClick={() => showModal()}>{record.paymentMethodID}</a>
            </>,
        },
        {
            title: 'Methodname',
            dataIndex: 'methodName',
        },
        {
            title: 'Description',
            dataIndex: 'description',
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

            <h1>Payment Method</h1>
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
                    <Form.Item name={['user', 'paymentID']} label="PaymentID" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'paymentDate']} label="PaymentDate" >
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'amount']} label="Amount" >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    </Form.Item>
                </Form>
            </Modal>
            <Table dataSource={data} columns={columns}>
            </Table>
        </>)
}
export default PaymentMethods;