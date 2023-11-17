import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import { Header } from "..";
import { store } from "../../../features/store";
describe("Header Component", () => {
  it("should render correctly", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(screen.getByText("MKS")).toBeInTheDocument;
    expect(screen.getByText("Sistemas")).toBeInTheDocument;
  });

  it("should match the snapshot", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(Header).toMatchSnapshot();
  });
});
