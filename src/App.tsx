import React, { useEffect, useState } from "react";
import './App.css';
import { Button, Modal, Input, Popconfirm,Table } from 'antd';
import { PlusOutlined, DeleteOutlined,EditOutlined } from '@ant-design/icons';
import { count } from "console";


function App() {
  const [message, setMessage] = useState('Chưa có sự kiện click');
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [create, setCreate] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = useState(4);
  const [email, setEmail] = useState("")
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const [source, setSource] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [total, setTotal] = useState("");
  const [id, setId] = useState();
  const [orderId, setOrderId] = useState("");


  const [data, setData] = useState([
    { "id": 1, "stt": 1, "orderId": "0021", "Name": "John Joe", "Email": "john@example.com", "Phone": "0941399432", "Status": "Chờ xử lý", "source": "Không xác định", "CreateDate": "11:14 18/08/2017", "Total": "13230000" },
    { "id": 2, "stt": 2, "orderId": "0021", "Name": "John Joe", "Email": "john@example.com", "Phone": "0941399432", "Status": "Chờ xử lý", "source": "Không xác định", "CreateDate": "11:14 18/08/2017", "Total": "13230000" },
    { "id": 3, "stt": 3, "orderId": "0021", "Name": "John Joe", "Email": "john@example.com", "Phone": "0941399432", "Status": "Chờ xử lý", "source": "Không xác định", "CreateDate": "11:14 18/08/2017", "Total": "13230000" },
    { "id": 4, "stt": 4, "orderId": "0021", "Name": "John Joe", "Email": "john@example.com", "Phone": "0941399432", "Status": "Chờ xử lý", "source": "Không xác định", "CreateDate": "11:14 18/08/2017", "Total": "13230000" },

  ]);


  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
      // render: (text) => <a>{text}</a>,
    },
    {
      title: 'orderId',
      dataIndex: 'orderId',
    },
    {
      title: 'Name',
      dataIndex: 'Name',
    },
    {
      title: 'Email',
      dataIndex: 'Email',
    },

    {
      title: 'Phone',
      dataIndex: 'Phone',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_:any, record:any) => <div className='action'>
        {/* <EditOutlined className="edit-btn" onClick={() => handleEdit(record)} /> */}
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Delete"
          cancelText="Cancel"
        >
          <DeleteOutlined className="delete-btn" onClick={() => handleDelete(record)} />
        </Popconfirm>
      </div>
    },
  ];
  
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    const item = {
      "id": count + 1,
      "stt": count + 1,
      "orderId": `${orderId}`,
      "Name": `${name}`,
      "Email": `${email}`,
      "Phone": `${phone}`,
      "Status": `${status}`,
      "source": `${source}`,
      "CreateDate": `${createDate}`,
      "Total": total
    }
    setData([...data, item])
    setCount(count + 1);
    setEmail("")

  };


  const handleCancel = () => {
    setIsModalOpen(false);
  };


  // Hàm xử lý sự kiện click cho biểu tượng "eye"
  const handleDelete = (item:any) => {
    setMessage('Bạn đã click vào biểu tượng Eye.');
    console.log('delete',item)
    setId(item.id)

  };

  const confirm = (e: any) => {
    console.log(e);
    const newData = data.filter((item) => item.id !== id);
    setData(newData);

  };

  const cancel = (e: any) => {
    console.log(e);

  };

  // Hàm xử lý sự kiện click cho biểu tượng "print"
  const handlePrintClick = () => {
    setMessage('Bạn đã click vào biểu tượng Print.');
  };

  // Hàm xử lý sự kiện click cho biểu tượng "times"
  const handleTimesClick = () => {
    setMessage('Bạn đã click vào biểu tượng Times (X).');
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleNumber = (e: any) => {
    console.log(e.target.value)
  }

  const handleEmail = (e: any) => {
    console.log(e.target.value)
    setEmail(e.target.value)
  }

  const handleAddItem = () => {
    console.log('cccccccccc')
    setCreate(true)
  };



  return (
    <div className="main-body">
      <div className="top-bar" style={{ display: 'flex' }}>
        <div className="index-home" >
          <div className="home1" style={{ display: 'flex' }}><i className="fa fa-home"></i></div>
          <div className="home2" style={{ display: 'flex' }}><h5>Đơn Hàng</h5></div>
          <div className="home3" style={{ display: 'flex' }}><h5>Danh Sách</h5></div>
        </div>
        <div className="create-export" style={{ display: 'flex' }}>
          <div className='menu' style={{ display: 'flex' }}>
            <Button type="primary" onClick={showModal}>
              <PlusOutlined />
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <h4>Mã đơn</h4>
              <Input placeholder="Basic usage" onChange={e => setOrderId(e.target.value)} value={orderId} />
              <h4>Tên</h4>
              <Input placeholder="Basic usage" onChange={e => setName(e.target.value)} value={name} />
              <h4>Mail</h4>
              <Input placeholder="Basic usage" onChange={e => setEmail(e.target.value)} value={email} />
              <h4>Phone</h4>
              <Input placeholder="Basic usage" onChange={e => setPhone(e.target.value)} value={phone} />
              <h4>Trạng thái</h4>
              <Input placeholder="Basic usage" onChange={e => setStatus(e.target.value)} value={status} />
              <h4>Nguồn</h4>
              <Input placeholder="Basic usage" onChange={e => setSource(e.target.value)} value={source} />
              <h4>Ngày tạo</h4>
              <Input placeholder="Basic usage" onChange={e => setCreateDate(e.target.value)} value={createDate} />
              <h4>Tổng</h4>
              <Input placeholder="Basic usage" onChange={e => setTotal(e.target.value)} value={total} />
            </Modal>
          </div>
          <div className='menu' style={{ display: 'flex' }}><i className="fa fa-cloud-download" style={{ fontSize: '25px' }}></i><h5>Xuất Dữ Liệu</h5></div>
        </div>
      </div>
      <div className="sort-view">
        <div className='sortview1' style={{ display: 'flex' }}><i className="fa fa-filter" style={{ fontSize: '25px' }}></i><h5>Bộ lọc</h5></div>
        <div className='sortview2' style={{ display: 'flex' }}><i className="fa fa-eye" style={{ fontSize: '25px' }}></i><h5>Cột hiển thị</h5></div>
      </div>
      <div className="sort-table" style={{ display: 'flex', marginTop: '10px' }}>
        <div ><input className='sorttable1' type="text" placeholder="Nhập từ khóa.."></input></div>
        <div>
          <div className="sorttable2" style={{ display: 'flex' }}>
            --Trạng Thái--
            <i className="fa fa-sort-down" onClick={toggleDropdown}></i> {/* Khi kích vào mũi tên, gọi hàm toggleDropdown */}
          </div>
          {/* Hiển thị danh sách trạng thái nếu isOpen là true */}
          {isOpen && (
            <div className="status-list">
              <ul>
                <li>Trạng thái 1</li>
                <li>Trạng thái 2</li>
                <li>Trạng thái 3</li>
                {/* Thêm các trạng thái khác */}
              </ul>
            </div>
          )}
        </div>
        <div className="sorttable3" style={{ display: 'flex' }}>--Người xử lý--<i className="fa fa-sort-down"></i></div>
        <div ><input className='sorttable1' type="date" placeholder="Ngày tạo"></input></div>
        <div className="sorttable4" style={{ display: 'flex' }}>Lọc</div>
      </div>
      {/* <table className='custom-table' style={{ border: '1px solid black' }}>
        <thead>
          <tr>
            <th>#</th>
            <th style={{ textAlign: 'center' }}><input type='checkbox'></input></th>
            <th>Mã Đơn</th>
            <th>Họ Tên</th>
            <th>Email</th>
            <th>Điện thoại</th>
            <th>Trạng Thái</th>
            <th>Nguồn</th>
            <th>Ghi chú</th>
            <th>Ngày tạo</th>
            <th>Tổng tiền</th>
            <th>Quản lý</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.stt}>
              <td>{item.stt}</td>
              <td style={{ textAlign: 'center' }}><input type='checkbox'></input></td>
              <td>{item.orderId}</td>
              <td>{item.Name}</td>
              <td>{item.Email}</td>
              <td>{item.Phone}</td>
              <td>{item.Status}</td>
              <td>{item.source}</td>
              <td></td>
              <td>{item.CreateDate}</td>
              <td>{item.Total}</td>
              <td>
                <div className='main-box' style={{ display: 'flex' }}>
                  <button className='box2' onClick={handlePrintClick}><i className="fa fa-print white-icon" style={{ fontSize: '25px' }}></i></button>
                  <button className='box3' onClick={handleTimesClick}><i className="fa fa-times white-icon" style={{ fontSize: '25px' }}></i></button>
                  <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this task?"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                  >
                    <DeleteOutlined onClick={() => handleDelete(item)} />
                  </Popconfirm>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
       <Table
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}

export default App;