// import '../styles/pagination.css'
import { useState } from "react";
import {Row} from 'react-bootstrap'
import styles from './pagination.module.css'

export default function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }) {
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);
  
    function goToNextPage() {
        setCurrentPage((page) => page + 1);
      }
  
      function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
      }
  
      function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
      }
  
      const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
      };
  
      const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
      };
  
      return (
        <div>
          <h1>{title}</h1>
      
          {/* show the posts, 10 posts at a time */}
          <div className="dataContainer">
            
              
        <Row className='gy-2'>
            {getPaginatedData().map((d, idx) => (
              <RenderComponent key={idx} data={d} />
            ))}
            
        </Row>
          </div>
      
          {/* show the pagiantion
              it consists of next and previous buttons
              along with page numbers, in our case, 5 page
              numbers at a time
          */}
          <div className={styles.pagination + ' my-5'}>
            {/* previous button */}
            <button
              onClick={goToPreviousPage}
              className={`${styles.prev} ${currentPage === 1 ? styles.prev.disabled : ''}`}
            >
              prev
            </button>
      
            {/* show page numbers */}
            {getPaginationGroup().map((item, index) => (
              <button
                key={index}
                onClick={changePage}
                className={`${styles.paginationItem} ${currentPage === item ? styles.paginationItem.active : null}`}
              >
                <span>{item}</span>
              </button>
            ))}
      
            {/* next button */}
            <button
              onClick={goToNextPage}
              className={`${styles.next} ${currentPage === pages ? styles.next.disabled : ''}`}
            >
              next
            </button>
          </div>
        </div>
      );
  }