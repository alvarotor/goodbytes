import { Header } from "./header"
import Footer from "./footer"

export default function Profile() {
    return (
        <>
            <Header />
            <div class="innerbg">
                <div class="wrap">
                    <h1>
                        Professional <span class="red">Profile</span>
                    </h1>
                </div>
            </div>

            <div class="wrap">
                <div id="content">
                    <p>
                        I am an energetic professional and a hardworking person with more than
                        15 years of experience programming in various fields. I enjoy working
                        in a busy environment and being part of a dynamic team that thrives on
                        responsibility. I am a self-motivated, curious person and a quick
                        learner. I am always excited to learn new skills and discuss various
                        methods to achieve goals and objectives. Additionally, I have a good
                        sense of humor.
                    </p>
                    <p>
                        I am a problem solver with a 'get things done' attitude, passionate
                        about creating customer satisfaction, and possess a solid
                        understanding of programming principles with strong Business
                        Intelligence skills. Technically adept with a high learning ability, I
                        am adaptable to any situation. I know when to lead with new ideas and
                        have the humility to step back and embrace the good ideas of others. I
                        have strong analytical and troubleshooting skills, with a proven
                        ability to quickly resolve difficult technical issues. I am always
                        ready to learn new programming languages, techniques, practices, or
                        frameworks available in the market. Primarily a self-learner, I am an
                        expert with many years of experience in solving problems with the
                        correct solutions by applying all possible available resources
                        throughout the internet, always using SOLID principles and design
                        patterns.
                    </p>
                    <p>
                        I consider IT to be my vocation rather than my profession. My programming
                        experience is quite broad, including full-stack
                        development, mobile applications, software architecture, and cloud
                        services.
                    </p>
                    <p>
                        I have extensive experience gained by working in many different areas
                        in various types of companies: airlines, music, education, energy,
                        telecommunications, sports, clothing, fashion, and hotels, social
                        networks, travel, in on-site positions and freelancing as a
                        contractor, within startups, small businesses, and large multinational
                        consultancies. I have worked as a software architect, team lead
                        developer, and senior developer.
                    </p>
                    <p>
                        Thank you for your time and consideration. I look forward to speaking
                        with you and please do not hesitate to contact me if you require
                        further information. It would be my pleasure to discuss my potential
                        contributions and how I could help work with your processes. If you
                        require any additional information, I can always be contacted at the
                        email goodbytes23@gmail.com. Please see below my resume for additional
                        information about my experience.
                    </p>
                    <p>Yours Sincerely,</p>
                    <p>Alvaro Torres</p>
                </div>
                <div id="sidebar">
                    <div class="sideblock">
                        <h3><span class="red">Strong</span> points</h3>
                        <ul>
                            <li class="first">
                                <strong>15 years</strong> of experience in the IT industry.
                            </li>
                            <li>
                                Working with the full stack, front end, back end, databases and
                                mobile applications.
                            </li>
                            <li>
                                Experience working alone, as a team member or leading a project.
                            </li>
                            <li>
                                Experience obtained by working in many different areas at various
                                companies within several industries.
                            </li>
                            <li>
                                Self motivated, curious, self confident person and a quick hungry
                                learner.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />            
        </>
    )
}