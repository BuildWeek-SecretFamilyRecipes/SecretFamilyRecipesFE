import axios from 'axios';

export default () => {
    const token = localStorage.getItem('userToken');

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        },
    });
};