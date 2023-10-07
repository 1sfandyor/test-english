import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import pic from '../../../assets/grammar/elementary/topics/Past-simple_form.jpg'
import pic2 from '../../../assets/grammar/elementary/topics/Past-simple-questions.jpg'

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
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'>Past simpleda inkor va so'roq</h1>
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
            <h4 className='text-[1.2em] font-bold py-[10px] my-5 text-[#1a8ec1]'>Past simpleda inkor va so'roq</h4>
            <h1 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>1-Mashq</h1>
            <p className='bg-[#f6f6f6] border-[1px] border-s border-[#ccc] p-[8px] inline-block rounded-[2px] font-bold'>Quyidagi gaplarni to'ldirish uchun to'g'ri to'g'ri past simple shaklni tanlang.</p>
            <div className='flex my-5 items-center gap-3'>

              {/* Question 1 */}
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>1</span>
              <p className='text-[19px]'>Where</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="not drink">went you</option>
                <option value="don't drink">did you go</option>
                <option value="don't drink">did you went</option>
              </select>
              <p className='text-[19px]'>on holiday last summer ?</p>
            </div>
            
            {/* Question 2*/}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>2</span>
              <p className='text-[19px]'>They</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="haves">didn't arrive</option>
                <option value="have">weren't arrived</option>
                <option value="have">didn't arrived</option>
              </select>
              <p className='text-[19px]'> until 5 o'clock in the afternoon. </p>
            </div>

            {/* Question 3 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>They</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="an interesting job">didn't were</option>
                <option value="a job interview">weren't</option>
                <option value="a job interview">didn't be</option>
              </select>
              <p className='text-[19px]'> sure of what to do.</p>
            </div>

            {/* Question 4 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>4</span>
              <p className='text-[19px]'>We</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are fantastic">didn't arrived</option>
                <option value="are fantastics">arrived</option>
                <option value="are fantastics">did arrive</option>
              </select>
              <p className='text-[19px]'>after midnight.</p>
            </div>

            {/* Question 5 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>5</span>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="look tired">Did you liked</option>
                <option value="smell tired">Did you lide</option>
                <option value="smell tired">Were you lide</option>
              </select>
              <p className='text-[19px]'> the present?</p>
            </div>

            {/* Question 6 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>Sara</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="Are they happies">wheren't watch</option>
                <option value="Are they happy">didn't watch</option>
                <option value="Are happy they">didn't watched</option>
              </select>
              <p className='text-[19px]'>the film because she was asleep.</p>
            </div>

            {/* Question 7 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>7</span>
              <p className='text-[19px]'>John and Felicity </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="Are good his marks">got</option>
                <option value="Are goods his marks">were get</option>
                <option value="Are his marks good">did get</option>
              </select>
              <p className='text-[19px]'>married last year.</p>
            </div>

            {/* Question 8 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>8</span>
              <p className='text-[19px]'>She </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="sounds interesting">wasn't</option>
                <option value="interesting looks">didn't was</option>
                <option value="interesting looks">didn't be</option>
              </select>
              <p className='text-[19px]'>ready for the test</p>
            </div>

            {/* Question 9 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>9</span>
              <p className='text-[19px]'>I </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are excellents">didn't understand</option>
                <option value="excellent are">didn't understood</option>
                <option value="excellent are">wasn't understood</option>
              </select>
              <p className='text-[19px]'> the question. Can you repeat it?</p>
            </div>

            {/* Question 10 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>10</span>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are blues">Did he smiled</option>
                <option value="are blue">Did he smile</option>
                <option value="blue are">Was he smile</option>
              </select>
              <p className='text-[19px]'>when he saw you?</p>
            </div>

            <button className='py-2 px-5 bg-[#1a8ec1] flex justify-center items-center text-white mx-auto rounded-[10px] my-10'>
              Javoblarni Tekshirish
            </button>
          </div>

          {/* EXPLANATIONS */}
          <div className={`my-10 ${hidden}`}>
            <h1 className='text-[1.6rem] py-[10px] my-5 text-[#1a8ec1]'>Past simple-da inkor va so'roq gaplar</h1>
            
            <p className='text-[1.1em] font-regular mb-4'>Past simpleda inkor, so'roq gap va qisqa javob tuzish uchun <b>did</b> va <b>didn't</b> dan foydalanamiz.</p>

            <div className='w-[55%]'>
              <img className='w-[100%]' src={pic} alt="..." />
            </div>

            {/* INFO */}
            <div className='info my-10'>

              
              {/* Savollardagi so'zlarning tartibi*/}
              <h4 className='text-[1.2em] text-[#1a8ec1] mb-2'>Savollardagi so'zlarning tartibi</h4>
              <p className='text-[1.1em] font-regular mb-4'><b><a className='text-[#1a8ec1]' href="./questions">Savollarda so'zlarning tartibi</a></b> <b>QWASI</b>(QWASI)  ekanligini eslab qoling: (Question Word), Auxiliary (did), Subject, Infinitive.</p>


              {/* Infinitive without to */}
              <h4 className='text-[1.2em] text-[#1a8ec1] '><b>to</b> qo'shimchasisiz </h4>
              <p className='text-[1.1em] font-regular mb-4'>Asosiy fe'lning <b>bear infinitive</b>-i bilan (= <b>to</b> qo'shimchasissiz infinitive) <b>did</b> yoki <b>didn't</b> ishlatamiz. </p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px] '>
                <li><i>I didn't <b className='text-[#ec6825]'>work</b> yesterday. (<del>I didn’t worked</del> EMAS)</i></li>
                <li><i>Did you <b className='text-[#ec6825]'>go</b> to the concert? (<del>Did you went…?</del> EMAS)</i></li>
              </ul>

              {/* Did or was/were? */}
              <h4 className='text-[1.2em] text-[#1a8ec1] '><b>Did</b> yoki <b>was/were</b> </h4>
              <p className='text-[1.1em] font-regular mb-4'>Biz <b>did</b> va <b>didn't</b> ni (<b>was/wasn't</b> yoki <b>were/weren't</b>ni EMAS) past simpledagi inkorlarda va savollarda yordamchi fe’l sifatida ishlatamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>We <b className='text-[#ec6825]'>didn't eat</b> at 6. (<del>We weren’t eat</del> EMAS).</i></li>
                <li><i><b className='text-[#ec6825]'>Did</b> you <b className='text-[#ec6825]'>do</b> your homework? (<del>Were you do your homework?</del> EMAS)</i></li>
              </ul>


              <p className='text-[1.1em] font-regular mb-4'>Past simple-dagi <b>inkor</b> va <b>so'roq</b> gapda asosiy fe'l <b>be</b> bo'lganida <b>did</b> va <b>didn't</b>dan foydalanmaymiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>They <b className='text-[#ec6825]'>weren't</b> happy. (<del>They didn’t be happy</del> EMAS).</i></li>
                <li><i><b className='text-[#ec6825]'>Was</b> he at home?  (<del>Did he be at home</del>? EMAS)</i></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}