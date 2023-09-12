import React, { useEffect, useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import OrderList from './data.json'
import AddNewItem from "./component/Create";
import { Button, Modal ,Input} from 'antd';


function App() {
  const [message, setMessage] = useState('Chưa có sự kiện click');
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [create, setCreate] = useState(false)
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
setCreate(true)

  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  // Hàm xử lý sự kiện click cho biểu tượng "eye"
  const handleEyeClick = () => {
    setMessage('Bạn đã click vào biểu tượng Eye.');
  };

  // Hàm xử lý sự kiện click cho biểu tượng "print"
  const handlePrintClick = () => {
    setMessage('Bạn đã click vào biểu tượng Print.');
  };

  // Hàm xử lý sự kiện click cho biểu tượng "times"
  const handleTimesClick = () => {
    setMessage('Bạn đã click vào biểu tượng Times (X).');
  };
  const [isOpen, setIsOpen] = useState(false); // Trạng thái để kiểm tra xem danh sách trạng thái có được hiển thị hay không

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Khi kích vào biểu tượng, đảo ngược trạng thái hiển thị danh sách
  };

const handleNumber = (e: any)=>{
  console.log(e.target.value)
  setNumber(e.target.value)
}

const handleEmail = (e: any)=>{
  console.log(e.target.value)
  setEmail(e.target.value)
}
  const [data, setData] = useState([]);

  const handleAddItem = () => {
    console.log('cccccccccc')
    setCreate(true)
  };


  useEffect(() => {
    if(create){
      console.log('addddddddd')
    }

    fetchData()
  }, [email,number,create]);

const fetchData = ()=>{
  fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    setData(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error)
  });
}

  useEffect(() => {
    fetchData()
  }, []);

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
            <i className="fa fa-plus" style={{ fontSize: '25px' }}></i>
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Input placeholder="Basic usage" onKeyUp={handleNumber}/>
            <Input placeholder="Basic usage" onKeyUp={handleEmail}/>
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
      <table className='custom-table' style={{ border: '1px solid black' }}>
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
          {OrderList.map((item) => (
            <tr key={item.stt}>
              <td>{item.stt}</td>
              <td style={{ textAlign: 'center' }}><input type='checkbox'></input></td>
              <td>{item.orderId}</td>
              <td>{item.Name}</td>
              <td>{item.Email}</td>
              <td>{item.Phone}</td>
              <td>{item.Status}</td>
              <td>{item.Suource}</td>
              <td></td>
              <td>{item.CreateDate}</td>
              <td>{item.Total}</td>
              <td>
                <div className='main-box' style={{ display: 'flex' }}>
                  <button className='box1' onClick={handleEyeClick}><i className="fa fa-eye white-icon" style={{ fontSize: '25px' }}></i></button>
                  <button className='box2' onClick={handlePrintClick}><i className="fa fa-print white-icon" style={{ fontSize: '25px' }}></i></button>
                  <button className='box3' onClick={handleTimesClick}><i className="fa fa-times white-icon" style={{ fontSize: '25px' }}></i></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;