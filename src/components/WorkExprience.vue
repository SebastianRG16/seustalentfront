<template>
    <div class="w-full px-4 bg-[#023D6A] py-8">
        <div class="w-full flex-col max-w-7xl mx-auto">
            <p class="text-[#EDEEF1] text-[24px]">
                Experiencia laboral
            </p>
            <div v-for="(work, index) in works" class="w-full max-lg:flex-col xl:flex xl:gap-8 mt-8">
                <div class="xl:w-3/5 flex sm:gap-8 grid grid-cols-1 sm:grid-cols-2">
                    <div class="mb-4">
                        <label class="block text-[#EDEEF1] text-[14px] mb-2">Cargo</label>
                        <input v-model="works[index].charge"
                            class="w-full px-3 py-2 border text-[13px] rounded-md focus:outline-none focus:border-indigo-500"
                            type="text" placeholder="John Doe">
                    </div>
                    <div class="mb-4">
                        <label class="block text-[#EDEEF1] text-[14px] mb-2">Empresa</label>
                        <input v-model="works[index].company"
                            class="w-full px-3 py-2 border text-[13px] rounded-md focus:outline-none focus:border-indigo-500"
                            type="text" placeholder="John Doe">
                    </div>
                </div>
                <div class="xl:w-2/5">
                    <div class="w-full md:flex xl:gap-8">
                        <div class="md:w-4/5 flex sm:gap-8 grid grid-cols-1 sm:grid-cols-2">
                            <div class="mb-4">
                                <label class="block text-[#EDEEF1] text-[14px] mb-2">Fecha de inicio</label>
                                <input v-model="works[index].dateInit"
                                    class="w-full px-3 py-2 border text-[13px] rounded-md focus:outline-none focus:border-indigo-500"
                                    type="date" placeholder="John Doe">
                            </div>
                            <div class="mb-4">
                                <label class="block text-[#EDEEF1] text-[14px] mb-2">Fecha de terminación</label>
                                <input v-model="works[index].dateTerminate"
                                    class="w-full px-3 py-2 border text-[13px] rounded-md focus:outline-none focus:border-indigo-500"
                                    type="date" placeholder="John Doe">
                            </div>
                        </div>
                        <div class="md:w-1/5 flex grid grid-cols-1">
                            <div class="flex mb-4 items-end justify-end">
                                <button @click="removeWork(index)"
                                    class="flex border border-[#9CFBEF] py-1 px-4 rounded-full gap-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.5 14.5L9.5 11.5" stroke="#9CFBEF" stroke-linecap="round" />
                                        <path d="M14.5 14.5L14.5 11.5" stroke="#9CFBEF" stroke-linecap="round" />
                                        <path
                                            d="M3 6.5H21V6.5C19.5955 6.5 18.8933 6.5 18.3889 6.83706C18.1705 6.98298 17.983 7.17048 17.8371 7.38886C17.5 7.89331 17.5 8.59554 17.5 10V15.5C17.5 17.3856 17.5 18.3284 16.9142 18.9142C16.3284 19.5 15.3856 19.5 13.5 19.5H10.5C8.61438 19.5 7.67157 19.5 7.08579 18.9142C6.5 18.3284 6.5 17.3856 6.5 15.5V10C6.5 8.59554 6.5 7.89331 6.16294 7.38886C6.01702 7.17048 5.82952 6.98298 5.61114 6.83706C5.10669 6.5 4.40446 6.5 3 6.5V6.5Z"
                                            stroke="#9CFBEF" stroke-linecap="round" />
                                        <path d="M9.5 3.50024C9.5 3.50024 10 2.5 12 2.5C14 2.5 14.5 3.5 14.5 3.5"
                                            stroke="#9CFBEF" stroke-linecap="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex grid grid-cols-1">
                <div class="mb-4">
                    <label for="message" class="block mb-2 text-[14px] text-[#EDEEF1]">Menciona 3 principales
                        logros</label>
                    <textarea id="message" rows="4"
                        class="block p-2.5 w-full text-[13px] text-gray-900 bg-[#F2F2F2] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Escribelas aquí......"></textarea>
                </div>
            </div>
            <div class="flex w-full justify-between text-[#EDEEF1] mt-10">
                <div class="flex-col gap-4">
                    <div class="flex gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11 7V15C11 16.1046 11.8954 17 13 17V17C14.1046 17 15 16.1046 15 15V7C15 4.79086 13.2091 3 11 3V3C8.79086 3 7 4.79086 7 7V15C7 18.3137 9.68629 21 13 21V21C16.3137 21 19 18.3137 19 15V10"
                                stroke="#E3E6E9" stroke-width="2" stroke-linecap="round" />
                        </svg>
                        <p @click="showUpload = true" class="cursor-pointer text-[12px]">Añadir certificación, fotos o
                            premios</p>
                        <p
                            class="flex bg-[#06759F66] tetx-center items-center justify-center rounded-full px-2 text-[12px]">
                            Opcional
                        </p>
                    </div>
                    <div v-if="showUpload" class="mt-4">
                        <input type="file" @change="handleFileUpload" accept="image/*" multiple />
                        <button @click="savePhotos" class="bg-[#0DC6DE] text-black px-3 rounded-full mt-2">
                            Agregar
                        </button>
                        <button @click="cancelUpload" class="bg-tranasparent border text-white px-3 rounded-full ml-2 mt-2">
                            Cancelar
                        </button>
                    </div>
                    <div class="mt-4">
                        <p class="text-lg font-bold">Imágenes cargadas:</p>
                        <div v-for="(work, index) in informationWork" :key="index" class="mt-2">
                            <div v-for="(image, imgIndex) in work.images" :key="imgIndex" class="mb-2">
                                <img :src="image" alt="Imagen cargada" class="w-32 h-32 object-cover border" />
                                <button @click="removeImage(index, imgIndex)"
                                    class="bg-red-500 text-white px-2 py-1 rounded-md text-xs">
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="mt-2 text-[12px] text-[#999999]">
                        Si tienes fotos de tu experiencia laboral compártela con nosotros (fotos con el equipo de trabajo,
                        en
                        eventos
                        realizados, dando una charla, recibiendo un premio) <br> recuerda que el mal uso de este espacio
                        puede
                        generar
                        que
                        tu
                        perfil no sea aprobado. Si no tienes fotos que generen valor, deja este espacio en blanco.
                    </div>
                </div>
                <div class="flex flex-col">
                    <label class="inline-flex text-[14px] mb-2">Trabaja aquí actualmente</label>
                    <label class="flex justify-end inline-flex items-center cursor-pointer">
                        <input v-model="informationWork[0].workHere" type="checkbox" value="" class="sr-only peer" checked>
                        <div
                            class="relative w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all">
                        </div>
                        <label class="ml-2 text-[14px]">
                            {{ informationWork[0].workHere ? 'Sí' : 'No' }}
                        </label>
                    </label>
                </div>
            </div>
            <div class="flex w-full gap-6 items-end justify-end mt-8">
                <button @click="submitForm" class="flex bg-[#0DC6DE] py-1 px-4 rounded-full gap-2">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3 7.5C3 5.61438 3 4.67157 3.58579 4.08579C4.17157 3.5 5.11438 3.5 7 3.5H17C18.8856 3.5 19.8284 3.5 20.4142 4.08579C21 4.67157 21 5.61438 21 7.5V17.5C21 19.3856 21 20.3284 20.4142 20.9142C19.8284 21.5 18.8856 21.5 17 21.5H7C5.11438 21.5 4.17157 21.5 3.58579 20.9142C3 20.3284 3 19.3856 3 17.5V7.5Z"
                            stroke="#023D6A" stroke-width="1.5" />
                        <path
                            d="M3 10.5V10.5C3 11.4319 3 11.8978 3.15224 12.2654C3.35523 12.7554 3.74458 13.1448 4.23463 13.3478C4.60218 13.5 5.06812 13.5 6 13.5H6.67544C7.25646 13.5 7.54696 13.5 7.77888 13.6338C7.83745 13.6675 7.89245 13.7072 7.94303 13.7521C8.14326 13.9298 8.23513 14.2054 8.41886 14.7566L8.54415 15.1325C8.76416 15.7925 8.87416 16.1225 9.13605 16.3112C9.39794 16.5 9.7458 16.5 10.4415 16.5H13.5585C14.2542 16.5 14.6021 16.5 14.864 16.3112C15.1258 16.1225 15.2358 15.7925 15.4558 15.1325L15.5811 14.7566C15.7649 14.2054 15.8567 13.9298 16.057 13.7521C16.1075 13.7072 16.1625 13.6675 16.2211 13.6338C16.453 13.5 16.7435 13.5 17.3246 13.5H18C18.9319 13.5 19.3978 13.5 19.7654 13.3478C20.2554 13.1448 20.6448 12.7554 20.8478 12.2654C21 11.8978 21 11.4319 21 10.5V10.5"
                            stroke="#023D6A" stroke-width="1.5" />
                    </svg>
                    <span>
                        Guardar
                    </span>
                </button>
                <button class="flex border border-[#EDEEF1] py-1 px-4 rounded-full gap-2">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6.5L12 18.5" stroke="#EDEEF1" stroke-linecap="square" stroke-linejoin="round" />
                        <path d="M18 12.5L6 12.5" stroke="#EDEEF1" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                    <span @click="addWork" class="text-[#EDEEF1]">
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
            works: [
                {
                    charge: '',
                    company: '',
                    dateInit: '',
                    dateTerminate: ''
                }
            ],
            showUpload: false,
            selectedFiles: [],
            informationWork: [
                {
                    images: [],
                    workHere: false,
                    achievements: '',
                }
            ]

        };
    },
    methods: {
        async submitForm() {
            try {
                const payload = {
                    works: this.works,
                    informationWork: this.informationWork,
                    userId: 1,
                };
                const response = await axios.post('https://seustalentback.onrender.com/workexperience', payload);
                console.log('Respuesta de la API:', response.data);
                alert('Datos enviados con éxito');
            } catch (error) {
                console.error('Error al enviar los datos:', error);
                alert('Hubo un error al enviar los datos');
            }
        },
        handleFileUpload(event) {
            const files = Array.from(event.target.files);
            files.forEach((file) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.selectedFiles.push(e.target.result);
                };
                reader.readAsDataURL(file);
            });
        },
        savePhotos() {
            if (this.selectedFiles.length > 0) {
                this.informationWork[0].images.push(...this.selectedFiles);
                this.selectedFiles = [];
                this.showUpload = false;
            } else {
                alert("Por favor, selecciona al menos una foto.");
            }
        },
        cancelUpload() {
            this.selectedFiles = [];
            this.showUpload = false;
        },
        removeImage(workIndex, imgIndex) {
            this.informationWork[workIndex].images.splice(imgIndex, 1);
        },
        addWork() {
            this.works.push({
                charge: '',
                company: '',
                dateInit: '',
                dateTerminate: ''
            });
        },
        removeWork(index) {
            if (this.works.length > 1) {
                this.works.splice(index, 1);
            } else {
                alert("Debe haber al menos un trabajo.");
            }
        }
    },
}
</script>