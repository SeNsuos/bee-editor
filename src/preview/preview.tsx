import React from 'react';
import '../style/preview.scss'


interface previewProps {
    sendState: any
}
const Preview: React.FC<previewProps> = (props) => {
    const {sendState} = props
    // const imgSchema = {
    //     "type": "object",
    //     "properties": {
            
    //     }
    // }
    // useEffect(() => {
    //     console.log(sendState.bgColor)
    // },[])
    return (
        <div className='preview_container' >
            <h3>预览</h3>
            <div className='con_wrapper' style={{background: sendState.bgColor}}>
                
            </div>
        </div>
    )
}
export default Preview;