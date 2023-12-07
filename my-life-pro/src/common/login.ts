import { request } from './request'

async function login(param:any = {}) {
	return request('/api/login',param)
}

export {
	login
}