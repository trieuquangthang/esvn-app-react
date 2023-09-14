import React, { useState } from 'react';
import { Modal, Table, Button, Popconfirm, Form, InputNumber, Input,  } from 'antd';
import { DeleteOutlined, EditOutlined,PlusOutlined } from '@ant-design/icons';
import type { ColumnsType,  } from 'antd/es/table';


function Demo() {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
  
  
    const columns = [
      {
        title: "STT",
        dataIndex: "stt",
      },
      {
        title: "Mã đơn",
        dataIndex: "CustomerID",
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
      if (id)
   {
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
          id: (count + 1),
          stt: (count + 1),
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
      setIsModalOpen(false);
      setCustomerID("")
      setFirstName("");
      setEmail("");
      setPhone("");
      setLastName("");
      setCreateDate("");
      setTile('Thêm mới')
  
    };
  
  
    const handleDelete = (item: any) => {
      setId(item.id);
    };
  
    const handleEdit = (item: any) => {
      console.log(item)
      setTile('Sửa thông tin')
      setId(item.id);
      setIsModalOpen(true);
      setCustomerID(item.CustomerID)
      setCount(item.stt);
      setEmail(item.Email);
      setFirstName(item.FirstName);
      setPhone(item.Phone);
      setLastName(item.LastName);
      setCreateDate(item.createDate);
    };
  
    const confirm = () => {
      const newData = data.filter((item) => item.id !== id);
      setData(newData);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
      setCustomerID("")
      setFirstName("");
      setEmail("");
      setPhone("");
      setLastName("");
      setCreateDate("");
      setTile('Thêm mới')
      
    };
  
    const cancel = () => {
    };
  
    return (
      <div className="main-body">
            <div className="menu" style={{ display: "flex" }}>
              <Button type="primary" style={{backgroundColor: 'black'}} onClick={showModal}>
                <PlusOutlined />
              </Button>
              {/* đây là bảng hiện thông tin thêm, sửa, xóa */}
              <Modal
                title={title}
                visible={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <h4>Mã đơn</h4>
                <Input
                  placeholder="Nhập ở đây"
                  onChange={(e) => setCustomerID(e.target.value)}
                  value={CustomerID}
                />
                <h4>Tên</h4>
                <Input
                  placeholder="Nhập ở đây"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={FirstName}
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
                <h4>Ngày tạo</h4>
                <Input
                  type="Date"
                  placeholder="Nhập ở đây"
                  onChange={(e) => setCreateDate(e.target.value)}
                  value={createDate}
                />
              </Modal>
        </div>
         {/* Đây là bảng hiển thị */}
        <Table
          columns={columns}
          dataSource={data}
        />
      </div>
    );
  }
  
  export default Demo;