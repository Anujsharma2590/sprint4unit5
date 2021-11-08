import React from 'react'

function ListCard() {
    const [data, setData] = React.useState([]);

    function getApiData() {
         axios.get('https://rickandmortyapi.com/api/character')
             .then((response) => {
                 console.log(response)
                 setData(response.data);
         })
     }
    React.useEffect(() => {
        getApiData();
  },[])
    return (
        <div>
            hello world
        </div>
    )
}

export default ListCard
