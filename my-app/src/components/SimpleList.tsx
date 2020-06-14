import React from "react";

interface IPropType {
  listItems: any[];
  sort?: boolean;
  sortType?: String;
  filterBy?: String;
}
const sortItems = (pets: any, type?: String) => {
  return []
    .concat(pets)
    .sort((a: any, b: any) =>
      type && type === "descending"
        ? a.name < b.name
          ? 1
          : -1
        : a.name > b.name
        ? 1
        : -1
    );
};
const SimpleList = (props: IPropType) => {
  let items = props.sort
    ? sortItems(props.listItems, props.sortType)
    : props.listItems;
  return (
    <ul className="list-group list-group-flush">
      {items.map((item: any, index: number) => {
        if (item.type === props.filterBy) {
          return (
            <li className="list-group-item" key={index}>
              {item.name}
            </li>
          );
        }
      })}
    </ul>
  );
};

export default SimpleList;
