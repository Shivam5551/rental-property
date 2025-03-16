export const GoogleButton = ({title}) => {
    return (
        <button className="w-full hover:cursor-pointer mt-4 bg-gray-200 text-black py-2 px-4 rounded-md hover:bg-gray-300 flex items-center justify-center transition duration-500 ease-in-out">
                    <img className="pr-2" width="30" height="30" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/> {title} with Google
                    </button>
    )
}