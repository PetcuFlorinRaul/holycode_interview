import React from 'react';

interface IAddTag {
  onClick: React.MouseEventHandler
}

const AddTagsButton: React.FC<IAddTag> = (props: IAddTag) => {
  return (
    <div
        onClick={props.onClick}
        className='bg-[#484D6D] hover:bg-[#71769a] p-2 text-white font-medium cursor-pointer'
    >
        + Add tags 
    </div>
  )
}

export default AddTagsButton