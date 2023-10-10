import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import tobe from '../../../assets/grammar/elementary/topics/at-in-on_time.webp'

export default function ToBe() {

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
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'> At, in, on – vaqt predloglari </h1>
        <div className='container'>
          <ul className="flex border-b-2 border-l-0 border-s border-gray-500 flex-wrap text-sm font-medium text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
              <li className="mr-2">
                  <button ref={exercisesButton} onClick={exercises} className='inline-block border-x-2 border-t-2 border-s border-[grey] active py-4 px-[2.5rem] rounded-t-lg  px-20 bg-[#1a8ec1] text-white font-bold'>Mashqlar</button>
              </li>
              <li className="mr-2">
                  <button ref={explanationButton} onClick={explanation} className="inline-block border-x-2 border-t-2 border-s border-[grey] py-4 px-[2.5rem] rounded-t-lg  px-20 bg-[#1a8ec1] text-white font-bold">Tushuntirish</button>
              </li>
          </ul>

          {/* EXERCISE */}
          <div className={`my-[10px] ${hidden2}`}>
            <div className='flex items-center justify-end'>
              <p className='font-[300] text-gray-500 mr-2 text text-[25px] items-center'>MASHQLAR: </p>
              <Link className='bg-[#1a8ec1] mr-5 w-[50px] h-[40px] flex justify-center items-center text-white rounded-[5px]'>1</Link>
              <Link className='bg-[#1a8ec1] mr-5 w-[50px] h-[40px] flex justify-center items-center text-white rounded-[5px]'>2</Link>
              <Link className='bg-[#1a8ec1] mr-5 w-[50px] h-[40px] flex justify-center items-center text-white rounded-[5px]'>3</Link>
              <Link className='bg-[#1a8ec1] mr-5 w-[50px] h-[40px] flex justify-center items-center text-white rounded-[5px]'>4</Link>
            </div>
            <h1 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>At, in, on - vaqt predloglari </h1>
            <h1 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>1- MASHQLAR</h1>
            <p className='bg-[#dbdbdb88] border-2 border-s border-black p-3 inline-block rounded-[10px] font-bold'>Quyidagi gaplarni to'ldirish uchun <i>at, in, on</i>-ni tanlang tanlang.</p>

            {/* Question 1 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>1</span>
              <p className='text-[19px]'>See you </p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">at</option>
                <option value="are">on</option>
                <option value="are">in</option>
              </select>
              <p className='text-[19px]'>Friday</p>
            </div>

            {/* Question 2 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>2</span>
              <p className='text-[19px]'>I brush my teeth</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">in</option>
                <option value="are">at</option>
                <option value="are">on</option>
              </select>
              <p className='text-[19px]'>the morning.</p>
            </div>

            {/* Question 3 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>The match is</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">on</option>
                <option value="are">in</option>
                <option value="are">at</option>
              </select>
              <p className='text-[19px]'>4 o'clock.</p>
            </div>

            {/* Question 4 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>4</span>
              <p className='text-[19px]'>We have lunch </p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">at</option>
                <option value="are">on</option>
                <option value="are">in</option>
              </select>
              <p className='text-[19px]'>midday.</p>
            </div>

            {/* Question 5 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>5</span>
              <p className='text-[19px]'> I'm busy </p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">on</option>
                <option value="am">at</option>
                <option value="are">in</option>
              </select>
              <p className='text-[19px]'>the moment.</p>
            </div>

            {/* Question 6 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>6</span>
              <p className='text-[19px]'>My parents always visit me </p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">in</option>
                <option value="are">at</option>
                <option value="are">on</option>
              </select>
              <p className='text-[19px]'>my birthday.</p>
            </div>

            {/* Question 7 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>7</span>
              <p className='text-[19px]'> He was born </p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">in</option>
                <option value="are">on</option>
                <option value="are">at</option>
              </select>
              <p className='text-[19px]'>the 19th century.</p>
            </div>

            {/* Question 8 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>8</span>
              <p className='text-[19px]'>He usually goes on holiday </p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">in</option>
                <option value="are">at</option>
                <option value="are">on</option>
              </select>
              <p className='text-[19px]'>July</p>
            </div>

            {/* Question 9 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>9</span>
              <p className='text-[19px]'>They always get together </p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">at</option>
                <option value="are">on</option>
                <option value="are">in</option>
              </select>
              <p className='text-[19px]'>Christmas?</p>
            </div>
 
            {/* Question 10 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>10</span>
              <p className='text-[19px]'>You can come </p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">at</option>
                <option value="are">in</option>
              </select>
              <p className='text-[19px]'>the weekend</p>
            </div>

            <button className='py-2 px-5 bg-[#1a8ec1] flex justify-center items-center text-white mx-auto rounded-[10px] my-10'>
              Javoblarni Tekshirish
            </button>
          </div>


          {/* EXPLANATION */}
          <div className={`my-10 ${hidden}`}>
            <h1 className='text-[30px] py-[10px] my-5 text-[#1a8ec1]'><b><i>At, in, on -</i> vaqt predloglar</b></h1>

            <div className='w-[55%]'>
              <img className='w-[100%]' src={tobe} alt="..." />
            </div>

            <div className='info my-10'>

              {/* AT */}
              <p className='text-[1.1em] font-regular mb-4'>➪ Mealtimes, bedtime va shu kabi kunning ma'lum bir vaqtlarini ifodalashda <b>at</b>-dan foydalaning.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i><span className='text-[#ec6825]'><b>at</b> </span> o’clock</i></li>
                <li><i><span className='text-[#ec6825]'><b>at</b> </span> 10.30 am</i></li>
                <li><i><span className='text-[#ec6825]'><b>at</b> </span> noon</i></li>
                <li><i><span className='text-[#ec6825]'><b>at</b> </span> dinnertime</i></li>
                <li><i><span className='text-[#ec6825]'><b>at</b> </span> bedtime</i></li>
                <li><i><span className='text-[#ec6825]'><b>at</b> </span> sunrise</i></li>
                <li><i><span className='text-[#ec6825]'><b>at</b> </span> sunset</i></li>
                <li><i><span className='text-[#ec6825]'><b>at</b> </span> the moment</i></li>
              </ul>

              {/* IN */}
              <p className='text-[1.1em] font-regular mb-4'>➪ Oylar, fasllar, yillar, asrlar va umuman uzoq muddatlarni ifodalashda <b>in</b> dan foydalaning.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i><span className='text-[#ec6825]'><b>in</b></span> May</i></li>
                <li><i><span className='text-[#ec6825]'><b>in</b></span> the summer</i></li>
                <li><i><span className='text-[#ec6825]'><b>in</b></span> 1990</i></li>
                <li><i><span className='text-[#ec6825]'><b>in</b></span> the 1990s</i></li>
                <li><i><span className='text-[#ec6825]'><b>in</b></span> the 20th century</i></li>
                <li><i><span className='text-[#ec6825]'><b>in</b></span> the Ice Age</i></li>
                <li><i><span className='text-[#ec6825]'><b>in</b></span> the past/future</i></li>
              </ul>

              
              {/* ON */}
              <p className='text-[1.1em] font-regular mb-4'>➪ Kunlar va sanalarda <b>on</b> dan foydalaning.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i><span className='text-[#ec6825]'><b>on</b></span> Sunday</i></li>
                <li><i><span className='text-[#ec6825]'><b>on</b></span> Tuesday mornings</i></li>
                <li><i><span className='text-[#ec6825]'><b>on</b></span> 6 March</i></li>
                <li><i><span className='text-[#ec6825]'><b>on</b></span> 25 December 2010</i></li>
                <li><i><span className='text-[#ec6825]'><b>on</b></span> Christmas Day</i></li>
                <li><i><span className='text-[#ec6825]'><b>on</b></span> Independence Day</i></li>
                <li><i><span className='text-[#ec6825]'><b>on</b></span> my birthday</i></li>
                <li><i><span className='text-[#ec6825]'><b>on</b></span> my New Year's Eve</i></li>
              </ul>

              {/* AT */}
              <p className='text-[1.1em] font-regular mb-4'>➪ Quyidagi umumiy iboralarda <b>at</b>-dan foydalaning.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i><span className='text-[#ec6825]'><b>at</b></span> the weekend: I don’t usually work <span className='text-[#ec6825]'><b>at</b></span> the weekend.</i></li>
                <li><i><span className='text-[#ec6825]'><b>at</b></span> Christmas/Easter: I stay with my family <span className='text-[#ec6825]'><b>at</b></span> Christmas.</i></li>
                <li><i><span className='text-[#ec6825]'><b>at</b></span> the same time: We finished the test <span className='text-[#ec6825]'><b>at</b></span> the same time.</i></li>
                <li><i><span className='text-[#ec6825]'><b>at</b></span> present/<span className='text-[#ec6825]'><b>at</b></span> the moment: He’s not home <span className='text-[#ec6825]'><b>at</b></span> present. Try later.</i></li>
              </ul>

              <p className='text-[1.1em] font-regular mb-4'>➪  Kunning bir qismida:</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i><span className='text-[#ec6825]'><b>in</b></span> the morning</i></li>
                <li><i><span className='text-[#ec6825]'><b>in</b></span> the afternoon</i></li>
                <li><i><span className='text-[#ec6825]'><b>in</b></span> the evening</i></li>
                <li><i><span className='text-[#ec6825]'><b>in</b></span> the night</i></li>
              </ul>

              <h1 className='text-[30px] py-[10px] my-5 text-[#1a8ec1]'><b>Last, next, every</b> va <b>this</b></h1>

              <p className='text-[1.1em] font-regular mb-4'><b>last, next, every, this</b> ni ishlatganimizda <b>at, in, on</b> dan foydalanmaymiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i>I went to London <b className='text-[#ec6825]'>last</b> June. (<del>in last June</del> EMAS). </i></li>
                <li><i>He’s coming back <b className='text-[#ec6825]'>next</b> Tuesday. (<del>on next Tuesday</del> EMAS). </i></li>
                <li><i>I go home <b className='text-[#ec6825]'>every</b> Easter. (<del>at every Easter</del> EMAS). </i></li>
                <li><i>We’ll call you <b className='text-[#ec6825]'>this</b> evening. (<del>in this evening</del>) EMAS. </i></li>
              </ul>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}