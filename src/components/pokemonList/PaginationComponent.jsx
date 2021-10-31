// import React from 'react'

// const Pagination = ({setPage}) => {

// let totalPokemons = 1118
// let pageSize = 50
// let paginationitemlength = Math.ceil(1118/50)
//     return (
//         <ul class="pagination justify-content-center">
//     <li class="page-item"><a class="page-link" href="javascript:void(0);">Previous</a></li>
//     <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
//     <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
//     <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
//   </ul>
//     )
// }

// export default Pagination


import React from 'react'
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css";

const PaginationComponent = ({setPage , page}) => {

    let totalPokemons = 1118
let pageSize = 50


const changeCurrentPage = (numPage) => {
    setPage(numPage)
    //fetch a data
    //or update a query to get data
  };
    return (
        <div>
       <Pagination

currentPage={page}

totalSize={totalPokemons}

sizePerPage={pageSize}

changeCurrentPage={changeCurrentPage}

theme="bootstrap"

/>
      </div>
    )
}

export default PaginationComponent
