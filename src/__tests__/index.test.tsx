import { expect } from "chai";
import * as React from "react";
import TestRenderer from "react-test-renderer";

const Hello = function({ name }: { name: string }) {
  return <h1>Hello {name}!</h1>;
};

describe("Hello", () => {
  let renderer: TestRenderer.ReactTestRenderer;

  beforeEach(() => {
    renderer = TestRenderer.create(<Hello name="Willson" />);
  });

  it("should have correct prop values", () => {
    const content = renderer.root.find(e => e.type == "h1").children.join("");
    expect(content).eq("Hello Willson!");
  });
});

describe("tests", () => {
  it("works!", () => {
    expect(true).eq(true);
  });
});

describe("fetch", () => {
  it("fetched ", async () => {
    const result = await fetch("https://httpbin.davecheney.com/headers").then(
      x => x.json()
    );
    console.log(result);
    expect(result).not.eq(null);
  });
});
