import { requestApi } from './requestApi'

async function mediaAdd(param : any = {}) {
	return requestApi('/medias/add', param)
}

async function mediaUpdate(param : any = {}) {
	return requestApi('/medias/update', param)
}

async function mediaDelete(param : any = {}) {
	return requestApi('/medias/delete', param)
}


async function mediaUpload(param : any = {}) {
	return requestApi('/medias/upload', param)
}


export {
	mediaAdd,
	mediaUpdate,
	mediaDelete,
	mediaUpload,
}