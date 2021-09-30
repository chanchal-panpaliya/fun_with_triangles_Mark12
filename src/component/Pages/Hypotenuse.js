import { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";

class Hypotenuse extends Component{

    constructor(props){
        super(props)
        this.state = {
            base : "",
            height: "",
            hypotenuse : ""
        }
    }

    Calculate = (e) =>{
        let base = parseInt(this.state.base);
        let height = parseInt(this.state.height);

        var sum=Math.pow(base,2)+Math.pow(height,2);
        var hypotenuse=Math.pow(sum,0.5);
        hypotenuse=hypotenuse.toFixed(2);
       
        this.setState({hypotenuse:hypotenuse})
    }

    render(){
        console.log(this.state.base,this.state.height)
        return(
            <div className="Hypotenuse-container">
                <div className="Hypotenuse-title"> Calculate Hypotenuse of a triangle </div>  
                <p className="Hypotenuse-subtitle"> 
                    This mini application calculates the hypotenuse of a right angled triangle using 
                    the Pythagoras Theorem when the base and height is provided to it.
                </p>

               
            
                <form  noValidate autoComplete="off">
                    <div className="Hypotenuse-base"> 
                        <TextField id="filled-basic" type="number" label="Enter base value (a)" variant="filled" onChange={(e)=>{this.setState({base:e.target.value,hypotenuse:""})}}
                        error={this.state.base < 0} helperText={ this.state.base < 0 ? 'Only positive number' : '' }/> 
                    </div>
                    <div className="Hypotenuse-height">
                        <TextField id="filled-basic" type="number" label="Enter height value (b)" variant="filled" onChange={(e)=>{this.setState({height:e.target.value,hypotenuse:""})}}
                        error={this.state.height < 0} helperText={ this.state.height < 0 ? 'Only positive number' : '' } /> 
                    </div>

                    <div className="Hypotenuse-button">

                    {(this.state.base==="" || this.state.height==="") ?
                    <span style={{cursor:'no-drop'}}>
                     <Button className="isTriangle-button-onclick" variant="contained" disabled> 
                        Calculate hypotenuse 
                     </Button>
                    </span>
                   :
                   ((this.state.base>=0 && this.state.height>=0))?
                   <Button className="isTriangle-button-onclick" variant="contained"  onClick={this.Calculate}> Calculate hypotenuse </Button> :
                   <div> positive number only </div>
                   }
                      </div> 
                </form>

                 <div className="Hypotenuse-formuatext"> The formula used here is: hypotenuse = <b>√(base² + height²)</b> </div>

                    <div className="Hypotenuse-displayresult">
                        {this.state.hypotenuse ? <div> The length of hypotenuse is {this.state.hypotenuse} </div>: null}
                    </div>
            </div>
        )
    }
}

export default Hypotenuse;