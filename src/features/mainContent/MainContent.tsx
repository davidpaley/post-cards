import { Card, Col, Row, Spin, Typography } from "antd";

import PaginationComponent from "../pagination/PaginationComponent";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import { Response } from "../../models/redux.model";
import FetchFailure from "../fetchFailure/FetchFailure";

import styles from "./MainContent.module.css";

interface MainContentArgs {
  isSuccess: boolean;
  error?: FetchBaseQueryError | SerializedError;
  isLoading: boolean;
  data?: Response;
}

export const SPIN_TEST_ID = "spin";
export const PAGINATION_TEST_ID = "pagination";

const MainContent = ({
  isSuccess,
  data,
  error,
  isLoading,
}: MainContentArgs) => {
  if (isLoading) {
    return (
      <Row justify="center" align="middle" className={styles.spinContainer}>
        <Spin data-testid={SPIN_TEST_ID} size="large" />
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
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6, offset: 2 }}
            >
              <div className={styles.cardContainer}>
                <Card
                  title={
                    <Typography.Text className={styles.cardTitle}>
                      {title}
                    </Typography.Text>
                  }
                  className={styles.customCard}
                >
                  <p>{body}</p>
                </Card>
              </div>
            </Col>
          ))}
      </Row>
      <Row data-testid={PAGINATION_TEST_ID} justify="center" align="top">
        <PaginationComponent total={data?.total} />
      </Row>
    </>
  );
};

export default MainContent;
