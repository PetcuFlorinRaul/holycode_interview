import React from 'react'

interface ITopContainer {
    onSearch: Function
}

const TopContainer: React.FC<ITopContainer> = (props: ITopContainer) => {

    function search(e: React.MouseEvent) {
        e.preventDefault();
        props.onSearch();
    }


    return (
        <div
            className='w-full pt-8 pb-32 flex items-center justify-center'
        >
            <form className="w-full flex flex-col sm:flex-row items-center justify-center">
                <input type='text' className='w-[60%] border-[1px] border-black rounded-xl pl-2 sm:mr-8 h-10 outline-none '/>
                <button
                    onClick={(e) => search(e)}
                    className='p-2 mt-2 w-[60%] sm:w-fit sm:mt-0 bg-slate-600 text-white font-semibold rounded-xl pr-4 pl-4 hover:bg-slate-500'
                >
                    Search Images
                </button>
            </form>
        </div>
    )
}

export default TopContainer