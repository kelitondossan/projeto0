import { Product } from "@/types/products";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../features/store";
import "@testing-library/jest-dom";
import SideBar from "..";

describe("SideBar component", () => {
  it("should render the cart component correctly", () => {
    render(
      <Provider store={store}>
        <SideBar cartOpen />
      </Provider>
    );
    expect(SideBar).toMatchSnapshot();
  });
});
