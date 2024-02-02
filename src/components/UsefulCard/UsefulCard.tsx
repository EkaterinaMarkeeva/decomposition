// Компонент отвечает за создание карточки

type UsefulCardType = {
  title: string,
  children: React.ReactNode
};

export const UsefulCard: React.FC<UsefulCardType> = (props) => {
  return (
    <article className="useful-card">
      <h3  className="useful-card-title">{props.title}</h3>
      {props.children}
    </article>
  )
};
