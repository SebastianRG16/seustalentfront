<template>
    <div class="w-full rounded-lg mt-4 shadow-xl">
        <div class="max-w-7xl mx-auto px-3 mb-6">
            <div class="flex gap-2">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M13.0009 2.99994C13.0369 3.00003 13.0727 3.00012 13.1083 3.00012H16.8917C16.9273 3.00012 16.9631 3.00003 16.9991 2.99994C17.4257 2.99888 17.8811 2.99775 18.3039 3.14358C18.6717 3.27046 19.0067 3.47751 19.2847 3.74977C19.6042 4.06272 19.8069 4.47053 19.9967 4.85258C20.0127 4.88482 20.0287 4.91688 20.0446 4.94869L20.5703 6.00012L22.6207 6.00011C23.4219 6.0001 24.0907 6.00009 24.637 6.04472C25.2068 6.09128 25.7418 6.19195 26.2477 6.44971C27.0239 6.84519 27.6549 7.47624 28.0504 8.2524C28.3082 8.7583 28.4088 9.29328 28.4554 9.86311C28.5 10.4095 28.5 11.0782 28.5 11.8794V21.1208C28.5 21.922 28.5 22.5908 28.4554 23.1371C28.4088 23.7069 28.3082 24.2419 28.0504 24.7478C27.6549 25.524 27.0239 26.155 26.2477 26.5505C25.7418 26.8083 25.2068 26.909 24.637 26.9555C24.0907 27.0001 23.4219 27.0001 22.6207 27.0001H7.37932C6.5781 27.0001 5.90934 27.0001 5.363 26.9555C4.79317 26.909 4.25818 26.8083 3.75229 26.5505C2.97612 26.155 2.34508 25.524 1.9496 24.7478C1.69183 24.2419 1.59117 23.7069 1.54461 23.1371C1.49997 22.5908 1.49998 21.922 1.5 21.1208V11.8795C1.49998 11.0782 1.49997 10.4095 1.54461 9.86311C1.59117 9.29328 1.69183 8.7583 1.9496 8.2524C2.34508 7.47624 2.97612 6.84519 3.75229 6.44971C4.25818 6.19195 4.79317 6.09128 5.363 6.04472C5.90935 6.00009 6.57812 6.0001 7.37935 6.00011L9.42971 6.00012L9.95543 4.94869C9.97133 4.91688 9.98726 4.88482 10.0033 4.85257C10.1931 4.47052 10.3958 4.06272 10.7153 3.74977C10.9933 3.47751 11.3283 3.27046 11.6961 3.14358C12.1189 2.99775 12.5743 2.99888 13.0009 2.99994ZM12.4266 5.27157C12.4265 5.27155 12.4272 5.27133 12.4288 5.27094L12.4266 5.27157ZM12.5429 5.25818C12.4682 5.26284 12.437 5.26897 12.4288 5.27094C12.3769 5.28899 12.3297 5.3182 12.2903 5.35655C12.2849 5.36299 12.2655 5.38807 12.228 5.45279C12.167 5.55789 12.0944 5.70194 11.9679 5.95492L11.1312 7.62823C10.9407 8.00936 10.5511 8.25012 10.125 8.25012H7.425C6.56636 8.25012 5.99004 8.25099 5.54622 8.28725C5.11553 8.32244 4.90961 8.38526 4.77377 8.45448C4.42096 8.63424 4.13413 8.92108 3.95436 9.27388C3.88515 9.40973 3.82233 9.61565 3.78714 10.0463C3.75088 10.4902 3.75 11.0665 3.75 11.9251V21.0751C3.75 21.9338 3.75088 22.5101 3.78714 22.9539C3.82233 23.3846 3.88515 23.5905 3.95436 23.7263C4.13413 24.0792 4.42096 24.366 4.77377 24.5458C4.90961 24.615 5.11553 24.6778 5.54622 24.713C5.99004 24.7492 6.56636 24.7501 7.425 24.7501H22.575C23.4336 24.7501 24.01 24.7492 24.4538 24.713C24.8845 24.6778 25.0904 24.615 25.2262 24.5458C25.579 24.366 25.8659 24.0792 26.0456 23.7263C26.1149 23.5905 26.1777 23.3846 26.2129 22.9539C26.2491 22.5101 26.25 21.9338 26.25 21.0751V11.9251C26.25 11.0665 26.2491 10.4902 26.2129 10.0463C26.1777 9.61565 26.1149 9.40973 26.0456 9.27388C25.8659 8.92108 25.579 8.63424 25.2262 8.45448C25.0904 8.38526 24.8845 8.32244 24.4538 8.28725C24.01 8.25099 23.4336 8.25012 22.575 8.25012H19.875C19.4489 8.25012 19.0593 8.00936 18.8688 7.62823L18.0321 5.95492C17.9056 5.70194 17.833 5.55789 17.772 5.45279C17.7345 5.38806 17.7151 5.36298 17.7097 5.35655C17.6703 5.3182 17.623 5.28897 17.5711 5.27092C17.5726 5.27139 17.5734 5.27159 17.5734 5.27157M17.5711 5.27092C17.5629 5.26894 17.5318 5.26284 17.4571 5.25818C17.3359 5.25062 17.1746 5.25012 16.8917 5.25012H13.1083C12.8254 5.25012 12.6641 5.25062 12.5429 5.25818M17.7081 5.35476C17.708 5.35471 17.7086 5.35531 17.7097 5.35655L17.7081 5.35476ZM12.2919 5.35476C12.2919 5.35482 12.2913 5.35554 12.2903 5.35655L12.2919 5.35476ZM15 12.7501C12.9289 12.7501 11.25 14.429 11.25 16.5001C11.25 18.5712 12.9289 20.2501 15 20.2501C17.0711 20.2501 18.75 18.5712 18.75 16.5001C18.75 14.429 17.0711 12.7501 15 12.7501ZM9 16.5001C9 13.1864 11.6863 10.5001 15 10.5001C18.3137 10.5001 21 13.1864 21 16.5001C21 19.8138 18.3137 22.5001 15 22.5001C11.6863 22.5001 9 19.8138 9 16.5001Z"
                        fill="#47586E" />
                </svg>
                <p class="text-[#023D6A] text-[20px]">
                    Fotos o premios
                </p>
            </div>
            <div class="flex max-sm:mb-2 gap-8 grid grid-cols-1 sm:grid-cols-3 mt-4">
                <div class="relative">
                    <img src="https://s3-alpha-sig.figma.com/img/6577/a14c/7b25cedee639e3cc975e9f96c634d561?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pai1z0Ye8tMA5m7TTy64rnbyD3UpjxtguADTD-eCH9OTwDdLneUzrC1cPhoLNkLStESI7alFi8-Oxw4-szGsyOnzn6Ma94q4EE4fWh2LuVmBDGhdeL7Jm15kXTOfLgq0msyZpvA-1Anng7ULklv7DEco5opgyyEumaRzyk2hvo-kXKiL99Uacsrq3e7VM1xTFH01hXLaB88GR-3ddCHQTs7c1AkEQvCnK5~yq~WlTyPVPGt9kxVK4GTYHG8rCvrwLfoTIZ~5r4pYlVt8E0-6mxugNOrrtB~CWC7paL2Z~invKpfqkRnXqqPnDH5ajVidea5oRjGs-Ny~kIIS4IOhXw__"
                        alt="" class="w-full" />
                    <svg class="absolute bottom-0 left-0 w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"
                        fill="none">
                        <rect width="34" height="34" fill="#0DC6DE" />
                        <circle cx="16" cy="16" r="7" stroke="#CDFDF3" stroke-width="2" />
                        <path
                            d="M16 13C15.606 13 15.2159 13.0776 14.8519 13.2284C14.488 13.3791 14.1573 13.6001 13.8787 13.8787C13.6001 14.1573 13.3791 14.488 13.2284 14.852C13.0776 15.2159 13 15.606 13 16"
                            stroke="#CDFDF3" stroke-width="2" stroke-linecap="round" />
                        <path d="M25 25L22 22" stroke="#CDFDF3" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
                <div class="relative">
                    <img src="https://s3-alpha-sig.figma.com/img/6577/a14c/7b25cedee639e3cc975e9f96c634d561?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pai1z0Ye8tMA5m7TTy64rnbyD3UpjxtguADTD-eCH9OTwDdLneUzrC1cPhoLNkLStESI7alFi8-Oxw4-szGsyOnzn6Ma94q4EE4fWh2LuVmBDGhdeL7Jm15kXTOfLgq0msyZpvA-1Anng7ULklv7DEco5opgyyEumaRzyk2hvo-kXKiL99Uacsrq3e7VM1xTFH01hXLaB88GR-3ddCHQTs7c1AkEQvCnK5~yq~WlTyPVPGt9kxVK4GTYHG8rCvrwLfoTIZ~5r4pYlVt8E0-6mxugNOrrtB~CWC7paL2Z~invKpfqkRnXqqPnDH5ajVidea5oRjGs-Ny~kIIS4IOhXw__"
                        alt="" class="w-full" />
                    <svg class="absolute bottom-0 left-0 w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"
                        fill="none">
                        <rect width="34" height="34" fill="#0DC6DE" />
                        <circle cx="16" cy="16" r="7" stroke="#CDFDF3" stroke-width="2" />
                        <path
                            d="M16 13C15.606 13 15.2159 13.0776 14.8519 13.2284C14.488 13.3791 14.1573 13.6001 13.8787 13.8787C13.6001 14.1573 13.3791 14.488 13.2284 14.852C13.0776 15.2159 13 15.606 13 16"
                            stroke="#CDFDF3" stroke-width="2" stroke-linecap="round" />
                        <path d="M25 25L22 22" stroke="#CDFDF3" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
                <div class="relative">
                    <img src="https://s3-alpha-sig.figma.com/img/6577/a14c/7b25cedee639e3cc975e9f96c634d561?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pai1z0Ye8tMA5m7TTy64rnbyD3UpjxtguADTD-eCH9OTwDdLneUzrC1cPhoLNkLStESI7alFi8-Oxw4-szGsyOnzn6Ma94q4EE4fWh2LuVmBDGhdeL7Jm15kXTOfLgq0msyZpvA-1Anng7ULklv7DEco5opgyyEumaRzyk2hvo-kXKiL99Uacsrq3e7VM1xTFH01hXLaB88GR-3ddCHQTs7c1AkEQvCnK5~yq~WlTyPVPGt9kxVK4GTYHG8rCvrwLfoTIZ~5r4pYlVt8E0-6mxugNOrrtB~CWC7paL2Z~invKpfqkRnXqqPnDH5ajVidea5oRjGs-Ny~kIIS4IOhXw__"
                        alt="" class="w-full" />
                    <svg class="absolute bottom-0 left-0 w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"
                        fill="none">
                        <rect width="34" height="34" fill="#0DC6DE" />
                        <circle cx="16" cy="16" r="7" stroke="#CDFDF3" stroke-width="2" />
                        <path
                            d="M16 13C15.606 13 15.2159 13.0776 14.8519 13.2284C14.488 13.3791 14.1573 13.6001 13.8787 13.8787C13.6001 14.1573 13.3791 14.488 13.2284 14.852C13.0776 15.2159 13 15.606 13 16"
                            stroke="#CDFDF3" stroke-width="2" stroke-linecap="round" />
                        <path d="M25 25L22 22" stroke="#CDFDF3" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
            </div>
            <div class="w-full mt-10">
                <div class="flex gap-2">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.6555 2.00699C12.2763 0.692531 13.8453 0.101643 15.1706 0.785147C15.6885 1.05227 16.0978 1.48497 16.3443 2.00699L19.0223 7.67751C19.0847 7.80961 19.192 7.87711 19.2883 7.89173L25.2765 8.80104C26.7372 9.02284 27.6699 10.4099 27.4737 11.8211C27.3944 12.3912 27.1366 12.9259 26.7307 13.3394L22.3975 17.7533C22.3069 17.8456 22.2543 17.993 22.2787 18.1483L23.3602 24.3844C23.6012 25.8531 22.5727 27.2105 21.182 27.4597C20.6055 27.5631 20.0145 27.464 19.503 27.183L14.1469 24.2404C14.0531 24.1889 13.9467 24.1889 13.8529 24.2404L8.49685 27.183C7.19047 27.9007 5.60564 27.3536 4.95151 26.0533C4.69228 25.5381 4.60445 24.9522 4.69765 24.3844L5.72056 18.1519C5.74626 17.9953 5.6936 17.8463 5.60227 17.7533L1.26913 13.3394C0.261258 12.3128 0.242072 10.648 1.22252 9.59691C1.61837 9.17252 2.14461 8.88891 2.72326 8.80104L8.71151 7.89173C8.8078 7.87711 8.91509 7.80961 8.97747 7.67751L11.6555 2.00699Z"
                            fill="url(#paint0_linear_313_477)" />
                        <defs>
                            <linearGradient id="paint0_linear_313_477" x1="0.598214" y1="0.746013" x2="33.0183" y2="14.3438"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#761D74" />
                                <stop offset="1" stop-color="#0DC6DE" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <p class="text-[#023D6A] text-[24px]">
                        Logros importantes
                    </p>
                </div>
                <div class="mt-2 text-[#023D6A] text-[14px]">
                    {{ this.experience }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            experience: '',
            userId: 1,
        };
    },
    methods: {
        async fecthExperienceKills() {
            try {
                const response = await axios.get(`https://seustalentback.onrender.com/generalinformation/${this.userId}`);
                this.experience = response.data.supplementaryData
                console.log(this.experience)
            } catch (error) {
                console.error('Error al recibir los datos:', error);
                alert('Hubo un error al recibir los datos');
            }
        },
    },
}
</script>