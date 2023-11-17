import { Product } from "@/types/products";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import ProductCard from "..";
import { store } from "../../../features/store";

describe("productCard Component", () => {
  it("should render correctly", () => {
    render(
      <Provider store={store}>
        <ProductCard />
      </Provider>
    );
    expect(ProductCard).toMatchSnapshot();
  });
});
