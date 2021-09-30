import { Button, TextField } from "@material-ui/core";
import { Component } from "react";

class AreaOfTriangle extends Component{

    constructor(props){
       super(props)
       this.state = {
          base:"",
          height:"",
          result:"",
          displaymsg:false
       }
    }

    calculate = () =>{
        var base = this.state.base;
        var height = this.state.height;

        let area = 0.5 * (base * height);

        this.setState({result:area , displaymsg:true})

    }

    render(){
        return(
            <div className="Calculate-Area">
                <div className="Calculate-Area-title"> Calculate Area </div>
                <div className="Calculate-Area-formula"> Area of a triangle = 1/2(Base * Height) </div>
                <div className="Calculate-Area-base">
                <TextField id="areaoftriangle" type="number" label="Enter base value" variant="filled" onChange={(e)=>{this.setState({base:e.target.value,displaymsg:false})}}
                        error={this.state.base < 0} helperText={ this.state.base < 0 ? 'Only +ve number and greater then 0' : '' }/> 
                </div>
                <div className="Calculate-Area-height">
                <TextField id="areaoftriangle" type="number" label="Enter height value" variant="filled" onChange={(e)=>{this.setState({height:e.target.value,displaymsg:false})}}
                        error={this.state.height < 0} helperText={ this.state.height < 0 ? 'Only +ve number and greater then 0' : '' }/> 
                </div>

                <div className="Calculate-Area-button">
                {(this.state.base==="" || this.state.height==="") ? 
                   <span style={{cursor:'no-drop'}}>
                      <Button className="Calculate-Area-button-onclick" variant="contained"  disabled> Calculate Area </Button>
                   </span>
                   :
                   ((this.state.base>0 && this.state.height>0))?
                   <Button className="Calculate-Area-button-onclick" variant="contained"  onClick={this.calculate}> Calculate Area </Button> :
                   <div> positive number only and greater then 0</div>
                   }
   
                </div>

                <div className="Calculate-Area-displayresult">
                     {
                         this.state.displaymsg?
                      "Area of a triangle using heron's formula is " + this.state.result + " units":
                      null
                     }
                </div>
            </div>
        )
    }
}

export default AreaOfTriangle;