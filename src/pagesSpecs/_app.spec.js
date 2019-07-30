import MyApp from "../pages/_app";
import React from "react";
import { shallow } from "enzyme";

let PageComponent, nextContext, callGetInitialProps;

const build = passedProps => {
  const defaultProps = {
    // router is passed by next.js
    router: {
      query: {
        language: "de"
      }
    },
    Component: PageComponent,
    pageProps: { pageProps: 1 }
  };
  const props = { ...defaultProps, ...passedProps };
  return shallow(<MyApp {...props} />);
};

beforeEach(() => {
  PageComponent = () => null;
  PageComponent.getInitialProps = async (ctx, { language }) => {
    return { ctx, language };
  };
  nextContext = { query: {} };
  callGetInitialProps = () => {
    return MyApp.getInitialProps({
      Component: PageComponent,
      ctx: nextContext
    });
  };
});

describe.only("render test", () => {
  it("should render", () => {
    const component = build();
    expect(component).toMatchSnapshot();
  });
});
