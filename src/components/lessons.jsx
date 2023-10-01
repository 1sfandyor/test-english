import TopicCards from "../components/topic-cards"
import grammar from '../assets/grammar.webp'
import listening from '../assets/listening.webp'
import reading from '../assets/reading.webp'
import useofenglish from '../assets/useofenglish.webp'
import writing from '../assets/writing.jpg'
import exams from '../assets/exams.webp'
import leveltest from '../assets/leveltest.webp'

export default function Lessons() {
  return (
    <div className='container2 mt-10'>
        <h2 className='text-center mb-10 text-[35px] font-bold'>Bugun nima <span className='text-[40px] text-[#50af31]'>o&apos;rganmoqchisiz?</span></h2>
        <div className='flex justify-between items-center flex-wrap'>
            <TopicCards img={grammar} topic={'Gramatika darslari'} desc={'Har bir darajani o\'z ichiga olgan oddiy grammatika darslarini o\'rganing: A1, A2, B1, B1+, B2. Har bir darsda uchta yoki undan ortiq mashqlar, tushuntirib berishlar va har bir savol uchun fikr-mulohazalar mavjud!'} color={'1a8ec1'} path={'grammar'} />

            <TopicCards img={listening} topic={'Listening darslari'} desc={"Audio va video testlar bilan listening bo'yicha ko'nikmalaringizni kuchaytiring. Har bir darajaga mos testlar mavjud: A1, A2, B1, B1+, B2. Javoblaringizni yuborganingizdan so'ng audioning transkripsiyasini ko'rishingiz mumkin bo'ladi."} color={'fecc00'} path={'listening'} />

            <TopicCards img={reading} topic={'Reading darslari'} desc={"Reading bo'yicha ko'nikmalaringizni oshirmoqchimisiz ? Bu yerda A1, A2, B1 va B2 darajalar uchun reading teslar mavjud, Har bir testda har xil savol turlari va matnlarni topishingiz mumkin."} color={'ed1c24'} path={'reading'} />

            <TopicCards img={useofenglish} topic={'Ingliz tilidan foydalanish'} desc={"Ushbu testlarning har birida ma'lum bir daraja uchun o'rgangan turli grammatika darslaringiz bo'yicha 15 ta ko'p tanlovli savollarni topasiz: A1, A2, B1, B1+ va B2. Har bir javob uchun fikr-mulohaza olasiz."} color={'ec6825'} path={'useofenglish'} />

            <TopicCards img={writing} topic={'Writing darslari'} desc={"Har bir darsda tavsiya etilgan mashqlar yordamida writing bilimlaringizni yaxshilang. Har bir daraja uchun har xil turdagi matnlar mavjud : A1, A2, B1, B1+ yoki B2. Siz o'z ... matnni qanday tuzish va bir biriga bog'lashni o'rganasiz."} color={'a84d98'} path={'writing'} />

            <TopicCards img={exams} topic={'Imtihonlar'} desc={"Bizning amaliy materiallarimiz yordamida imtihon topshirish ko'nikmalaringini oshiring va yaxshi natijalarga erishing. Test-English sizga Cambridge KEY, Cambridge Preliminary, Cambridge First, IELTS yoki TOEFL iBT imtihonlarida yordam beradi."} color={'50af31'} path={'exams'} />

            <TopicCards img={leveltest} topic={'Darajani aniqlash testi'} desc={"Darajangi qandayligini bilmasangiz havaotir olamang, siz ushbu online testni topshirib ko'rishingiz mumkin. Bu yerda 60-ta ko'p tanlovli savollar mavjuda va hech qanday vaqt belgilanmangan. Testni tugatganingizdan so'ng javoblarni ko'rishingiz mumkin."} color={'50af31'} path={'leveltest'} />

        </div>
    </div>
  )
}
