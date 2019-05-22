import 'antd/dist/antd.css';
import React, { Component } from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
    render() {
        return (
      <Layout style={{ padding: '20px 24px 24px' }}>
       <Sider>Sider</Sider>
       <Layout>
        <Header style={{color : "red"}}>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
     </Layout>
        );
    }
}

export default App;