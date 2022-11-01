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
            "An instant messaging application where users can send text and picture messages, see real-time online and offline contact status, and customize their profile.",
        techStack: "HTML, CSS, JavaScript, React, Firebase",
        codeLink: "https://github.com/tenbucker4/click",
        liveLink: "https://tenbucker4.github.io/click/",
    },
    {
        imgSrc: youclone,
        title: "YouClone",
        type: "YouTube Replica",
        description:
            "A YouTube replica where users can browse and view their favourite videos and channels, see real-time subscriber and like counts, and watch content on any device.",
        techStack: "HTML, CSS, JavaScript, React, MaterialUI, RapidAPI",
        codeLink: "https://github.com/tenbucker4/youclone",
        liveLink: "https://tenbucker4.github.io/youclone/",
    },
    {
        imgSrc: theRange,
        title: "The Range",
        type: "Shopping Cart Application",
        description:
            "A mock e-commerce application where users can add golfing equipment including drivers, irons, balls and gloves to their shopping cart.",
        techStack: "HTML, CSS, JavaScript, React",
        codeLink: "https://github.com/tenbucker4/the-range",
        liveLink: "https://tenbucker4.github.io/the-range/",
    },
    {
        imgSrc: ether,
        title: "Ether",
        type: "Educational Space App",
        description:
            "An educational app where users can learn more about out solar system. Real-time data such as average temperature and number of discovered moons are displayed for each planet in the solar system.",
        techStack: "HTML, CSS, JavaScript, React, SASS",
        codeLink: "https://github.com/tenbucker4/ether",
        liveLink: "https://tenbucker4.github.io/ether/",
    },
];

export default allProjects;
