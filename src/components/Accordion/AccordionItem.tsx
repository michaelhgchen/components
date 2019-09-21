import React, { KeyboardEvent } from "react";
import styled from "styled-components";

export interface IAccordionItemProps {
  body: React.ReactNode;
  header: React.ReactNode;
  id: string;
  index: number;
  isExpanded: boolean;
  onExpand: (index: number) => void;
  onFocus: (index: number) => void;
}

const AccordionToggle = styled.button`
  background-color: transparent;
  border: 1px solid black;
  border-bottom: 0;
  font-family: inherit;
  font-size: inherit;
  width: 100%;
  padding: 16px;

  &[aria-expanded="true"] {
    border-bottom: 1px solid black;
  }
`;

const AccordionHeader = styled.h3`
  font-size: inherit;
  font-weight: normal;
  margin: 0;

  &:last-of-type ${AccordionToggle} {
    border-bottom: 1px solid black;
  }
`;

const AccordionBody = styled.div`
  border-left: 1px solid black;
  border-right: 1px solid black;
  font-size: inherit;
  padding: 16px;

  &:last-child {
    border-bottom: 1px solid black;
  }
`;

const AccordionItem: React.FC<IAccordionItemProps> = props => {
  const { body, header, id, index, isExpanded, onExpand, onFocus } = props;

  const bodyId = `${id}-body-${index}`;
  const headerId = `${id}-header-${index}`;
  const toggleId = `${id}-toggle`;

  const onKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowUp":
      case "ArrowLeft":
        onFocus(index - 1);
        break;
      case "ArrowDown":
      case "ArrowRight":
        onFocus(index + 1);
        break;
      case "Home":
        onFocus(0);
        break;
      case "End":
        onFocus(-1);
        break;
      case "Down":
        break;
    }
  };

  return (
    <>
      <AccordionHeader id={headerId}>
        <AccordionToggle
          aria-controls={bodyId}
          aria-expanded={isExpanded ? "true" : "false"}
          data-accordion-id={toggleId}
          onClick={() => onExpand(index)}
          onKeyDown={onKeyDown}
        >
          {header}
        </AccordionToggle>
      </AccordionHeader>
      <AccordionBody
        aria-labelledby={headerId}
        hidden={!isExpanded}
        id={bodyId}
        role="region"
      >
        {body}
      </AccordionBody>
    </>
  );
};

export default AccordionItem;
