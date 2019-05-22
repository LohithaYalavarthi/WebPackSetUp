import 'antd/dist/antd.css';
import React, { Component } from 'react';
import { Button } from 'antd';
class App extends Component {
    render() {
        return (
            <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
        );
    }
}

export default App;