import { FaEye, FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export const ShowPasswordButton = ({ password, toggleVisibility }) => {
    return (
        <button type="button" onClick={toggleVisibility} className="absolute inset-y-0 top-6 right-3 flex items-center text-gray-500">
            {password ? <FaRegEyeSlash /> : <FaRegEye />}
        </button>
    );
};
