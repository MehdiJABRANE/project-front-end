/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import '../css/FilterModal.css';
import Content from '../save-filter-parts/jsx/Content';
import FiltersList from '../parts/jsx/FiltersList';

export default function FilterModal({mainObject, filterIsShow, setFilterIsShow, filtersArray, setFiltersArray, checkedItems, setCheckedItems}){
    /* States for other components */

    /* States for this components */
    const [isFilterChecked, setIsFilterChecked] = useState(true);
    const [isSaveChecked, setIsSaveChecked] = useState(false);
    
    const handleCheckbox1Change = () => {
        setIsFilterChecked(true);
        setIsSaveChecked(false);
    };
    const handleCloseModal = () => {
        setFilterIsShow(false);
    }
    const handleCheckbox2Change = () => {
        setIsFilterChecked(!isFilterChecked);
        setIsSaveChecked(!isSaveChecked);
    };
    useEffect(()=>{
        const newArray = mainObject.map((item, index)=> {
            switch (item.type){
                case 'bit':
                    return {
                        id: index,
                        name: item.name,
                        checked: false,
                        type: item.type,
                        operator: '=',
                        fvalue: '1',
                        svalue: null,
                        tablename: item.tablename
                    }
                default:
                    return {
                        id: index,
                        name: item.name,
                        checked: false,
                        type: item.type,
                        operator: '=',
                        fvalue: null,
                        svalue: null,
                        tablename: item.tablename
                    }
            }
        })
        setCheckedItems(newArray);
        console.log(checkedItems);
        console.log(mainObject);
    }, [mainObject])
    return(
        <>
            <Modal show={filterIsShow} size='sm' animation={false} centered dialogClassName="custom-modal-content" className='filter-modal-class' backdropClassName="custom-backdrop-class" onHide={() => handleCloseModal()}>
                <Modal.Body className='filter-modal-body'>
                    <div className='filter-modal-upper-content'>
                        <div className="first-customCheckBoxHolder">
                            <input type="checkbox" checked={isFilterChecked} onChange={handleCheckbox1Change} id="filter" className="first-customCheckBoxInput" disabled={isFilterChecked}/>
                            <label for="filter" className="first-customCheckBoxWrapper">
                                <div className="first-customCheckBox">
                                    <div className="first-inner">Filter</div>
                                </div>
                            </label>
                        </div>
                        <div className="second-customCheckBoxHolder">
                            <input type="checkbox" checked={isSaveChecked} onChange={handleCheckbox2Change} id="save-filter" className="second-customCheckBoxInput" disabled={isSaveChecked}/>
                            <label for="save-filter" className="second-customCheckBoxWrapper">
                                <div className="second-customCheckBox">
                                    <div className="second-inner">Saved Filters</div>
                                </div>
                            </label>
                        </div>
                    </div>
                    {isFilterChecked ? 
                        <div className='filter-modal-middle-content'>
                            {mainObject.map((row, x, index)=>{
                                return(
                                    <FiltersList id={row.id} name={row.name} type={row.type} index={x} checkedItems={checkedItems} setCheckedItems={setCheckedItems} />                                )
                            })}
                        </div>
                    :
                    null}
                    {isSaveChecked ? 
                        <div className='save-filter-modal-middle-content'>
                            <Content content='Mon Filtre Personnalisé 1'/>
                            <Content content='Spécial Week-End'/>
                            <Content content='Projet A : En Cours'/>
                            <Content content='Liste de Souhaits Personnelle'/>
                            <Content content='Sélections Préférées'/>
                            <Content content='Mes Tâches - En Attente'/>
                        </div>
                    :
                    null}

                    <div className='filter-modal-bottom-content'>
                        <div className='btn-clear-container'>
                            <button 
                            className='btn-clear-ready'
                            >
                                Clear filter
                            </button>
                        </div>
                        <div className='btn-apply-container'>
                            <button 
                            className='btn-apply-ready'
                            >
                                Apply filter
                            </button>
                        </div>
                        <div className='btn-save-container'>
                            <button
                                className='btn-save-ready'
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}