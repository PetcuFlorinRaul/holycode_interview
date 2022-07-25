import React from 'react'

interface ILikeButton {
    onClick: React.MouseEventHandler
    likeState: boolean
}

const LikeButton: React.FC<ILikeButton> = (props: ILikeButton) => {

    return (
        <div
            onClick={props.onClick}
            style={{
                padding: "6px",
                fontWeight: "bolder",
                borderRadius: "4px",
                marginRight: "8px"
            }}
            className={`hover:bg-[#71769a] cursor-pointer ${props.likeState === true ? "bg-[#0091AD]" : "bg-[#484D6D]"}
                        transition-colors duration-200`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" viewBox="0 0 576 512">
                <path d="M256 368C256 403.7 266.6 436.9 284.9 464.6L279.4 470.3C266.4 483.2 245.5 483.2 233.5 470.3L39.71 270.5C-16.22 212.5-13.23 116.6 49.7 62.68C103.6 15.73 186.5 24.72 236.5 75.67L256.4 96.64L275.4 75.67C325.4 24.72 407.3 15.73 463.2 62.68C506.1 100.1 520.7 157.6 507 208.7C484.3 198 458.8 192 432 192C334.8 192 256 270.8 256 368zM288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368zM448 303.1C448 295.2 440.8 287.1 432 287.1C423.2 287.1 416 295.2 416 303.1V351.1H368C359.2 351.1 352 359.2 352 367.1C352 376.8 359.2 383.1 368 383.1H416V431.1C416 440.8 423.2 447.1 432 447.1C440.8 447.1 448 440.8 448 431.1V383.1H496C504.8 383.1 512 376.8 512 367.1C512 359.2 504.8 351.1 496 351.1H448V303.1z" fill='#ffffff'/>
            </svg>
        </div>
    )
}

export default LikeButton