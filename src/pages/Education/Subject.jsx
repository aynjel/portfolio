import data from "../../data/data.json";

function Subject() {
    return (
        <div className="flex flex-col justify-center items-center w-full gap-10">
            <div className="flex flex-col justify-center items-center w-full gap-5 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-5">
                <h3 className="text-xl font-bold text-center dark:text-gray-600 md:text-2xl">
                    First Year Subjects
                </h3>
                <hr className="border-gray-200 dark:border-gray-700 w-full" />
                <ul className="flex flex-col justify-center items-center w-full gap-10">
                    {data.education.subjects.firstYear.map((subject) => (
                        <li key={subject.name} className="text-gray-800 dark:text-gray-600 text-lg flex flex-col justify-center items-center w-full gap-5">
                            <h4 className="text-lg font-bold text-center dark:text-gray-600 md:text-xl">
                                {subject.subjectName} - {subject.subjectCode} ({subject.type})
                            </h4>
                            <ul className="flex flex-row justify-center items-center w-full gap-5">
                                <li className="text-gray-800 dark:text-gray-600 text-lg">
                                    Units: {subject.units}
                                </li>
                                <li className="text-gray-800 dark:text-gray-600 text-lg">
                                    Grade: {subject.finalGrade}
                                </li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col justify-center items-center w-full gap-5 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-5">
                <h3 className="text-xl font-bold text-center dark:text-gray-600 md:text-2xl">
                    Second Year Subjects
                </h3>
                <hr className="border-gray-200 dark:border-gray-700 w-full" />
                <ul className="flex flex-col justify-center items-center w-full gap-10">
                    {data.education.subjects.secondYear.map((subject) => (
                        <li key={subject.name} className="text-gray-800 dark:text-gray-600 text-lg flex flex-col justify-center items-center w-full gap-5">
                            <h4 className="text-lg font-bold text-center dark:text-gray-600 md:text-xl">
                                {subject.subjectName} - {subject.subjectCode} ({subject.type})
                            </h4>
                            <ul className="flex flex-row justify-center items-center w-full gap-5">
                                <li className="text-gray-800 dark:text-gray-600 text-lg">
                                    Units: {subject.units}
                                </li>
                                <li className="text-gray-800 dark:text-gray-600 text-lg">
                                    Grade: {subject.finalGrade}
                                </li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col justify-center items-center w-full gap-5 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-5">
                <h3 className="text-xl font-bold text-center dark:text-gray-600 md:text-2xl">
                    Third Year Subjects
                </h3>
                <hr className="border-gray-200 dark:border-gray-700 w-full" />
                <ul className="flex flex-col justify-center items-center w-full gap-10">
                    {data.education.subjects.thirdYear.map((subject) => (
                        <li key={subject.name} className="text-gray-800 dark:text-gray-600 text-lg flex flex-col justify-center items-center w-full gap-5">
                            <h4 className="text-lg font-bold text-center dark:text-gray-600 md:text-xl">
                                {subject.subjectName} - {subject.subjectCode} ({subject.type})
                            </h4>
                            <ul className="flex flex-row justify-center items-center w-full gap-5">
                                <li className="text-gray-800 dark:text-gray-600 text-lg">
                                    Units: {subject.units}
                                </li>
                                <li className="text-gray-800 dark:text-gray-600 text-lg">
                                    Grade: {subject.finalGrade}
                                </li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col justify-center items-center w-full gap-5 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-5">
                <h3 className="text-xl font-bold text-center dark:text-gray-600 md:text-2xl">
                    Fourth Year Subjects
                </h3>
                <hr className="border-gray-200 dark:border-gray-700 w-full" />
                <ul className="flex flex-col justify-center items-center w-full gap-10">
                    {data.education.subjects.fourthYear.map((subject) => (
                        <li key={subject.name} className="text-gray-800 dark:text-gray-600 text-lg flex flex-col justify-center items-center w-full gap-5">
                            <h4 className="text-lg font-bold text-center dark:text-gray-600 md:text-xl">
                                {subject.subjectName} - {subject.subjectCode} ({subject.type})
                            </h4>
                            <ul className="flex flex-row justify-center items-center w-full gap-5">
                                <li className="text-gray-800 dark:text-gray-600 text-lg">
                                    Units: {subject.units}
                                </li>
                                <li className="text-gray-800 dark:text-gray-600 text-lg">
                                    Grade: {subject.finalGrade}
                                </li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Subject