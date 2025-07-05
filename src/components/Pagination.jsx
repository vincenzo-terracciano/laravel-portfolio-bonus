

export default function Pagination({ prevPage, currentPage, lastPage, nextPage }) {

    return (
        <>
            <div className="pagination d-flex justify-content-between align-items-center mb-3">
                <button className="btn btn-outline-secondary" onClick={prevPage} disabled={currentPage === 1}>
                    &laquo; Precedente
                </button>

                <span>Pagina {currentPage} di {lastPage}</span>

                <button className="btn btn-outline-secondary" onClick={nextPage} disabled={currentPage === lastPage}>
                    &laquo; Successiva
                </button>
            </div>
        </>
    )
}