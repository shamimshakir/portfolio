const { useState, useEffect } = React;
const allTags = [
    "HTML",
    "CSS",
    "CSS Flexbox",
    "CSS Grid",
    "Bootstrap",
    "Modern Javascript",
    "React JS",
    "Node JS",
    "Mongodb",
    "Webpack",
    "NPM",
    "Git",
    "jQuery",
    "Modern PHP",
    "MySQL",
    "Wordpress"
];
const allProjects = [
    {
        id: 1,
        name: "Basic calculator",
        image: "js_calculator.png",
        link: "https://shamimshakir.github.io/javascript-projects/calculator.html",
        categories: ["Javascript", "fcc challenge"]
    },
    {
        id: 2,
        name: "Shopping cart",
        image: "shopping_cart.png",
        link: "https://shamimshakir.github.io/javascript-projects/react_shopping_cart/",
        categories: ["React js"]
    },
    {
        id: 3,
        name: "Tic tac toe",
        image: "tic_tac_toe.png",
        link: "https://shamimshakir.github.io/javascript-projects/tictactoe.html",
        categories: ["Javascript", "fcc challenge"]
    },
    {
        id: 4,
        name: "Quiz app",
        image: "react_quize_app.png",
        link: "https://shamimshakir.github.io/javascript-projects/react_quizapp.html",
        categories: ["React js"]
    },
    {
        id: 5,
        name: "Rock Paper Scissor",
        image: "rock_paper_scissor.png",
        link: "https://shamimshakir.github.io/javascript-projects/react_rock_paper_scissor/",
        categories: ["React js"]
    },
    {
        id: 6,
        name: "Match card game",
        image: "js_match_card.png",
        link: "https://shamimshakir.github.io/javascript-projects/match_card.html",
        categories: ["Javascript"]
    },
    {
        id: 7,
        name: "Simple todo",
        image: "js_todo.png",
        link: "https://shamimshakir.github.io/javascript-projects/todojs.html",
        categories: ["Javascript"]
    },
    {
        id: 8,
        name: "Recipe box",
        image: "react_recipe_box.png",
        link: "https://shamimshakir.github.io/javascript-projects/recipe_box/",
        categories: ["React js", "fcc challenge"]
    },
    {
        id: 9,
        name: "FCC forum",
        image: "react_fcc_forum.png",
        link: "https://shamimshakir.github.io/javascript-projects/fcc_forum_homepage/",
        categories: ["React js", "fcc challenge"]
    },
    {
        id: 10,
        name: "Wikipedia Viewer",
        image: "wikipedia_viwer.png",
        link: "https://shamimshakir.github.io/javascript-projects/wikipedia_viewer.html",
        categories: ["Javascript", "fcc challenge"]
    },
    {
        id: 11,
        name: "Ready Shop",
        image: "readyshop.png",
        link: "#",
        categories: ["php mysql"]
    },
    {
        id: 12,
        name: "Stealth Finance",
        image: "stealth.png",
        link: "https://staging.techsolutionsbd.com/stealth/",
        categories: ["php mysql"]
    },
    {
        id: 13,
        name: "Women albd",
        image: "women-albd.png",
        link: "https://women-albd.org/",
        categories: ["php mysql"]
    }
]
const projectCategories = allProjects.reduce(
    (acc, project) => {
        project.categories.forEach(cat => {
            if (!acc.includes(cat)) {
                acc.push(cat);
            }
        })
        return acc;
    },
    ["all"]
);
function Banner(){
    const [tags, setTags] = useState(allTags);
    return <div className="banner">
        <div className="profileInfo">
            <div className="profilePicBorder">
                <img src="images/shamimshakir2.jpg" alt=""/>
            </div>
            <div className="profileName">
                <h2><span>&#60;</span> ShamimShakir <span>&#47;&#62;</span></h2>
                <h5>Full stack web developer</h5>
                <p className="shortBio">
                    passionate about exploring and experimenting new web technologies, love to learn and build cool
                    things with modern javascript and solving problems on online judge sites
                </p>
            </div>
            <div className="skillTags">
                {tags.map((tag, index) => {
                    return <p key={index}>{tag}</p>
                })}
            </div>
        </div>
    </div>
}
function SectionTitle({title, intro}){
    return <div className="sectionTitle">
        <h2><span>&#60;</span> {title} <span>&#47;&#62;</span></h2>
        <p>{intro}</p>
    </div>
}
function Portfolio(){
    const [projects, setProjects] = useState(allProjects);
    function filterProducts(category) {
        if (category === "all") {
            setProjects(allProjects);
            return;
        }
        const filtered = allProjects.filter(item => {
            if(item.categories.includes(category)){
                return item;
            }
        });
        setProjects(filtered);
    }
    return <div className="portfolio section">
        <SectionTitle
            title="My Works"
            intro="Here are some micro projects done with JavaScript and ReactJS. All of them are either
                    experimental or done for freeCodeCamp project challenges"
        />
        <div className="myWorks">
            <div className="worksNavigation">
                <ul>
                    {projectCategories.map((cat, index) => {
                        return <li onClick={() => filterProducts(cat)} key={index}>{cat}</li>;
                    })}
                </ul>
            </div>
            <div className="workProjects">
                {projects.map(project => {
                    return <a key={project.id} target="_blank" href={project.link} className="singleWorkProject">
                        <img src={`images/${project.image}`} alt=""/>
                        <div className="singleWorkProjectInfo">
                            <h3>{project.name}</h3>
                            <p>
                                {project.categories.map((cat, index) => {
                                    return <span key={index}>{cat}</span>
                                })}
                            </p>
                        </div>
                    </a>
                })}
            </div>
        </div>
    </div>
}
function Experience(){
    return <div className="experienceSection">
        <SectionTitle
            title="Experience"
            intro=""
        />
        <div className="experiences">
            <div className="singleExp">
                <h3><img src="images/nextechbd.png" alt=""/> Nextech LTD<span>20/2 Bir Uttam Kazi Nuruzzaman Rd, Dhaka 1215</span></h3>
                <h4>- Web Developer</h4>
                <h5>November 1, 2019 - Running</h5>
            </div>
            <div className="singleExp">
                <h3><img src="images/Techsolutions.png" alt=""/> Techsolutions BD <span>404, A-4 Dilu Rd, Dhaka 1217</span></h3>
                <h4>- Junior Web Developer</h4>
                <h5>October 14, 2018 - October 30, 2019</h5>
            </div>
        </div>
    </div>
}
function About(){
    return <div className="aboutSection">
        <SectionTitle
            title="About me"
            intro=""
        />
        <div className="aboutMe">
            <h3>I am Shamim Shakir</h3>
            <p>
               For 3 long years, I have worked in 2 different companies where I had to use PHP. 
                I have worked on many websites and software modules while working there but Javascript has always been in a special of my mind. For this reason, 
                I want to learn NodeJS and do something great. Though I don't have any professional experience of using NodJS, 
                I want to be a part of it by pouring every bit of me in it and want keep progressing.
            </p>
            <div className="socialInfo">
                <h4>Find me</h4>
                <ul>
                    <li><a target="_blank" href="https://www.facebook.com/shamimshakir.shasha/"><i className="fab fa-facebook-square"></i></a></li>
                    <li><a target="_blank" href="https://twitter.com/shamimshakir6"><i className="fab fa-twitter-square"></i></a></li>
                    <li><a target="_blank" href="https://www.instagram.com/shaamiimshaakir/"><i className="fab fa-instagram-square"></i></a></li>
                    <li><a target="_blank" href="https://github.com/shamimshakir"><i className="fab fa-github-square"></i></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/shamimshakir/"><i className="fab fa-linkedin"></i></a></li>
                    <li><a target="_blank" href="https://www.hackerrank.com/shamimshakir75"><i className="fab fa-hackerrank"></i></a></li>
                    <li><a target="_blank" href="https://leetcode.com/shamimshakir/"><img src="images/LeetCode_logo_black.png" alt=""/></a></li>
                </ul>
            </div>
            <a target="_blank" className="resumeBtn" href="https://shamimshakir.github.io/resume/">My Resume</a>
        </div>
    </div>
}
function Footer(){
    return <div className="footer">
        <p>Designed by ShamimShakir</p>
    </div>
}
function App(){
    return <div className="App">
        <Banner />
        <Portfolio />
        <Experience />
        <About/>
        <Footer />
    </div>
}
ReactDOM.render(<App />, document.getElementById("root"));
