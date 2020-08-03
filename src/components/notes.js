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
                    <span>Our data goes here!!</span>
                </div>
                <form onSubmit={this.addNote}>
                    <footer> 
                        Notes Title: <input type="text" 
                                    placeholder="Enter Title here" 
                                    ref={t=> this.title=t} />
                        Note: <textarea placeholder="Enter Notes here"
                                ref={n=>this.note=n} />
                        <button type="submit">Save</button>
                    </footer> 
                </form>
            </React.Fragment>
        );
    }
}

export default Notes;