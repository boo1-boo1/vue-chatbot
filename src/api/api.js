import axios from 'axios';

export default (query, uid) => axios.post('http://127.0.0.1:1738/queryDialogflow', { query, uid });
