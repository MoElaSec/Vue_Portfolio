<template>
	<!-- App Banner -->
	<section class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10">
		<!-- Banner left contents -->
		<div class="w-full md:w-1/3 text-left">
			<h1
				class="text-3xl md:text-4xl xl:text-5xl text-center sm:text-left font-semibold text-ternary-dark dark:text-primary-light uppercase">
				Hi, I'm Mo Eltahir
			</h1>
			<p
				class="mt-4 text-xl md:text-2xl xl:text-4xl text-center sm:text-left font-semibold leading-none text-gray-400">
				
				
                <a href="#">
                    <img src="https://readme-typing-svg.herokuapp.com?duration=6200&lines=Full-Stack+Web+Dev.+%26+PenTester...">
                </a>
           
			</p>
			<div class="flex justify-center sm:block">
				<a download="Mo_ELtahir_Resume.pdf" href="/files/Mo_ELtahir_Resume.pdf"
					class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white"
					aria-label="Download Resume">
					<i data-feather="arrow-down-circle" class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6"></i>
					<span class="text-sm sm:text-lg">Download CV</span></a>
			</div>
		</div>

		<!-- Banner right illustration -->
		<!-- <div class="w-full md:w-2/3 text-right float-right">
			<img
				v-if="theme === 'light'"
				src="@/assets/images/developer.svg"
				alt="Developer" 
			/>
			<img
				v-else
				src="@/assets/images/developer-dark.svg"
				alt="Developer"
			/>
		</div> -->

		<!-- The Spline 3D obj instead of the SVg image -->
		<iframe class="w-full md:w-2/3 text-right float-right"
			src='https://my.spline.design/miniroommusiccopy-4ccaacae3823d83e3764694238678c14/' 
			frameborder='0'
			scrolling="no"
			allowtransparency="true"
			width='100%' height='100%'
			style="min-height: 600px !important; overflow: hidden;"></iframe>

	</section>
</template>

<script>
import feather from 'feather-icons';

export default {
	name: 'Home',
	data: () => {
		return {
			theme: '',
		};
	},
	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';
	},
	updated() {
		feather.replace();
	},
	methods: {},

};
</script>

<style scoped>
</style>
