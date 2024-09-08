import { useParams } from "react-router";
import { Flex, Spinner } from "@chakra-ui/react";
import useProductsById from "../hooks/useProductsById";
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

const Item = () => {
    // useParams: hook que permite acceder a los parametros de la URL
    const { id } = useParams();
    const { productData, loading } = useProductsById(id);
  
    return loading ? (
      <Flex
        width={"100%"}
        height={"90vh"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Spinner size="xl" />
      </Flex>
    ) : (
      <ItemDetailContainer product={productData}/>
    );
  };
export default Item;


