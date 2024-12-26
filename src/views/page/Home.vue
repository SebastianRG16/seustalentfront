<template>
  <div class="bg-white font-sans w-full">
    <ImageNavbar />
    <NavbarTitle />
    <SectionInformation :stateCambioPassword="stateCambioPassword"
      @update:stateCambioPassword="stateCambioPassword = $event" />
    <div class="w-full">
      <ConfigurationWorking ref="configurationComponent" />
      <div class="w-full flex-col object-cover" :style="{ backgroundImage: `url(${FONDOMARCA})` }">
        <div class="px-4 max-w-7xl mx-auto mt-0 py-6">
          <div class="flex max-sm:mb-2 sm:gap-8 grid grid-cols-1 sm:grid-cols-2">
            <div class="sm:mb-4 mb-2">
              <label class="block text-[#023D6A] text-[14px] mb-2">Rango salarial desde:</label>
              <select v-model="salary"
                class="w-full text-[#023D6A] text-[13px] px-3 py-2 border bg-[#F2F2F2] border-[#E4E4E499] rounded-md focus:outline-none "
                name="" id="">
                <option class="" value="" disabled selected>Selecciona</option>
                <option class="" value="$2.000.000 - $3.000.000">$2.000.000 - $3.000.000</option>
                <option class="" value="$3.000.000 - $4.000.000">$3.000.000 - $4.000.000</option>
                <option class="" value="$4.000.000 - $5.000.000">$4.000.000 - $5.000.000</option>
              </select>
            </div>
            <div class="sm:mb-4">
              <label class="block text-[#023D6A] text-[14px] mb-2">¿Cuál es tu nivel profesional?</label>
              <select v-model="levelProfessional"
                class="w-full px-3 py-2 text-[#023D6A] text-[13px] border bg-[#F2F2F2] border-[#E4E4E499] rounded-md focus:outline-none "
                name="" id="">
                <option class="" value="" disabled selected>Selecciona</option>
                <option class="" value="Bachillerato">Bachillerato</option>
                <option class="" value="Universitario en curso">Universitario en curso</option>
                <option class="" value="Universitario culminado">Universitario culminado</option>
                <option class="" value="Pregrado">Pregrado</option>
              </select>
            </div>
          </div>
          <div class="flex max-sm:mb-2 sm:gap-8 grid grid-cols-1 sm:grid-cols-3">
            <div class="sm:mb-4 mb-2">
              <label class="block text-[#023D6A] text-[14px] mb-2">Nombre completo</label>
              <input v-model="name"
                class="w-full px-3 py-2 border bg-[#F2F2F2] border-[#E4E4E499] text-[#023D6A] text-[13px] rounded-md focus:outline-none focus:border-indigo-500"
                type="text" placeholder="Escribe aquí...">
            </div>
            <div class="sm:mb-4 mb-2">
              <label class="block text-[#023D6A] text-[14px] mb-2">Profesión</label>
              <input v-model="profession"
                class="w-full px-3 py-2 border bg-[#F2F2F2] border-[#E4E4E499] text-[#023D6A] text-[13px] rounded-md focus:outline-none focus:border-indigo-500"
                type="text" placeholder="Escribe aquí...">
            </div>
            <div class="sm:mb-4">
              <label class="block text-[#023D6A] text-[14px] mb-2">Especialización</label>
              <input v-model="specialization"
                class="w-full px-3 py-2 bg-[#F2F2F2] border-[#E4E4E499] text-[#023D6A] text-[13px] border rounded-md focus:outline-none focus:border-indigo-500"
                type="text" placeholder="Escribe aquí...">
            </div>
          </div>
          <div class="flex max-sm:mb-2 sm:gap-8 grid grid-cols-1 sm:grid-cols-3">
            <div class="sm:mb-4 mb-2">
              <label class="block text-[#023D6A] text-[14px] mb-2">Número de documento</label>
              <input v-model="document"
                class="w-full px-3 py-2 bg-[#F2F2F2] border-[#E4E4E499] text-[#023D6A] text-[13px] border rounded-md focus:outline-none focus:border-indigo-500"
                type="text" placeholder="Escribe aquí...">
            </div>
            <div class="sm:mb-4 mb-2">
              <label class="block text-[#023D6A] text-[14px] mb-2">Ciudad donde búscas empleo</label>
              <select v-model="city"
                class="w-full text-[#023D6A] text-[13px] px-3 py-2 border bg-[#F2F2F2] border-[#E4E4E499] rounded-md focus:outline-none "
                name="" id="">
                <option class="" value="" disabled selected>Selecciona</option>
              </select>
            </div>
            <div class="sm:mb-4">
              <label class="block text-[#023D6A] text-[14px] mb-2">¿Estás dispuesto a trasladarte?</label>
              <label class="inline-flex items-center cursor-pointer">
                <input v-model="relocation" type="checkbox" value="" class="sr-only peer" checked>
                <div
                  class="relative w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all">
                </div>
                <label class="ml-2 text-[14px] text-[#023D6A] text-[13px]">
                  {{ relocation ? 'Sí' : 'No' }}
                </label>
              </label>
            </div>
          </div>
          <div class="flex max-sm:mb-2 sm:gap-8 grid grid-cols-1 sm:grid-cols-3">
            <div class="sm:mb-4 mb-2">
              <label class="block text-[#023D6A] text-[14px] mb-2">Correo electrónico</label>
              <input v-model="email"
                class="w-full px-3 py-2 border bg-[#F2F2F2] border-[#E4E4E499] text-[#023D6A] text-[13px] rounded-md focus:outline-none focus:border-indigo-500"
                type="text" placeholder="Escribe aquí...">
            </div>
            <div class="sm:mb-4 mb-2">
              <label class="block text-[#023D6A] text-[14px] mb-2">Número de celular</label>
              <input v-model="cellphone"
                class="w-full px-3 py-2 border bg-[#F2F2F2] border-[#E4E4E499] text-[#023D6A] text-[13px] rounded-md focus:outline-none focus:border-indigo-500"
                type="text" placeholder="Escribe aquí...">
            </div>
            <div class="relative sm:mb-4">
              <label class="block text-[#023D6A] text-[14px] mb-2">Linkedin</label>
              <input v-model="linkedin"
                class="w-full px-3 py-2 border bg-[#F2F2F2] border-[#E4E4E499] text-[#023D6A] text-[13px] rounded-md focus:outline-none focus:border-indigo-500"
                type="text" placeholder="Escribe aquí...">
              <svg class="absolute right-2 top-1/2 transform -translate-y-1/5" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.824219" y="0.684937" width="28" height="28.1452" rx="6" fill="#0A9EB2" />
                <path
                  d="M22.3242 16.8936V22.2575H20.0091V17.5596V17.5572C20.0091 16.9581 20.0091 16.1497 19.7492 15.4924C19.6133 15.1489 19.398 14.8214 19.0567 14.5832C18.7143 14.3442 18.288 14.225 17.7827 14.225C17.2909 14.225 16.8663 14.3227 16.5109 14.5208C16.1531 14.7202 15.8951 15.0049 15.7142 15.3313C15.3646 15.9618 15.2969 16.7594 15.2969 17.4702V22.2575H12.9818V12.5692H15.1672V13.5311V14.0311H15.6672H15.7077H16.0092L16.1499 13.7645C16.5138 13.075 17.4268 12.3012 18.8445 12.3012C20.399 12.3012 21.209 12.8021 21.6698 13.5328C22.1638 14.3164 22.3242 15.4631 22.3242 16.8936ZM9.9149 12.5692V22.2575H7.5917V12.5692H9.9149ZM8.7533 7.25752C9.538 7.25752 10.1743 7.89362 10.1743 8.6824C10.1743 9.47117 9.538 10.1073 8.7533 10.1073C7.96585 10.1073 7.32422 9.46843 7.32422 8.6824C7.32422 7.89499 7.95911 7.25752 8.7533 7.25752Z"
                  fill="#CDFDF3" stroke="#CDFDF3" />
              </svg>

            </div>
          </div>
          <div class="flex grid grid-cols-1">
            <div class="sm:mb-4 mb-2">
              <label for="message" class="block mb-2 text-[#023D6A] text-[14px]">¿Qué valor agregado le ofreces a una
                empresa que te contrata? ¿Qué te diferencia de otras personas?</label>
              <textarea v-model="addedValue" id="message" rows="4"
                class="block p-2.5 w-full bg-[#F2F2F2] border-[#E4E4E499] text-[#023D6A] text-[13px] rounded-lg border focus:border-indigo-500"
                placeholder="Escribelas aquí......"></textarea>

            </div>
          </div>
          <div class="flex max-sm:mb-2 sm:gap-8 grid grid-cols-1 sm:grid-cols-2">
            <div class="mb-4 mb-2">
              <label class="block text-[#023D6A] text-[14px] mb-2">Qué te hace feliz a nivel laboral</label>
              <input v-model="happyWork"
                class="w-full px-3 py-2 border bg-[#F2F2F2] border-[#E4E4E499] text-[#023D6A] text-[13px] rounded-md focus:outline-none focus:border-indigo-500"
                type="text" placeholder="Escribe aquí...">
            </div>
            <div class="mb-4">
              <label class="block text-[#023D6A] text-[14px] mb-2">Cuál es tu talento profesional</label>
              <input v-model="professionalTalent"
                class="w-full px-3 py-2 border bg-[#F2F2F2] border-[#E4E4E499] text-[#023D6A] text-[13px] rounded-md focus:outline-none focus:border-indigo-500"
                type="text" placeholder="Escribe aquí...">
            </div>
          </div>
          <div class="flex grid grid-cols-1">
            <div class="mb-4 mb-0">
              <label for="message" class="block mb-2 text-[#023D6A] text-[14px]">Qué ideas, proyectos o actividades
                has implementado que quieras contar. / Si no tienes experiencia ¿qué ideas tienes para
                implementar?</label>
              <textarea v-model="projectExperience" id="message" rows="4"
                class="block p-2.5 w-full bg-[#F2F2F2] border-[#E4E4E499] text-[#023D6A] text-[13px] rounded-lg border focus:ring-blue-500 focus:border-blue-500"
                placeholder="Escribelas aquí......"></textarea>

            </div>
          </div>
        </div>
      </div>

      <FormationAcademic />

      <WorkExprience />

      <div class="w-full px-4 flex-col py-10 max-w-7xl mx-auto">
        <div class="flex grid grid-cols-1">
          <div class="flex-col mb-4">
            <div class="flex gap-2">
              <label for="message" class="block mb-2 text-[14px] text-[#023D6A] font-medium">Datos complementarios</label>
              <p
                class="flex bg-[#06759F66] h-[23px] text-white tetx-center items-center justify-center rounded-full px-2 text-[12px]">
                Opcional
              </p>
            </div>
            <textarea v-model="supplementaryData" id="message" rows="4"
              class="block p-2.5 w-full text-[13px] text-gray-900 bg-[#F2F2F2] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Añade información complementaria útil para reclutadores"></textarea>
          </div>
        </div>
        <div class="flex gap-8 grid grid-cols-1">
          <div class="mb-4">
            <label class="block text-[#023D6A] text-[14px] mb-2">Elige las 5 competencias que más te
              caracterizan</label>
            <select v-model="skills"
              class="w-full text-[#023D6A] text-[13px] px-3 py-2 border  bg-[#F2F2F2] border-[#E4E4E499] rounded-md focus:outline-none"
              name="" id="">
              <option value="" disabled selected>Selecciona</option>
              <option value="Comunicación efectiva">Comunicación efectiva</option>
              <option value="Trabajo en equipo">Trabajo en equipo</option>
              <option value="Resolución de problemas">Resolución de problemas</option>
              <option value="Liderazgo">Liderazgo</option>
              <option value="Adaptabilidad">Adaptabilidad</option>
              <option value="Pensamiento crítico">Pensamiento crítico</option>
              <option value="Gestión del tiempo">Gestión del tiempo</option>
              <option value="Creatividad">Creatividad</option>
              <option value="Inteligencia emocional">Inteligencia emocional</option>
              <option value="Capacidad de aprendizaje">Capacidad de aprendizaje</option>
            </select>
          </div>
        </div>
        <div class="flex w-full justify-center mt-2">
          <button class="flex gap-3 rounded-full px-5 bg-gradient-to-r from-[#761D74] to-[#0DC6DE] py-2 text-white">
            <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.5 6.875C3.5 4.98938 3.5 4.04657 4.08579 3.46079C4.67157 2.875 5.61438 2.875 7.5 2.875H17.5C19.3856 2.875 20.3284 2.875 20.9142 3.46079C21.5 4.04657 21.5 4.98938 21.5 6.875V13.125C21.5 15.0106 21.5 15.9534 20.9142 16.5392C20.3284 17.125 19.3856 17.125 17.5 17.125H7.5C5.61438 17.125 4.67157 17.125 4.08579 16.5392C3.5 15.9534 3.5 15.0106 3.5 13.125V6.875Z"
                stroke="#F1E8F1" stroke-width="1.5" />
              <path
                d="M3.5 8.41663V8.41663C3.5 8.76498 3.5 8.93916 3.52165 9.08509C3.65091 9.9565 4.33513 10.6407 5.20654 10.77C5.35247 10.7916 5.52665 10.7916 5.875 10.7916H7.25379C7.81715 10.7916 8.09883 10.7916 8.32767 10.9208C8.36958 10.9445 8.40972 10.9711 8.44779 11.0006C8.65568 11.1614 8.76499 11.421 8.9836 11.9402L9 11.9791C9.23473 12.5366 9.3521 12.8154 9.58214 12.9799C9.60103 12.9935 9.6204 13.0063 9.64019 13.0185C9.88113 13.1666 10.1836 13.1666 10.7885 13.1666H14.2115C14.8164 13.1666 15.1189 13.1666 15.3598 13.0185C15.3796 13.0063 15.399 12.9935 15.4179 12.9799C15.6479 12.8154 15.7653 12.5366 16 11.9791L16.0164 11.9402C16.235 11.421 16.3443 11.1614 16.5522 11.0006C16.5903 10.9711 16.6304 10.9445 16.6723 10.9208C16.9012 10.7916 17.1829 10.7916 17.7462 10.7916H19.125C19.4734 10.7916 19.6475 10.7916 19.7935 10.77C20.6649 10.6407 21.3491 9.9565 21.4784 9.08509C21.5 8.93916 21.5 8.76498 21.5 8.41663V8.41663"
                stroke="#F1E8F1" stroke-width="1.5" />
            </svg>
            <span @click="submitForm" class="text-[#F8D2EA] text-[16px]">
              Guardar información
            </span>
          </button>
        </div>
      </div>

      <FooterImages />
      <Footer />
      <div :class="{ 'hidden': stateCambioPassword === false }">
        <PopupPassword :stateCambioPassword="stateCambioPassword"
          @update:stateCambioPassword="stateCambioPassword = $event" />
      </div>
    </div>
  </div>
