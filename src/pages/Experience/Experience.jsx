import { Link } from "react-router-dom";
import data from "../../data/data.json";
import Svg from "../../components/SVG/Svg";

function Experience() {
    return (
        <div className="bg-gray-100 flex flex-col justify-center items-center p-20 gap-10">
            <Svg data="icon.svg#briefcase" className="w-20 h-20 text-gray-800 dark:text-gray-200" />
            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-700 md:text-3xl">
                Work Experience
            </h2>
            <ul className="flex flex-col justify-center items-center w-full gap-10">
                {data.experience.map((experience, index) => (
                    <li key={index} className="flex flex-col justify-center items-center w-full gap-5 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-5">
                        <h3 className="text-xl font-bold text-center dark:text-gray-600 md:text-2xl">
                            {experience.jobTitle} | {experience.jobType}
                        </h3>
                        <p className="text-gray-800 dark:text-gray-600 text-lg">
                            {experience.company.name}
                        </p>
                        <p className="text-gray-800 dark:text-gray-600 text-lg">
                            {experience.from + ' - ' + experience.to} | {experience.duration}
                        </p>
                        <p className="text-gray-800 dark:text-gray-600 text-lg">
                            {experience.company.location.street + ', ' + experience.company.location.baranggay + ', ' + experience.company.location.city + ', ' + ', ' + experience.company.location.country} | <a href={experience.company.location.googlemaps.link} target="_blank" rel="noreferrer">Google Maps</a>
                        </p>
                        <div className="flex flex-row justify-center items-center w-full gap-5">
                            <Link to={experience.company.website} target="_blank" rel="noreferrer">
                                <Svg data="icon.svg#link" className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                            </Link>
                        </div>
                        
                        <hr className="border-gray-200 dark:border-gray-700 w-full" />
                        <h4 className="text-lg font-bold text-center dark:text-gray-600 md:text-xl">
                            Responsibilities
                        </h4>
                        <ul className="flex flex-col justify-center items-center w-full gap-5">
                            {experience.responsibilies.map((responsibility, index) => (
                                <li key={index} className="text-gray-800 dark:text-gray-600 text-lg">
                                    {responsibility}
                                </li>
                            ))}
                        </ul>

                        <h4 className="text-lg font-bold text-center dark:text-gray-600 md:text-xl">
                            Salary
                        </h4>
                        <p className="text-gray-800 dark:text-gray-600 text-lg">
                            {experience.salary} {experience.currency}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Experience