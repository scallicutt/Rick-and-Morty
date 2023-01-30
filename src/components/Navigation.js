import React from "react";

export function Navigation({ items, activeCharacter, handleClick }) {
  function renderItems() {
    return items.map((item) => {
      const activeClass =
        activeCharacter === item.id ? "navigation-list__item--active" : "";
      return (
        <li
          key={item.name}
          id={item.name}
          onClick={() => handleClick(item.name)}
          className={`navigation-list__item ${activeClass}`}
        >
          {item.name}
        </li>
      );
    });
  }
  return <ul className="navigation-list">{renderItems()}</ul>;
}
