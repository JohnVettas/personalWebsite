import headshot from './assets/headshot.png';
import { useState } from 'react';

export function Home()
{
    return(
        <>
            <div id = "home" className='titles-links'>Home</div>
            <div className="mainDivBody">
                <div id = "about-me-div">
                    <div id = "about-me-text">About Me</div>
                    <div id='about'>
                        I am currently an undergraduate student at the University of Piraeus, in the Department of Digital Systems, 
                        maintaining a GPA of 7.9 and having successfully completed all coursework up to the sixth semester. My studies, spanning from 2023 to 2027, have provided me with a strong 
                        academic foundation and consistent exposure to both theoretical and practical aspects of computer science. <br></br><br></br>

                        Throughout my curiculum, I have completed a variety of laboratory assignments and hands-on tasks that strengthened my ability to apply 
                        my knoweledge in real-world scenarios. These experiences include working with structured application development, database design, data analysis, 
                        and system-oriented problem solving. 
                        I have developed a disciplined and analytical approach to tackling technical challenges, with emphasis on clarity, efficiency, and reliability.<br></br><br></br>

                        As part of my academic journey, I participated in an exchange program at Stockholm University, 
                        in the Department of Computer and Systems Sciences, where I completed a full semester of studies during the 
                        2025–2026 academic year. During that time, I successfully completed six courses, gaining international academic 
                        experience and exposure to different teaching methods and perspectives in the field of computing. 
                        This experience further strengthened my adaptability,
                        independence, and ability to perform in diverse environments.<br></br><br></br>

                        In addition to my university studies, I also achieved the ECPE 
                        (Examination for the Certificate of Proficiency in English) from the University of Michigan in 2020, 
                        demonstrating a proficient (C2) level of English knoweledge. This enables me to effectively
                         communicate, collaborate, and engage within a technical context in an international setting.
                    </div>
                </div>
                <div id='face-name'>
                    <img id="my-face" src={headshot} alt="Ioannis Vettas"></img>
                    <div><p id = "my-name"><b>Ioannis Vettas</b></p></div>
                    <div><p id = "my-profecion"><b>Aspiring Web Developer | Full Stack</b></p></div>
                </div>
            </div>
        </>
    )
}


export function Skills(){

    const [selectedSkill, setSelectedSkill] = useState('Frontend');
    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
    }


    return(
        <>
            <p id = "skills" className='titles-links'><b>Skills</b></p>
            <div id = "skill-div">
                <div id = "title-skills">
                    <p><b>{selectedSkill}</b></p>
                </div>
                <div id = "skills">
                    <div id='skill-text'>
                        {selectedSkill === 'Frontend' && (
                            <div style={{ padding: '25px 30px', fontSize: '18px', lineHeight: '1.8', color: '#444' }}>
                                I have a strong foundation in frontend development, specializing in building responsive and dynamic user interfaces. 
                                
                                <p style={{ marginTop: '20px', marginBottom: '5px' }}><b>My Core Stack:</b></p>
                                <ul style={{ margin: '0', paddingLeft: '20px' }}>
                                    <li><b>HTML & CSS:</b> Structuring and styling modern layouts.</li>
                                    <li><b>JavaScript & TypeScript:</b> Writing robust, interactive, and type-safe logic.</li>
                                    <li><b>React:</b> Utilizing component-based architecture for dynamic web apps.</li>
                                </ul>
                            </div>
                        )}
                        {selectedSkill === 'Backend' && (
                            <div style={{ padding: '25px 30px', fontSize: '18px', lineHeight: '1.8', color: '#444' }}>
                                I possess solid backend development skills, focusing on server-side architecture and databases.
                                
                                <p style={{ marginTop: '20px', marginBottom: '5px' }}><b>My Core Stack:</b></p>
                                <ul style={{ margin: '0', paddingLeft: '20px' }}>
                                    <li><b>Server & APIs:</b> Experience with Node.js, Express, and Mongoose.</li>
                                    <li><b>Programming Languages:</b> Knowledgeable in Java, Python, C, and C++.</li>
                                    <li><b>Databases:</b> Capable of managing relational (SQL, MySQL) and NoSQL (MongoDB) databases.</li>
                                </ul>
                            </div>
                        )}
                        {selectedSkill === 'Cloud' && (
                            <div style={{ padding: '25px 30px', fontSize: '18px', lineHeight: '1.8', color: '#444' }}>
                                My experience extends to modern deployment, cloud services, and infrastructure management.
                                
                                <p style={{ marginTop: '20px', marginBottom: '5px' }}><b>My Core Stack:</b></p>
                                <ul style={{ margin: '0', paddingLeft: '20px' }}>
                                    <li><b>Containerization:</b> Proficient in using Docker for application containerization.</li>
                                    <li><b>Orchestration & Automation:</b> Knowledge of Kubernetes and building CI/CD pipelines.</li>
                                    <li><b>Systems:</b> Experience with Linux environments and automating tasks via Bash scripting.</li>
                                </ul>
                            </div>
                        )}
                        {selectedSkill === 'Others' && (
                            <div style={{ padding: '25px 30px', fontSize: '18px', lineHeight: '1.8', color: '#444' }}>
                                Beyond web development, I have a diverse technical skill set spanning data processing, AI, and cybersecurity.
                                
                                <p style={{ marginTop: '20px', marginBottom: '5px' }}><b>My Core Stack:</b></p>
                                <ul style={{ margin: '0', paddingLeft: '20px' }}>
                                    <li><b>AI & Machine Learning:</b> Experience with TensorFlow, Pandas, NumPy, and Scikit-Learn for modeling and data analysis.</li>
                                    <li><b>Big Data:</b> Knowledge of distributed computing frameworks like Hadoop (HDFS) and Apache Spark.</li>
                                    <li><b>Cybersecurity:</b> Basic knowledge of threat mitigation, cryptography, SQL injections, NMAP, and Burp Suite.</li>
                                </ul>
                            </div>
                        )}


                    </div>
                    <div id='skill-buttons'>
                        <button className='skill-btn' onClick={() => handleSkillClick('Frontend')}>Frontend</button>
                        <button className='skill-btn' onClick={() => handleSkillClick('Backend')}>Backend</button>
                        <button className='skill-btn' onClick={() => handleSkillClick('Cloud')}>Cloud</button>
                        <button className='skill-btn' onClick={() => handleSkillClick('Others')}>Others</button>

                    </div>
                </div>
            

            </div>
        </>
    )
}