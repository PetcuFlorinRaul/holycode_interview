// useFetchData interfaces
interface IImageDataObject {
    id: string;
    url: string;
    width: number;
    height: number;
}

// Redux Interfaces
interface ImageForTagSection {
    imageURL: string;
    imageID: string;
}

interface TagSection {
    tagName: string;
    images: Array<ImageForTagSection>
}

interface State {
    tagSections: Array<TagSection>
}

interface Action {
    type: string;
    payload?: any;
}