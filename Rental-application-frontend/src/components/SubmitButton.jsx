export const SubmitButton = ({ text, onClick }) => {
    return (
        <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center transition duration-500 ease-in-out"
            onClick={onClick}
        >
            {text}
        </button>
    );
}