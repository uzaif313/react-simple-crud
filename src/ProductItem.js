import React, { Component } from 'react';



class ProductItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      isEdit:false
    }
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }  
    
  onDelete(){
    const {onDelete, name} = this.props;
    onDelete(name);
  }

  onEdit(){
    this.setState({isEdit:true});
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.isEdit ?  this.editProduct() : this.plainList()
        }
      </React.Fragment>
    );
  }

  editProduct(){
   return(
    <h1>Product Edit</h1>
   ) 
  }

  plainList(){
    const {name, price} = this.props
    return(
              <div>
                <span>{name}</span>
                { ` | `}
                <span>{price}</span>
                { ` | `}
                <button onClick={this.onEdit}>Edit</button>
                { ` | `}
                <button onClick={this.onDelete}>Delete</button>
              </div>

    )
  }
}

export default ProductItem;
