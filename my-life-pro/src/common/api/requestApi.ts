import { request } from '../request'
async function requestApi(url : string, data : any) {
	return request('/api' + url ,data)
}

export {
	requestApi
}