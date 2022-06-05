import { Row } from "antd";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import { WarningOutlined } from "@ant-design/icons";

interface FetchFailureArgs {
  error: FetchBaseQueryError | SerializedError;
  customMessage?: string;
}

export const ERROR_MESSAGE = "Error loading the posts";

const FetchFailure = ({ error, customMessage }: FetchFailureArgs) => {
  // TODO: Handle errors better. Add Sentry to the project
  console.error(error);
  return (
    <>
      <Row
        justify="center"
        align="middle"
        style={{
          flex: 1,
        }}
      >
        <WarningOutlined size={10} style={{ fontSize: "15rem" }} />
      </Row>
      <br />
      <Row
        justify="center"
        align="middle"
        style={{
          flex: 1,
        }}
      >
        <p>{customMessage || ERROR_MESSAGE}</p>
      </Row>
    </>
  );
};

export default FetchFailure;
