import { Row } from "antd";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import { WarningOutlined } from "@ant-design/icons";
import styles from "./FetchFailure.module.css";
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
      <Row justify="center" align="middle" className={styles.iconContainer}>
        <WarningOutlined size={10} className={styles.icon} />
      </Row>
      <br />
      <Row justify="center" align="middle" className={styles.messageContainer}>
        <p>{customMessage || ERROR_MESSAGE}</p>
      </Row>
    </>
  );
};

export default FetchFailure;
