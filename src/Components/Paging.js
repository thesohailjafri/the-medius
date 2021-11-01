import React from 'react'
import { Pagination } from 'react-bootstrap'
function Paging({ currentPage, pageTotal, handlePagination }) {
    let pages = []
    console.log(currentPage, pageTotal)

    if (pageTotal > 6) {
        return (
            <Pagination >
                <Pagination.First
                    disabled={currentPage - 10 < 1}
                    onClick={(e) => handlePagination('directValue', currentPage - 10)}

                />
                <Pagination.Prev
                    disabled={currentPage - 1 < 1}
                    onClick={(e) => handlePagination('directValue', currentPage - 1)}

                />
                <Pagination.Item name={1}
                    active={currentPage === 1}
                    onClick={(e) => handlePagination('directValue', e.target.name)}
                >{1}</Pagination.Item>
                {(currentPage <= 2 && currentPage >= 1) &&
                    <>
                        <Pagination.Item name={2}
                            active={currentPage === 2}
                            onClick={(e) => handlePagination('directValue', e.target.name)}
                        >{2}</Pagination.Item>

                        <Pagination.Item name={3}
                            onClick={(e) => handlePagination('directValue', e.target.name)}
                        >{3}</Pagination.Item>
                        <Pagination.Ellipsis />
                    </>
                }
                {
                    (currentPage >= 3 && currentPage <= pageTotal - 2) &&
                    <>
                        <Pagination.Ellipsis />
                        <Pagination.Item name={currentPage - 1}
                            onClick={(e) => handlePagination('directValue', e.target.name)}
                        >{currentPage - 1}</Pagination.Item>

                        <Pagination.Item name={currentPage}
                            active
                        >{currentPage}</Pagination.Item>
                        <Pagination.Item name={currentPage + 1}
                            onClick={(e) => handlePagination('directValue', e.target.name)}
                        >{currentPage + 1}</Pagination.Item>
                        <Pagination.Ellipsis />
                    </>
                }
                {
                    (currentPage >= pageTotal - 1 && currentPage <= pageTotal) &&
                    <>
                        <Pagination.Ellipsis />
                        <Pagination.Item name={pageTotal - 2}
                            onClick={(e) => handlePagination('directValue', e.target.name)}
                        >{pageTotal - 2}</Pagination.Item>
                        <Pagination.Item name={pageTotal - 1}
                            active={currentPage === pageTotal - 1}
                            onClick={(e) => handlePagination('directValue', e.target.name)}
                        >{pageTotal - 1}</Pagination.Item>
                    </>
                }
                <Pagination.Item name={pageTotal}
                    active={currentPage === pageTotal}
                    onClick={(e) => handlePagination('directValue', e.target.name)}
                >{pageTotal}</Pagination.Item>
                <Pagination.Next
                    disabled={currentPage + 1 > pageTotal}
                    onClick={(e) => handlePagination('directValue', currentPage + 1)}
                />
                <Pagination.Last
                    disabled={currentPage + 10 > pageTotal}
                    onClick={(e) => handlePagination('directValue', currentPage + 10)}
                />
            </Pagination>
        )
    }



    for (var i = 0; i < pageTotal; i++) {
        pages.push(<Pagination.Item name={i + 1}
            active={currentPage === i + 1}
            onClick={(e) => handlePagination('directValue', e.target.name)}
        >{i + 1}</Pagination.Item>)
    }

    if (pageTotal === 1) {
        return null
    }

    // return (
    //     <Pagination>
    //         <Pagination.Item name={pageTotal - 1}
    //             disabled={currentPage - 1 < 1}
    //             onClick={(e) => handlePagination('directValue', currentPage - 1)}
    //         >Prev</Pagination.Item>

    //         <Pagination.Item
    //             disabled={currentPage + 1 > pageTotal}
    //             onClick={(e) => handlePagination('directValue', currentPage + 1)}
    //         >Next</Pagination.Item>
    //     </Pagination>
    // )


    return (
        <Pagination>
            {pages}
        </Pagination>
    )



}

export default Paging
