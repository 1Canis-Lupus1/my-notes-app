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
                <header>
                    <h2>My Notes App!!</h2>
                </header>
                <div className="main-content">
                    <ul>
                        {this.state.items.map(val=><li>{val.title}-{val.note}</li>)}
                    </ul>
                </div>
                <form onSubmit={this.addNote}>
                    <footer> 
                        Notes Title: <input type="text" 
                                    placeholder="Enter Title here" 
                                    ref={t=>this.title=t} />
                        Note: <textarea placeholder="Enter Notes here"
                                 ref={n=>this.note=n}/>
                        <button type="submit">Save</button>
                    </footer> 
                </form>
            </React.Fragment>
        );
    }
}

export default Notes;