<template>
    <div class="relative w-full h-96"><img class="absolute h-full w-full object-cover" style="object-position: 30% 18%;"
            src="https://s3-alpha-sig.figma.com/img/613c/99c0/e701be2778b3cbde5decea792a6342d9?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hVBqQ5gQwhetOOql8xHT0lownUWuHCiby4axjJjo3zQv4pQ86BQKHu5aPViE4U8BOWfRHdAP~vRL8muDiCTy7tXImnyVVUGhLA4OqBQVoH9NQ-LHoVBRMhJeMiaUQMRxowWq8YI2~ZwiQfK1xatIN7KYlbNQlAEGL~q5ZqiOY5LllxxxW1CEzLrmDOzXXpQ-PosJnSGLV9y3LtbAqqF1tEzGNgRKqGKxnD~QKo7DtGfYcqQPkCxbTSI-8Msn0rGhJ-6oALo9gPsrojKMW9LgzbQeUY4Ez9wXTwZyimQYw2ah9Sb5thyEXKChMDGyshNmOIzcsTP~YOVTzAM2S~TFkg__"
            alt="nature image" />
        <div class="absolute inset-0 h-full w-full bg-black/20"></div>
        <div class="flex relative pt-28 text-center w-full justify-end mt-12">
            <button @click="redirectToRoute"
                class="flex bg-white gap-2 text-[#290A29] text-[12px] rounded-full px-4 p-2 mr-8 sm:mr-16 md:mr-32 lg:mr-64 xl:mr-64 2xl:mr-96">
                Editar
                <svg :class="{ 'bg-blue-300 rounded-full p-1': route.path == '/viewinformation' }" width="20" height="20"
                    viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M10.5881 3.25696C11.0728 2.77229 11.7301 2.5 12.4156 2.5C13.8429 2.5 15 3.65708 15 5.08442C15 5.76985 14.7277 6.42721 14.243 6.91188L5.81357 15.3413C5.71199 15.4429 5.57421 15.5 5.43056 15.5H2.54167C2.24251 15.5 2 15.2575 2 14.9583V12.0694C2 11.9258 2.05707 11.788 2.15865 11.6864L10.5881 3.25696ZM12.4156 3.58333C12.0175 3.58333 11.6357 3.74148 11.3542 4.02299L11.0716 4.30556L13.1944 6.42841L13.477 6.14585C13.7585 5.86434 13.9167 5.48253 13.9167 5.08442C13.9167 4.25539 13.2446 3.58333 12.4156 3.58333ZM12.4284 7.19444L10.3056 5.07159L3.08333 12.2938V14.4167H5.20619L12.4284 7.19444Z"
                        fill="#023D6A" />
                    <path d="M2 16.5H18V17.5H2V16.5Z" fill="#023D6A" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
    setup() {
        const route = useRoute();
        return { route };
    },
    methods: {
        redirectToRoute() {
            if (this.currentRoute === "/") {
                this.$router.push("/viewinformation");
            } else if (this.currentRoute === "/viewinformation") {
                this.$router.push("/");
            }
        }
    },
    computed: {
        currentRoute() {
            return this.$route.path;
        }
    },
};

</script>