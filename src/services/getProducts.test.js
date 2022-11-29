import { getProducts } from "./getProducts";

const mockProducts = {
  object: "list",
  data: [
    {
      id: "prod_ITgsgRSVm7y1vP",
      object: "product",
      active: true,
      attributes: [],
      created: 1606631666,
      description:
        'His most famous work "David", features a hand-sculpted micropenis and his weapon of choice when fighting crime is the Bo-Staff.',
      images: [
        "https://files.stripe.com/links/fl_test_HG5Y5oY5y2SlpQMclkQ0rjXm",
      ],
      livemode: false,
      metadata: {
        category: "sunglasses",
      },
      name: "THE DONATELLO POLARIZED",
      statement_descriptor: null,
      type: "service",
      unit_label: null,
      updated: 1606631695,
    },
    {
      id: "prod_ITgrISWI9X1mlU",
      object: "product",
      active: true,
      attributes: [],
      created: 1606631616,
      description: "Gobby [gob-eez]",
      images: [
        "https://files.stripe.com/links/fl_test_r2lIqRzLPAgJqYJJu3xchKPP",
      ],
      livemode: false,
      metadata: {
        category: "sunglasses",
      },
      name: "THE GOBBY POLARIZED",
      statement_descriptor: null,
      type: "service",
      unit_label: null,
      updated: 1606631715,
    },
  ],
};

beforeAll(() => {
  jest.spyOn(window, "fetch");
});

describe("getProducs", () => {
  it("should make a fetch request to get the products from the product API", async () => {
    const url = `${process.env.REACT_APP_API_URL}/products`;
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    });

    const products = await getProducts();

    expect(window.fetch).toHaveBeenCalledWith(url);
    expect(mockProducts).toEqual(products);
  });
});
