import {useState} from 'react'

function SearchList() {
    
    const [customList, setCustomList] = useState([])
    const [listText, setListText] = useState('')
    const [filterText, setFilterText] = useState('')
    
    return (
        <div>
            <h1>SearchList</h1>
            <input
                type = "text"
                placeholder = 'add new item'
                value = {listText}
                onChange = {e => setListText(e.target.value)}
            />
            <button
                onClick = {() => {
                    customList.push(listText)
                    setCustomList(customList)
                    setListText('')
                }} 
            >Add</button>
            <br></br><br></br>
            <input
                type = "text"
                placeholder = 'Filter Items'
                value = {filterText}
                onChange = {e => setFilterText(e.target.value)}
            />
            <div>
                <p>Items:</p>
                {customList.map(item => {
                    if (item.startsWith(filterText)) {
                        return <p>{item}</p>
                    }
                })}
            </div>
        </div>
    )
}

export default SearchList