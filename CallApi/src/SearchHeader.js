import {useState} from "react";


function SearchHeader({search}) {

    const [valueInput, setValueInput] = useState('');

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        search(valueInput);
    }

    const hanldeChange=(event)=>{
        setValueInput(event.target.value);
    }

    return ( <div className="searchDiv">
        <form className="searchForm" onSubmit={handleFormSubmit}>
            <label> Ne arıyorsunuz?</label>
            <input type="text" value={valueInput}  onChange={hanldeChange}/>
        </form>

    </div> );
}

export default SearchHeader;