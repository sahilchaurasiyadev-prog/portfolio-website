import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png';

const Projects = ({ darkMode }) => {
    const projects = [
        {
            id: 1,
            title: 'Tasty Recipes',
            desc: 'A full-stack recipe platform where users can generate personalized recipes based on ingredients and dietary preferences, with authentication and AI-powered recipe generation using the Gemini API.',
            image: project1,
            tags: ['React', 'Node', 'Express', 'MongoDB', 'JWT', 'Gemini API'],
            codeUrl: 'https://github.com/sahilchaurasiyadev-prog/tasty-recipes',
            demoUrl: 'https://tasty-recipes-frontend.vercel.app/',
        },
        {
            id: 2,
            title: 'AuraEcommerce',
            desc: 'A full-stack e-commerce application with product, cart, and order functionality, featuring a Node.js and Express backend, MongoDB database, and REST APIs integrated with the Angular frontend.',
            image: project2,
            tags: ['Angular', 'Node', 'Express', 'MongoDB', 'REST APIs'],
            codeUrl: 'https://github.com/sahilchaurasiyadev-prog/AuraEcommerce_Backend',
            demoUrl: 'https://aura-ecommerce-angular.vercel.app/',
        },
        {
            id: 3,
            title: 'Content Generator',
            desc: 'A full-stack content generator app built with React, Node.js, and MongoDB. Features include user authentication, content creation, and progress tracking.',
            image: project3,
            tags: ['Python', 'OpenAI API'],
            codeUrl: 'Code_url',
            demoUrl: 'demo_url',
        },
        {
            id: 4,
            title: 'Dashboard',
            desc: 'A full-stack dashboard app built with React, Node.js, and MongoDB. Features include user authentication, data visualization, and report generation.',
            image: project4,
            tags: ['React', 'Node.js', 'MongoDB'],
            codeUrl: 'Code_url',
            demoUrl: 'demo_url',
        },
        {
            id: 5,
            title: 'Chatbot',
            desc: 'A full-stack chatbot app built with React, Node.js, and MongoDB. Features include user authentication, natural language processing, and conversation management.',
            image: project5,
            tags: ['React', 'Node.js', 'MongoDB'],
            codeUrl: 'Code_url',
            demoUrl: 'demo_url',
        },
        {
            id: 6,
            title: 'Recipe Finder',
            desc: 'A full-stack recipe finder app built with React, Node.js, and MongoDB. Features include user authentication, recipe search, and saving favorite recipes.',
            image: project6,
            tags: ['React', 'Node.js', 'MongoDB'],
            codeUrl: 'Code_url',
            demoUrl: 'demo_url',
        },
    ];

    return (
        <section
            id="projects"
            style={{
                backgroundColor: darkMode ? '#111827' : '#f9fafb',
            }}
            className='relative py-24'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-10' data-aos="fade-up">
                    <h2
                        className='text-3xl sm:text-4xl font-bold mb-3'
                        style={{
                            color: darkMode ? 'white' : '#1f2937'
                        }}>

                        My <span
                            style={{
                                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent'
                            }}>
                            Projects
                        </span>
                    </h2>
                    <p
                        className='max-w-xl mx-auto'
                        style={{
                            color: darkMode ? '#d1d5db' : '#6b7280'
                        }}>
                        A showcase of my recent work
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            style={{
                                background: darkMode
                                    ? 'linear-gradient(to right, #1f2937, #111827)'
                                    : 'linear-gradient(to right, #ffffff, #f9fafb)',
                                borderColor: darkMode ? '#374151' : '#e5e7eb',
                            }}
                            className='group rounded-xl border duration-300 hover:border-orange-500/50 transition-all'
                            data-aos="fade-up"
                            data-aos-delay={index * 100}>
                            <div className='h-50 overflow-hidden rounded-t-xl'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' />
                            </div>
                            <div className='p-4'>
                                <h3
                                    className='text-lg font-bold mb-2'
                                    style={{
                                        color: darkMode ? 'white' : '#1f2937'
                                    }}>
                                    {project.title}
                                </h3>
                                <p
                                    className='text-sm mb-3'
                                    style={{
                                        color: darkMode ? '#d1d5db' : '#6b7280'
                                    }}>
                                    {project.desc}
                                </p>
                                <div className='flex flex-wrap gap-1.5 mb-4'>
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            style={{
                                                backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                                color: darkMode ? '#d1d5db' : '#4b5563'
                                            }}
                                            className='text-xs px-2 py-1 rounded-full'
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className='flex gap-2'>
                                    <a href={project.codeUrl}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        style={{
                                            backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                            color: darkMode ? 'white' : '#374151'
                                        }}
                                        className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors'
                                        data-aos='zoom-in'
                                        data-aos-delay='300'>
                                        <FaGithub className='text-sm' />
                                        <span>Code</span>
                                    </a>

                                    {/* Demo */}
                                    <a href={project.demoUrl} target='_blank' rel='noopener noreferrer'
                                        style={{
                                            background: 'linear-gradient(to right, #f97316, #f59e0b)',

                                        }}
                                        className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all'
                                        data-aos='zoom-in'
                                        data-aos-delay='300'>
                                        <FaExternalLinkAlt className='text-sm' />
                                        <span>Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='text-center mt-10'>
                    <a
                        href="https://github.com/sahilchaurasiyadev-prog?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            background: 'linear-gradient(to right, #f97316, #f59e0b)',

                        }}
                        className='inline-flex items-center font-semibold gap-2 px-7 py-4 text-white text-sm rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all'
                        data-aos='zoom-in'
                        data-aos-delay='400'>
                        <FaGithub />
                        <span>View All Projects</span>
                        <FaExternalLinkAlt className='text-sm' />
                    </a>

                </div>

            </div>
        </section>
    );
};

export default Projects