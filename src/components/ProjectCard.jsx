import { Link } from "react-router-dom";


export default function ProjectCard({ projects }) {

    return (
        <>
            <h1 className="mb-4">Progetti</h1>

            <div className="row g-4 mb-5">
                {projects.map(project => (
                    <div key={project.id} className="col-4">
                        <div className="card h-100">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{project.title}</h5>
                                <h6 className="card-subtitle my-2 text-muted">{project.type.name}</h6>
                                <p className="card-text flex-grow-1">
                                    {project.description?.slice(0, 100)}...
                                </p>
                                <Link to={`/projects/${project.id}`} className="modern-button mt-auto text-center">Leggi</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}