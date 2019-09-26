import axios from 'axios'

export default () => {
	const token = localStorage.getItem('token')

	return axios.create({
		headers: {
			'Content-Type': 'application/json',
			authorization: `${token}`,
			AccessControlAllowOrigin: "http://localhost:3000",
		}
	})
}