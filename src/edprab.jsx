import dsImage from './assets/dsUniS.png';
import weatherImage from './assets/weather-app.png';

export function Education() {
    return (
        <>
            <div id='education' className="w-[95%] md:w-[90%] mx-auto font-bold titles-links">Education</div>
            
            {/* Changed text-[18px] to text-[14px] md:text-[18px] */}
            <div className='w-[95%] md:w-[90%] mx-auto border-3 border-black-300 p-3 md:p-4 mb-4 bg-[#ffffff] text-[14px] md:text-[18px]'>
                
                <h1 className="text-2xl md:text-4xl border-b-2 border-gray-500/50 pb-2"><b>University of Piraeus</b></h1>
                <p className="pt-4 md:pt-6 pl-2 md:pl-6"><b>Bachelor of Science in Computer Science</b></p>
                <div>
                    <ul className="pb-4 space-y-2 list-disc list-inside text-gray-700 pl-2 md:pl-6">
                        <li>Currently an undergraduate student in the <b>Department of Digital Systems</b> (Projected study period: 2023–2027).</li>
                        <li>GPA: 7.9/10</li>

                        <li className="mt-2 list-none">
                            <span className="font-semibold">University Projects:</span>
                            <ul className="list-[circle] list-inside ml-4 md:ml-6 mt-1 space-y-1">
                                <li>Developed a <b>Java application</b> using IntelliJ IDEA, leveraging XAMPP and MySQL for relational database architecture.</li>
                                <li>Executed <b>Exploratory Data Analysis</b> and built machine learning models (regression & classification) using Pandas, NumPy, and Scikit-Learn</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <h1 className="text-2xl md:text-4xl border-b-2 border-gray-500/50 mt-8 pb-2"><b>Stockholm University</b></h1>
                <p className="pt-4 md:pt-6 pl-2 md:pl-6"><b>Bachelor of Science in Computer Science</b></p>
                <div>
                    <ul className="pb-4 space-y-2 list-disc list-inside text-gray-700 pl-2 md:pl-6">
                        <li>I took part in a student exchange program where I studied one semester in Stockholm. Study period 2025-2026.</li>
                        <li>GPA: 8.6/10</li>

                        <li className="mt-2 list-none">
                            <span className="font-semibold">University Projects:</span>
                            <ul className="list-[circle] list-inside ml-4 md:ml-6 mt-1 space-y-1">
                                <li>Engineered an <b>Edge AI</b> solution using TensorFlow Lite for Microcontrollers to deploy a sound classification model on an Arduino based UAV for <b>real-time animal species identification.</b> <a href="https://github.com/Doudman/Tiny-Machine-Learning" className="text-blue-500 hover:underline">(Github Repo)</a></li>
                                <li>Performed <b>security hardening</b> on a vulnerable website to mitigate threats and conducted authorized security assessments on platforms to identify remaining vulnerabilities.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export function Projects() {
    return (
        <>
            <div id='projects' className="w-[95%] md:w-[90%] mx-auto font-bold titles-links">Projects</div>
            
            {/* Changed text-[18px] to text-[14px] md:text-[18px] */}
            <div className='w-[95%] md:w-[90%] mx-auto border-3 border-black-300 p-3 md:p-4 mb-4 bg-[#ffffff] text-[14px] md:text-[18px]'>
                
                <h1 className="text-2xl md:text-4xl border-b-2 border-gray-500/50 pb-2"><b>Ds Dynamic Schedule</b></h1>
                <div className="pb-2 border-b-3 pt-4 md:pt-6 grid grid-cols-1 min-[1300px]:grid-cols-[40%_60%]">

                    <div className="min-[1300px]:border-r-2 border-gray-500/50 pb-6 min-[1300px]:pb-0 min-[1300px]:pr-6">
                        <p className="mb-4">
                            <b>Ds Dynamic Schedule</b> is a web application designed to dynamically showcase the scheduling of courses,
                            labs and exams for the Department of Digital Systems in the University of Piraeus.
                            This project is still under development but it's very close to 
                            completion. <a href="https://github.com/JiaJun0310/ds_dynamic_schedule" className="text-blue-500 hover:underline">
                                 (Github Repo)
                            </a>
                        </p>
                        <ul className="pb-4 space-y-2 list-disc list-inside pl-1 md:pl-2">
                            <li>Implemented a user-friendly interface, allowing students to easily navigate and view their schedules.</li>
                            <li>Utilized Node.js and Express.js to create a robust backend that handles data retrieval and management.</li>
                            <li>All data automatically generated by four different AI pipelines using LlamaCloud and Gemini for pdf markdown conversion and json parsing for data handling.</li>
                            <li>Admin page and dashboard for managing and updating the schedule information is accessible to authorized users with predetermined hashed passwords for security.</li>
                        </ul>
                    </div>

                    <div className="flex items-center justify-center mt-4 min-[1300px]:mt-0 min-[1300px]:pl-3 min-w-0">
                        <img
                            id="project1"
                            src={dsImage}
                            alt="Ds Dynamic Schedule"
                            className="max-w-full h-auto object-contain border-2 border-[#00bcd4] rounded-lg shadow-md"
                        />
                    </div>
                </div>

                <h1 className="mt-8 text-2xl md:text-4xl border-b-2 border-gray-500/50 pb-2"><b>Weather App</b></h1>
                <div className="pb-2 border-b-3 pt-4 md:pt-6 grid grid-cols-1 min-[1300px]:grid-cols-[40%_60%]">

                    <div className="min-[1300px]:border-r-2 border-gray-500/50 pb-6 min-[1300px]:pb-0 min-[1300px]:pr-6">
                        <p className="mb-4">
                            <b>Weather App</b> is a web application designed to fetch data from a weather API and display it in an intuitive and visually appealing way. 
                            The app provides users with real-time weather information, 
                            including temperature, humidity and wind speed for their 
                            location or any city they choose to search for. The app also uses an Authentication system to allow users to create accounts and save their favorite 
                            locations for quick access to weather updates.
                        </p>
                        <ul className="pb-4 space-y-2 list-disc list-inside pl-1 md:pl-2">
                            <li>Implemented a user-friendly interface, allowing students to easily add and manage their favorite locations.</li>
                            <li>Utilized Node.js and Express.js to create a robust backend that handles data retrieval and management.</li>
                            <li>All users are handled with proper authentication and authorization and saved in a mongoDB database using mongoose.</li>
                            <li>User has the ability to view and manage their saved locations, and they are not required to be logged in to use the app only if they want to save a location.</li>       
                        </ul>
                    </div>

                    <div className="flex items-center justify-center mt-4 min-[1300px]:mt-0 min-[1300px]:pl-3 min-w-0">
                        <img
                            id="project2"
                            src={weatherImage}
                            alt="Weather App"
                            className="max-w-full h-auto object-contain border-2 border-[#00bcd4] rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}