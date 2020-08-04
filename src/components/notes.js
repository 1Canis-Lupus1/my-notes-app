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
                <header className="alert alert-warning row justify-content-end">
                    <h2 className="col-8">My Notes App!!</h2>
                    <span className="col align-self-end">Search: <input type="text" 
                        placeholder="Search Notes"/>
                    <button className="m-3 btn btn-info" >Search</button></span>
                        {/* ref={s=>this.search=s}/>{this.state.items.filter(name=> name.title !== name)} */}
                </header>
                <div className="jumbotron ">
                    <ul className="list-group">
                        {this.state.items.map(val=><li className="list-group-item list-group-item-action text-center"><strong>{val.title}</strong> -  "<em>{val.note}</em>"</li>)}
                    </ul>
                </div>
                <form onSubmit={this.addNote}>
                    <div className="alert alert-success footer"> 
                        <strong>Notes Title: </strong><input type="text" 
                                    placeholder="Enter Title here" 
                                    ref={t=>this.title=t} required/>
                        <strong>Note: </strong><textarea placeholder="Enter Notes here"
                                 ref={n=>this.note=n}/>
                        <button type="submit" className='m-2 btn btn-primary'>Add Note</button>
                    </div> 
                </form>
            </React.Fragment>
        );
    }
}

export default Notes;