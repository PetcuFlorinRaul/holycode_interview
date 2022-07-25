import React from 'react'

interface ITagButton {
    onClick: Function,
    tag: string
}

const TagButton: React.FC<ITagButton> = (props: ITagButton) => {
  return (
    <div
        key={props.tag}
        onClick={() => props.onClick(props.tag)}
        className='bg-[#484D6D] mr-2 flex hover:bg-[#71769a] w-fit float-left p-2 text-white font-medium cursor-pointer'
    >
        <p className='mr-3'>{props.tag}</p>
        <div className='ml-auto rounded-full cursor-pointer w-6 h-6 flex items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 320 512" >
                <path fill='white' d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
            </svg>
        </div>
    </div>
  )
}

export default TagButton