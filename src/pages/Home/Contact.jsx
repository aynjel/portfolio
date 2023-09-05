import { Link } from 'react-router-dom'
import data from "../../data/data.json";

function Contact() {
    return (
        <div className="bg-gray-100 flex flex-col justify-center items-center p-20 gap-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 md:text-3xl">
                Connect with me
            </h2>
            <ul className="flex flex-wrap justify-center items-center w-full gap-5">
                {data.socials.map(social => (
                    <li key={social.name} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded">
                        <Link to={social.link} target="_blank" rel="noreferrer" className="hover:text-gray-500">
                            {social.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Contact