import React from 'react';
import '../css/Nom.css';

export default function Options({type, nom, id, index, checkedItems, setCheckedItems}){
    const handleRadioButtonChange = (event) =>{
        const { value } = event.target;
        setCheckedItems(() => {
            const newArray = checkedItems.map((item, x) => {
              if (x === index) {
                return { ...item, operator: value };
              }
              return item;
            });
            return newArray;
        });
        console.log(checkedItems);
    }

    const handleFirstInputChange = (event) => {
        const {value} = event.target;
        setCheckedItems(() => {
            const newArray = checkedItems.map((item, x) => {
                if (x === index) {
                  return { ...item, fvalue: value };
                }
                return item;
              });
              return newArray;
        });
    }

    const handleSecondInputChange = (event) => {
        const {value} = event.target;
        setCheckedItems(() => {
            const newArray = checkedItems.map((item, x) => {
                if (x === index) {
                  return { ...item, svalue: value };
                }
                return item;
              });
              return newArray;
        });
    }

    if(type === "nvarchar"){
        return(
            <>
                <div className={`${id}-checkbox-choices checkbox-choices`}>
                    <div className={`${id}-checkbox-f-choice`}>
                        <input name={`${nom}-radio`} id={`radio-egale-${nom}`} className="radio-buttons" value="=" onClick={handleRadioButtonChange} type="radio" defaultChecked />
                        <label htmlFor={`radio-egale-${nom}`} className="radio-button-label">
                            <span className="radio-button-span"></span>
                            Egale
                        </label>
                    </div>
                    <div className={`${id}-checkbox-s-choice`}>
                        <input name={`${nom}-radio`} id={`radio-contient-${nom}`} className="radio-buttons" value="LIKE" onClick={handleRadioButtonChange} type="radio"/>
                        <label htmlFor={`radio-contient-${nom}`} className="radio-button-label">
                            <span className="radio-button-span"></span>
                            Contient
                        </label>
                    </div>
                    <div className='inputs-container'>
                        <div className={`first-input-${nom}`}>
                            <input type="text" name={`f-value-${nom}`} id={`f-value-${nom}`} className='inputs-filter' onChange={handleFirstInputChange} placeholder={`Veuillez entrer ${nom}`}/>
                        </div>
                    </div> 
                </div>
        </>
        )
    }
    else if(type === "date"){
        return(
            <>
                <div className={`${id}-checkbox-choices checkbox-choices`}>
                    <div className={`${id}-checkbox-f-choice`}>
                        <input name={`${nom}-radio`} id={`radio-egale-${nom}`} className="radio-buttons" value="=" onClick={handleRadioButtonChange} type="radio" defaultChecked/>
                        <label htmlFor={`radio-egale-${nom}`} className="radio-button-label">
                            <span className="radio-button-span"></span>
                            Egale
                        </label>
                    </div>
                    <div className={`${id}-checkbox-s-choice`}>
                        <input name={`${nom}-radio`} id={`radio-plus-${nom}`} className="radio-buttons" value=">" onClick={handleRadioButtonChange} type="radio"/>
                        <label htmlFor={`radio-plus-${nom}`} className="radio-button-label">
                            <span className="radio-button-span"></span>
                            Plus que
                        </label>
                    </div>
                    <div className={`${id}-checkbox-t-choice`}>
                        <input name={`${nom}-radio`} id={`radio-moins-${nom}`} className="radio-buttons" value="<" onClick={handleRadioButtonChange} type="radio"/>
                        <label htmlFor={`radio-moins-${nom}`} className="radio-button-label">
                            <span className="radio-button-span"></span>
                            Moins que
                        </label>
                    </div>
                    <div className={`${id}-checkbox-fo-choice`}>
                        <input name={`${nom}-radio`} id={`radio-entre-${nom}`} className="radio-buttons" value="BETWEEN" onClick={handleRadioButtonChange} type="radio"/>
                        <label htmlFor={`radio-entre-${nom}`} className="radio-button-label">
                            <span className="radio-button-span"></span>
                            Entre
                        </label>
                    </div>
                    {checkedItems[index].operator !== 'BETWEEN' ? 
                        <div className='inputs-container'>
                            <div className='first-input-non-enter'>
                                <input type="text" name={`f-value-${nom}-non-enter`} id={`f-value-${nom}-non-enter`} onChange={handleFirstInputChange} className='inputs-filter' placeholder='Veuillez entrer la date'/>
                            </div>
                        </div> 
                    : 
                        <div className='inputs-container'>
                            <div className='first-input-enter'>
                                <input type="text" name={`f-value-${nom}-enter`} id={`f-value-${nom}-enter`} className='inputs-filter' onChange={handleFirstInputChange} placeholder='Veuillez entrer la date départ "jj/mm/aaaa"'/>
                            </div>
                            <div className='second-input-enter'>
                                <input type="text" name={`s-value-${nom}-enter`} id={`s-value-${nom}-enter`} className='inputs-filter' onChange={handleSecondInputChange} placeholder='Veuillez entrer la date fin "jj/mm/aaaa"'/>
                            </div>
                        </div>
                    }
                </div>
            </>
        )
    }
    else if(type === "bit"){
        return(
            <>
                <div className={`${id}-checkbox-choices checkbox-choices`}>
                    <div className={`${id}-checkbox-f-choice`}>
                        <input name={`${nom}-radio`} id={`${nom}-oui-active`} className="radio-buttons" value='1' onClick={handleFirstInputChange} type="radio" defaultChecked/>
                        <label htmlFor={`${nom}-oui-active`} className="radio-button-label">
                            <span className="radio-button-span"></span>
                            Oui
                        </label>
                    </div>
                    <div className={`${id}-checkbox-s-choice`}>
                        <input name={`${nom}-radio`} id={`${nom}-non-active`} className="radio-buttons" value='0' onClick={handleFirstInputChange} type="radio"/>
                        <label htmlFor={`${nom}-non-active`} className="radio-button-label">
                            <span className="radio-button-span"></span>
                            Non
                        </label>
                    </div>
                </div>
            </>
        )
    }
    else if(type === "double"){
        return(
            <>
               <div className={`${id}-checkbox-choices checkbox-choices`}>
                    <div className={`${id}-checkbox-f-choice`}>
                        <input name={`${nom}-radio`} id={`radio-egale-${nom}`} className="radio-buttons" value="=" onClick={handleRadioButtonChange} type="radio" defaultChecked/>
                        <label htmlFor={`radio-egale-${nom}`} className="radio-button-label">
                            <span className="radio-button-span"></span>
                            Egale
                        </label>
                    </div>
                    <div className={`${id}-checkbox-s-choice`}>
                        <input name={`${nom}-radio`} id={`radio-plus-${nom}`} className="radio-buttons" value=">" onClick={handleRadioButtonChange} type="radio"/>
                        <label htmlFor={`radio-plus-${nom}`} className="radio-button-label">
                            <span className="radio-button-span"></span>
                            Plus que
                        </label>
                    </div>
                    <div className={`${id}-checkbox-t-choice`}>
                        <input name={`${nom}-radio`} id={`radio-moins-${nom}`} className="radio-buttons" value="<" onClick={handleRadioButtonChange} type="radio"/>
                        <label htmlFor={`radio-moins-${nom}`} className="radio-button-label">
                            <span className="radio-button-span"></span>
                            Moins que
                        </label>
                    </div>
                    <div className={`${id}-checkbox-fo-choice`}>
                        <input name={`${nom}-radio`} id={`radio-entre-${nom}`} className="radio-buttons" value="BETWEEN" onClick={handleRadioButtonChange} type="radio"/>
                        <label htmlFor={`radio-entre-${nom}`} className="radio-button-label">
                            <span className="radio-button-span"></span>
                            Entre
                        </label>
                    </div>
                    {checkedItems[index].operator !== 'BETWEEN' ? 
                    <div className='inputs-container'>
                        <div className='first-input-non-enter'>
                            <input type="text" name={`f-value-${nom}-non-enter`} id={`f-value-${nom}-non-enter`} className='inputs-filter' onChange={handleFirstInputChange} placeholder='Veuillez entrer le montant'/>
                        </div>
                    </div> 
                    : 
                    <div className='inputs-container'>
                        <div className='first-input-enter'>
                            <input type="text" name={`f-value-${nom}-enter`} id={`f-value-${nom}-enter`} className='inputs-filter' onChange={handleFirstInputChange} placeholder='Veuillez entrer le montant minimum'/>
                        </div>
                        <div className='second-input-enter'>
                            <input type="text" name={`s-value-${nom}-enter`} id={`s-value-${nom}-enter`} className='inputs-filter' onChange={handleFirstInputChange} placeholder='Veuillez entrer le montant maximum'/>
                        </div>
                    </div>}
                </div> 
            </>
        )
    }
}