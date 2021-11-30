
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg'
export default function Pagination() {
    return (
        <div className="pagination-wr">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#"><CgArrowLongLeft />Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li><span className="dotsTxt">...</span></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item active"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li><span className="dotsTxt">...</span></li>
                    <li className="page-item"><a className="page-link" href="#">19</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next<CgArrowLongRight /></a></li>
                </ul>
            </nav>
        </div>
    )
}