</template>


<script>
import NavbarTitle from "../../components/NavbarTitle.vue";
import ImageNavbar from "../../components/ImageNavbar.vue";
import SectionInformation from "../../components/SectionInformation.vue";
import ConfigurationWorking from "../../components/ConfigurationWorking.vue";
import FormationAcademic from "../../components/FormationAcademic.vue";
import WorkExprience from "../../components/WorkExprience.vue";
import Footer from "../../components/Footer.vue";
import FooterImages from "../../components/FooterImages.vue";
import PopupPassword from "../../components/PopupPassword.vue";
import axios from "axios";
import FONDOMARCA from "../../assets/FONDOMARCA.png";

export default {
  data() {
    return {
      FONDOMARCA,
      stateCambioPassword: false,
      salary: '',
      levelProfessional: '',
      name: '',
      profession: '',
      specialization: '',
      document: '',
      city: '',
      relocation: false,
      email: '',
      cellphone: '',
      linkedin: '',
      addedValue: '',
      happyWork: '',
      professionalTalent: '',
      projectExperience: '',
      supplementaryData: '',
      skills: ''
    };
  },
  components: {
    ImageNavbar,
    NavbarTitle,
    SectionInformation,
    ConfigurationWorking,
    FormationAcademic,
    WorkExprience,
    Footer,
    FooterImages,
    PopupPassword,
  },
  methods: {
    async submitForm() {
      await this.$refs.configurationComponent.submitData();
      try {
        const payload = {
          salary: this.salary,
          levelProfessional: this.levelProfessional,
          name: this.name,
          profession: this.profession,
          specialization: this.specialization,
          document: this.document,
          city: this.city,
          relocation: this.relocation,
          email: this.email,
          cellphone: this.cellphone,
          linkedin: this.linkedin,
          addedValue: this.addedValue,
          happyWork: this.happyWork,
          professionalTalent: this.professionalTalent,
          projectExperience: this.projectExperience,
          supplementaryData: this.supplementaryData,
          skills: this.skills,
          userId: 1,
        };
        const response = await axios.post('https://seustalentback.onrender.com/generalinformation', payload);
        console.log('Respuesta de la API:', response.data);
        alert('Datos enviados con éxito');
      } catch (error) {
        console.error('Error al enviar los datos:', error);
        alert('Hubo un error al enviar los datos');
      }
    },
  },
};
</script>
