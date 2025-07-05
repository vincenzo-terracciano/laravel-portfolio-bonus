import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

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
                <ProjectCard projects={projects} />

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