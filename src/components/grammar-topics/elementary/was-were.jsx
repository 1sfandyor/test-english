import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import pic from '../../../assets/grammar/elementary/topics/was-were.jpg'

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
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'>Was/were - 'be' ning past simple shakli</h1>
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
            <h4 className='text-[1.2em] font-bold py-[10px] my-5 text-[#1a8ec1]'>Was/were - 'be' ning past simple shakli</h4>
            <h1 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>1-Mashq</h1>
            <p className='bg-[#f6f6f6] border-[1px] border-s border-[#ccc] p-[8px] inline-block rounded-[2px] font-bold'>Gaplarni to'ldirish uchun was/were yoki am/is/are ni tanlang.</p>
            <div className='flex my-5 items-center gap-3'>

              {/* Question 1 */}
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>1</span>
              <p className='text-[19px]'>My son </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="not drink">was</option>
                <option value="don't drink">were</option>
              </select>
              <p className='text-[19px]'> short in school, but now he </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="not drink">are</option>
                <option value="don't drink">am</option>
                <option value="don't drink">is</option>
              </select>
              <p className='text-[19px]'> tail.</p>

            </div>
            
            {/* Question 2*/}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>2</span>
              <p className='text-[19px]'>'</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="haves">Were</option>
                <option value="have">Was</option>
              </select>
              <p className='text-[19px]'> you at the stadium yesterday?' 'Yes, I</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="haves">were</option>
                <option value="have">'s</option>
                <option value="have">was</option>
              </select>
              <p className='text-[19px]'>.'</p>

            </div>

            {/* Question 3 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>Yesterday Philip and Emma </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="an interesting job">were</option>
                <option value="a job interview">was</option>
              </select>
              <p className='text-[19px]'>in London. Today they </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are">are</option>
                <option value="am">am</option>
                <option value="is">is</option>
              </select>
              <p className='text-[19px]'>in Paris.</p>
            </div>

            {/* Question 4 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>4</span>
              <p className='text-[19px]'>Sara and I </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="was">was</option>
                <option value="were">were</option>
              </select>
              <p className='text-[19px]'>at home that night, and you </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="was">was</option>
                <option value="were">were</option>
              </select>
              <p className='text-[19px]'>with us.</p>
            </div>

            {/* Question 5 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>5</span>
              <p className='text-[19px]'>Yesterday we </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="was">was</option>
                <option value="were">were</option>
              </select>
              <p className='text-[19px]'>late for the concert, and today I</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are">are</option>
                <option value="am">am</option>
                <option value="is">is</option>
              </select>
              <p className='text-[19px]'>late for class.</p>
            </div>

            {/* Question 6 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>Asim </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="was">was</option>
                <option value="were">were</option>
              </select>
              <p className='text-[19px]'> born in Egypt, and I </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="were">were</option>
                <option value="am">am</option>
                <option value="was">was</option>
              </select>
              <p className='text-[19px]'> born in Birmingham.</p>
            </div>

            {/* Question 7 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>7</span>
              <p className='text-[19px]'>'</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="were">Were</option>
                <option value="was">Was</option>
              </select>
              <p className='text-[19px]'>you excited about the trip?' 'Yes, we</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="'re">'re</option>
                <option value="was">was</option>
                <option value="were">were</option>
              </select>
              <p className='text-[19px]'> very excited.'</p>
            </div>

            {/* Question 8 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>8</span>
              <p className='text-[19px]'>'</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="Was">Was</option>
                <option value="Were">Were</option>
              </select>
              <p className='text-[19px]'>Kate angry yesterday after the meeting?' 'No, but I think she </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are">are</option>
                <option value="am">am</option>
                <option value="is">is</option>
              </select>
              <p className='text-[19px]'> angry now.' </p>
            </div>

            {/* Question 9 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>9</span>
              <p className='text-[19px]'>'</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="was">was</option>
                <option value="were">were</option>
              </select>
              <p className='text-[19px]'>you at the beach last Sunday?' 'Yes, I</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="was">was</option>
                <option value="were">were</option>
              </select>
            </div>

            {/* Question 10 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>10</span>
              <p className='text-[19px]'>The weather </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="is">is</option>
                <option value="are"> are</option>
                <option value="was">was</option>
              </select>
              <p className='text-[19px]'> nice today, but it </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="was">was</option>
                <option value="were"> were</option>
              </select>
              <p className='text-[19px]'> horrible last weekend.</p>
            </div>

            <button className='py-2 px-5 bg-[#1a8ec1] flex justify-center items-center text-white mx-auto rounded-[10px] my-10'>
              Javoblarni Tekshirish
            </button>
          </div>

          {/* EXPLANATIONS */}
          <div className={`my-10 ${hidden}`}>
            <h1 className='text-[1.6rem] py-[10px] my-5 text-[#1a8ec1]'><b>Was/were</b> - shakli</h1>

            <div className='w-[55%]'>
              <img className='w-[100%]' src={pic} alt="..." />
            </div>

            {/* INFO */}
            <div className='info my-10'>

              <h4 className='text-[1.6rem] text-[#1a8ec1] mb-3'><strong>was/were</strong></h4>
              <p className='text-[1.1em] font-regular mb-4'><b>was/were</b> ni <b>be</b>ning o'tgan zamon shakli sifatida ishlatamiz. <b>was</b> ni <b>I/he/she/it</b> uchun va <b>were</b>ni <b>you/we/they</b> uchun qo'llaymiz.</p>
              
              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>I <b className='text-[#ec6825]'>was</b> at home yesterday.</i></li>
                <li><i>You <b className='text-[#ec6825]'>were</b> late at the meeting.</i></li>
                <li><i>She <b className='text-[#ec6825]'>was</b> excited at the party</i></li>
                <li><i>We <b className='text-[#ec6825]'>were</b> tired after the excursion.</i></li>
                <li><i><b className='text-[#ec6825]'>Were</b> they at the conference? </i></li>
              </ul>              

              <h4 className='text-[1.2em] text-[#1a8ec1] '>Darak gapning qisqartma shakli yo'q</h4>
              <p className='text-[1.1em] font-regular mb-4'>Inkor <b>was not</b> va <b>were not</b>ning qisqartma shakli <b>wasn't</b> va <b>weren't</b> bo'ladi lekin <b>was</b> va <b>were</b>ning <b>qisqartma shakli yo'q</b>.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>Tom <b className='text-[#ec6825]'>was</b> tired, but Susan <b className='text-[#ec6825]'>wasn’t</b> very tired.</i></li>
                <li><i>Paul and Tom <b className='text-[#ec6825]'>were</b> happy, but we <b className='text-[#ec6825]'>weren't</b> happy.</i></li>
              </ul>

              {/* Was/were – Use */}
              <h1 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'><b>Was/were</b> - Foydalanish.</h1>
              <p className='text-[1.1em] font-regular mb-4'><b>Was/were</b> bu <b>am/is/are</b>ning o'tgan zamon shakli hisoblanadi. Present: <b>am/is</b> = past: <b>was</b> Present: <b>are</b> = past: <b>were</b>.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px] '>
                <li><i>I'<b className='text-[#ec6825]'>m</b> happy. (<b>am ⇒ was</b>)</i></li>
                <li><i>She <b className='text-[#ec6825]'>is</b> at her office. ⇒ She <b className='text-[#ec6825]'>was</b> at her office. (<b>is ⇒ was</b>)</i></li>
                <li><i>You <b className='text-[#ec6825]'>are</b> late ⇒ You <b className='text-[#ec6825]'>were</b> late. (<b>are ⇒ were</b>)</i></li>
              </ul>

              <p className='text-[1.1em] font-regular mb-4'><b>was/were</b> ni o'tib ketgan narsa haqida gapirayotganimizda ishlatamiz. Ko'pincha ish harakatini o'tganligini ifodalovchi quyidagi vaqt iboralaridan foydalanamiz: <b>yesterday, last night, last week, two months ago.</b>.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>She <b className='text-[#ec6825]'>was</b> in Stuttgart last summer.</i></li>
                <li><i>We <b className='text-[#ec6825]'>were</b> late to the party last night.</i></li>
              </ul>

              <p className='text-[1.1em] font-regular mb-4'><b>Was/were</b> ni <b>was/were born</b> iborasida ham ishlatamiz. <b>be born</b>  iborasi har doim o'tgan zamon shaklda bo'ladi. <b></b></p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>'When <b className='text-[#ec6825]'>were</b> you born?' 'I <b className='text-[#ec6825]'>was</b> born in Sweden.' (<del>Where are you born? I am born…</del> EMAS.)</i></li>
                <li><i>Mozart <b className='text-[#ec6825]'>was</b> born in 1756.</i></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}