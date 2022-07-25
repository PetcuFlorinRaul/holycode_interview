export const ADD_TAG_SECTION = "ADD_TAG_SECTION";
export const ADD_IMAGE_TO_TAG_SECTION = "ADD_IMAGE_TO_TAG_SECTION";
export const REMOVE_IMAGE_TO_TAG_SECTION = "REMOVE_IMAGE_TO_TAG_SECTION";

interface Image {
    imageURL: string;
    imageID: string;
}

export const addTagSection = (tagName: string): Action => {
    return {
        type: ADD_TAG_SECTION,
        payload: tagName
    }
}

export const addImageToTagSection = (image: Image, tagName: string): Action => {
    return {
        type: ADD_IMAGE_TO_TAG_SECTION,
        payload: {
            image,
            tagName
        }
    }
}

export const removeImageToTagSection = (image: Image, tagName: string): Action => {
    return {
        type: REMOVE_IMAGE_TO_TAG_SECTION,
        payload: {
            image,
            tagName
        }
    }
}
