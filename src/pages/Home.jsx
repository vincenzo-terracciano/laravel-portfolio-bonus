import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const baseURL = 'http://localhost:8000/api';

export default function Home() {

    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${baseURL}/projects?page=${currentPage}`)
            .then(res => {
                // console.log(res.data);
                setProjects(res.data.data.data)
                setLastPage(res.data.data.last_page)
                setLoading(false)
            })
            .catch(err => console.error(err))
    }, [currentPage]);

    function nextPage() {
        if (currentPage < lastPage) {
            setCurrentPage(prev => prev + 1);
        }
    };

    function prevPage() {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    if (loading || !projects) {
        return (
            <div className="custom-loader-wrapper">
                <div className="custom-spinner" />
                <p className="mt-3">Caricamento in corso...</p>
            </div>
        );
    }

    return (
        <>
            <div className="container mt-4">
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
                                    <Link to={`/projects/${project.id}`} className="btn btn-purple mt-auto align-self-center">Leggi</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pagination d-flex justify-content-between align-items-center mb-3">
                    <button className="btn btn-outline-secondary" onClick={prevPage} disabled={currentPage === 1}>
                        &laquo; Precedente
                    </button>

                    <span>Pagina {currentPage} di {lastPage}</span>

                    <button className="btn btn-outline-secondary" onClick={nextPage} disabled={currentPage === lastPage}>
                        &laquo; Successiva
                    </button>
                </div>
            </div>
        </>
    )
}