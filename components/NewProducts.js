import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";
import ApiCrud from "./ApiCrud";
import ApiCrud2 from "./ApiCrud2";
import Carusel from "./Carusel";
import Category from "./Category";
import ApiCrud3 from "./ApiCrud3";

const Title = styled.h2`
  font-size: 2rem;
  margin:30px 0 20px;
  font-weight: normal;
`;

export default function NewProducts({products}) {
  return (
      <>
      <ApiCrud/>
      <Center>
      <Title></Title>
      <ApiCrud3/>
      <Category/>
      {/* <ProductsGrid products={products} /> */}
      </Center>
        <div style={{maxWidth:"1500px",margin:"0 auto",display:"flex",flexWrap:"wrap",gap:"20px",justifyContent:"center",marginBottom:"30px",rowGap:"130px"}}>
        <ApiCrud2/>
        </div>
      </>
  );
}