<template>
	<view class="content">
		<view>
            <text class="title">{{title}}</text>
        </view>
	</view>
</template>

<script lang="ts">
  import Vue from 'vue';

	export default Vue.extend({
		data() {
			return {
				title: 'life'
			}
		},
		onLoad() {

		},
		methods: {

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
