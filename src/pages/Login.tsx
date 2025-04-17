import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router";

const Login = () =>
{
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [success, setSuccess] = useState(false);

    const handleChange = (e: any) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };

    const handleSubmit = async(e: any) =>
    {
        e.preventDefault();
        try
        {
            const response = await axios.post('/api/auth/login', { "username": credentials.username, "password": credentials.password });
            console.log(response.data);
            setSuccess(true);
        }

        catch(err)
        {
            console.log(err);
        }
    }
    
    useEffect(() => {
        const getAuthStatus = async () => {
          try {
            const response = await axios.get('/api/auth/getAuthStatus', { withCredentials: true });
            if (response.data.authenticated) {
              setSuccess(true);
            } 
          } catch (error) {
            console.error('Error checking authentication:', error);
          }
        };
    
        getAuthStatus();
      }, []);
      
      if(success)
        return (<Navigate to = "/admin"></Navigate>);

      return(
        <div style={{marginTop: "100px"}}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />

        <button onClick={handleSubmit} className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>
      </div>
      );
}

export default Login;