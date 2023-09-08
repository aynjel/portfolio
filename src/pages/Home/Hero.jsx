import data from "../../data/data.json";

function Hero() {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 grid grid-cols-1 md:grid-cols-2 p-20 gap-10">
            <img src="images/profile.jpg" alt={data.personal.image.alt} className="rounded-full w-60 h-60 mx-auto md:mx-0 md:ml-10 md:mr-5 md:w-96 md:h-96 border-4 border-white-500" />
            <div className="flex flex-col justify-center items-center md:items-start">
                <h1 className="text-3xl font-bold text-white md:text-5xl">
                    {data.personal.jobDev.position}
                </h1>
                <p className="text-white text-lg mt-5">
                    {data.personal.jobDev.description}
                </p>
                <div className="flex justify-center gap-5 mt-5">
                    <a href={data.personal.jobDev.resume} target="_blank" rel="noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Resume
                    </a>
                    <a href={'mailto:' + data.personal.jobDev.contact.email} target="_blank" rel="noreferrer" className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
                        Contact
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero