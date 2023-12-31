import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import pic from '../../../assets/grammar/elementary/topics/have-got_form.webp'

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
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'>Have got</h1>
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
            <h4 className='text-[1.2em] font-bold py-[10px] my-5 text-[#1a8ec1]'>Have got</h4>
            <h1 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>1-Mashq</h1>
            <p className='bg-[#f6f6f6] border-[1px] border-s border-[#ccc] p-[8px] inline-block rounded-[2px] font-bold'>Gaplarni to'ldirish uchun to'g'ri fe'l shaklini tanlang.</p>
            <div className='flex my-5 items-center gap-3'>

              {/* Question 1 */}
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>1</span>
              <p className='text-[19px]'>1 _____ a pen? </p>
              

            </div>
            
            {/* Question 2*/}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>2</span>
              <p className='text-[19px]'>They _____ any children.</p>
              



            </div>

            {/* Question 3 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>A: 'Have you got a car?' B: 'Yes, I _____.' </p>
              
              


            </div>

            {/* Question 4 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>4</span>
              <p className='text-[19px]'>When we were kids, we _____ many toys. </p>
              
              


            </div>

            {/* Question 5 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>5</span>
              <p className='text-[19px]'> He ____ a very nice family.</p>
              
              


            </div>

            {/* Question 6 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'> There is a door here. _____ the key ?  </p>
              
              


            </div>

            {/* Question 7 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>7</span>
              <p className='text-[19px]'>They _____ two cats and two dogs.  </p>
              
              


            </div>

            {/* Question 8 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>8</span>
              <p className='text-[19px]'> _____ a question? </p>
              
              


            </div>

            {/* Question 9 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>10</span>
              <p className='text-[19px]'>I _____ the answer to your question.</p>
              
              


            </div>

            {/* Question 10 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>9</span>
              <p className='text-[19px]'>I _____ a lot of money at the moment. </p>
              
              


            </div>
            

            <button className='py-2 px-5 bg-[#1a8ec1] flex justify-center items-center text-white mx-auto rounded-[10px] my-10'>
              Javoblarni Tekshirish
            </button>
          </div>

          {/* EXPLANATIONS */}
          <div className={`my-10 ${hidden}`}>

            {/* INFO */}
            <div className='info my-10'>

              <h2 className='text-[1.6rem] text-[#1a8ec1] mb-3'>Have got - Tuzilishi</h2>
              
              <div className='w-[55%] mb-7'>
                <img className='w-[100%]' src={pic} alt="..." />
              </div>


              {/* Have got (British English) = have (American English) */}
              <h4 className='text-[1.2em] text-[#1a8ec1] mb-4'>Have got (Britancha Ingliz tili) = have (Amerikanch Ingliz tili)</h4>
              <p className='text-[1.1em] font-regular mb-4'><b>Have got</b> fe'li asosan Buyuk Britaniyada, aholi o'rtasidagi og'zaki nutqda qo'llaniladi. Amerikaliklar esa <b>have</b> fe'lidan foydalanishadi.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>I<b className='text-[#ec6825]'>'ve got</b> a car. = I have a car.</i></li>
                <li><i>I <b className='text-[#ec6825]'>haven’t got</b> a car. = I don’t have a car.</i></li>
                <li><i><b className='text-[#ec6825]'>Have</b> you <b className='text-[#ec6825]'>Have</b> a car? = Do you have a car?.</i></li>
              </ul>

              {/* Be careful with this common mistake! */}
              <h4 className='text-[1.2em] text-[#1a8ec1] mb-4'>Quyidagi keng tarqalgan xatoni qilmang</h4>
              <p className='text-[1.1em] font-regular mb-4'><b>Have got</b> fe'li faqatgina present zamonidagi so'zlarda qi'llaniladi.</p>
          
              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>I <b className='text-[#ec6825]'>had</b> a car. (<del>had got</del> EMAS)</i></li>
                <li><i>I <b className='text-[#ec6825]'>didn’t have </b> a car. (<del>hadn't got</del> EMAS)</i></li>
                <li><i><b className='text-[#ec6825]'>Did</b> you <b className='text-[#ec6825]'>have</b> car? (<del>Had you got</del> EMAS)</i></li>
              </ul>

              {/* Have got – use */}
              <h2 className='text-[1.6rem] text-[#1a8ec1] mb-3'>Have got – qo'llanilishi</h2>
              <h4 className='text-[1.2em] text-[#1a8ec1] mb-4'>Egalik yoki oila haqida gapirganda</h4>
              
              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>She<b className='text-[#ec6825]'>'s got</b> a nice apartment.</i></li>
                <li><i><b className='text-[#ec6825]'>Have </b> you <b className='text-[#ec6825]'>got</b> a computer?</i></li>
                <li><i>I <b className='text-[#ec6825]'>haven't got</b> any brothers or sisters.</i></li>
              </ul>

              {/* Ilnesses */}
              <h4 className='text-[1.2em] text-[#1a8ec1] '>Kasalliklar haqida gapirganda</h4>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>I<b className='text-[#ec6825]'>'ve got</b> a headache.</i></li>
                <li><i>She<b className='text-[#ec6825]'>'s got</b> a cold.</i></li>
              </ul>

              {/* Physical descriptions */}
              <h4 className='text-[1.2em] text-[#1a8ec1] '>Kimnidir tasvirlaganda</h4>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>He<b className='text-[#ec6825]'>'s got</b> brown hair and a long nose.</i></li>
                <li><i>They<b className='text-[#ec6825]'>'ve got</b> blue eyes.</i></li>
              </ul>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}