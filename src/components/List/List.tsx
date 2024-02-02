// Компонент отвечает за создание списка

import { ListItem } from "../Item/ListItem";

type ListType = {
  className: string,
  items: {
    src?: string,
    alt?: string,
    time?: string,
    addInformation?: string,
    title: string,
    href: string
  }[]
};

export const List: React.FC<ListType> = (props) => {

  return (
    <ul className={props.className}>
      {props.items.map((item, index) => <ListItem {...item} key={index} />)}
    </ul>
  )
};
