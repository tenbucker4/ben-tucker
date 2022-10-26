import click from "../media/click.jpg";
import youclone from "../media/youclone.jpg";
import theRange from "../media/the-range.jpg";
import ether from "../media/ether.jpg";

const allProjects = [
    {
        imgSrc: click,
        title: "Click",
        type: "Instant Messaging Application",
        description:
            "An instant messaging application featuring user authentication, text and image messaging, online and offline contact status, and profile customization.",
        techStack: "HTML, CSS, JavaScript, React, Firebase",
        codeLink: "https://github.com/tenbucker4/click",
        liveLink: "https://tenbucker4.github.io/click/",
    },
    {
        imgSrc: youclone,
        title: "YouClone",
        type: "YouTube Replica",
        description:
            "A YouTube replica featuring category and manual search functionality for videos and channels and real-time subscriber and view count.",
        techStack: "HTML, CSS, JavaScript, React, MaterialUI, RapidAPI",
        codeLink: "https://github.com/tenbucker4/youclone",
        liveLink: "https://tenbucker4.github.io/youclone/",
    },
    {
        imgSrc: theRange,
        title: "The Range",
        type: "Shopping Cart Application",
        description:
            "A mock e-commerce application for golfing equipment. Features include manual and category product search and add/edit/delete cart functionality.",
        techStack: "HTML, CSS, JavaScript, React",
        codeLink: "https://github.com/tenbucker4/the-range",
        liveLink: "https://tenbucker4.github.io/the-range/",
    },
    {
        imgSrc: ether,
        title: "Ether",
        type: "Educational Space App",
        description:
            "An informative app where users can learn more about out solar system. Real-time data such as number of known moons and averages temperatures are displayed using The Solar System OpenData public API.",
        techStack: "HTML, CSS, JavaScript, React, SASS",
        codeLink: "https://github.com/tenbucker4/ether",
        liveLink: "https://tenbucker4.github.io/ether/",
    },
];

export default allProjects;
