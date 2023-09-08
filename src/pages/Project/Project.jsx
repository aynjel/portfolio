import data from "../../data/data.json";

function Project() {
    return (
        <div className="bg-gray-100 flex flex-col justify-center items-center p-20 gap-10">
            <ul className="flex flex-col justify-center items-center md:items-start">
                {data.projects.map((project, index) => (
                    <li key={index} className="text-center md:text-left border-b-2 border-gray-500 pb-5">
                        <h4 className="text-3xl font-bold text-sky-500 md:text-5xl">
                            {project.name}
                        </h4>
                        <p className="text-dark-500 text-lg mt-5">
                            {project.description}
                        </p>
                        <ul className="flex justify-center gap-5 mt-5">
                            {project.responsibilies.map((responsibility, index) => (
                                <li key={index} className="text-dark-500 text-lg mt-5 border-2 border-gray-500 rounded p-5">
                                    {responsibility}
                                </li>
                            ))}
                        </ul>
                        <h5 className="text-dark-500 text-lg mt-5">
                            Technologies used
                        </h5>
                        <ul className="flex justify-center gap-5 mt-5">
                            {project.technologies.map((technology, index) => (
                                <li key={index} className="text-dark-500 text-lg p-5">
                                    <h6 className="text-dark-500 text-lg mt-5">
                                        {technology.name}
                                    </h6>
                                    <a href={technology.link} target="_blank" rel="noreferrer" className="bg-transparent hover:bg-blue-500 text-dark-500 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
                                        {technology.link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Project
