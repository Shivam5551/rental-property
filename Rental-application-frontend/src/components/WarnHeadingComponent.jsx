
export const WarnHeadingComponent = ({ para, href, title}) => {
    return (
        <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-4">
           {para} <a href={href} className="text-blue-500 hover:underline">{title}</a>
        </p>
    );
};
