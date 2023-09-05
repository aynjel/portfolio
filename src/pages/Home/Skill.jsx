import data from '../../data/data.json';

function Skill() {
    return (
        <div className="bg-gray-100 flex flex-col justify-center items-center p-20 gap-10">
            <h2 className="text-2xl font-bold text-center text-gray-800 md:text-3xl">
                Skills
            </h2>
            <div className="flex flex-col justify-center items-center w-full gap-10">
                {data.skills.map(skill => (
                    <div key={skill.name} className="flex flex-col justify-center items-center w-full gap-5">
                        <h3 className="text-xl font-bold text-center text-gray-800 md:text-2xl">
                            {skill.name}
                        </h3>
                        <ul key={skill.name} className="flex flex-wrap justify-center items-center w-full gap-5">
                            {skill.items.map(item => (
                                <li key={item.name} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded">
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skill