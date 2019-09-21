import React, { useState } from "react";

import AccordionItem, { IAccordionItemProps } from "./AccordionItem";

export interface IAccordionProps {
  id: string;
  initialExpanded?: number;
  items: Array<Pick<IAccordionItemProps, "header" | "body">>;
}

const Accordion: React.FC<IAccordionProps> = props => {
  const { initialExpanded, items, id } = props;
  const numItems = items.length;

  const [expandedIndex, setExpandedIndex] = useState(initialExpanded);

  const toggleExpanded = (index: number) => {
    const indexToToggle = (index + numItems) % numItems;
    setExpandedIndex(indexToToggle === expandedIndex ? -1 : indexToToggle);
  }

  const setFocus = (index: number) => {
    const accordionToggles = document.querySelectorAll<HTMLButtonElement>(
      `button[data-accordion-id="${id}-toggle"]`
    );
    const numToggles = accordionToggles.length;
    accordionToggles[(index + numToggles) % numToggles].focus();
  };

  return (
    <div id={id}>
      {items.map((item, i) => {
        const key = `${id}-item-${i}`;
        return (
          <AccordionItem
            key={key}
            id={id}
            index={i}
            isExpanded={i === expandedIndex}
            onExpand={toggleExpanded}
            onFocus={setFocus}
            {...item}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
