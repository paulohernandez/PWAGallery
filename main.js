const table = document.querySelector('#pwaTable')
const btn = document.querySelectorAll('.btn')


class PWA {

    static init(){

        btn.forEach(btnData=>{
            btnData.addEventListener('click', this.checkName.bind(this))
        })
    
        this.userData()
    }

    static async checkName(e){
        const value = e.target.value
        if(value === 'home'){
            this.userData();
        }else{
            // table.innerHTML = ''
            this.photoData()
        }
    
    }

    static async userData(){
        let data = ''

        data = 
        `<tr class="table-primary text-center">
            <th>Name</th>
            <th>Username</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Website</th>
            <th>Address</th>
            <th>Company</th>
        </tr>`
        
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        
        const json = await response.json()
        

        if(response.ok){
            console.log(json)
            json.forEach( info =>{
                data += `
                <tr >
                    <td>${info.name}</td>
                    <td>${info.username}</td>
                    <td>${info.phone}</td>
                    <td>${info.email}</td>
                    <td>${info.website}</td>
                    <td>
                        <strong>City:</strong> ${info.address['city']}<br/>
                        <strong>Street:</strong> ${info.address['street']}<br/>
                        <strong>Suite:</strong> ${info.address['suite']}<br/>
                        <strong>Zip Code:</strong> ${info.address['zipcode']}<br/>
                    </td>
                    <td>
                    <strong>Name:</strong> ${info.company['name']}<br/>
                    <strong>Bs:</strong> ${info.company['bs']}<br/>
                    <strong>Catch Prase:</strong> ${info.company['catchPhrase']}<br/>
                   
                    </td>
                </tr>`
                
            })
            
        }
        

        table.innerHTML = data
    }

    static async photoData(){
        console.log('photodata')
    }
}


PWA.init()