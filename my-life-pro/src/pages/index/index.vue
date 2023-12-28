<template>
	<view class="content">
		<view>
			<text class="title">{{title}}</text>
			<form>

				<view class="uni-uploader__input-box">
					<view class="uni-uploader__input" @tap="chooseImage">上传图片</view>
				</view>
				<view>
					<!-- "http://localhost.my.pangxuejun.cn:8080/public" -->
					<block v-for="(meida,index) in mediaList" :key="index">
						<view class="uni-uploader__file">
							<image class="uni-uploader__img" :src="meida" :data-src="meida"></image>
						</view>
					</block>
				</view>
			</form>
		</view>
	</view>
</template>

<script lang="ts">
	import { mediaGet } from '@/common/api/medias';
	import Vue from 'vue';
	import { requestUpload } from '../../common/request'
	export default Vue.extend({
		data() {
			return {
				title: '首页',
				imageList: [],
				imageSrc: '',
				sourceTypeIndex: 2,
				sourceType: ['拍照', '相册', '拍照或相册'],
				sizeTypeIndex: 2,
				sizeType: ['压缩', '原图', '压缩或原图'],
				countIndex: 8,
				count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
				mediaList: [],
				param: {
					"count": 4,
					"offset": 0
				}
			}
		},
		onLoad() {
			this.MediaGet(this.param)
		},
		methods: {
			MediaGet: async function (param : any) {
				const res = await mediaGet(param)
				console.log("res", JSON.stringify(res))
				this.mediaList = []
				for (const m of res.data.media) {
					var mediaPath = m.path
					this.mediaList = this.mediaList.concat(mediaPath as any)
				}
			},
			chooseImage: async function () {
				uni.chooseImage({
					sourceType: ['album'],
					sizeType: ['original'],
					count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
					success: (res) => {
						this.mediaList=[]
						this.imageList = this.imageList.concat(res.tempFilePaths as any)
						requestUpload(res.tempFilePaths).then(()=>{
							this.MediaGet(this.param)
						})
					},

					fail: (err) => {
						// #ifdef MP
						if (err.errMsg.indexOf('cancel') !== '-1') {
							return;
						}
						uni.getSetting({
							success: (res) => {
								let authStatus = false;
								switch (this.sourceTypeIndex) {
									case 0:
										authStatus = res.authSetting['scope.camera'];
										break;
									case 1:
										// authStatus = res.authSetting['scope.album'];
										break;
									case 2:
										// authStatus = res.authSetting['scope.album'] && res.authSetting['scope.camera'];
										break;
									default:
										break;
								}
								if (!authStatus) {
									uni.showModal({
										title: '授权失败',
										content: 'Hello uni-app需要从您的相机或相册获取图片，请在设置界面打开相关权限',
										success: (res) => {
											if (res.confirm) {
												uni.openSetting()
											}
										}
									})
								}
							}
						})
						// #endif
					}
				})
			},
		}
	});
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>