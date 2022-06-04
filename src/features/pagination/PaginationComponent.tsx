import { Pagination, Row } from "antd";
import { PAGE_SIZE } from "../../constants";
import { setValue } from "./paginationSlice";
import { useAppDispatch } from "../../app/hooks";

interface PaginationComponentArgs {
  total?: number;
}

const PaginationComponent = ({ total }: PaginationComponentArgs) => {
  const dispatch = useAppDispatch();
  const onPaginationChange = (page: number) => {
    dispatch(setValue(page));
    window.scrollTo(0, 0);
  };
  return (
    <Row justify="center" align="top">
      <Pagination
        defaultCurrent={1}
        total={total}
        pageSize={PAGE_SIZE}
        pageSizeOptions={["50"]}
        onChange={onPaginationChange}
      />
    </Row>
  );
};

export default PaginationComponent;
