import React from 'react'

function CTA({ bgColor = '#d87d4a', borderColor = '', hoverBgColor }) {
    const defaultBtnClasses = 'font-semibold tracking-[2px] text-white text-[12px] px-[28px] py-[13.5px] rounded-[2.5px]'
    return (
        <button
            onMouseEnter={e => e.currentTarget.style.backgroundColor = hoverBgColor}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = bgColor}
            style={{ backgroundColor: bgColor, borderColor: borderColor, transition: 'background-color 0.4s ease' }}
            className={defaultBtnClasses}>SEE PRODUCT</button>
    )
}

export default CTA