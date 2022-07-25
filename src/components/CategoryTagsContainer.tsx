import React from 'react'

interface ICategoryTagsContainer {
    children: JSX.Element[] | JSX.Element;
}

const CategoryTagsContainer:React.FC<ICategoryTagsContainer> = (props: ICategoryTagsContainer) => {
  return (
    <div
      className='absolute bottom-0 right-0 flex items-center'
    >
        {props.children}
    </div>
  )
}

export default CategoryTagsContainer