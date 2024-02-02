// Компонент отвечает за элемент списка

export type ListItemType = {
  src?: string,
  alt?: string,
  time?: string,
  addInformation?: string,
  content?: string,
  title: string,
  href: string
};

export const ListItem: React.FC<ListItemType> = (props) => {
  return (
    <li className="item">
      {props.src && props.alt && <img src={props.src} className="img" alt={props.alt}></img>}
      {props.time && <time className="item-time">{props.time}</time>}
      
      <a className="item-title" href={props.href}>{props.title}</a>

      {props.content && <p className="item-content">{props.content}</p>}
      {props.addInformation && <p className="item-information">{props.addInformation}</p>}
    </li>
  )
};
