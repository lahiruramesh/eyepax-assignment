import React from "react";


export function CarosuelItem({img, title, subTitle, active = false}){
    return(<>
        <div className='mySlides fade' style={{display : active ? '': 'none'}}>
            <img src={img} style={{width: '100%'}} alt={title} />
            <div className='title'>{title}</div>
            <div className='subTitle'>{subTitle}</div>
        </div>

    </>)
}
