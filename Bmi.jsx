import { useState } from 'react'
export const Bmi = () => {
    const[height,setHeight]=useState("");
    const[weight,setWeight]=useState("");
    const[bmi,setBmi]=useState(null);
    const[bmiStatus,setBmiStatus]=useState("");
    const[errors,setErrors]=useState("")
    const calculate=()=>{
        const isValidHeight=/^\d+$/.test(height);
        const isValidWeight=/^\d+$/.test(weight);

        if(isValidHeight && isValidWeight){
            const heightInMeters=height/100;
            const bmiValue=weight/(heightInMeters*heightInMeters);
            setBmi(bmiValue.toFixed(2));
            if(bmiValue<18.5){
                setBmiStatus("Underweight");
            }
            else if(bmiValue>=18.5 && bmiValue<24.9){
                setBmiStatus("Normal Weight")
            }
            else if(bmiValue>=25 && bmiValue<29.9){
                setBmiStatus("Overweight")
            }
            else{
                setBmiStatus("Obese")
            }
            setErrors("")
        }
        else{
            setBmi(null);
            setBmiStatus("");
            setErrors("please enter valid numeric values for height and weight");
        }
    }
    const clear=()=>{
        setHeight("");
        setWeight("");
        setBmi(null);
        setBmiStatus("");

    }
  return (
    <>
    <div className="bmi-calci">
        <div className="box"></div>
        <div className="data">
            <h2>BMI Calculator</h2>
            {errors && <p className="error">{errors}</p>}
            <div className="input-container">
                <label htmlFor="height" >Height (cm):</label>
                <input type="text" id="height" value={height} onChange={(e)=>setHeight(e.target.value)}/>
            </div>
            <div className="input-container">
                <label htmlFor="weight" >Weight (kg):</label>
                <input type="text" id="weight " value={weight} onChange={(e)=>setWeight(e.target.value)}/>
            </div>
            <div className="button-container">
            <button onClick={calculate}>Calculate BMI</button>
            <button onClick={clear}>Clear All</button>
            </div>
            {bmi !==null &&(
                <div className="result">
                <p>Your BMI is: {bmi}</p>
                <p>Status:{bmiStatus}</p>
            </div>
            )}
        </div>
    </div>
    </>
  )
}
