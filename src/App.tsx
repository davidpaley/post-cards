import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { Card, Col, Layout, Pagination, Row, Space, Typography } from "antd";
import { Button } from "antd";
import "./App.css";
import { usePostsQuery } from "./services/postApi";
import { Post } from "./models/post.model";

const PAGE_TITLE = "Post Cards App";

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
function App() {
  const { data, error, isLoading, isFetching, isSuccess } = usePostsQuery();

  return (
    <>
      <Layout>
        <Header />
        <Layout>
          <Content style={{ overflow: "hidden" }}>
            <Title style={{ textAlign: "center" }} level={1}>
              {PAGE_TITLE}
            </Title>
            <Row gutter={16}>
              {isSuccess &&
                data.apiResponse.map((post) => (
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
          </Content>
        </Layout>
        <Footer style={{ textAlign: "center" }}>David Paley</Footer>
      </Layout>
    </>
  );
}

export default App;
