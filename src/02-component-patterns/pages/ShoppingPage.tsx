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

        {/* <ProductCard product={product}/>
        <ProductCard product={product2}/> */}
        
        {/* Primera forma de compount component pattern */}
        {/* <ProductCard product={product2}>
          <ProductImage />
          <ProductTitle title={product2.title} />
          <ProductButtons counter={0} increaseBy={function (value: number): void {
            throw new Error("Function not implemented.")
          } } />
        </ProductCard> */}


        {/* Segunda forma del compount component pattern.  */}
        {/* Bajo esta construcción de componente, ambas formas son válidas */}
        <ProductCard product={product2}>
          <ProductCard.Image />
          <ProductCard.Title title="Hello" />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

        </div>
        
    </>
  )
}
