const table = document.querySelector('#pwaTable')
const btn = document.querySelectorAll('.btn')


class PWA {

    static init(){

        btn.forEach(btnData=>{
            btnData.addEventListener('click', this.checkName.bind(this))
        })

    }

    static async checkName(e){
        const value = e.target.value
        if(value === 'home'){
            this.userData();
        }else{
            table.innerHTML = ''
        }
    
    }

    static async userData(){
        let data = ''

        data = 
        `<tr class="table-primary">
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
                <tr>
                    <td>${info.name}</td>
                    <td>${info.username}</td>
                    <td>${info.phone}</td>
                    <td>${info.email}</td>
                    <td>${info.website}</td>
                    <td>${info.address['city']}</td>
                    <td>${info.company['name']}</td>
                </tr>`
                
            })
            
        }
        

        table.innerHTML = data
    }
}


PWA.init()