import React,{useState} from 'react'
export default function TextForm(props) {
    
    const handleUpClick=()=>{
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase","success")
        

        
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase","success")
        
    }
    const handleSentClick=()=>{
        let newText= text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setText(newText)
        props.showAlert("Converted to titlecase","success")
        
    }
    const handleCopyClick=()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("copied to clipboard","success")
        

    }
    const handleExtraClick=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra space is removed","success")
        

    }
    const handleClear=()=>{
        setText("")
        props.showAlert("Text is cleared",'success')
        

    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
        
    }
    const [text, setText] = useState("");   // setText("new text")
  return (
    <>
    <div className='container' style={{color:props.mode === 'dark'? "white":"#042743"}}>
        <h2 className='mb-4'>{props.heading}</h2>
    <div className="mb-3">
        <textarea className="form-control" id="mybox" rows="10" value={text} placeholder='Enter your text' onChange={handleOnChange} ></textarea>
    </div>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>covert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSentClick}>Covert To Titlecase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy To Clipboard</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraClick}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear Text</button>

    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'? "white":"#042743"}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length-1} Words , {text.length} Characters</p>
        <p>{0.008 * (text.split(" ").length - 1)} Minutes read</p>
        <p>{text.split(".").length -1} Sentence</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text:"Nothing to preview "}</p>
    </div>
    </>
  )
}
