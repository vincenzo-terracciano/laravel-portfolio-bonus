import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const baseURL = 'http://localhost:8000/api';

export default function ProjectDetail() {

    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${baseURL}/projects/${id}`)
            .then(res => {
                setProject(res.data.data);
                setLoading(false);
            })
            .catch(err => console.error(err))
    }, [id]);

    if (loading || !project) {
        return (
            <div className="custom-loader-wrapper">
                <div className="custom-spinner" />
                <p className="mt-3">Caricamento in corso...</p>
            </div>
        );
    }

    return (
        <>
            <div className="container my-4">
                <h1 className="mb-4">{project.title}</h1>

                <div className="technologies mb-4">
                    <p>
                        <strong>Tecnologie utilizzate: </strong>
                        {project.technologies && project.technologies.map(technology => (
                            <span key={technology.id} className="badge me-2" style={{ backgroundColor: technology.color }}>
                                {technology.name}
                            </span>
                        ))}
                    </p>
                </div>

                <div className="card">
                    <img src={project.image} alt={project.title} className="card-img-top rounded project-image" style={{ maxHeight: '400px', objectFit: 'cover' }} />
                    <div className="card-body">
                        <h5 className="card-title">{project.type.name || 'Nessuno'}</h5>
                        <p className="card-text">{project.description}</p>

                        {project.github_url && (
                            <p>
                                <strong>GitHub URL: </strong>
                                <a href="{project.github_url}" target="_blank" rel="noopener noreferrer">
                                    {project.github_url}
                                </a>
                            </p>
                        )}

                        {project.site_url && (
                            <p>
                                <strong>Sito URL: </strong>
                                <a href="{project.site_url}" target="_blank" rel="noopener noreferrer">
                                    {project.site_url}
                                </a>
                            </p>
                        )}

                        <p className="text-muted mb-0">Creato il: {new Date(project.created_at).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        </>
    )
}