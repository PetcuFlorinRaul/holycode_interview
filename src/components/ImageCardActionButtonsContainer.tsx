import React from 'react';

interface IImageCardActionButtonsContainer {
    children: JSX.Element[] | JSX.Element
}

const ImageCardActionButtonsContainer: React.FC<IImageCardActionButtonsContainer> = (props: IImageCardActionButtonsContainer) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                position: "absolute",
                top: "0px",
                left: "0px"
            }}
        >
            {props.children}
        </div>
    )
}

export default ImageCardActionButtonsContainer