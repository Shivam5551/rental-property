export const  FormLabel = ({ htmlFor, label, type, name, value, onChange, required }) => {
    return (
        <div>
            <label className="block text-base font-bold text-gray-700 dark:text-gray-300" htmlFor={htmlFor}>
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={htmlFor}
                value={value}
                onChange={onChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-300"
                required={required}
            />
        </div>
    );
}
