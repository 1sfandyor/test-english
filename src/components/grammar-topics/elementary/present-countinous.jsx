import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import pic from '../../../assets/grammar/elementary/topics/Present-continuous-form-new-1.webp'

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
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'>Present continuous – I’m doing, I’m not doing, Are you doing?</h1>
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
            <h4 className='text-[1.2em] font-bold py-[10px] my-5 text-[#1a8ec1]'>Present continuous – I’m doing, I’m not doing, Are you doing?</h4>
            <h1 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>1-Mashq</h1>
            <p className='bg-[#f6f6f6] border-[1px] border-s border-[#ccc] p-[8px] inline-block rounded-[2px] font-bold'>Qavs ichidagi fe'llardan foydalanib present continuous-da darak yoki inkor shaklini yozing.</p>
            <div className='flex my-5 items-center gap-3'>

              {/* Question 1 */}
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>1</span>
              <p className='text-[19px]'>He </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'>(save) money because he wants to buy a car.</p>
            </div>
            
            {/* Question 2*/}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>2</span>
              <p className='text-[19px]'>You </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'> (not listen) to me.</p>
            </div>

            {/* Question 3 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>My parents  </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'> (look) for a new apartment.</p>
            </div>

            {/* Question 4 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>4</span>
              <p className='text-[19px]'>The victim </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'>(not cooperate) with the police.</p>
            </div>

            {/* Question 5 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>5</span>
              <p className='text-[19px]'>We </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'> (plan) a trip to Japan.</p>
            </div>

            {/* Question 6 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>I </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'> (cook) fish for dinner. </p>
            </div>

            {/* Question 7 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>7</span>
              <p className='text-[19px]'>The water </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'> (boil). You can put the pasta now.  </p>

            </div>

            {/* Question 8 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>8</span>
              <p className='text-[19px]'>He </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'>(not train) because he has health problems.</p>
            </div>

            {/* Question 9 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>9</span>
              <p className='text-[19px]'>I </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'>(not work) at present. I'm unemployed. </p>
            </div>

            {/* Question 10 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>10</span>
              <p className='text-[19px]'>It</p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'>(not rain) now. We can go to the park. </p>
            </div>

            <button className='py-2 px-5 bg-[#1a8ec1] flex justify-center items-center text-white mx-auto rounded-[10px] my-10'>
              Javoblarni Tekshirish
            </button>
          </div>

          {/* EXPLANATIONS */}
          <div className={`my-10 ${hidden}`}>
            <h1 className='text-[1.6rem] py-[10px] my-5 text-[#1a8ec1]'>Present continuous – Tuzilishi</h1>

            <div className='w-[55%]'>
              <img className='w-[100%]' src={pic} alt="..." />
            </div>

            {/* INFO */}
            <div className='info my-10'>

              {/* Positive form*/}
              <p className='text-[1.1em] font-regular mb-4'>Biz fe'lning <b>am/is/are</b> + <b>-ing</b> shakli yordamida present continuous-ni tuzamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>I <b className='text-[#ec6825]'>am writing</b> a book.</i> </li>
                <li><i>She <b className='text-[#ec6825]'>is listening</b> to the radio.</i></li>
                <li><i>They <b className='text-[#ec6825]'>are doing</b> their homework.</i></li>
              </ul>


              {/* Short form*/}
              <p className='text-[1.1em] font-regular mb-4'><b>am/is/are</b> ning qisqartma shakli <b>'m/'s/'re</b></p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>I <b className='text-[#ec6825]'>'m writing</b> a book.</i> </li>
                <li><i>She <b className='text-[#ec6825]'>'s listening</b> to the radio.</i></li>
                <li><i>They <b className='text-[#ec6825]'>'re doing</b> their homework.</i></li>
              </ul>

              {/* negative form*/}
              <p className='text-[1.1em] font-regular mb-4'><b>am not/is not/are not</b> ning qisqartma shakli <b>'m not/isn't/aren't</b></p>


              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>I <b className='text-[#ec6825]'>'m not writing</b> a book.</i> </li>
                <li><i>She <b className='text-[#ec6825]'>isn't listening</b> to the radio.</i></li>
                <li><i>They <b className='text-[#ec6825]'>aren't doing</b> their homework.</i></li>
              </ul>
              
              {/* NOTE */}
              <p className='text-[1.1em] font-regular mb-4'>
              <span class="bg-yellow-700 text-wgute text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-700 dark:text-white border border-yellow-700"><b>Unutmang</b></span>
              qisqartmalarni faqat inkordagi qisqa javoblar uchungina ishlatishimiz mumkin. Lekin Darak gaplardagi qisqa javoblarda foydalana olmaymiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>Are you writing a book?’ ‘No, <b className='text-[#ec6825]'>I’m not/I am not</b>'.</i> </li>
                <li><i>Are you writing a book?’ ‘Yes, <b className='text-[#ec6825]'>I am</b>'.</i> (<i><del> Yes, I’m.</del></i> EMAS)</li>
              </ul>


              {/* Actions happening now */}
              <h4 className='text-[1.2em] text-[#1a8ec1] '>Hozir sodir bo'layotgan ish harakatlarida</h4>

              <p className='text-[1.1em] font-regular mb-4'>Biz aynan hozir sodir bo'layotgan ish harakati haqida gapirayotganimizda Present Continuous-dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>'What <b className='text-[#ec6825]'>are</b> you <b className='text-[#ec6825]'>doing</b>?' 'I<b className='text-[#ec6825]'>'m watching</b> TV.</i></li>
              </ul>


              {/* Actions happening around now */}
              <h4 className='text-[1.2em] text-[#1a8ec1] '>Shu yaqinda sodir bo'layotgan ish harakatlarida</h4>

              <p className='text-[1.1em] font-regular mb-4'>Biz shu kunlarda sodir bo'layotgan vaqtinchalik ish harakatlarini ifodalshda ham present Continuousdan foydalanamiz (=Aynan gapirayotgan paytimizda emas ammo shu kunlarda yoki shu haftalarda va hkz.)</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>I<b className='text-[#ec6825]'>'m reading</b> a very good book at the moment. (=I'm not reading it at the moment I'm speaking, but I'm reading it these days)</i></li>
              </ul>


              {/* Now, these days, at the moment, etc. */}
              <h4 className='text-[1.2em] text-[#1a8ec1] font-bold'>Now, these days, at the moment, va hkz.</h4>

              <p className='text-[1.1em] font-regular mb-4'>Biz "hozir" yoki "shu yaqinda" degan ma'noni anglatuvchi vaqt iboralarini Present Continuous bilan ishlatamiz. Masalan: <b>now, at the moment, at present, today, these days, this week, va hokazo</b>.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}