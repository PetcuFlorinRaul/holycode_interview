import React from 'react'
import SettingsDropdownItem from './SettingsDropdownItem'

interface sizeFunction {
  small: React.MouseEventHandler
  normal: React.MouseEventHandler
  large: React.MouseEventHandler
}

interface ISettingsMenu {
  sizeFunctions: sizeFunction
}

const SettingsMenu: React.FC<ISettingsMenu> = (props: ISettingsMenu) => {
  return (
    <div
        className='absolute right-0 top-[100%] bg-slate-400 w-[150px] p-2 rounded-md'
    >
        <SettingsDropdownItem title='Small size' onClick={props.sizeFunctions.small} />
        <SettingsDropdownItem title='Normal size' onClick={props.sizeFunctions.normal} />
        <SettingsDropdownItem title='Large size' onClick={props.sizeFunctions.large} />
    </div>
  )
}

export default SettingsMenu