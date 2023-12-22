import { API_URL } from '../../env'


const Header = {
	// 'Authorization': 'Bearer ' + uni.getStorageSync('token'),
	'Authorization': 'Bearer 654321'
};

// 接口请求封装
async function request(url : string, data : any) {
	try {
		const res : any = await uni.request({
			url: API_URL + url,
			dataType: 'json',
			data: data,
			method: "POST",
			header: {
				'X-Requested-With': 'XMLHttpRequest',
				'Content-Type': 'application/json; charset=UTF-8',
				...Header
			},
		});
		console.log("requestRes", res)
		if (res?.data?.code !== 0) {
			const message : string = res?.data?.message
			uni.showToast({
				title: message,
				icon: 'none',
			});
		}
		return res?.data
	} catch (err) {
		console.log(err)
		uni.showToast({
			title: '网络异常，请求失败！',
			icon: 'none',
		});
	}
}
// 接口请求封装
async function requestUpload(filePaths : any) {
	try {
		var res : any;
		for (const filePath of filePaths) {
			res = uni.uploadFile({
				url: API_URL + '/api/media/upload',
				filePath: filePath,
				name: 'file',
				formData: {
					'user': 'test'
				},
				header: {
					...Header
				},
				success: (uploadFileRes) => {
					console.log(uploadFileRes.data);
				}
			});
			console.log("requestUpload", res)
			if (res?.data?.code !== 0) {
				const message : string = res?.data?.message
				uni.showToast({
					title: message,
					icon: 'none',
				});
			}
		}
		return res;
	} catch (err) {
		console.log(err)
		uni.showToast({
			title: '网络异常，请求失败！',
			icon: 'none',
		});
	}
}

export {
	request,
	requestUpload
}