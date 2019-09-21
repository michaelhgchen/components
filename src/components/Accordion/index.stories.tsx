import React from "react";

import Accordion from "./";

export default {
  component: Accordion,
  title: "Accordion"
};

export const test = () => (
  <Accordion
    id="test-id"
    initialExpanded={0}
    items={[
      {
        body: "Body 1",
        header: "Header 1"
      },
      {
        body: "Body 2",
        header: "Header 2"
      },
      {
        body: "Body 3",
        header: "Header 3"
      }
    ]}
  />
);
