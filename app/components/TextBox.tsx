import React from 'react'

interface TextBoxProps {
    label?: string,
    placeholder?: string,
    className?: string,
    type?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    currentValue?: string,
    ref?: any
}


function TextBox({ label, placeholder, className, type, onChange, currentValue, ref }: TextBoxProps) {
    return (
        <div className={`text-field flex flex-col `}>
            <label htmlFor="">{label}</label>
            <input ref={ref} type={type || "text"} onChange={onChange} name="" id="" value={currentValue} placeholder={placeholder || ''} className={`outline-none border border-black  p-3 border-b-2 border-[#2226] rounded-sm focus:border-dark2 focus:bg-gray-100 w-[100%] focus:border-b-4 ${className}`} />
        </div>
    )
}

export default TextBox