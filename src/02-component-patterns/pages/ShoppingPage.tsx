import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"

const product = {
  id: '1',
  title: 'Cofee Mug - Card'
}

const product2 = {
  id: '2',
  title: 'Te chai',
  img: 'public/coffee-mug.png'
}

import '../styles/custom-styles.css'


export const ShoppingPage = () => {
  return (
    <>
        <h1>Shopping Page</h1>
        <hr />
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>

        {/* Segunda forma del compount component pattern.  */}
        {/* Bajo esta construcción de componente, ambas formas son válidas */}
        <ProductCard className="bg-dark text-white" product={product2} >
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title title="Hello" className="text-white" />
          <ProductCard.Buttons className="custom-bottom" />
        </ProductCard>

        <ProductCard className="bg-dark text-white" product={product}>
          <ProductImage  className="custom-image"/>
          <ProductTitle />
          <ProductButtons className="custom-bottom"/>
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons style={{backgroundColor: 'lemonchiffon'}}/>
        </ProductCard>

        </div>
        
    </>
  )
}
