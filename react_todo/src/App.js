import React from 'react';
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'
import  'bootstrap/dist/css/bootstrap.min.css'
import  {v1} from 'uuid'
class App extends React.Component {
    state = {
        items:[],
        title:'',
        id:v1(),
        edititem:false
       }



     inputItem = (e) => {
       this.setState({title:e.target.value});
     }
     


     handleSubmitItem = (e) =>
     {
      e.preventDefault();
      
      const newItem={
        id:this.state.id,
        title:this.state.title
      }

      console.log(newItem);
      

      const updateItem=[...this.state.items,newItem];

      this.setState({
        items:updateItem,
        title:"",
        id:v1(),
        edititem:false
      });
      
    }

    handleClearItems= () =>
    {
      this.setState({items:[]})
    }

    handleDeleteById =(id) =>
    {
       const filteredItem=this.state.items.filter((item) => item.id !== id);

       this.setState({items:filteredItem});
       
    }

    handleEditItem= (id) => {
      const filteredItem=this.state.items.filter((item) => item.id !== id);

      this.setState({
        items:filteredItem,
        id:id,
        item:"",
        edititem:true
      
      })

    }

    render() { 
        return ( 
        
            <div className="container">
           <div className="row">
           <div className="col-10 mx-auto  col-md-6 mt-4">
             <h3 className= "text-capitalize text-center" >
              Todo Input
             </h3>  
             <TodoInput editChanges={this.state.edititem}  submitMethod={this.handleSubmitItem}   itemValue={this.state.title}   inputValue={this.inputItem}/>
             <TodoList  editItem={this.handleEditItem}  getId={this.handleDeleteById}  handleClearList={this.handleClearItems}    items={this.state.items}/>
                
           </div>
           </div>
           </div>

         );
    }
}
 
export default App;