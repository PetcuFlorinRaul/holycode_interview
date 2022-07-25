import { ADD_IMAGE_TO_TAG_SECTION, ADD_TAG_SECTION, REMOVE_IMAGE_TO_TAG_SECTION } from "./actions";

const initialState = {
    tagSections: []
}

const reducer = (state: State = initialState, action: Action) => {
    switch(action.type) {
        case ADD_TAG_SECTION: {
            const newTagSection: TagSection = {
                tagName: action.payload,
                images: []
            }
            return {
                ...state,
                tagSections: [...state.tagSections, newTagSection]
            }
        }
        case ADD_IMAGE_TO_TAG_SECTION: {
            const image: ImageForTagSection = {
                imageURL: action.payload.image.imageURL,
                imageID: action.payload.image.imageID
            }
            const tagSectionIndex = state.tagSections.findIndex(tagSection => tagSection.tagName === action.payload.tagName);
            const newTagSectionsArray = [...state.tagSections];
            newTagSectionsArray[tagSectionIndex].images.unshift(image);
            return {
                ...state,
                tagSections: newTagSectionsArray
            }
        }
        case REMOVE_IMAGE_TO_TAG_SECTION: {
            const imageID = action.payload.image.imageID;
            const tagSectionIndex = state.tagSections.findIndex(tagSection => tagSection.tagName === action.payload.tagName);
            const newTagSectionsArray = [...state.tagSections];
            const imageIndex = newTagSectionsArray[tagSectionIndex].images.findIndex(image => image.imageID === imageID);
            newTagSectionsArray[tagSectionIndex].images.splice(imageIndex, 1);
            return {
                ...state,
                tagSections: newTagSectionsArray
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;