import React,{useState} from 'react'



export default function TextForm(props) {
    const handleCopyClick = () =>{
      navigator.clipboard.writeText(text);
      props.showAlert("Text copied to clipboard.");
    }

    const handleUpClick = () =>{
         let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text is converted to Upper Case.");
    }

    const handleLoClick = () =>{
         let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text is converted to Lower Case.");
    }
    
    const handleClearClick = () =>{
        let newText = "";
        setText(newText)
        props.showAlert("Text is cleared.");
    }
    const handleDemoClick = () =>{
        let newText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium officia et repudiandae quibusdam odio debitis nesciunt quasi. Quo nihil possimus officiis veritatis ratione ad saepe.";
        setText(newText)
        props.showAlert("Demo text is displayed.");
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const [text, setText] = useState("");

    let words = text.split(/\s+/).filter((element)=>{return element.length!==0}).length;

    
  return (
    <>
    <div className='container'>
<div className={`mb-3 text-${props.mode==="light"?"dark":"light"}`}>
    <h1>{props.heading}</h1>
    <button className="btn btn-secondary" onClick={handleCopyClick} disabled = {text.length === 0}>
    Copy to clipboard
</button>
  <textarea className={`form-control text-${props.mode==="light"?"dark":"light"}`} id="myBox" rows="8" placeholder='Enter text here' value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==="dark"?"#A9A9A9":"white" }}></textarea>
</div>
<button className="btn btn-primary mx-2 my-2" onClick={handleUpClick} disabled = {text.length === 0}>Convert to Upper Case</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleLoClick} disabled = {text.length === 0}>Convert to Lower Case</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleClearClick} disabled = {text.length === 0}>Clear Text</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleDemoClick}>Demo Text</button>
    </div>
    <div className={`container my-3 text-${props.mode==="light"?"dark":"light"}`}>
      <h2>Your text summary</h2>
      <p>{words} words and {text.length} characters </p>
      <p>{words * 0.008} Minutes to read this. </p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Nothing to preview."}</p>
    </div>
    </>
  )

}


