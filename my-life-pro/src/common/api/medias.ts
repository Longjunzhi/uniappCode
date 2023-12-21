import { requestApi } from './requestApi'

async function mediaAdd(param : any = {}) {
	return requestApi('/media/add', param)
}

async function mediaUpdate(param : any = {}) {
	return requestApi('/media/update', param)
}

async function mediaDelete(param : any = {}) {
	return requestApi('/media/delete', param)
}


async function mediaUpload(param : any = {}) {
	return requestApi('/media/upload', param)
}

async function mediaGet(param : any = {}) {
	return requestApi('/media/get', param)
}


export {
	mediaAdd,
	mediaUpdate,
	mediaDelete,
	mediaUpload,
	mediaGet
}