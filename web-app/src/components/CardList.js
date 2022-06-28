import styled from "styled-components";
import CardItem from "./CardItem";
import BaseContainer from "./Container";

const Container = styled(BaseContainer)`
  padding-top: 32px;
  padding-bottom: 120px;

  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media screen and (min-width: 512px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const CardList = ({ data = [] }) => (
  <Container>
    {data.map((data, index) => (
      <CardItem key={`card_item_${index}`} data={data} />
    ))}
  </Container>
);

export default CardList;
