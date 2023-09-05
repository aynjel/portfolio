import data from "../../data/data.json";

function About() {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center p-20 gap-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 md:text-3xl">
                About me
            </h2>
            <div className="flex flex-col justify-center items-center w-full gap-10">
                <div className="flex flex-col justify-center items-center w-full gap-5">
                    <img src={data.personal.image.src} alt={data.personal.image.alt} className="rounded-full w-60 h-60 mx-auto md:mx-0 md:ml-10 md:mr-5 md:w-20 md:h-20 border-2 border-white-500" />
                    <h3 className="text-xl font-bold text-center text-white md:text-2xl">
                        {data.personal.fullname}
                    </h3>
                    <p className="text-white text-lg">
                        {data.personal.location.street}, {data.personal.location.baranggay}, {data.personal.location.city}, {data.personal.location.province}, {data.personal.location.country}
                    </p>
                    <p className="text-white text-lg">
                        {data.personal.contact.email}
                    </p>
                    <p className="text-white text-lg">
                        {data.personal.contact.number}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About