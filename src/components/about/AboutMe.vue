<template>
	<!-- About me bio section -->
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About me portfolio image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpeg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About me details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Jr. Full-Stack Web Developer & General Penetration Tester, with Bachelor of Science in Computer Science.',
				},
				{
					id: 2,
					bio:
						'I began learning to code at the age of 14 and quickly became hooked to Web Development.On the side, I have always been fascinated by security researchers work and how they dive deeply into any target and reverse engineer it if the source code/Schematics aren\'t available. At 16, I began studying for the CEH (Certified Ethical Hacker) certification, and since then I\'ve learned a lot of new things and made a lot of new friends. At 17 I landed my first freelance contract job...💖',
				},
			],
		};
	},
};
</script>
