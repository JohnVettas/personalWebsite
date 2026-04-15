import headshot from './assets/headshot.png';



export function Home()
{
    return(
        <>
            <div id = "home-text">Home</div>
            <div className="mainDivBody">
                <div id = "about-me-div">
                    <div id = "about-me-text">About Me</div>
                    <div id='about'>
                        I am currently an undergraduate student at the University of Piraeus, Department of Digital Systems, 
                        maintaining a GPA of 7.9 and having successfully completed all coursework up to the sixth semester. My studies, spanning from 2023 to 2027, have provided me with a strong 
                        academic foundation and consistent exposure to both theoretical and practical aspects of computer science. <br></br><br></br>

                        Throughout my coursework, I have engaged in a variety of laboratory assignments and hands-on tasks that strengthened my ability to apply 
                        concepts in real-world scenarios. These experiences include working with structured application development, database design, data analysis, 
                        and system-oriented problem solving. 
                        I have developed a disciplined and analytical approach to tackling technical challenges, with emphasis on clarity, efficiency, and reliability.<br></br><br></br>

                        As part of my academic journey, I participated in an exchange program at Stockholm University, 
                        Department of Computer and Systems Sciences, where I completed a full semester of studies during the 
                        2025–2026 academic year. During this time, I successfully completed six courses, gaining international academic 
                        experience and exposure to different teaching methodologies and perspectives in the field of computing. 
                        This experience further strengthened my adaptability,
                        independence, and ability to perform in diverse academic environments.<br></br><br></br>

                        In addition to my university studies, I have also achieved the ECPE 
                        (Examination for the Certificate of Proficiency in English) from the University of Michigan in 2020, 
                        demonstrating a C2 level of English proficiency. This enables me to effectively
                         communicate, collaborate, and engage with technical content in an international context.
                    </div>
                </div>
                <div id='face-name'>
                    <img id = "my-face" src={headshot} alt = "GitHub" width="500"></img>
                    <div><p id = "my-name"><b>Ioannis Vettas</b></p></div>
                    <div><p id = "my-profecion"><b>Aspiring Web Developer | Full Stack</b></p></div>
                </div>
            </div>
        </>
    )
}