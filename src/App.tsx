import { Card, Col, Layout, Row, Typography } from "antd";
import { usePostsQuery } from "./services/postApi";
import { selectPagination } from "./features/pagination/paginationSlice";

import "./App.css";
import { useAppSelector } from "./app/hooks";
import PaginationComponent from "./features/pagination/PaginationComponent";

const PAGE_TITLE = "Post Cards App";

const { Header, Footer, Content } = Layout;
const { Title } = Typography;
function App() {
  const page = useAppSelector(selectPagination);
  console.log(page);
  const { data, error, isLoading, isFetching, isSuccess, refetch } =
    usePostsQuery(page);

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
                  <Col
                    key={post.id}
                    xs={{ span: 5, offset: 1 }}
                    lg={{ span: 6, offset: 2 }}
                  >
                    <Card
                      title={
                        <Typography.Text style={{ whiteSpace: "break-spaces" }}>
                          {post.title}
                        </Typography.Text>
                      }
                      style={{
                        width: 300,
                        height: 340,
                        marginBottom: "2rem",
                      }}
                    >
                      <p>{post.body}</p>
                      <br />
                      <p>id: {post.id}</p>
                    </Card>
                  </Col>
                ))}
            </Row>
            <Row justify="center" align="top">
              <PaginationComponent total={data?.total} />
            </Row>
          </Content>
        </Layout>
        <Footer style={{ textAlign: "center" }}>David Paley</Footer>
      </Layout>
    </>
  );
}

export default App;
