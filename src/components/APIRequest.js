import { useState } from "react";
import axios from "axios";

const baseUrl = "https://reqres.in/";

const GetUsers = () => {

    const [data, setData] = useState([])
    const [filterText, setFilterText] = useState('')

    const APIGet = () => {
        axios
        .get(`${baseUrl}api/users?page=2`)
        .then((response) => {
          console.log(response.data.data)
          setData(response.data.data)
        })
        .catch((err) => console.log(err));
    }

    const deleteUser = (e, ind) => {
        //if successful (204 status), then locally delete that thing. (Instead of making another get API call)
        const prevData = [...data]
        const newData = [...data.slice(0, ind),... data.slice(ind + 1, data.length)]
        setData(newData)
        axios.delete(`${baseUrl}api/users/${e.id}`)
        .then((response) => {
          console.log(response.status)
        })
        .catch((err) => {
            alert(`There was an error ${err.response.status}-- we could not process your delete request.`)
            setData(prevData)
            console.log(err);
        })
    }

    return (
        <div>
            <h1>API Get Request</h1>
            <button onClick={APIGet}>Get List from REQRES</button>
            <br></br><br></br>
            <input
                type="text"
                placeholder="Filter results ..."
                value={filterText}
                onChange={e => setFilterText(e.target.value)}
            >
            </input>
            <br></br><br></br>
            {data && <div>{data.map((e, ind) => {
                if (e.first_name.startsWith(filterText) || e.last_name.startsWith(filterText)) {
                    return (
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <p>{e.first_name} {e.last_name}</p>
                            <button onClick={() => {
                                console.log('e.id', e.id)
                                deleteUser(e, ind)
                            }}>Delete {e.first_name}</button>
                        </div>
            )}})}
            </div>}
        </div>
    )

};


// {accordianData.map(el => {
//     return <Accordian title={el.title} body={el.body}></Accordian>
// })}

// {isActive && 
//     <div>
//         {body}
//     </div>
// }




// Bonus:
const DeleteUser = () => {};


export {GetUsers}