
import { Outlet } from "react-router-dom";
import HeaderMenu from "../../components/molecules/HeaderMenu";
import MenuOptions from "../../components/molecules/MenuOptions";
import GeneroCard from "../../components/organisms/GeneroCard";
import MainCard from "../../components/organisms/MainCard";
import Pesquisar from "../../components/organisms/Pesquisar";
import MainCardCarousel from "../../components/tamplates/MainCardCarousel";
import './style.css'

export default function Root() {
    return (
      <div className="Fundo">
        <div className="Container">
          <HeaderMenu />
          <div className="MenuOptionsBorder" style={{display: 'flex'}}>
          <MenuOptions />
          <div className="generoBorder" style={{display: 'flex',width: 'calc(100vw - 100px)', height: '506px'}}>
            <GeneroCard />
            <div className="mainInfoBorder" style={{width: '100%',  }}>
              <Pesquisar />
              <MainCardCarousel />
              <>
              </>
            </div>
            
          </div>

          </div>
{/* 
          <div>
            <Outlet />
          </div> */}
        </div>
      </div>
    );
  }