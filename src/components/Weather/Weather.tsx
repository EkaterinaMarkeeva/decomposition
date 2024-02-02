// Компонент отвечает за содержимое карточки погоды

export type WeatherType = {
  items: {
    src: string,
    alt: string,
    title: string,
    addInformation: string,
    href: string
  }
};

export const Weather: React.FC<WeatherType> = (props) => {
  return (
    <div className="weather-card">
      <a  className="weather-link" href={props.items.href}>
        <img src={props.items.src} className="img weather-img" alt={props.items.alt} />
        <h3 className="weather-title">{props.items.title}</h3>
        <p className="weather-content">{props.items.addInformation}</p>
      </a>
    </div>
  )
};
