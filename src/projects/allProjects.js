import click from "../media/click.jpg";
import youclone from "../media/youclone.jpg";
import theRange from "../media/the-range.jpg";
import ether from "../media/ether.jpg";

const allProjects = [
    {
        imgSrc: click,
        number: "01.",
        title: "Click",
        type: "Instant Messaging Application",
        description:
            "Click is an instant messaging application featuring user authentication, text and image messaging, real-time online/offline contact status, and profile customization.",
        techStack: "HTML, CSS, JavaScript, React, Firebase",
        codeLink: "https://github.com/tenbucker4/click",
        liveLink: "https://tenbucker4.github.io/click/",
    },
    {
        imgSrc: youclone,
        number: "02.",
        title: "YouClone",
        type: "YouTube Replica",
        description:
            "YouClone is a YouTube replica built with RapidAPI. Features include category/manual search functionality for videos/channels and real-time subscriber and view count.",
        techStack: "HTML, CSS, JavaScript, React, MaterialUI",
        codeLink: "https://github.com/tenbucker4/youclone",
        liveLink: "https://tenbucker4.github.io/youclone/",
    },
    {
        imgSrc: theRange,
        number: "03.",
        title: "The Range",
        type: "Shopping Cart Application",
        description:
            "The Range is a shopping cart application where users can browse golf equipment. Features include manual/category product search and add/edit/delete cart functionality.",
        techStack: "HTML, CSS, JavaScript, React",
        codeLink: "https://github.com/tenbucker4/the-range",
        liveLink: "https://tenbucker4.github.io/the-range/",
    },
    {
        imgSrc: ether,
        number: "04.",
        title: "Ether",
        type: "Educational Space App",
        description:
            "Ether is an educational app where users can learn more about out solar system. Real-time data such as number of known moons and averages temperatures are displayed using The Solar System OpenData public API.",
        techStack: "HTML, CSS, JavaScript, React, SASS",
        codeLink: "https://github.com/tenbucker4/ether",
        liveLink: "https://tenbucker4.github.io/ether/",
    },
];

export default allProjects;
