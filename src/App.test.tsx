import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

test("renders react app", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
