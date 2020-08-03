import React,{ Component } from 'react';
import { render } from '@testing-library/react';

class Notes extends Component{

    constructor(props){
        super(props);
        this.state={
            items:[]
        }
    }

    addNote= event => {
        console.log('Adding Notes');

        if(this.title.value !== ""){
            var newItems={
                title:this.title.value,
                note:this.note.value
            }
        }

        this.setState((prevState)=>{
            return{
                items:prevState.items.concat(newItems)
            };
        });

        //After setState Method, now setting the value back to empty
        this.title.value="";
        this.note.value="";

        console.log(this.state.items);

        //Prevent reloading page On Submit:
        event.preventDefault();
    }

    render(){
        return(
            <React.Fragment>
                <header className="alert alert-warning">
                    <h2 className="text-center">My Notes App!!</h2>
                    Search: <input type="text" 
                        placeholder="Search Notes"/><button className="m-3 btn btn-info" >Search</button>
                        {/* ref={s=>this.search=s}/>{this.state.items.filter(name=> name.title !== name)} */}
                </header>
                <div className="jumbotron jumbotron-fluid">
                    <ul className="list-group">
                        {this.state.items.map(val=><li className="list-group-item list-group-item-action text-center">{val.title}-{val.note}</li>)}
                    </ul>
                </div>
                <form onSubmit={this.addNote}>
                    <footer className="alert alert-success"> 
                        Notes Title: <input type="text" 
                                    placeholder="Enter Title here" 
                                    ref={t=>this.title=t} />
                        Note: <textarea placeholder="Enter Notes here"
                                 ref={n=>this.note=n}/>
                        <button type="submit">Add Note</button>
                    </footer> 
                </form>
            </React.Fragment>
        );
    }
}

export default Notes;