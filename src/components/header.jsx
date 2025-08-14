/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Header({
    logoUrl,
    heading,
    paragraph,
    linkName,
    linkUrl = "#"
}) {
    return (
        <div className="">
            <div className="flex justify-center">
                <img alt="Logo" className="h-16 w-16" src={logoUrl} />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-500">
                {paragraph} {' '}
                <Link to={linkUrl} className="font-medium text-yellow-400 hover:text-yellow-300">
                    {linkName}
                </Link>
            </p>
        </div>
    );
}
