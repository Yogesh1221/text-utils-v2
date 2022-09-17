import React from 'react'

export default function About(props) {
    // const [myStyle,setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btnText, setBtnText] = useState('Enable Dark Mode');
    // const toggleMode = ()=>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor:'white',
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    // }
    let myStyle = {
        color: props.mode==='dark'?'white':'black',
        backgroundColor: props.mode==='dark'?'#333030':'white'
    }
    return (
        <div className='container' >
            <h1 style={{color: props.mode==='dark'?'white':'black'}} >About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={myStyle}> 
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils give you a way to analyze to text quickly and efficiently. Be it word count, character count and many functions.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
            <button type="button" onClick={toggleMode} class="btn btn-outline-primary">{btnText}</button>
            </div> */}
        </div>
    )
}
