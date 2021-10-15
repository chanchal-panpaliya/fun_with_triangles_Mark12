import { Component } from "react";


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

               
            
               
                    <div className="Hypotenuse-base"> 
                        <input id="filled-basic" type="number" placeholder="Enter base value (a)" variant="filled" onChange={(e)=>{this.setState({base:e.target.value,hypotenuse:""})}} style={{width:'20%',height:'5vh'}}/> 
                           {this.state.base < 0 ? <small style={{color:'red'}}>Only positive number </small> : ""}
                    </div>
                    <div className="Hypotenuse-height">
                        <input id="filled-basic" type="number" placeholder="Enter height value (b)" variant="filled" onChange={(e)=>{this.setState({height:e.target.value,hypotenuse:""})}} style={{width:'20%',height:'5vh'}}/> 
                           {this.state.height < 0 ? <small style={{color:'red'}}>Only positive number </small> : ""}
                    </div>

                    <div className="Hypotenuse-button">

                    {(this.state.base==="" || this.state.height==="") ?
                   
                     <button className="isTriangle-button-onclick" style={{cursor:'no-drop',color:'black',width:'20%',height:'5vh'}} disabled> 
                        Calculate hypotenuse 
                     </button>
                  
                   :
                   ((this.state.base>=0 && this.state.height>=0))?
                   <button className="isTriangle-button-onclick" style={{width:'20%',height:'5vh'}} onClick={this.Calculate}> Calculate hypotenuse </button> :
                   <div> positive number only </div>
                   }
                      </div> 
              

                 <div className="Hypotenuse-formuatext"> The formula used here is: hypotenuse = <b>√(base² + height²)</b> </div>

                    <div className="Hypotenuse-displayresult">
                        {this.state.hypotenuse ? <div> The length of hypotenuse is {this.state.hypotenuse} </div>: null}
                    </div>
            </div>
        )
    }
}

export default Hypotenuse;