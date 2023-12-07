import { API_URL } from '../../env'

// 接口请求封装
async function request( url:string, data:any) {
	try {
		const res:any = await uni.request({
			url: API_URL + url,
			dataType: 'json',
			data: data,
			method: "POST",
			header: {
				'Authorization': 'Bearer ' + uni.getStorageSync('token'),
				'X-Requested-With': 'XMLHttpRequest',
				'Content-Type': 'application/json; charset=UTF-8'
			},
		});
		const message:string = res?.message
		uni.showToast({
			title: message,
			icon: 'none',
		});
	} catch (err) {
		uni.showToast({
			title: '网络异常，请求失败！',
			icon: 'none',
		});
	}
}

export {
	request,
}
