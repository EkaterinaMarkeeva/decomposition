import './App.css';
import { List } from './components/List/List';
import { UsefulCard } from './components/UsefulCard/UsefulCard';
import { Image } from './components/Image/Image';
import { Weather } from './components/Weather/Weather';
import { listDataActive, listDataProgram, listDataBroadcast, listNewsTheme, listMenuTheme, listDataVisited, listDataWeather, listDataСurrency } from './data/listData';

function App() {
  return (
    <>
      <div className="card-news box">
        <div className="card-news-header">
          <List className="list" items={listNewsTheme} />
        </div>
        <div className="card-news-active">
          <List className="list-column" items={listDataActive} />
        </div>
        <List className="list currency opacity" items={listDataСurrency} />
      </div>
      <div className="search">
        <nav className="search-menu box">
          <List className="list" items={listMenuTheme} />
        </nav>
        <div className="search-content">
          <a href="#" className="search-logo">
            <Image src="https://avatars.dzeninfra.ru/get-zen_doc/3531091/pub_616094fdd416587b202effb3_616098f8508bef66365420cb/orig" alt="Яндекс" />
          </a>
          <form className="search-form">
            <input type="text" className="search-input" />
            <button className="btn search-btn">Найти</button>
          </form>
        </div>
      </div>
      <a className="marketing dox" href="#"><Image src="https://www.ppt-backgrounds.net/thumbs/banner--safari-template-powerpoint.jpeg" alt="реклама" /></a>
      <>
        <div className="useful box">
          <UsefulCard title='Погода'>
            <Weather items={listDataWeather} />
          </UsefulCard>
          <UsefulCard title='Телепрограмма'>
            <List className="list-column opacity" items={listDataProgram} />
          </UsefulCard>
          <UsefulCard title='Эфир'>
            <List className="list-column opacity" items={listDataBroadcast} />
          </UsefulCard>
          <UsefulCard title='Посещаемое'>
          <List className="list-column" items={listDataVisited} />
          </UsefulCard>
        </div>
      </>
    </>
  )
}

export default App
