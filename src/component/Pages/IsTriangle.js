import { Component } from "react";

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
                
            

                   <div className="isTriangle-TextField1"> 
                        <input type="number" id="filled-basic" placeholder="Angle 1"  onChange={(e)=>{this.setState({angle1:e.target.value,flag_displaymsg:""})}}  style={{width:'20%',height:'5vh'}}/> 
                   </div>

                   <div className="isTriangle-TextField2">
                        <input type="number" id="filled-basic" placeholder="Angle 2"  onChange={(e)=>{this.setState({angle2:e.target.value,flag_displaymsg:""})}}  style={{width:'20%',height:'5vh'}}/> 
                   </div>

                   <div className="isTriangle-TextField3">
                        <input type="number" id="filled-basic" placeholder="Angle 3"  onChange={(e)=>{this.setState({angle3:e.target.value,flag_displaymsg:""})}}  style={{width:'20%',height:'5vh'}}/> 
                   </div>

                   {this.state.angle1===""?<div>please enter angle1</div>:this.state.angle2===""?<div>please enter angle2</div>:this.state.angle3===""?<div> please enter angle3 </div>:null}
                  
        

                   <div className="isTriangle-button"> 
                   
                   {(this.state.angle1==="" || this.state.angle2==="") || (this.state.angle2==="" || this.state.angle3==="") ?
                   
                      <button style={{cursor:'no-drop',color:'black',width:'20%',height:'5vh'}} disabled> Check </button>
                 
                   :
                   ((this.state.angle1>=1 && this.state.angle2>=1) && (this.state.angle2>=1 && this.state.angle3>=1))?
                   <div>
                        <button className="isTriangle-button-onclick" style={{width:'20%',height:'5vh'}} onClick={this.ISCheck}> Check </button>
                   </div>
                    :
                   <div> positive number only and greater then 0 </div>
                   }
                   <div className="isTriangle-result_text">
                    {(this.state.angle1==="" || this.state.angle2==="") || (this.state.angle2==="" || this.state.angle3==="") ?
                       null : this.state.flag_displaymsg }
                   </div>
                        
                    </div>

               
            </div>
        )
    }
}

export default IsTriangle;