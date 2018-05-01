import React, { Component } from 'react';



class ProductItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      isEdit:false
    }
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
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

  onEditSubmit(event){
    event.preventDefault();
    this.props.onEditSubmit(this.nameInput.value,this.priceInput.value, this.props.name)
    this.setState({isEdit:false});
  }

  editProduct(){
    const {name, price} =this.props
   return(
    <form onSubmit={this.onEditSubmit}>
          <input placeholder="Name" ref={nameInput=>this.nameInput =nameInput} defaultValue={name}/>
          <input placeholder="Price" ref={priceInput=>this.priceInput =priceInput} defaultValue={price
          }/>
          <button>Save</button>
    </form>
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
