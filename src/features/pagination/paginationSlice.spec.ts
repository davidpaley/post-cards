import paginationReducer, {
  PaginationState,
  setValue,
} from "./paginationSlice";

describe("counter reducer", () => {
  const initialState: PaginationState = {
    value: 3,
  };
  it("should handle initial state", () => {
    expect(paginationReducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
    });
  });

  it("should handle to set a new value for the pagination", () => {
    const actual = paginationReducer(initialState, setValue(1));
    expect(actual.value).toEqual(1);
  });
});
