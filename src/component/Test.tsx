import React, { useState } from 'react';
import { Modal, Table, Button, Popconfirm, Form, Input, } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined, } from '@ant-design/icons';
import { Divider } from 'antd';
import type { ColumnsType } from 'antd/es/table';


const Tests = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [formMode, setFormMode] = useState("add"); // "add" hoặc "edit"
    const [editingItem, setEditingItem] = useState<any>(null);
    const [formData, setFormData] = useState({
        // Khai báo dữ liệu của form
        CustomerID: "",
        FirstName: "",
        LastName: "",
        Phone: "",
        Email: "",
        Address: "",

    });
    interface DataType {
        CustomerID: string;
        FirstName: string;
        LastName: string;
        Phone: string;
        Email: string;
        Address: string;
      }
    const columns: ColumnsType<DataType> = [
        {
          title: 'CustomerID',
          dataIndex: 'CustomerID',
        },
        {
          title: 'FirstName',
          dataIndex: 'FirstName',
        },
        {
          title: 'LastName',
          dataIndex: 'LastName',
        },
        {
            title: 'Phone',
            dataIndex: 'Phone',
        },
        {
            title: 'Email',
            dataIndex: 'Email',
        },
        {
            title: 'Address',
            dataIndex: 'Address',
        },
        
      ];
    const [data, setData] = useState([
        {
            CustomerID: "0024",
            FirstName: "John Joe",
            LastName: "Hat",
            Email: "john@example.com",
            Phone: "0941399432",
            Address: "Hà Nội"
        },
        {
            CustomerID: "0024",
            FirstName: "John Joe",
            LastName: "Hat",
            Email: "john@example.com",
            Phone: "0941399432",
            Address: "Hà Nội"
        },
        {
            CustomerID: "0024",
            FirstName: "John Joe",
            LastName: "Hat",
            Email: "john@example.com",
            Phone: "0941399432",
            Address: "Hà Nội"

        },
        {
            CustomerID: "0024",
            FirstName: "John Joe",
            LastName: "Hat",
            Email: "john@example.com",
            Phone: "0941399432",
            Address: "Hà Nội"
        },
    ]);
    const handleEdit = (item: any) => {
        setEditingItem(item);
        showModal("edit");
    };

    const showModal = (mode: any,) => {
        if (mode === "edit" && editingItem) {
            setFormData({
                CustomerID: editingItem.CustomerID,
                FirstName: editingItem.FirstName,
                LastName: editingItem.LastName,
                Phone: editingItem.Phone,
                Email: editingItem.Email,
                Address: editingItem.Address,
                // ... reset dữ liệu cho các trường khác
            });
        } else {
            // Nếu là chế độ thêm mới, reset formData
            setFormData({
                CustomerID: "",
                FirstName: "",
                LastName: "",
                Phone: "",
                Email: "",
                Address: "",
                // ... reset dữ liệu cho các trường khác
            });
        }
    
        setIsModalVisible(true);
        setFormMode(mode);
    };

    const handleOk = () => {
        if (formMode === "add") {
            // Xử lý thêm mới
            const newItem = {
                CustomerID: formData.CustomerID,
                FirstName: formData.FirstName,
                LastName: formData.LastName,
                Phone: formData.Phone,
                Email: formData.Email,
                Address: formData.Address,
                // ... thiết lập giá trị cho các trường khác
            };
            setData([...data, newItem]);
        } else if (formMode === "edit" && editingItem) {
            // Xử lý chỉnh sửa
            const updatedData = data.map((item) => {
                if (item.CustomerID === editingItem.CustomerID) {
                    return {
                        ...item,
                        CustomerID: formData.CustomerID,
                        FirstName: formData.FirstName,
                        LastName: formData.LastName,
                        Phone: formData.Phone,
                        Email: formData.Email,
                        Address: formData.Address,
                        // ... thiết lập giá trị cho các trường khác
                    };
                }
                return item;
            });
            setData(updatedData);
        }
    
        setIsModalVisible(false);
        setEditingItem(null);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <Button onClick={() => showModal("add")}>Thêm mới</Button>
            <Button onClick={() => showModal("edit")}>Chỉnh sửa</Button>
            <Modal
                title={formMode === "add" ? "Thêm mới" : "Chỉnh sửa"}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Input
                    placeholder="CustomerID"
                    value={formData.CustomerID}
                    onChange={(e) => setFormData({ ...formData, CustomerID: e.target.value })}
                />
                <Input
                    placeholder="First Name"
                    value={formData.FirstName}
                    onChange={(e) => setFormData({ ...formData, FirstName: e.target.value })}
                />
                <Input
                    placeholder="Last Name"
                    value={formData.LastName}
                    onChange={(e) => setFormData({ ...formData, LastName: e.target.value })}
                />
                <Input
                    placeholder="Phone"
                    value={formData.Phone}
                    onChange={(e) => setFormData({ ...formData, Phone: e.target.value })}
                />
                <Input
                    placeholder="Email"
                    value={formData.Email}
                    onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
                />
                <Input
                    placeholder="Address"
                    value={formData.Address}
                    onChange={(e) => setFormData({ ...formData, Address: e.target.value })}
                />

            </Modal>
            <Table columns={columns} dataSource={data} size="small" />
        </div>
    );
};

export default Tests;
