import React from "react";
class Childcomponent extends React.Component {
    constructor(props) {
                super(props);
                this.state = {
                valueInput: 'Hello React'//giá trị mặc định
                }
             } 
    handleOnchangeInput = (event) => {
                console.log({
                    name: event.target.value
                });
                this.setState({
                    Name: event.target.value
                });
            }
    handleOnSubmit = (event) => {
                event.preventDefault();//ngăn việc tải lại trang
                this.props.sendDataToParent(this.state.Name);
                }
    render() {
        return (
            <>
                <h1>
                    call function Sum:6+7={this.props.sum(6, 7)}
                </h1>
                <div>
                    <input type="text" />
                 </div>
                <div>
                   <input value={this.state.valueInput} type="text" />
                </div>
                <div>
                    <input value={this.state.valueInput} 
                    onChange={(event) => {this.handleInput(event) }} 
 t                  ype="text" />
                </div>
                <div>
            	    <span>{this.state.valueInput}</span>
                </div>
                 <div>
                    <form action="">
                       <input type="text" 
                        onChange={(event) => this.handleOnchangeInput(event)} />
                       <button>Submit</button>
                     </form>
                </div> 
                <div>
                    <form action="" 
                        onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text" 
                        value={this.state.Name}//gán giá trị mặc định
                        onChange={(event) =>this.handleOnchangeInput(event)} />
                    <button>Submit</button>
                    </form>
                </div>       
            </>
            );
        };
    }
    export default Childcomponent;