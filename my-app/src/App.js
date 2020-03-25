import React from "react";
import { Route, Link, NavLink } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";

import Routing from "./route/link";
import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;
class App extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header style={{ position: "fixed", zIndex: 2, width: "100%" }}>
          <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
            <Menu.Item key="Numerical method">
              <Link to="/">Numerical method</Link>
            </Menu.Item>
            <SubMenu
              title={
                <span className="submenu-title-wrapper">Root of equation </span>
              }
            >
              <Menu.Item key="Bisection">
                <Link to="/Bisection">Bisection method</Link>
              </Menu.Item>
              <Menu.Item key="Falseposition">
                <Link to="/Falseposition">Falseposition method</Link>
              </Menu.Item>
              <Menu.Item key="Onepoint">
                <Link to="/Onepoint">Onepoint method</Link>
              </Menu.Item>
              <Menu.Item key="Newton">
                <Link to="/Newton">Newton method</Link>
              </Menu.Item>
              <Menu.Item key="Secant">
                <Link to="/Secant">Secant method</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              title={
                <span className="submenu-title-wrapper">SystemOfLinear</span>
              }
            ></SubMenu>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          <div style={{ background: "#fff", padding: 24, minHeight: 1000 }}>
            <Routing />
          </div>
        </Content>
      </Layout>
    );
  }
}

export default App;
