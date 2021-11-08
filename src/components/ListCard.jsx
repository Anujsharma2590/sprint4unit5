import React from 'react'
import Card from './Card'
import axios from 'axios'
import Pagination from '@material-ui/lab/Pagination'

function ListCard() {
    const [data, setData] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [filterType, setFilterType] = React.useState()
   
    function handlePage(e) {
        setPage(e.target.textContent)    
    }
      function getfilterApiData(filterType,page) {
        axios
          .get(
            `https://rickandmortyapi.com/api/character/?page=${page}&status=${filterType}`
          )
          .then((response) => {
            console.log(response);
            setData(response.data.results);
          });
      }
    function getPaginationApiData(page) {
      
       axios
         .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
         .then((response) => {
           console.log(response);
           setData(response.data.results);
         });
    }
    function getApiData() {
        fetch("https://rickandmortyapi.com/api/character")
            .then(res => res.json())
            .then(data => {
                console.log(data.results)
                setData(data.results)
        })
    }
        React.useEffect(() => {
          getPaginationApiData(page);
        }, [page]);
    
    React.useEffect(() => {
       getApiData();
    }, [])

       React.useEffect(() => {
         getfilterApiData(filterType, page);
       }, [filterType,page]);
    

    return (
      <div>
        <Pagination
          count={30}
          defaultPage={1}
          onChange={handlePage}
          size="large"
        />
        <button onClick={() => setFilterType("alive")}>alive</button>
        <button onClick={() => setFilterType("dead")}>dead</button>
        <button onClick={() => setFilterType("unknown")}>unKnown</button>

        {data.map((val) => {
          return (
            <div
              key={val.id}
              style={{
                margin: "5px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card {...val} />
            </div>
          );
        })}
      </div>
    );
}

export default ListCard
