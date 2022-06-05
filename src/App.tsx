import { Layout, Typography } from "antd";
import { usePostsQuery } from "./services/postApi";
import { selectPagination } from "./features/pagination/paginationSlice";
import { useAppSelector } from "./app/hooks";
import MainContent from "./features/mainContent/MainContent";
import "./App.css";

const PAGE_TITLE = "Post Cards App";

const { Header, Footer, Content } = Layout;

function App() {
  const page = useAppSelector(selectPagination);

  const { data, error, isLoading, isSuccess } = usePostsQuery(page);
  const { Title } = Typography;
  return (
    <>
      <Layout>
        <Header />
        <Layout>
          <Content
            style={{
              overflow: "hidden",
              minHeight: "90vh",
              padding: "6.25rem 100px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Title
              style={{ textAlign: "center", marginBottom: "3rem" }}
              level={1}
            >
              {PAGE_TITLE}
            </Title>
            <MainContent
              data={data}
              error={error}
              isLoading={isLoading}
              isSuccess={isSuccess}
            />
          </Content>
        </Layout>
        <Footer style={{ textAlign: "center" }}>David Paley</Footer>
      </Layout>
    </>
  );
}

export default App;
