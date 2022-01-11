<template>
	<!-- About page clients section -->
	<div class="mt-10 sm:mt-20">
		<p
			class="text-2xl sm:text-4xl text-primary-dark dark:text-primary-light font-sans font-semibold"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-20 gap-2">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>

<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Some of the Tools I worked with',
			clients: [
				{
					id: 1,
					title: 'Python',
					img: require('@/assets/images/brands/python.png'),
				},
				{
					id: 2,
					title: 'C/C++',
					img: require('@/assets/images/brands/c.png'),
				},
				{
					id: 3,
					title: 'django',
					img: require('@/assets/images/brands/django.png'),
				},
				{
					id: 4,
					title: 'opencv',
					img: require('@/assets/images/brands/opencv.png'),
				},
				{
					id: 5,
					title: 'BurpSuite',
					img: require('@/assets/images/brands/BurpSuite.png'),
				},
				{
					id: 6,
					title: 'Kali Linux',
					img: require('@/assets/images/brands/kali-linux.png'),
				},
				{
					id: 7,
					title: 'metasploit',
					img: require('@/assets/images/brands/metasploit.png'),
				},
				{
					id: 8,
					title: 'Unreal Engine',
					img: require('@/assets/images/brands/unreal_engine.png'),
				},
			],
		};
	},
};
</script>
