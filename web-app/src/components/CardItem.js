import styled from "styled-components";

const Card = styled.div`
  margin-top: 50px;
  cursor: pointer;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Title = styled.div`
  padding: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  color: #000000;
`;

const Description = styled.div`
  padding: 5px;
  font-size: 14px;
  line-height: 30px;
  font-weight: 300;
  color: #838282;
`;

export const CardItem = ({ data }) => (
  <Card>
    <Image src={data.imageUrl} />
    <Title>
      <span>{data.title}</span>
    </Title>
    <Description>{data.description}</Description>
  </Card>
);

export default CardItem;
