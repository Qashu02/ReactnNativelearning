import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    try {
      const response = await apiFunc(...args); // Call the function
      setLoading(false);
       setError(!response.ok);
      setData(response.data);
      return response; // Update the data
    } catch (err) {
      setError(true); // Handle unexpected errors
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    request,
  };
};
