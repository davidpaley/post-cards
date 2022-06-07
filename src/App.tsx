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
          <Content className="customContent">
            <Title className="mainTitle" level={1}>
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
        <Footer className="footer">David Paley</Footer>
      </Layout>
    </>
  );
}

export default App;
