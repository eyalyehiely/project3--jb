

UNI_URL = 'http://universities.hipolabs.com/search?country=israel'
  function get_uni(){
    axios.get(UNI_URL).then((response)=>{
        document.getElementById('card').innerHTML = response.data.map((item)=>{
            return`
            <div id='cards' style='display:flex; flex-direction:row;'> 
            <div id='card' style = 'width:300px; height:200px; border:1px solid black;'>
                <div> University: ${item.name}</div>
                <br>
                <div> Web page: ${item.web_pages}</div>
                <br>
            </div>
            </div>`
        })
    })

    }
      
get_uni();








