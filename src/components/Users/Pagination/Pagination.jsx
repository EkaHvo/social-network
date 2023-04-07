import { useState } from 'react';
import cls from './Pagination.module.css';

const Pagination = ({ currentPage, totalCount, pageSize, onPageChanged, portionSize = 10 }) => {

  const pagesCount = Math.ceil(totalCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize));
  const leftPortionPageNumber = (portionNumber -1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={cls.pagination}>
      { portionNumber > 1 &&  <span onClick={() => {setPortionNumber(portionNumber - 1)}}> &lArr; </span> }
      { 
        pages
        .filter(item =>item >= leftPortionPageNumber && item <= rightPortionPageNumber)
        .map((item,index) => {
            return (
              <span 
                key={index}
                className={currentPage === item ? cls.selectedPage: null} 
                onClick={()=>{onPageChanged(item)}}> 
                {item} 
              </span> 
            )
        })
      }
      { portionCount > portionNumber &&  <span onClick={() => {setPortionNumber(portionNumber + 1)}}> &rArr; </span> }
    </div>
  );
}

export default Pagination;
