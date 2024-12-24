<template>
    <div class="w-full px-4 bg-[#C6CBD2] py-8">
        <div class="w-full flex-col max-w-7xl mx-auto">
            <p class="text-[#023D6A] text-[24px]">
                Formación académica
            </p>
            <div v-for="(formations, index) in formation" class="w-full max-lg:flex-col xl:flex xl:gap-8 mt-8">
                <div class="xl:w-3/5 flex sm:gap-8 grid grid-cols-1 sm:grid-cols-2">
                    <div class="mb-4">
                        <label class="block text-[#023D6A] text-[14px] mb-2">Título obtenido</label>
                        <input v-model="formation[index].titleAcademic"
                            class="w-full px-3 py-2 text-[14px] text-[#023D6A] rounded-md focus:outline-none focus:border-indigo-500"
                            type="text" placeholder="Diseño de medios interactivos">
                    </div>
                    <div class="mb-4">
                        <label class="block text-[#023D6A] text-[14px] mb-2">Institución</label>
                        <input v-model="formation[index].school"
                            class="w-full px-3 py-2 border text-[14px] text-[#023D6A] rounded-md focus:outline-none focus:border-indigo-500"
                            type="text" placeholder="Universidad Icesi">
                    </div>
                </div>
                <div class="xl:w-2/5">
                    <div class="w-full md:flex xl:gap-8">
                        <div class="md:w-4/5 flex sm:gap-8 grid grid-cols-1 sm:grid-cols-2">
                            <div class="mb-4">
                                <label class="block text-[#023D6A] text-[14px] mb-2">Fecha de inicio</label>
                                <input v-model="formation[index].dateInit"
                                    class="w-full px-3 py-2 border text-[14px] text-[#023D6A] rounded-md focus:outline-none focus:border-indigo-500"
                                    type="date" placeholder="John Doe">
                            </div>
                            <div class="mb-4">
                                <label class="block text-[#023D6A] text-[14px] mb-2">Fecha de terminación</label>
                                <input v-model="formation[index].dateTerminate"
                                    class="w-full px-3 py-2 border text-[14px] text-[#023D6A] rounded-md focus:outline-none focus:border-indigo-500"
                                    type="date" placeholder="John Doe">
                            </div>
                        </div>
                        <div class="md:w-1/5 flex grid grid-cols-1">
                            <div class="flex mb-4 items-end justify-end">
                                <button @click="removeFormation(index)"
                                    class="flex border border-[#761D74] py-1 px-4 rounded-full gap-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.5 14.5L9.5 11.5" stroke="#761D74" stroke-linecap="round" />
                                        <path d="M14.5 14.5L14.5 11.5" stroke="#761D74" stroke-linecap="round" />
                                        <path
                                            d="M3 6.5H21V6.5C19.5955 6.5 18.8933 6.5 18.3889 6.83706C18.1705 6.98298 17.983 7.17048 17.8371 7.38886C17.5 7.89331 17.5 8.59554 17.5 10V15.5C17.5 17.3856 17.5 18.3284 16.9142 18.9142C16.3284 19.5 15.3856 19.5 13.5 19.5H10.5C8.61438 19.5 7.67157 19.5 7.08579 18.9142C6.5 18.3284 6.5 17.3856 6.5 15.5V10C6.5 8.59554 6.5 7.89331 6.16294 7.38886C6.01702 7.17048 5.82952 6.98298 5.61114 6.83706C5.10669 6.5 4.40446 6.5 3 6.5V6.5Z"
                                            stroke="#761D74" stroke-linecap="round" />
                                        <path d="M9.5 3.50024C9.5 3.50024 10 2.5 12 2.5C14 2.5 14.5 3.5 14.5 3.5"
                                            stroke="#761D74" stroke-linecap="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex w-full gap-6 items-end justify-end mt-8">
                <button class="flex bg-[#0DC6DE] py-1 px-4 rounded-full gap-2">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3 7.5C3 5.61438 3 4.67157 3.58579 4.08579C4.17157 3.5 5.11438 3.5 7 3.5H17C18.8856 3.5 19.8284 3.5 20.4142 4.08579C21 4.67157 21 5.61438 21 7.5V17.5C21 19.3856 21 20.3284 20.4142 20.9142C19.8284 21.5 18.8856 21.5 17 21.5H7C5.11438 21.5 4.17157 21.5 3.58579 20.9142C3 20.3284 3 19.3856 3 17.5V7.5Z"
                            stroke="#023D6A" stroke-width="1.5" />
                        <path
                            d="M3 10.5V10.5C3 11.4319 3 11.8978 3.15224 12.2654C3.35523 12.7554 3.74458 13.1448 4.23463 13.3478C4.60218 13.5 5.06812 13.5 6 13.5H6.67544C7.25646 13.5 7.54696 13.5 7.77888 13.6338C7.83745 13.6675 7.89245 13.7072 7.94303 13.7521C8.14326 13.9298 8.23513 14.2054 8.41886 14.7566L8.54415 15.1325C8.76416 15.7925 8.87416 16.1225 9.13605 16.3112C9.39794 16.5 9.7458 16.5 10.4415 16.5H13.5585C14.2542 16.5 14.6021 16.5 14.864 16.3112C15.1258 16.1225 15.2358 15.7925 15.4558 15.1325L15.5811 14.7566C15.7649 14.2054 15.8567 13.9298 16.057 13.7521C16.1075 13.7072 16.1625 13.6675 16.2211 13.6338C16.453 13.5 16.7435 13.5 17.3246 13.5H18C18.9319 13.5 19.3978 13.5 19.7654 13.3478C20.2554 13.1448 20.6448 12.7554 20.8478 12.2654C21 11.8978 21 11.4319 21 10.5V10.5"
                            stroke="#023D6A" stroke-width="1.5" />
                    </svg>
                    <span @click="submitForm" class="text-[14px]">
                        Guardar
                    </span>
                </button>
                <button class="flex border border-[#47586E] py-1 px-4 rounded-full gap-2">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6.5L12 18.5" stroke="#47586E" stroke-linecap="square" stroke-linejoin="round" />
                        <path d="M18 12.5L6 12.5" stroke="#47586E" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                    <span @click="addFormation" class="text-[14px]">
                        Añadir
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            formation: [
                {
                    titleAcademic: '',
                    school: '',
                    dateInit: '',
                    dateTerminate: ''
                }
            ]
        };
    },
    methods: {
        async submitForm() {
            try {
                const payload = {
                    formation: this.formation,
                    userId: 1,
                };
                const response = await axios.post('http://localhost:3000/academicformation', payload);
                console.log('Respuesta de la API:', response.data);
                alert('Datos enviados con éxito');
            } catch (error) {
                console.error('Error al enviar los datos:', error);
                alert('Hubo un error al enviar los datos');
            }
        },
        addFormation() {
            this.formation.push({
                titleAcademic: '',
                school: '',
                dateInit: '',
                dateTerminate: ''
            });
        },
        removeFormation(index) {
            if (this.formation.length > 1) {
                this.formation.splice(index, 1);
            } else {
                alert("Debe haber al menos una formacion.");
            }
        }
    },
}
</script>