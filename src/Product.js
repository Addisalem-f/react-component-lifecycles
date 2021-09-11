import React from 'react'
function Product(props){
return(
<div>
Product Name <input
    type="text"
    name={props.name}
    onChange={props.productNameChangeEventHandler}
    
    />
  </div>

)
}
export default Product;