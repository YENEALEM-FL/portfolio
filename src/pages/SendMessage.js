
import axios from 'axios';

const SendMessage = async ({content}) => {
  console.log(content);
    try {
      console.log(content, "and content");
      const response = await axios.post('https://agrxhxvod2mnwchj2yyajylmsa0zsbaq.lambda-url.us-east-1.on.aws/portfolio/', content);
      
      console.log('API Response:', response.data);
    } catch (error) {
      console.error('Error sending text to API:', error);
    }
    
  };
  
  export default SendMessage; 