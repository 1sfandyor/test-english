import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import pic from '../../../assets/grammar/elementary/topics/will-form.webp'

export default function ThisThatThose() {

  const [hidden, setHidden] = useState('hidden');
  const [hidden2, setHidden2] = useState('block');
  const exercisesButton = useRef();
  const explanationButton = useRef();

  
  function explanation() {
    setHidden(hidden => hidden = 'block')
    setHidden2(hidden2 => hidden2 = 'hidden')
    exercisesButton.current.classList.remove('active')
    explanationButton.current.classList.add('active')
  }

  function exercises() {
    setHidden2(hidden2 => hidden2 = 'block')
    setHidden(hidden => hidden = 'hidden')
    exercisesButton.current.classList.add('active')
    explanationButton.current.classList.remove('active')
  }
  
  return (
    <>
      <main>
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'>'Will' va 'shall' - Future</h1>
        <div className='container'>
          <ul className="flex border-b-2 border-l-0 border-s border-gray-500 flex-wrap text-sm font-medium text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
            <li className="mr-2">
              <button ref={exercisesButton} onClick={exercises} className='inline-block border-x-2 border-t-2 border-s border-[grey] active py-4 px-[2.5rem] rounded-t-lg  px-20 bg-[#1a8ec1] text-white font-bold'>Mashqlar</button>
            </li>
            <li className="mr-2">
              <button ref={explanationButton} onClick={explanation} className="inline-block border-x-2 border-t-2 border-s border-[grey] py-4 px-[2.5rem] rounded-t-lg  px-20 bg-[#1a8ec1] text-white font-bold">Tushuntirish</button>
            </li>
          </ul>

          {/* EXERCISES */}
          <div className={`my-[10px] ${hidden2}`}>
            <div className='flex items-center justify-end'>
              <p className='font-[300] text-gray-500 mr-2 text text-[25px] items-center'>Mashqlar: </p>
              <Link className='bg-[#1a8ec1] mr-5 w-[50px] h-[40px] flex justify-center items-center text-white rounded-[5px]'>1</Link>
              <Link className='bg-[#1a8ec1] mr-5 w-[50px] h-[40px] flex justify-center items-center text-white rounded-[5px]'>2</Link>
              <Link className='bg-[#1a8ec1] mr-5 w-[50px] h-[40px] flex justify-center items-center text-white rounded-[5px]'>3</Link>
              <Link className='bg-[#1a8ec1] mr-5 w-[50px] h-[40px] flex justify-center items-center text-white rounded-[5px]'>4</Link>
            </div>
            <h2 className='text-[1.2em] font-bold py-[10px] my-5 text-[#1a8ec1]'><b>Will</b> va <b>shall</b> - Future</h2>
            <h1 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>1-Mashq</h1>
            <p className='bg-[#f6f6f6] border-[1px] border-s border-[#ccc] p-[8px] inline-block rounded-[2px] font-bold'>Gaplarni <i>I will (I’ll), Shall I </i> yoki <i>Shall we</i> bilan to'ldiring.</p>
            <div className='flex my-5 items-center gap-3'>

              {/* Question 1 */}
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>1</span>
              <p className='text-[19px]'>A: I'm hungry. B: _____ make some bacon and eggs. </p>
              

            </div>
            
            {/* Question 2*/}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>2</span>
              <p className='text-[19px]'>I hope _____ see you again one day.</p>
              



            </div>

            {/* Question 3 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>A: _____ go to a restaurant tonight? B: Yes. That's a great idea.</p>
              
              


            </div>

            {/* Question 4 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>4</span>
              <p className='text-[19px]'>I don't think _____ go out this weekend. I'm very tired. </p>
              
              


            </div>

            {/* Question 5 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>5</span>
              <p className='text-[19px]'> _____ always love you.</p>
              
              


            </div>

            {/* Question 6 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'> A: It's very hot in this room. B: _____ open the windows?</p>
              
              


            </div>

            {/* Question 7 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>7</span>
              <p className='text-[19px]'>A: _____ have a barbecue on Saturday? B: That's an excellent idea! Who shall we invite?</p>
              
              


            </div>

            {/* Question 8 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>8</span>
              <p className='text-[19px]'>You look thirsty. _____ get you a drink?</p>
              
              


            </div>

            {/* Question 9 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>10</span>
              <p className='text-[19px]'>A: Did you talk to Laura? B: Oh no, I forgot. _____ call her now. </p>
              
              


            </div>

            {/* Question 10 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>9</span>
              <p className='text-[19px]'>I'm sure _____ find a great job soon. </p>
              
              


            </div>
            

            <button className='py-2 px-5 bg-[#1a8ec1] flex justify-center items-center text-white mx-auto rounded-[10px] my-10'>
              Javoblarni Tekshirish
            </button>
          </div>

          {/* EXPLANATIONS */}
          <div className={`my-10 ${hidden}`}>

            {/* INFO */}
            <div className='info my-10'>

              <h2 className='text-[1.6rem] text-[#1a8ec1] mb-3'><b>Will</b> -  Tuzilishi</h2>
              
              <div className='w-[55%] mb-7'>
                <img className='w-[100%]' src={pic} alt="..." />
              </div>
              
              <p className='text-[1.1em] font-regular mb-4'><b>Will</b> yordamchi fe'l hisoblanadi. Bu degani</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>Biz <b>will + </b>infinitive dan foydalanamiz: I<b className='text-[#ec6825]'>'ll be</b> (yoki <b className='text-[#ec6825]'>will be</b>) at home next Saturday.</i></li>
                <li><i><b>Will</b> inkor shaklga ega: I <b className='text-[#ec6825]'>won’t be</b> (yoki <b className='text-[#ec6825]'>won’t be</b>) at home next Saturday. </i></li>
                <li><i>So'roq gaplarda <b>will</b>ni subjectdan oldin qo'yamiz: <b className='text-[#ec6825]'>Will you be</b> at home next Saturday. </i></li>
                <li><i>Qisqa javoblarda <b>will</b> ko'rinishidan foydalanamiz: I <b className='text-[#ec6825]'>will</b>. No, I <b className='text-[#ec6825]'>won't</b> (yoki <b className='text-[#ec6825]'>will not</b>). </i></li>
              </ul>

              {/* Will - use! */}
              <h4 className='text-[1.2em] text-[#1a8ec1] mb-4'><b>Will</b>dan foydallanish</h4>
              <p className='text-[1.1em] font-regular mb-4'>Kelajakda sodir bo'ladi deb o'ylagan narsalarimiz haqida gapirish uchun <b>will</b>dan foydalanamiz.</p>
          
              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>He <b className='text-[#ec6825]'>will</b> love your new coat.</i></li>
                <li><i>They <b className='text-[#ec6825]'>won’t win </b> this match.</i></li>
              </ul>

              <p className='text-[1.1em] font-regular mb-4'><span className='bg-[#ec6825] py-[2px] px-[4px] text-[#fff] font-bold  rounded text-sm leading-3'>Eslatma</span> <b>will</b>ni <b>I think, I don’t think, I hope</b> yoki <b>I’m sure, I’m not sure, perhaps</b> iboralari bilan ishlatish oddiy hol. </p>
              
              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>I hope they <b className='text-[#ec6825]'>will arrive</b> soon.</i></li>
                <li><i>I don't think they<b className='text-[#ec6825]'>'ll win.</b></i></li>
                <li><i>I'm sure you <b className='text-[#ec6825]'>'ll be</b> fine.</i></li>
                <li><i>Perhaps<b className='text-[#ec6825]'>I'll be</b> late.</i></li>
              </ul>

              <p className='text-[1.1em] font-regular mb-4'>Biror nimani vada qilganda yoki rad etganda <b>will</b>dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>I <b className='text-[#ec6825]'>will lend</b> her the money.</i></li>
                <li><i>I <b className='text-[#ec6825]'>won't help </b> you.</i></li>
              </ul>

              <p className='text-[1.1em] font-regular mb-4'>Gapirayotgan paytizmizda qaror qabul qilganda <b>will</b> dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>A: There's no milk in the fridge. B: I'<b className='text-[#ec6825]'>ll go</b> to the shop to buy some more.</i></li>
                <li><i>A: This box is very heavy. B: Don’t worry. I’<b className='text-[#ec6825]'>ll help</b> you.</i></li>
              </ul>



              {/* Physical descriptions */}
              <h2 className='text-[1.6rem] text-[#1a8ec1] font-bold'>Shall I…? Shall we…?</h2>
              <p className='text-[1.1em] font-regular mb-4'>Kimdir uchun nimadir qilishni taklif qilmoqchi bo'lganimizda <b>Shall I…?</b> yoki <b>I'll</b>dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[10px]'>
                <li><i><b className='text-[#ec6825]'>Shall I make</b> some coffee ?</i> (=Do you want me to make coffee?)</li>
                <li><i>I<b className='text-[#ec6825]'>'ll make</b> some coffee.</i></li>
              </ul>

              <p className='text-[1.1em] font-regular mb-4'>Biror narsa qilishni taklif qilganimizda <b>Shall we...?</b> dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i><b className='text-[#ec6825]'>Shall we</b> go to the cinema? (=Do you want to go to the cinema?)</i></li>
              </ul>


            </div>
          </div>
        </div>
      </main>
    </>
  )
}