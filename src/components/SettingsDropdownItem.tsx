import React from 'react'

interface ISettingsDropdownItem {
    title: string
    onClick?: React.MouseEventHandler
}

const SettingsDropdownItem: React.FC<ISettingsDropdownItem> = (props: ISettingsDropdownItem) => {
  return (
    <div
        className='hover:bg-slate-300 p-2 rounded-md font-medium'  
        onClick={props.onClick}
    >
        <p>{props.title}</p>
    </div>
  )
}

export default SettingsDropdownItem;