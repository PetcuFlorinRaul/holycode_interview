import React, { useState } from 'react'
import ImageCardActionButtonsContainer from './ImageCardActionButtonsContainer'
import LikeButton from './LikeButton';
import DislikeButton from './DislikeButton';
import DeleteButton from './DeleteButton';
import CategoryTagsContainer from './CategoryTagsContainer';
import AddTagsButton from './AddTagsButton';
import TagsDropdown from './TagsDropdown';
import TagButton from './TagButton';
import SettingsWheel from './SettingsWheel';
import { useDispatch } from 'react-redux';
import { removeImageToTagSection, REMOVE_IMAGE_TO_TAG_SECTION } from '../store/actions';

interface IImageCard {
    url: string,
    removeImage: Function;
    id: string;
    windowWidth: number;
}

const ImageCard: React.FC<IImageCard> = (props: IImageCard) => {

    const dispatch = useDispatch();

    const image = {
        imageID: props.id,
        imageURL: props.url
    }

    const [liked, setLiked] = useState<boolean>(false);
    const [tags, setTags] = useState<string[]>([]);
    const [tagsDropdown, setTagsDropdown] = useState<boolean>(false);

    const [width, setWidth] = useState<number | string>("100%")

    function closeTagDropdown() {
        setTagsDropdown(false);
    }

    function addTag(tag: string) {
        if(tag.trim() !== "") {
            const newArray = [tag, ...tags];
            setTags(newArray);
        }
    }

    function removeTag(tag: string) {
        const newArray = tags.filter((item: string) => item !== tag);
        setTags(newArray);
        dispatch(removeImageToTagSection(image, tag))
    }

    function setSmallSize() {
        setWidth("200px");
    }

    function setNormalSize() {
        if(props.windowWidth > 1000) {
            setWidth("100%")
        }
        else {
            setWidth('100%');
        }
    }

    function setLargeSize() {
        if(props.windowWidth > 1400) {
            setWidth("700px")
        }
        else {
            setWidth("100%")
        }
    }

    const sizeFunctions = {
        small: setSmallSize,
        normal: setNormalSize,
        large: setLargeSize
    }

    return (
        <div
            className="border-[2px] border-black relative h-fit flex justify-center"
            style={{
                width: width
            }}
        >
            <img src={props.url} alt="" className="w-full" />
            <DeleteButton onClick={() => props.removeImage(props.id)} />
            <ImageCardActionButtonsContainer>
                <LikeButton onClick={() => setLiked(true)} likeState={liked} />
                <DislikeButton onClick={() => setLiked(false)} likeState={liked} />
            </ImageCardActionButtonsContainer>
            <SettingsWheel sizeFunctions={sizeFunctions} />
            <CategoryTagsContainer>
                <>
                    {
                        tags.length > 0 && tags.map(tag => (
                            <TagButton tag={tag} onClick={removeTag} />
                        )) 
                    }
                </> 
                <AddTagsButton onClick={() => setTagsDropdown(true)} />    
                <>
                    {
                        tagsDropdown && (
                            <TagsDropdown imageID={props.id} imageURL={props.url} closeTagDropdown={closeTagDropdown} addTag={addTag} removeTag={removeTag} tags={tags} />
                        )
                    }
                </>
            </CategoryTagsContainer>
        </div>
    )
}

export default ImageCard