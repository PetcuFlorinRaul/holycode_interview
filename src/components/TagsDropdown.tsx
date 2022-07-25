import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addImageToTagSection, addTagSection } from '../store/actions';
import TagButton from './TagButton';

interface ITagsDropdown {
  closeTagDropdown: React.MouseEventHandler;
  addTag: Function;
  tags: string[];
  removeTag: Function;
  imageID: string;
  imageURL: string;
}

const TagsDropdown: React.FC<ITagsDropdown> = (props: ITagsDropdown) => {

  const [tagName, setTagName] = useState<string>("");

  const dispatch = useDispatch();

  const tagsState = useSelector<State, State['tagSections']>((state) => state.tagSections);

  console.log(tagsState);

  const image = {
    imageID: props.imageID,
    imageURL: props.imageURL
  }

  function searchTagSection(tagName: string) {
      const tagSection = tagsState.find(tagSection => tagSection.tagName === tagName);
      if(!tagSection) {
          dispatch(addTagSection(tagName));
          dispatch(addImageToTagSection(image, tagName));
      }
      
  }

  function onAddTag(e: React.MouseEvent) {
    props.addTag(tagName);
    e.preventDefault();
    setTagName("")
    searchTagSection(tagName);
  }

  useEffect(() => {}, []) 

  return (
    <div
      className='absolute z-50 top-[102%] right-[-2px] bg-slate-500 w-[300px] flex-col p-4 rounded-lg ' 
    >   
      <div
        className='mb-4 text-white w-full flex items-center'
      >
        <p>Add your tags:</p>
        <div onClick={props.closeTagDropdown} className='ml-auto rounded-full bg-white hover:bg-slate-300 cursor-pointer w-6 h-6 flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 320 512" >
            <path fill='black' d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
          </svg>
        </div>
      </div>
        <div className='flex items-center w-full'>
          <form action="" className='flex flex-col sm:items-center sm:flex-row justify-center sm:justify-items-center w-full'>
            <input type='text' value={tagName} onChange={(e) => setTagName(e.target.value)} className='mr-auto h-[32px] w-full mb-2 sm:mb-0 sm:w-fit outline-none pl-2'/>
            <button
              type='submit'
              onClick={(e) => onAddTag(e)}
              className='p-1 pl-2 pr-2 bg-slate-300 hover:bg-slate-400 rounded-lg'
            >
                Add Tag
            </button>
          </form>
        </div>
        <div
          className='block mt-2'
        >
          {
            props.tags.map(tag => (
              <TagButton onClick={() => props.removeTag(tag)} tag={tag} />
            ))
          }
        </div>
    </div>
  )
}

export default TagsDropdown