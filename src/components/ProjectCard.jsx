export default function ProjectCard({screenshot, title, description, link}){
    return (
        <div className="project-card">
            <img src={screenshot} />
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={link} rel="noopener noreferrer">Click for more</a>
        </div>
    )
}