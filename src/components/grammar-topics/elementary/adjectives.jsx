import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import pic from '../../../assets/grammar/elementary/topics/adjectives.png'

export default function ThisThatThose() {

  const [hidden, setHidden] = useState('hidden')
  const [hidden2, setHidden2] = useState('block')
  const exercisesButton = useRef()
  const explanationButton = useRef()

  
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
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'>Adjective-lar – old, interesting, expensive, va hkz.</h1>
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
            <h4 className='text-[1.2em] font-bold py-[10px] my-5 text-[#1a8ec1]'>Adjective-lar – old, interesting, expensive, va hkz.</h4>
            <h1 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>1-Mashq</h1>
            <p className='bg-[#f6f6f6] border-[1px] border-s border-[#ccc] p-[8px] inline-block rounded-[2px] font-bold'>Quyidagi gaplarni to'ldirish uchun to'g'ri adjective-larni tanlang.</p>
            <div className='flex my-5 items-center gap-3'>

              {/* Question 1 */}
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>1</span>
              <p className='text-[19px]'> With this makeup, your eyes.</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="lDifferents">look differents</option>
                <option value="lDifferent">look different</option>
                <option value="dLook">different look</option>
              </select>
            </div>
            
            {/* Question 2*/}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>2</span>
              <p className='text-[19px]'> These are </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="documents importants">documents importants</option>
                <option value="important documents">important documents</option>
                <option value="documents importants">documents important</option>
              </select>
                </div>

            {/* Question 3 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="Are they happies">Are they happies</option>
                <option value="Are they happy">Are they happy</option>
                <option value="Are happy they">Are happy they</option>
              </select>
              <p className='text-[19px]'>in their new house?</p>
            </div>

            {/* Question 4 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>4</span>
              <p className='text-[19px]'>He has </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="an interesting job">an interesting job</option>
                <option value="a job interview">a job interview</option>
              </select>
            </div>

            {/* Question 5 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>5</span>
              <p className='text-[19px]'>Sit down. You </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="look tired">look tired</option>
                <option value="smell tired">smell tired</option>
                <option value="tired look">tired look</option>
              </select>
            </div>

            {/* Question 6 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>6</span>
              <p className='text-[19px]'>Our holidays </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are fantastic">are fantastic</option>
                <option value="are fantastics">are fantastics</option>
                <option value="fantastic are ">fantastic are</option>
              </select>
            </div>

            {/* Question 7 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>7</span>
              <p className='text-[19px]'> John has problems at home</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="Are good his marks">Are good his marks</option>
                <option value="Are goods his marks">Are goods his marks</option>
                <option value="Are his marks good">Are his marks good</option>
              </select>
              <p className='text-[19px]'>?</p>
            </div>

            {/* Question 8 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>8</span>
              <p className='text-[19px]'>Their project </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="sounds interesting">sounds interesting</option>
                <option value="interesting looks">interesting looks</option>
                <option value="tastes interesting">tastes interesting</option>
              </select>
            </div>

            {/* Question 9 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>9</span>
              <p className='text-[19px]'>These cookies  </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are excellents">are excellents</option>
                <option value="excellent are">excellent are</option>
                <option value="are excellent">are excellent</option>
              </select>
            </div>

            {/* Question 10 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>10</span>
              <p className='text-[19px]'>Her eyes</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are blues">are blues</option>
                <option value="are blue">are blue</option>
                <option value="blue are">blue are</option>
              </select>
              <p className='text-[19px]'> hour.</p>
            </div>

            <button className='py-2 px-5 bg-[#1a8ec1] flex justify-center items-center text-white mx-auto rounded-[10px] my-10'>
              Javoblarni Tekshirish
            </button>
          </div>

          {/* EXPLANATIONS */}
          <div className={`my-10 ${hidden}`}>
            <h1 className='text-[1.6rem] py-[10px] my-5 text-[#1a8ec1]'>Ingliz tilida adjectivelar – grammatika jadvali</h1>

            <div className='w-[55%]'>
              <img className='w-[100%]' src={pic} alt="..." />
            </div>

            {/* INFO */}
            <div className='info my-10'>

              {/* Adjective + noun */}
              <h4 className='text-[1.2em] text-[#1a8ec1]'>Adjective + noun</h4>
              <p className='text-[1.1em] font-regular mb-4'>Ingliz tilida adjectivelarni noun bilan ishlatganimizda, adjective <b>noun-dan oldin</b> keladi.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>It’s an <span className='text-[#ec6825]'><b>expensive guitar</b></span>. (<del>It’s a guitar expensive</del> EMAS.)</i></li>
                <li><i>She has a <span className='text-[#ec6825]'><b>new car</b></span>.</i></li>
              </ul>

              {/* Am/is/are + adjective */}
              <h4 className='text-[1.2em] text-[#1a8ec1]'><b>Am/is/are</b> + adjective</h4>
              <p className='text-[1.1em] font-regular mb-4'>Bundan tashqari adjective-larni <b>be</b> fe'lidan keyin noun-siz ham ishlata olamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>This guitar <b className='text-[#ec6825]'>is expensive</b>. </i></li>
                <li><i>Her car <b className='text-[#ec6825]'>is new</b>.</i></li>
              </ul>

              {/* In questions the adjective can go after be + subject. */}
              <p className='text-[1.1em] font-regular mb-4'>So'roq gaplarda adjective-lar <b>be</b> + subjectdan keyin keladi.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px] '>
                <li><i>Is your car <b className='text-[#ec6825]'>new</b> ?</i></li>
                <li><i>Are your classmates <b className='text-[#ec6825]'>nice</b>?</i></li>
              </ul>

              {/* Feel/look/smell/sound/taste + adjective */}
              <h4 className='text-[1.2em] text-[#1a8ec1]'><b>Feel/look/smell/sound/taste</b> + adjective</h4>
              <p className='text-[1.1em] font-regular mb-4'>Bundan tashqari <b>feel, look, smell, sound, taste</b> kabi mavhum fe'llardan oldin noun-siz adjectivelarni ham ishlatishimiz mumkin.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[70px]'>
                <li><i>Your idea <b className='text-[#ec6825]'>sounds interesting</b>.</i></li>
                <li><i>I don’t like this soup. It <b className='text-[#ec6825]'>tastes horrible</b>.</i></li>
                <li><i>You <b className='text-[#ec6825]'>look tired</b>.</i></li>
                <li><i>These cookies <b className='text-[#ec6825]'>smell delicious</b>.</i></li>
                <li><i>I <b className='text-[#ec6825]'>feel depressed</b>.</i></li>
              </ul>


              {/* No plural */}
              <h4 className='text-[1.2em] text-[#1a8ec1]'>Ko'plik shakli mavjud emas</h4>
              <p className='text-[1.1em] font-regular mb-4'>Ingliz tilida Adjective-larning <b>ko'plik</b> shakli mavjud emas. Ular doim birlik shaklida bo'ladi.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[70px]'>
                <li><i>These are my <b className='text-[#ec6825]'>favourite</b> shoes. (<del>These are my favourites shoes</del> EMAS)</i></li>
                <li><i>She has <b className='text-[#ec6825]'>blue</b> eyes. (<del>She has blues eyes</del> EMAS)</i></li>
              </ul>


              {/* Very/quite */}
              <h4 className='text-[1.2em] text-[#1a8ec1]'>Very/quite</h4>
              <p className='text-[1.1em] font-regular mb-4'><b>Very</b> va <b>quite</b>-ni adjective-lardan oldin ishlatamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[70px]'>
                <li><i>It's <b className='text-[#ec6825]'>very</b> exprensive.</i></li>
                <li><i>It's <b className='text-[#ec6825]'>quite</b> exprensive.</i></li>
              </ul>


            </div>
          </div>
        </div>
      </main>
    </>
  )
}