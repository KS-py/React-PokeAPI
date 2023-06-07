import React from 'react';
import './Pagination.css'

export default function Pagination({ gotoNextPage, gotoPrevPage }){
    return(
        <div>
           {gotoPrevPage && <button className="prev" onClick={gotoPrevPage}> Previous </button>}
            {gotoNextPage && <button className="next" onClick={gotoNextPage}> Next </button>}
        </div>
    )
}