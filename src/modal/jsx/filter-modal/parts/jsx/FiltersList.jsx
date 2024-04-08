/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import '../css/Montant.css';
import Options from './Options';

export default function FiltersList({id, name, type, index, checkedItems, setCheckedItems}){

    const handleCheckboxChange = (event) => {
        const check = event.target.checked;
        setCheckedItems(prevArray => {
            const newArray = checkedItems.map((item, x) => {
              if (x === index) {
                console.log(x);
                return { ...item, checked: check };
              }
              return item;
            });
            return newArray;
        });
        console.log(checkedItems);
    }
    useEffect(()=>{
        checkedItems.forEach((item) => {
            if(item.checked && item.id === id){
                document.getElementById(`${item.id}`).checked = true;
            }
            return null;
        });
    }, []);

    return(
        <>
            <div className={`middle-content-${id} middle-content`}>
                <div className='first-checkbox-container'>
                    <input type="checkbox" id={`${id}`} name={`checkbox-${name}`} onChange={handleCheckboxChange} className='checkboxes'/>
                    <label htmlFor={`${id}`} className='the-checkbox'></label>
                    <label htmlFor={`${id}`} className='checkbox-label'>{name}</label>
                </div> 
                {checkedItems[index].checked ?
                    <Options type={type} nom={name} id={id} index={index} checkedItems={checkedItems} setCheckedItems={setCheckedItems} />
                :
                null} 
            </div>
        </>
    )
}