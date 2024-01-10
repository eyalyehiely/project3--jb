FLIGHT_URL = 'https://data.gov.il/api/3/action/datastore_search?resource_id=e83f763b-b7d7-479e-b172-ae981ddc6de5&limit=5'
function get_flights(){
    // declare a table
    const mainDIV = document.createElement('div');
    const TABLE = document.createElement('table')
    TABLE.style.border = '1px solid black'

// declare a table head1
    const Thead1 = document.createElement('th')
    Thead1.style.border = '1px solid black'
    Thead1.textContent = 'destination'

// declare a table head2
    const Thead2 = document.createElement('th')
    Thead2.style.border = '1px solid black'
    Thead2.textContent = 'company'



// declare a table head3
    const Thead3 = document.createElement('th')
    Thead3.style.border = '1px solid black'
    Thead3.textContent = 'status'


// add to elements to table
    TABLE.appendChild(Thead1)
    TABLE.appendChild(Thead2)
    TABLE.appendChild(Thead3)
    mainDIV.appendChild(TABLE)




// declare a button 
    const get_data =  document.createElement('button');
    get_data.textContent = "Get Flights";
    
    get_data.addEventListener('click',()=>{
        axios.get(FLIGHT_URL).then((response)=>{
            
            response.data.result.records.map((item)=>{
                // creating a row
                const Trow = document.createElement('tr')
                Trow.style.border = '1px solid black'


             // first content
                let Tcontent1 = document.createElement('td')
                Tcontent1.style.border = '1px solid black'
                let flight_destination = item.CHLOC1T;
                let flightDiv = document.createElement('div');
                flightDiv.textContent = flight_destination;
                Tcontent1.appendChild(flightDiv);


                // second content
                let Tcontent2 = document.createElement('td')
                Tcontent2.style.border = '1px solid black'
                let company = item.CHOPERD;
                let companyDiv = document.createElement('div');
                companyDiv.textContent = company;
                Tcontent2.appendChild(companyDiv);

                
                // third content
                let Tcontent3 = document.createElement('td')
                Tcontent3.style.border = '1px solid black'
                let status = item.CHRMINH;
                let statusDiv = document.createElement('div');
                statusDiv.textContent = status;
                Tcontent3.appendChild(statusDiv);

                // appending value into elements
                Trow.appendChild(Tcontent1)
                Trow.appendChild(Tcontent2)
                Trow.appendChild(Tcontent3)
                TABLE.appendChild(Trow)
                
              

                mainDIV.appendChild(TABLE);
            })
            })

        })
            document.body.appendChild(get_data)
            document.body.appendChild(mainDIV)
        
    }

get_flights()