import { Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to='/customer'>Customer</Link>, '1',),
  getItem(<Link to="/employee">Employee</Link>, '2',),
  getItem(<Link to='/order'>Order</Link>, '3', ),
  getItem(<Link to='/orderitems'>OrderItem</Link>, '4', ),
  getItem(<Link to='/products'>Product</Link>, '5', ),
  getItem(<Link to='/payment'>Payment</Link>, '6', ),
  getItem(<Link to='/paymentmethods'>PaymentMethod</Link>, '7', ),
  getItem(<Link to='/shippingmethods'>Shipping</Link>, '8', ),
  getItem(<Link to='/shippings'>ShippingMethod</Link>, '9', ),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ width: 256 }}>
      <Button type="primary"  style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default App;