import { Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu, Layout } from 'antd';
import EmployeeComponent from "./EmployeeComponent";
import Order from "./Order";
import OrderItems from "./OrderItems";
import Payment from "./Payment";
import PaymentMethods from "./PaymentMethods";
import Products from "./Products";
import ShippingMethods from "./Shippings";
import Shippings from "./ShippingMethods";
import CustomerComponent from "./CustomerComponent";
import Test from './Test';
type MenuItem = Required<MenuProps>['items'][number];
const { Header, Content, Footer, Sider } = Layout;

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
  getItem(<Link to='/order'>Order</Link>, '3',),
  getItem(<Link to='/orderitems'>OrderItem</Link>, '4',),
  getItem(<Link to='/products'>Product</Link>, '5',),
  getItem(<Link to='/payment'>Payment</Link>, '6',),
  getItem(<Link to='/paymentmethods'>PaymentMethod</Link>, '7',),
  getItem(<Link to='/shippingmethods'>Shipping</Link>, '8',),
  getItem(<Link to='/shippings'>ShippingMethod</Link>, '9',),
  getItem(<Link to='/test'>Test</Link>, '10',),
];

const App: React.FC = () => {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >

        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          items={items}
        />

      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: '#fff' }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 800, background: '#fff' }}>
            <Routes>
              <Route path="/employee" element={<EmployeeComponent />}></Route>
              <Route path="/order" element={<Order />}></Route>
              <Route path="/customer" element={<CustomerComponent />}></Route>
              <Route path="/orderitems" element={<OrderItems />}></Route>
              <Route path="/payment" element={<Payment />}></Route>
              <Route path="/paymentmethods" element={<PaymentMethods />}></Route>
              <Route path="/products" element={<Products />}></Route>
              <Route path="/shippingmethods" element={<ShippingMethods />}></Route>
              <Route path="/shippings" element={<Shippings />}></Route>
              <Route path="/test" element={<Test />}></Route>
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}></Footer>
      </Layout>
    </Layout>
  );
};

export default App;