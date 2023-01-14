
import { Outlet } from "react-router-dom";
import CardGames from "../../components/molecules/CardGames";
import Footer from "../../components/molecules/Footer";
import HeaderMenu from "../../components/molecules/HeaderMenu";
import InfoPreVenda from "../../components/molecules/InfoPreVenda";
import MenuOptions from "../../components/molecules/MenuOptions";
import PromocaoEspecialCard from "../../components/molecules/PromocaoEspecialCard";
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
          <div className="generoBorder" style={{display: 'flex',width: 'calc(100vw - 100px)',  }}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <div>
                <GeneroCard />
              </div>
              <div className="boxPromo">
                <CardGames />
              </div>
            </div>
            
            <div className="mainInfoBorder" style={{width: '100%',  }}>
              <Pesquisar />
              <div style={{marginLeft: '20px'}}>
                <MainCardCarousel />
              </div>
              <div className="boxPromo" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', paddingTop: '20px'}}>
                <div style={{marginLeft: '50px'}}>
                  <PromocaoEspecialCard />
                </div>
                <div style={{marginRight: '50px'}}>
                  <InfoPreVenda />
                </div>
              </div>
          
            </div>
            
          </div>


          </div>
{/* 
          <div>
            <Outlet />
          </div> */}
        </div>
        <Footer />
      </div>
    );
  }