import { Link } from "react-router-dom";
import data from "../../data/data.json";

function School() {
    return (
        <div className="flex flex-col justify-center items-center w-full gap-10">
            {data.education.schools.map((school) => (
                <div key={school.name} className="flex flex-col justify-center items-center w-full gap-5 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-5">
                    <h3 className="text-xl font-bold text-center dark:text-gray-600 md:text-2xl">
                        {school.level}
                    </h3>
                    <hr className="border-gray-200 dark:border-gray-700 w-full" />
                    <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg">
                        <img src={school.logo.src} alt={school.logo.alt} className="w-full h-full object-cover" />
                    </div>
                    <span className="bg-blue-100 text-blue-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-800 dark:text-blue-100">
                        {school.year}
                    </span>
                    <h3 className="text-xl font-bold text-center dark:text-gray-600 md:text-2xl">
                        {school.name}
                    </h3>
                    <p className="text-gray-800 dark:text-gray-600 text-lg">
                        {school.location.street}, {school.location.baranggay}, {school.location.city}, {school.location.province}, {school.location.country}
                    </p>
                    <p className="text-gray-800 dark:text-gray-500 text-lg">
                        {school.description}
                    </p>
                    <div className="flex flex-row justify-center items-center w-full gap-5">
                        <Link to={school.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600">
                            Website
                        </Link>
                        <Link to={school.location.googlemaps.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600">
                            Google Maps
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default School