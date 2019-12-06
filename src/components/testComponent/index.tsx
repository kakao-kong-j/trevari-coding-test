import React from "react";

export type TestComponentProps = {
  name: string;
};

const TestComponent = (props: TestComponentProps) => {
  const { name = "default" } = props;
  return <div>Hello, {name}</div>;
};

export default TestComponent;
