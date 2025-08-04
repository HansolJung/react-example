import React from 'react';
import Pagination from 'react-js-pagination';
import '../assets/css/pagination.css';

function PaginationBox({currentPage, totalRows, nextPage}) {
    return (
        <>
            <Pagination 
                activePage={currentPage}
                itemsCountPerPage={10} // 한 페이지에 보여줄 데이터 개수
                totalItemsCount={totalRows}
                prevPageText={"<"}
                nextPageText={">"}
                onChange={(page)=>nextPage(page)}/>
        </>
    );
}

export default PaginationBox;