import { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";

class IsTriangle extends Component{

    constructor(props){
        super(props)
        this.state = {
            angle1 : "",
            angle2 : "",
            angle3 : "",
            flag_displaymsg:""
        }
    }

    ISCheck = () =>{
        let {angle1, angle2 , angle3} = this.state ;
           
         let angleone = parseInt(angle1);
         let angletwo = parseInt(angle2);
         let anglethree = parseInt(angle3);
         let add = angleone + angletwo + anglethree;
           console.log("add===>",add)
        if(add===180  && angleone > 0 && angletwo > 0 && anglethree > 0){
            this.setState({flag_displaymsg:"Yay, the angles form a triangle!"})
        }else{
         
            this.setState({flag_displaymsg:"Oh Oh! The angles doesn't form a triangle"})
        }

    }



    render(){
        return(
            <div className="isTriangle-container">
               <div className="isTriangle-title">  Angles of triangles </div>
        
                <p className="isTriangle-sub-title"> Enter the angles in below input boxes and we will tell you if those angles make a Triangle. <br/>According to the <b>Triangle Angle Sum Theorem</b>, the sum of the three interior angles in a triangle is always 180° and angle <b>not be</b> 0°</p>
                
                <form  noValidate autoComplete="off">

                   <div className="isTriangle-TextField1"> 
                        <TextField type="number" id="filled-basic" label="Angle 1" variant="filled" onChange={(e)=>{this.setState({angle1:e.target.value,flag_displaymsg:""})}} error={this.state.angle1?this.state.angle1 < 1:""} helperText={ this.state.angle1 < 1 ? 'Only +ve number and greater then 0' : '' } style={{width:'20%'}}/> 
                   </div>

                   <div className="isTriangle-TextField2">
                        <TextField type="number" id="filled-basic" label="Angle 2" variant="filled" onChange={(e)=>{this.setState({angle2:e.target.value,flag_displaymsg:""})}} error={this.state.angle2?this.state.angle2 < 1:""} helperText={ this.state.angle2 < 1 ? 'Only +ve number and greater then 0' : '' } style={{width:'20%'}}/> 
                   </div>

                   <div className="isTriangle-TextField3">
                        <TextField type="number" id="filled-basic" label="Angle 3" variant="filled" onChange={(e)=>{this.setState({angle3:e.target.value,flag_displaymsg:""})}} error={this.state.angle3?this.state.angle3 < 1:""} helperText={ this.state.angle3 < 1 ? 'Only +ve number and greater then 0' : '' } style={{width:'20%'}}/> 
                   </div>

                   {this.state.angle1===""?<div>please enter angle1</div>:this.state.angle2===""?<div>please enter angle2</div>:this.state.angle3===""?<div> please enter angle3 </div>:null}
                  
        

                   <div className="isTriangle-button"> 
                   
                   {(this.state.angle1==="" || this.state.angle2==="") || (this.state.angle2==="" || this.state.angle3==="") ?
                   <span style={{cursor:'no-drop'}}>
                      <Button className="isTriangle-button-onclick" variant="contained"  disabled> Check </Button>
                    </span>
                   :
                   ((this.state.angle1>=1 && this.state.angle2>=1) && (this.state.angle2>=1 && this.state.angle3>=1))?
                   <div>
                   <Button className="isTriangle-button-onclick" variant="contained"  onClick={this.ISCheck}> Check </Button>
                   </div>
                    :
                   <div> positive number only and greater then 0 </div>
                   }
                   <div className="isTriangle-result_text">
                    {(this.state.angle1==="" || this.state.angle2==="") || (this.state.angle2==="" || this.state.angle3==="") ?
                       null : this.state.flag_displaymsg }
                   </div>
                        
                    </div>

                </form>
            </div>
        )
    }
}

export default IsTriangle;