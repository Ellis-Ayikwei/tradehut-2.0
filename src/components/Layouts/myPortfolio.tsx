import { Link } from 'react-router-dom';
import IconCode from '../Icon/IconCode';
import IconGlobe from '../Icon/IconGlobe';
import { renderTechnology } from './rendertechnology';

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: 'QrCode Generator',
            description: 'A mobile application built using Flutter. Focused on seamless qrCode generation with embeded icons.',
            image: 'project1.png',
            iframe: () => {
                return <iframe className="border-1 border-gray-200 w-full h-[450px]" 
                src="https://play.google.com/store/apps/details?id=com.tradehut.qrcodegenerator&hl=en" allowFullScreen>
                  
                </iframe>;
            },
            link: 'https://github.com/Ellis-Ayikwei/QrCode-Generator.git',
            stacks: ['Flutter'],
        },
        {
            id: 2,
            title: 'MyBasi Platform',
            description: 'Collaborated on a robust mobile app for client management using Flutter, enhancing user experience and performance.',
            image: 'project2.png', // Replace with the actual image path
            link: 'https://github.com/Thehustl3r/mybasi-customer-mobile.git',
            iframe: () => {
                return (
                    <iframe
                        className="border-1 border-gray-200 w-full h-[450px]"
                        src="https://embed.figma.com/proto/LP8q5adI8vhHh07Ezf1LxJ/my-bus?page-id=0%3A1&node-id=558-359&starting-point-node-id=558%3A429&embed-host=share"
                        allowFullScreen
                    ></iframe>
                );
            },
            stacks: ['Flutter'],
        },
        {
            id: 3,
            title: 'Sprout Collab',
            description: 'A collaboration plaform',
            image: 'project3.png', // Replace with the actual image path
            iframe: () => {
                return <iframe className="border-1 border-gray-200 w-full h-[450px]" src="https://www.sproutcollab.me/" allowFullScreen></iframe>;
            },
            link: '#',code .
            stacks: ['Flutter'],
        },
        {
            id: 3,
            title: 'TradeHut GH E-Commerce',
            description: 'Maintained and improved custom web applications and e-commerce platforms for enhanced user satisfaction.',
            image: 'project3.png', // Replace with the actual image path
            link: '#',
            stacks: ['Flutter'],
        },
        {
            id: 3,
            title: 'TradeHut GH E-Commerce',
            description: 'Maintained and improved custom web applications and e-commerce platforms for enhanced user satisfaction.',
            image: 'project3.png', // Replace with the actual image path
            link: '#',
            stacks: ['Flutter'],
        },
        {
            id: 3,
            title: 'TradeHut GH E-Commerce',
            description: 'Maintained and improved custom web applications and e-commerce platforms for enhanced user satisfaction.',
            image: 'project3.png', // Replace with the actual image path
            link: '#',
            stacks: ['Python', 'React', 'flask'],
        },
    ];

    return (
        <div id="portfolio" className="bg-transparent py-16 px-6 sm:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 text-center">My Portfolio</h2>
                <p className="mt-4 text-lg text-gray-600 text-center">Explore some of the projects I’ve worked on, showcasing my skills in software development and design.</p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transform transition">
                            {/* <img src={project.image} alt={project.title} className="w-full h-48 object-cover" /> */}
                            {project.iframe && project.iframe()}
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                                <p className="mt-2 text-gray-600">{project.description}</p>

                                <div className="relative flex justify-between mt-6 pt-4 before:w-[250px] before:h-[1px] before:bg-white-light before:inset-x-0 before:top-0 before:absolute before:mx-auto dark:before:bg-[#1b2e4b]">
                                    {project.stacks.map((stack) => renderTechnology(stack))}
                                    <div className="flex font-semibold">
                                        <div className="text-primary flex items-center ltr:mr-3 rtl:ml-3">
                                            <IconCode />
                                        </div>
                                        <Link to={project.link} className="text-primary flex items-center">
                                            <IconGlobe />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
