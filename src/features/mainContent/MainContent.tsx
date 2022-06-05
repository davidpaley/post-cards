import { Card, Col, Row, Spin, Typography } from "antd";

import PaginationComponent from "../pagination/PaginationComponent";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import { Response } from "../../models/redux.model";
import FetchFailure from "../fetchFailure/FetchFailure";

interface MainContentArgs {
  isSuccess: boolean;
  error?: FetchBaseQueryError | SerializedError;
  isLoading: boolean;
  data?: Response;
}

const MainContent = ({
  isSuccess,
  data,
  error,
  isLoading,
}: MainContentArgs) => {
  if (isLoading) {
    return (
      <Row
        justify="center"
        align="middle"
        style={{
          flex: 1,
        }}
      >
        <Spin size="large" />
      </Row>
    );
  }
  if (error) {
    return <FetchFailure error={error} />;
  }
  return (
    <>
      <Row gutter={16}>
        {isSuccess &&
          data?.apiResponse &&
          data?.apiResponse.map(({ id, title, body }) => (
            <Col
              key={id}
              xs={{ span: 5, offset: 1 }}
              lg={{ span: 6, offset: 2 }}
            >
              <Card
                title={
                  <Typography.Text style={{ whiteSpace: "break-spaces" }}>
                    {title}
                  </Typography.Text>
                }
                style={{
                  width: 300,
                  height: 300,
                  marginBottom: "2rem",
                }}
              >
                <p>{body}</p>
              </Card>
            </Col>
          ))}
      </Row>
      <Row justify="center" align="top">
        <PaginationComponent total={data?.total} />
      </Row>
    </>
  );
};

export default MainContent;
