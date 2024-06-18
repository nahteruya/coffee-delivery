import { useTheme } from "styled-components";
import { Heading, HeroSection, HomeContainer, Info, Menu } from "./styles";

import imageHero from "../../assets/ImagemHero.png";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

import { Card } from "../../components/CardHome";

import data from "../../../data.json";

export function Home() {
  const theme = useTheme();
  const { coffees } = data;
  return (
    <HomeContainer>
      <HeroSection>
        <aside>
          <Heading>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </Heading>
          <Info>
            <div>
              <ShoppingCart
                size={32}
                weight="fill"
                color={theme["background"]}
                style={{ background: theme["yellow-dark"] }}
              />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <Package
                size={32}
                weight="fill"
                color={theme["background"]}
                style={{ background: theme["base-text"] }}
              />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <Timer
                size={32}
                weight="fill"
                color={theme["background"]}
                style={{ background: theme["yellow"] }}
              />
              <span>Entrega rápida e restreada</span>
            </div>
            <div>
              <Coffee
                size={32}
                weight="fill"
                color={theme["background"]}
                style={{ background: theme["purple"] }}
              />
              <span>O café chega freaquinho até você</span>
            </div>
          </Info>
        </aside>
        <img src={imageHero} alt="" height={360} />
      </HeroSection>
      <Menu>
        <h2>Nossos cafés</h2>
        <ul>
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </ul>
      </Menu>
    </HomeContainer>
  );
}
