import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import { mobile } from '../responsive';


const Container = styled.div`
display: flex;
padding: 30px;
justify-content: space-between;
${mobile({ padding: "50px", flexDirection: "column" })}

`

const Categories = () => {
  return (
   <Container>
        {categories.map(item => (
            <CategoryItem item={item} key={item.id} />
        ))}

   </Container>
  )
}

export default Categories