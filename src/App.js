import React, { Component } from 'react';
import ProductItem from './ProductItem';
import AddProductItem from './AddProductItem';
import './App.css';

const products = [
  {name:'iPad',price:6555},
  {name:'iPhone',price:7555},
  {name:'iMac',price:10555},
]

localStorage.setItem('products',JSON.stringify(products))
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      products:JSON.parse(localStorage.getItem('products'))
    }
    this.onDelete = this.onDelete.bind(this)
    this.onAdd = this.onAdd.bind(this)
  }  
    
  componentWillMount(){
   const products =  this.getProducts(); 
    this.setState({products})
  }

  getProducts(){
    return this.state.products
  }

  onAdd(name,price){
    const products = this.getProducts();
    products.push({name:name,price:price})
    this.setState({products})
  }

  onDelete(name){
    const products = this.getProducts();
    const filterProducts = products.filter(product=>{
      return product.name !== name;
    })
    this.setState({products:filterProducts})
    // console.log(filterProducts)
    // console.log(name)
  }

  render() {
    return (
      <div className="App">
        <h1>Product Manager</h1>
        <AddProductItem onAdd={this.onAdd}/>
        <hr/>
        {
          this.state.products.map((product)=>{
            return(
                <ProductItem {...product} 
                key={product.name}
                onDelete={this.onDelete}
                />
            )
          })
        }
      </div>
    );
  }
}

export default App;
