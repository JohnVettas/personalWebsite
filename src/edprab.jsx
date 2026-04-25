export function Education() {
    return (
        <>
            <div className="w-[90%] mx-auto font-bold titles-links">Education </div>
            <div id='education' className='w-[90%] mx-auto border-3  border-black-300 p-4 mb-4'>   {/* bg-[url("assets/x1.jpg")] */}
                <h1 className="text-4xl border-b-2 border-gray-500/50">University of Piraeus</h1>
                <p className="pt-2"><b>Bachelor of Science in Computer Science</b></p>
                <div>
                    <ul className="border-b-2 border-gray-500/50 pb-4 space-y-2 list-disc list-inside text-gray-700">
                        <li>Currently an undergraduate student in the <b>Department of Digital Systems</b> (Projected study period: 2023–2027).</li>
                        <li>GPA: 7.9/10</li>

                        {/* The nested list is now correctly inside an <li> */}
                        <li className="mt-2 list-none">
                            <span className="font-semibold text-gray-800">University Projects:</span>

                            {/* Inner list with left margin (ml-6) for indentation */}
                            <ul className="list-[circle] list-inside ml-6 mt-1 space-y-1 text-gray-600">
                                <li>Developed a <b>Java application</b> using IntelliJ IDEA, leveraging XAMPP and MySQL for relational database architecture.</li>
                                <li>Executed <b>Exploratory Data Analysis</b> and built machine learning models (regression & classification) using Pandas, NumPy, and Scikit-Learn</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <h1 className="text-4xl border-b-2 border-gray-500/50 mt-8">Stockholm University</h1>
                <p className="pt-2"><b>Bachelor of Science in Computer Science</b></p>
                <div>
                    <ul className="border-b-2 border-gray-500/50 pb-4 space-y-2 list-disc list-inside text-gray-700">
                        <li>Currently an undergraduate student in the <b>Department of Computer and System Science</b> study period: 2025–2026.</li>
                        <li>GPA: 7.9/10</li>

                        {/* The nested list is now correctly inside an <li> */}
                        <li className="mt-2 list-none">
                            <span className="font-semibold text-gray-800">University Projects:</span>

                            {/* Inner list with left margin (ml-6) for indentation */}
                            <ul className="list-[circle] list-inside ml-6 mt-1 space-y-1 text-gray-600">
                                <li>Developed a <b>Java application</b> using IntelliJ IDEA, leveraging XAMPP and MySQL for relational database architecture.</li>
                                <li>Executed <b>Exploratory Data Analysis</b> and built machine learning models (regression & classification) using Pandas, NumPy, and Scikit-Learn</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}