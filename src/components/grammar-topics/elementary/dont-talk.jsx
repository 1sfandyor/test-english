import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import pic from '../../../assets/grammar/elementary/topics/Imperative_form-use.webp';
import pic2 from '../../../assets/grammar/elementary/topics/imperative-exercise-1.webp';
import pic3 from '../../../assets/grammar/elementary/topics/stop.png';

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
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'>Buyruq - Sit down! Don't talk!</h1>
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

            <h2 className='text-[1.6rem] text-[#1a8ec1] mb-3'>Buyruq - Sit down! Don’t talk!</h2>
            <h2 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>1-Mashq</h2>
            <p className=' mb-10 bg-[#f6f6f6] border-[1px] border-s border-[#ccc] p-[8px] inline-block rounded-[2px] font-bold'>Rasmlarga qarang va gaplarni darak yoki inkor ko'rinishdagi buyruq so'z yordamida to'ldiring. Qutidagi fe'llardan foydalaning</p>
            <pre className='inline-block p-[10px] border border-black '>be     drink     drive     fish     smoke     <del>stop</del>     alk     turn     turn off     wash     write</pre>
            
            <div className='w-[55%] my-[15px]'>
              <img className='w-[100%]' src={pic2} alt="..." />
            </div>

            <div className='w-[55%]'>
              <img src={pic3} alt="..." />
            </div>

            <p className='my-7'>EXAMPLE: <span className='inline-block border border-[#d2d2d2] font-[1.1em] p-[2px]'>stop</span> the car.</p>
            <div className='flex my-5 items-center gap-3'>
              {/* Question 1 */}
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>1</span>
              <p className='text-[19px]'>Please </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'>.</p>
            </div>
            
            {/* Question 2*/}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>2</span>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'> in this area.</p>
            </div>

            {/* Question 3 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'>your mobile phone.</p>
            </div>

            {/* Question 4 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>4</span>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'>right.</p>
            </div>

            {/* Question 5 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>5</span>
              <p className='text-[19px]'>Please</p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'>in this area.</p>
            </div>

            {/* Question 6 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'>your name here.</p>
            </div>

            {/* Question 7 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>7</span>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'>careful. The floor is wet.</p>

            </div>

            {/* Question 8 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>8</span>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'>your hands.</p>
            </div>

            {/* Question 9 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>9</span>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'>slowly.</p>
            </div>

            {/* Question 10 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>10</span>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'> this water.</p>
            </div>

            <button className='py-2 px-5 bg-[#1a8ec1] flex justify-center items-center text-white mx-auto rounded-[10px] my-10'>
              Javoblarni Tekshirish
            </button>
          </div>

          {/* EXPLANATIONS */}
          <div className={`my-10 ${hidden}`}>
            <h2 className='text-[1.6rem] py-[10px] my-5 text-[#1a8ec1]'>Buyruq - gramatik jadval</h2>

            <div className='w-[55%]'>
              <img className='w-[100%]' src={pic} alt="..." />
            </div>

            {/* INFO */}
            <div className='info my-10'>
            
            
            {/* Form */}
            <h2 className='text-[1.6rem] py-[10px] my-5 text-[#1a8ec1]'>Tuzilishi</h2>

              <p className='text-[1.1em] font-regular mb-4'>Buyruq uchun ishlatiladigan fe'lning shakli, fe'lning asossiy shaklidir (=the infinitive without to). Bunda subject yo'q. <br /> Inkor buyruq <b>do not</b> yoki <b>don’t</b> + infinitive bilan tuziladi. (subject yo'q)</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>I <b className='text-[#ec6825]'>am writing</b> a book.</i> </li>
                <li><i>She <b className='text-[#ec6825]'>is listening</b> to the radio.</i></li>
                <li><i>They <b className='text-[#ec6825]'>are doing</b> their homework.</i></li>
              </ul>

              <h2 className='text-[1.6rem] py-[10px] my-5 text-[#1a8ec1]'>Qo'llanilishi</h2>
              <h3 className='text-[1.4em] py-[10px] my-5 text-[#1a8ec1]'>Quyidagilar uchun buyruqdan foydalana olasiz:</h3>

              {/* Give instructions */}
              <h4 className='text-[1.2em] text-[#1a8ec1] '>Ko'rsatma berishda</h4>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i><b className='text-[#ec6825]'>Open</b> the package carefully.</i> </li>
                <li><i><b className='text-[#ec6825]'>Connect</b> the cable into the plug.</i></li>
              </ul>

              {/* Give orders*/}
              <h4 className='text-[1.2em] text-[#1a8ec1] '>Buyruq berishda</h4>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i><b className='text-[#ec6825]'>Fasten</b> your seatbelt.</i> </li>
                <li><i><b className='text-[#ec6825]'>Stop</b> talking!</i></li>
                <li><i><b className='text-[#ec6825]'>Run</b>!</i></li>
              </ul>
              

              {/* Offer something or invite someone to something */}
              <h4 className='text-[1.2em] text-[#1a8ec1] '>Biror narsani yoki kimnidir biror narsaga taklif qilishda</h4>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i><b className='text-[#ec6825]'>Have</b>some cookies.</i> </li>
                <li><i><b className='text-[#ec6825]'>Come</b>and <b className='text-[#ec6825]'>sit</b> with us.</i></li>
              </ul>


              {/* Give advice */}
              <h4 className='text-[1.2em] text-[#1a8ec1] '>Maslahat berishda</h4>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i><b className='text-[#ec6825]'>Get</b> some sleep.</i></li>
                <li><i><b className='text-[#ec6825]'>Tell</b> her how you feel.</i></li>
                <li><i><b className='text-[#ec6825]'>Go</b> and <b className='text-[#ec6825]'>have</b> fun.</i></li>
              </ul>


              {/* Give warning */}
              <h4 className='text-[1.2em] text-[#1a8ec1] '>Ogohlantirganda</h4>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i><b className='text-[#ec6825]'>Don’t touch</b> that cable.</i></li>
                <li><i>Please. <b className='text-[#ec6825]'>Stop</b> the car!</i></li>
              </ul>

              {/* You can use let’s + verb to: */}
              <h3 className='text-[1.4em] py-[10px] my-5 text-[#1a8ec1]'><b> let’s + verb</b>ni quyidagilar uchun ishlata olasiz:</h3>

              {/* Takliflar qiling */}
              <h4 className='text-[1.2em] text-[#1a8ec1] font-bold'>Taklif bildirganda.</h4>
              <ul className='list-none pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i><b>(+)</b> It’s very hot today. <b className='text-[#ec6825]'>Let’s go </b> to the swimming pool.</i></li>
                <li><i><b>(-) </b><b className='text-[#ec6825]'>Let’s not go out </b> today. I’m very tired.</i></li>
              </ul>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}