import React from 'react'
import Card from './Card'
import axios from 'axios'
import Pagination from '@material-ui/lab/Pagination'

function ListCard() {
    const [data, setData] = React.useState([]);
    const [page, setPage] = React.useState('');
    console.log(page);
    function getApiData() {
        fetch("https://rickandmortyapi.com/api/character")
            .then(res => res.json())
            .then(data => {
                console.log(data.results)
                setData(data.results)
        })
        //  axios.get('https://rickandmortyapi.com/api/character')
        //      .then((response) => {
        //          console.log(response)
        //          setData(response.data);
        //  })
     }
    React.useEffect(() => {
        getApiData();
  },[])
    return (
        <div>   
       
            {data.map((val) => {
                return <div key={ val.id} style = {{margin:"10px"}}>
                    <Card {...val}/>
                    </div>
            })}
            <Pagination count={20} page={ page} />
        </div>
    )
}

export default ListCard
