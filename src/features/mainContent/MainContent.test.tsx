import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { ERROR_MESSAGE } from "../fetchFailure/FetchFailure";
import MainContent, { PAGINATION_TEST_ID, SPIN_TEST_ID } from "./MainContent";

const title1 =
  "sunt aut facere repellat provident occaecati excepturi optio reprehenderit";
const title2 = "qui est esse";

const mockData = {
  apiResponse: [
    {
      userId: 1,
      id: 1,
      title: title1,
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: title2,
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
  ],
  total: 2,
};

describe("Main content component expected bahavior", () => {
  it("shows data correctly", () => {
    render(
      <Provider store={store}>
        <MainContent data={mockData} isSuccess={true} isLoading={false} />
      </Provider>
    );
    expect(screen.getByText(title1)).toBeVisible();
    expect(screen.getByText(title2)).toBeVisible();
    expect(screen.getByTestId(PAGINATION_TEST_ID)).toBeInTheDocument();
  });

  it("shows loading spiner", () => {
    render(
      <Provider store={store}>
        <MainContent isSuccess={false} isLoading={true} />
      </Provider>
    );
    expect(screen.getByTestId(SPIN_TEST_ID)).toBeVisible();
    expect(screen.queryByTestId(PAGINATION_TEST_ID)).not.toBeInTheDocument();
  });

  it("shows the error component (FetchFailure)", () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    const error = { status: "FETCH_ERROR", error: "this is the error" };
    render(
      <Provider store={store}>
        <MainContent
          isSuccess={false}
          isLoading={false}
          error={error as FetchBaseQueryError}
        />
      </Provider>
    );
    expect(screen.getByText(ERROR_MESSAGE)).toBeVisible();
  });
});
