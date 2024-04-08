import React, { useEffect, useState } from 'react';
import '../css/ModalRight.css';
import FirstPage from './pages/jsx/FirstPage';
import SecondPage from './pages/jsx/SecondPage';
import ThirdPage from './pages/jsx/ThirdPage';
import FourthPage from './pages/jsx/FourthPage';
import FifthPage from './pages/jsx/FifthPage';

export default function ModalRight({pageNum, setPageNum,setIsShow,mainObject,setMainObject, checkedItems , setCheckedItems}){

    
    const [filtersArray, setFiltersArray] = useState([]);
    const [selectValue, setSelectValue] = useState(null);
    useEffect(()=>{

    }, [pageNum])
    return(
        <>
            <div className='body-right-container'>
                {pageNum === 0 && <FirstPage pageNum={pageNum} setPageNum={setPageNum}/>}
                {pageNum === 1 && <SecondPage pageNum={pageNum} setPageNum={setPageNum} setSelectValue={setSelectValue} mainObject={mainObject} setMainObject={setMainObject} />}
                {pageNum === 2 && <ThirdPage pageNum={pageNum} setPageNum={setPageNum}  mainObject={mainObject} setMainObject={setMainObject}
                />}
                {pageNum === 3 && <FourthPage pageNum={pageNum} setPageNum={setPageNum} mainObject={mainObject} setFiltersArray={setFiltersArray} filtersArray={filtersArray} checkedItems={checkedItems} setCheckedItems={setCheckedItems} />}
                {pageNum === 4 && <FifthPage pageNum={pageNum} setPageNum={setPageNum} filtersArray={filtersArray} mainObject={mainObject} selectValue={selectValue} setMainObject={setMainObject} setIsShow={setIsShow} />}
            </div>
        </>
    )
}