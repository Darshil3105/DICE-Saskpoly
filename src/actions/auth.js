import axios from 'axios'

// Headers
const config = {
    headers : {
        'Content-Type' : 'application/json'
    }
}

// Login the user in

export const login = (data, callback) => {
    
    const { username, password, token} = data;
    
    // Request body
    const body = JSON.stringify({ username, password, token})

    axios.post('/api/auth', body, config)
        .then(res => {
            console.log(res.data)
            if(res.data.success){
                localStorage.setItem('token', res.data.token)
            }

            if(typeof callback === "function"){
                callback(res)
            }
        })
        .catch(err => console.log(err))
}
