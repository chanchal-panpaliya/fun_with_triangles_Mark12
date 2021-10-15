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
                    <h5> Base </h5>
                    <input id="areaoftriangle" type="number" placeholder="Enter base value"  onChange={(e)=>{this.setState({base:e.target.value,displaymsg:false})}} style={{width:'20%',height:'5vh'}}/> 
                        <br/>{this.state.base < 0 ? <small style={{color:'red'}}>Only +ve number and greater then 0 </small> : ""}
                </div>

                <div className="Calculate-Area-height">
                    <h5> Height </h5>
                    <input id="areaoftriangle" type="number" placeholder="Enter height value"  onChange={(e)=>{this.setState({height:e.target.value,displaymsg:false})}} style={{width:'20%',height:'5vh'}}/> 
                       <br/>{this.state.height < 0 ? <small style={{color:'red'}}>Only +ve number and greater then 0 </small> : ""}
                </div>

                <div className="Calculate-Area-button">
                    {(this.state.base==="" || this.state.height==="") ? 
                    
                        <button  style={{cursor:'no-drop',color:'black',width:'20%',height:'5vh'}}  disabled> Calculate Area </button>
                    
                    :
                    ((this.state.base>0 && this.state.height>0))?
                    <button className="Calculate-Area-button-onclick" style={{width:'20%',height:'5vh'}} onClick={this.calculate}> Calculate Area </button> :
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