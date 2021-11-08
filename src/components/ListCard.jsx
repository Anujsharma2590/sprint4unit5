import React from 'react'
import Card from './Card'
import axios from 'axios'
import Pagination from '@material-ui/lab/Pagination'

function ListCard() {
    const [data, setData] = React.useState([]);
    const [page, setPage] = React.useState(1);
   
    function handlePage(e) {
        setPage(e.target.textContent)
       
        
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
    

    return (
      <div>
        <Pagination
          count={30}
          defaultPage={1}
          onChange={handlePage}
          size="large"
        />
        <button>alive</button>
        <button>dead</button>
        <button>unKnown</button>
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
