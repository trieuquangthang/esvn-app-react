
import React, { useState } from 'react';
import { Modal, Table, Button, Popconfirm, Form, InputNumber, Input } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import * as yup from 'yup';
function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditFormOpen, setIsEditFormOpen] = useState(false);
    const [count, setCount] = useState(4);
    const [email, setEmail] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState("");
    const [LastName, setLastName] = useState("");
    const [createDate, setCreateDate] = useState("");
    const [total, setTotal] = useState("");
    const [id, setId] = useState();
    const [CustomerID, setCustomerID] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTile] = useState("Thêm mới");
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedRow, setSelectedRow] = useState<SelectedRowType | null>(null);
    const [isCustomerIDValid, setIsCustomerIDValid] = useState(true);
    const [isFirstNameValid, setIsFirstNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPhoneValid, setIsPhoneValid] = useState(true);
    const [isStatusValid, setIsStatusValid] = useState(true);
    const [isLastNameValid, setIsLastNameValid] = useState(true);
    const [isCreateDateValid, setIsCreateDateValid] = useState(true);
    const [data, setData] = useState([
        {
            id: 1,
            stt: 1,
            CustomerID: "0021",
            FirstName: "John Joe",
            LastName: "Hat",
            Email: "john@example.com",
            Phone: "0941399432",
            Status: "Chờ xử lý",
            CreateDate: "18/08/2017",
        },
        {
            id: 2,
            stt: 2,
            CustomerID: "0021",
            FirstName: "John Joe",
            LastName: "Hat",
            Email: "john@example.com",
            Phone: "0941399432",
            Status: "Chờ xử lý",
            CreateDate: "18/08/2017",
        },
        {
            id: 3,
            stt: 3,
            CustomerID: "0021",
            FirstName: "John Joe",
            LastName: "Hat",
            Email: "john@example.com",
            Phone: "0941399432",
            Status: "Chờ xử lý",
            CreateDate: "18/08/2017",
        },
        {
            id: 4,
            stt: 4,
            CustomerID: "0021",
            FirstName: "John Joe",
            LastName: "Hat",
            Email: "john@example.com",
            Phone: "0941399432",
            Status: "Chờ xử lý",
            CreateDate: "18/08/2017",
        },
    ]);
    interface SelectedRowType {
        CustomerID: string;
        FirstName: string;
        LastName: string;
        Phone: string;
        Email: string;
        Status: string;
        CreateDate: string;
        // Thêm các thuộc tính khác nếu cần
    }


    const columns = [
        {
            title: "STT",
            dataIndex: "stt",

        },
        {
            title: "CustomerID",
            dataIndex: "CustomerID",
            type: "text",
            render: (_: any, record: any) => <>
                <a onClick={() => handleShowDetails(record)}>{record.CustomerID}</a>
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
            title: "Ghi chú",
            dataIndex: "",
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
                    <EditOutlined
                        className="edit-btn"
                        onClick={() => handleEdit(record)}
                    />
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => handleDelete(record)}
                        onCancel={cancel}
                        okText="Delete"
                        cancelText="Cancel"
                    >
                        <DeleteOutlined className="delete-btn" />
                    </Popconfirm>
                </div>
            ),
        },
    ];

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        let _check = true;
        // Kiểm tra xác thực dữ liệu cho từng trường
        if (!CustomerID) {
            setIsCustomerIDValid(false);
            _check = false;
        } else {
            setIsCustomerIDValid(true);
        }

        if (!FirstName) {
            setIsFirstNameValid(false);
            _check = false;
        } else {
            setIsFirstNameValid(true);
        }

        if (!email) {
            setIsEmailValid(false);
            _check = false;
        } else {
            setIsEmailValid(true);
        }

        if (!phone) {
            setIsPhoneValid(false);
            _check = false;
        } else {
            setIsPhoneValid(true);
        }

        if (!status) {
            setIsStatusValid(false);
            _check = false;
        } else {
            setIsStatusValid(true);
        }

        if (!LastName) {
            setIsLastNameValid(false);
            _check = false;
        } else {
            setIsLastNameValid(true);
        }

        if (!createDate) {
            setIsCreateDateValid(false);
            _check = false;
        } else {
            setIsCreateDateValid(true);
        }

        // Kiểm tra xác thực tổng thể: Nếu có ít nhất một trường không hợp lệ, không thực hiện hành động
        if (
            _check
        ) {
            setIsModalOpen(false);
            setCustomerID("")
            setFirstName("");
            setEmail("");
            setPhone("");
            setStatus("");
            setLastName("");
            setCreateDate("");
            setTotal("");
            setTile('Thêm mới')
        }
    };


    const handleDelete = (record: any) => {
        const newData = data.filter((item) => item.id !== record.id);
        setData(newData);
    };

    const handleEdit = (item: any) => {
        console.log(item)
        setId(item.id);
        setCustomerID(item.CustomerID)
        setCount(item.stt);
        setEmail(item.Email);
        setFirstName(item.FirstName);
        setPhone(item.Phone);
        setStatus(item.Status);
        setLastName(item.LastName);
        setCreateDate(item.createDate);
        setIsEditFormOpen(true);
    };
    const handleEditOK = () => {
        if (id) {
            const newData = [...data]
            const index = newData.findIndex(item => id === item.id)
            const i = newData[index]
            const item = {
                id: id,
                stt: count,
                CustomerID: `${CustomerID}`,
                FirstName: `${FirstName}`,
                Email: `${email}`,
                Phone: `${phone}`,
                Status: `${status}`,
                LastName: `${LastName}`,
                CreateDate: `${createDate}`,
            };
            newData.splice(index, 1, {
                ...i,
                ...item
            })
            setData(newData);
            setId(undefined)
        } else {
            const item = {
                id: (count ),
                stt: (count ),
                CustomerID: `${CustomerID}`,
                FirstName: `${FirstName}`,
                Email: `${email}`,
                Phone: `${phone}`,
                Status: `${status}`,
                LastName: `${LastName}`,
                CreateDate: `${createDate}`,
            };
            setData([...data, item]);
            setId(undefined)
            setCount(count + 1);
        }
        setIsEditFormOpen(false);
        setCustomerID("")
        setFirstName("");
        setEmail("");
        setPhone("");
        setStatus("");
        setLastName("");
        setCreateDate("");
    }


    const handleShowDetails = (record: any) => {
        setSelectedRow(record);
        setModalVisible(true);
    };

    const handleModalClose = () => {
        setModalVisible(false);
    };
    const handleEditFormClose = () => {
        setIsEditFormOpen(false);
    }


    const handleCancel = () => {
        setIsModalOpen(false);
        setCustomerID("")
        setFirstName("");
        setEmail("");
        setPhone("");
        setStatus("");
        setLastName("");
        setCreateDate("");
        setTile('Thêm mới')
    };

    const cancel = () => {
    };

    return (
        <div className="main-body">

            <div className="menu" style={{ display: "flex" }}>
                <Button type="primary" style={{ backgroundColor: 'black' }} onClick={showModal}>
                    <PlusOutlined />
                </Button>
                <Modal
                    title="Thêm mới"
                    visible={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <h4>CustomerID</h4>
                    <Input
                        placeholder="Nhập ở đây"
                        onChange={(e) => setCustomerID(e.target.value)}
                        value={CustomerID}
                    />
                    <h4>Họ</h4>
                    <Input
                        placeholder="Nhập ở đây"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={FirstName}
                    />
                    <h4>Tên</h4>
                    <Input
                        placeholder="Nhập ở đây"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={LastName}
                    />
                    <h4>Email</h4>
                    <Input
                        placeholder="Nhập ở đây"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <h4>Phone</h4>
                    <Input
                        placeholder="Nhập ở đây"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    />
                    <h4>Trạng thái</h4>
                    <Input
                        placeholder="Nhập ở đây"
                        onChange={(e) => setStatus(e.target.value)}
                        value={status}
                    />
                    <h4>Nguồn</h4>
                    <Input
                        placeholder="Nhập ở đây"
                        onChange={(e) => setLastName(e.target.value)}
                        value={LastName}
                    />
                    <h4>Ngày tạo</h4>
                    <Input
                        type="Date"
                        placeholder="Nhập ở đây"
                        onChange={(e) => setCreateDate(e.target.value)}
                        value={createDate}
                    />
                </Modal>
            </div>
            <Table
                columns={columns}
                dataSource={data}
            />
            <Modal
                title="Thông Tin Chi Tiết"
                visible={modalVisible}
                onCancel={handleModalClose}
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
            <Modal
                title="Sửa Thông Tin"
                visible={isEditFormOpen}
                onCancel={handleEditFormClose}
                onOk={handleEditOK}
            >
               <h4>CustomerID</h4>
                    <Input
                        placeholder="Nhập ở đây"
                        onChange={(i) => setCustomerID(i.target.value)}
                        value={CustomerID}
                    />
                    <h4>Họ</h4>
                    <Input
                        placeholder="Nhập ở đây"
                        onChange={(i) => setFirstName(i.target.value)}
                        value={FirstName}
                    />
                    <h4>Tên</h4>
                    <Input
                        placeholder="Nhập ở đây"
                        onChange={(i) => setFirstName(i.target.value)}
                        value={LastName}
                    />
                    <h4>Email</h4>
                    <Input
                        placeholder="Nhập ở đây"
                        onChange={(i) => setEmail(i.target.value)}
                        value={email}
                    />
                    <h4>Phone</h4>
                    <Input
                        placeholder="Nhập ở đây"
                        onChange={(i) => setPhone(i.target.value)}
                        value={phone}
                    />
                    <h4>Trạng thái</h4>
                    <Input
                        placeholder="Nhập ở đây"
                        onChange={(i) => setStatus(i.target.value)}
                        value={status}
                    />
                    <h4>Nguồn</h4>
                    <Input
                        placeholder="Nhập ở đây"
                        onChange={(e) => setLastName(e.target.value)}
                        value={LastName}
                    />
                    <h4>Ngày tạo</h4>
                    <Input
                        type="Date"
                        placeholder="Nhập ở đây"
                        onChange={(e) => setCreateDate(e.target.value)}
                        value={createDate}
                    />
            </Modal>
        </div>
    );
}

export default App;