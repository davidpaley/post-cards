import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

test("renders react app", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
