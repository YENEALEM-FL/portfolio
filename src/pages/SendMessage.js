
import axios from 'axios';

const SendMessage = async ({content}) => {
    try {
      const response = await axios.post('https://qbpuji3ayb.execute-api.us-east-1.amazonaws.com/course', content);
  
      console.log('API Response:', response);
    } catch (error) {
      console.error('Error sending text to API:', error);
    }
  };
  
  export default SendMessage; 