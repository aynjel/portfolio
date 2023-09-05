import { Link } from "react-router-dom";
import data from "../../data/data.json";
function Course() {
    return (
        <div className="flex flex-col justify-center items-center w-full gap-10">
            <div className="flex flex-col justify-center items-center w-full gap-5 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-5">
                <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg">
                    <img src={data.education.course.school.logo.src} alt={data.education.course.school.logo.alt} className="w-full h-full object-cover" />
                </div>
                <span className="bg-blue-100 text-blue-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-800 dark:text-blue-100">
                    {data.education.course.from} - {data.education.course.to}
                </span>
                <h3 className="text-xl font-bold text-center dark:text-gray-600 md:text-2xl">
                    {data.education.course.name}
                </h3>
                <h4 className="text-lg font-bold text-center dark:text-gray-600 md:text-xl">
                    Major in {data.education.course.major}
                </h4>
                <ul className="flex flex-row justify-center items-center w-full gap-5">
                    <li className="text-gray-800 dark:text-gray-600 text-lg">
                        Units Earned: {data.education.course.units}
                    </li>
                    <li className="text-gray-800 dark:text-gray-600 text-lg">
                        Duration of Course: {data.education.course.duration}
                    </li>
                </ul>
                <hr className="border-gray-200 dark:border-gray-700 w-full" />
                <h4 className="text-lg font-bold text-center dark:text-gray-600 md:text-xl">
                    School Information
                </h4>
                <p className="text-gray-800 dark:text-gray-600 text-lg">
                    {data.education.course.school.name}
                </p>
                <p className="text-gray-800 dark:text-gray-600 text-lg">
                    {data.education.course.school.location.street}, {data.education.course.school.location.baranggay}, {data.education.course.school.location.city}, {data.education.course.school.location.province}, {data.education.course.school.location.country}
                </p>
                <p className="text-gray-800 dark:text-gray-500 text-lg">
                    {data.education.course.school.description}
                </p>
                <div className="flex flex-row justify-center items-center w-full gap-5">
                    <Link to={data.education.course.school.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600">
                        Website
                    </Link>
                    <Link to={data.education.course.school.location.googlemaps.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600">
                        Google Maps
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Course