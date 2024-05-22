import React from 'react'

function CTA({ bgColor = '#d87d4a', border = '', btnTextColor = 'black', btnTextColorOnHover = '', hoverBgColor }) {
    const defaultBtnClasses = 'font-semibold tracking-[2px] w-44 text-white text-[12px] px-[28px] py-[13.5px] rounded-[2.5px]'
    return (
        <button
            onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = hoverBgColor
                e.currentTarget.style.color = btnTextColorOnHover
            }}
            onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = bgColor
                e.currentTarget.style.color = btnTextColor
            }}
            style={{ backgroundColor: bgColor, border: border, color: btnTextColor, transition: 'all 0.4s ease' }}
            className={defaultBtnClasses}>SEE PRODUCT</button>
    )
}

export default CTA