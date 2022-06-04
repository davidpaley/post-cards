import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { Card, Col, Layout, Pagination, Row, Space, Typography } from "antd";
import { Button } from "antd";
import "./App.css";
import { usePostsQuery } from "./services/postApi";

const PAGE_TITLE = "Post Cards App";

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
function App() {
  const {
    data: posts,
    error,
    isLoading,
    isFetching,
    isSuccess,
  } = usePostsQuery();
  return (
    <>
      <Layout>
        <Header></Header>
        <Layout>
          <Content style={{ overflow: "hidden" }}>
            <Title style={{ textAlign: "center" }} level={1}>
              {PAGE_TITLE}
            </Title>
            <Row gutter={16}>
              {isSuccess &&
                posts.map((post) => (
                  <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Card
                      title={post.title}
                      style={{
                        width: 300,
                        height: 300,
                        marginBottom: "2rem",
                      }}
                    >
                      <p>{post.body}</p>
                    </Card>
                  </Col>
                ))}
            </Row>
            <Row justify="center" align="top">
              <Pagination defaultCurrent={1} total={3} />
            </Row>
            {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
          </Content>
        </Layout>
        <Footer style={{ textAlign: "center" }}>David Paley</Footer>
      </Layout>
    </>
  );
}

export default App;
