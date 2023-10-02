import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import pic from '../../../assets/grammar/elementary/topics/present-simple-form.webp'
import pic2 from '../../../assets/grammar/elementary/topics/present-simple-spelling.webp'

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
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'>Present simple – I do, I don’t, Do I?</h1>
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
            <h4 className='text-[1.2em] font-bold py-[10px] my-5 text-[#1a8ec1]'>Present simple – I do, I don’t, Do I?</h4>
            <h1 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>1-Mashq</h1>
            <p className='bg-[#f6f6f6] border-[1px] border-s border-[#ccc] p-[8px] inline-block rounded-[2px] font-bold'>Quyidagi gaplarni to'ldirish uchun to'g'ri present simple shakllarini tanlang.</p>
            <div className='flex my-5 items-center gap-3'>

              {/* Question 1 */}
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>1</span>
              <p className='text-[19px]'>I </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="not drink">not drink</option>
                <option value="don't drink">don't drink</option>
                <option value="drink not">drink not</option>
              </select>
              <p className='text-[19px]'> tea.</p>
            </div>
            
            {/* Question 2*/}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>2</span>
              <p className='text-[19px]'> She </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="haves">haves</option>
                <option value="have">have</option>
                <option value="has">has</option>
              </select>
                </div>

            {/* Question 3 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>4</span>
              <p className='text-[19px]'>Tom </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="an interesting job">doesn't start</option>
                <option value="a job interview">doesn't starts</option>
                <option value="a job interview">do not starts</option>
              </select>
              <p className='text-[19px]'> work until 10 today.</p>
            </div>

            {/* Question 4 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>6</span>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are fantastic">You do play</option>
                <option value="are fantastics">Do you play</option>
                <option value="fantastic are ">You play</option>
              </select>
              <p className='text-[19px]'> an instrument?</p>
            </div>

            {/* Question 5 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>5</span>
              <p className='text-[19px]'>The museum  </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="look tired">opens</option>
                <option value="smell tired">does open</option>
                <option value="tired look">open</option>
              </select>
              <p className='text-[19px]'> at 10 o'clock.</p>
            </div>

            {/* Question 6 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'> Peter and Megan often </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="Are they happies">go</option>
                <option value="Are they happy">goes</option>
                <option value="Are happy they">do go</option>
              </select>
              <p className='text-[19px]'> to the cinema.</p>
            </div>

            {/* Question 7 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>7</span>
              <p className='text-[19px]'>John </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="Are good his marks">doesn't gets up</option>
                <option value="Are goods his marks">do not get up</option>
                <option value="Are his marks good">doesn't get up</option>
              </select>
              <p className='text-[19px]'> very late.</p>
            </div>

            {/* Question 8 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>8</span>
              <p className='text-[19px]'>What time  </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="sounds interesting">do they leave</option>
                <option value="interesting looks">they leave</option>
                <option value="tastes interesting">they do leave</option>
              </select>
              <p className='text-[19px]'> home in the morning?</p>
            </div>

            {/* Question 9 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>9</span>
              <p className='text-[19px]'>What language </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are excellents">does he studies</option>
                <option value="excellent are">do he studies</option>
                <option value="are excellent">does he study</option>
              </select>
            </div>

            {/* Question 10 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>10</span>
              <p className='text-[19px]'>My son never </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are blues">watches</option>
                <option value="are blue">watch</option>
                <option value="blue are">watchs</option>
              </select>
              <p className='text-[19px]'> cartoons.</p>
            </div>

            <button className='py-2 px-5 bg-[#1a8ec1] flex justify-center items-center text-white mx-auto rounded-[10px] my-10'>
              Javoblarni Tekshirish
            </button>
          </div>

          {/* EXPLANATIONS */}
          <div className={`my-10 ${hidden}`}>
            <h1 className='text-[1.6rem] py-[10px] my-5 text-[#1a8ec1]'>Present simple shakli</h1>

            <p className='text-[1.1em] font-regular mb-4'>Present simpledagi so'roq gaplarda <b>do/does</b> fe'lidan, inkor gaplarda esa <b>don’t/doesn’t</b> fe'lidan foydalanamiz.</p>
            <div className='w-[55%]'>
              <img className='w-[100%]' src={pic} alt="..." />
            </div>

            {/* INFO */}
            <div className='info my-10'>

              {/* Spelling of he/she/it */}
              <h4 className='text-[1.2em] text-[#1a8ec1] '><b>He/she/it</b> ning yozilish qoidasi</h4>
              <p className='text-[1.1em] font-regular mb-4'> <b>He/she/it</b>-dan boshqa barcha uchun forma bir xil. <b>He/she/it</b>-da esa yozilish qoidasi boshqacha.</p>

              <div className='w-[55%] mb-10'>
                <img className='w-[100%]' src={pic2} alt="..." />
              </div>

              {/* Am/is/are + adjective */}
              <h2 className='text-[1.6rem] text-[#1a8ec1] mb-3'>Present Simple-ni ishlatilishi</h2>
              <h4 className='text-[1.2em] text-[#1a8ec1]'>Odatga aylangan yoki doimiy takrorlanuvchi ish harakatlarni ifodalashda</h4>
              <p className='text-[1.1em] font-regular mb-4'>Biz Present Simple-ni odatlarimizni yoki har kuni takrorlaydigan ish harakatlarimizni ifodalash uchun ishlaatamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>I <b className='text-[#ec6825]'>wash</b> my hair every day. </i></li>
                <li><i>I never <b className='text-[#ec6825]'>go</b> to the library.</i></li>
                <li><i>I <b className='text-[#ec6825]'>go</b> to the library on Saturdays.</i></li>
              </ul>


              {/* Permanent situations or things that are always or often true */}
              <h4 className='text-[1.2em] text-[#1a8ec1]'>Doimiy holatlar, har doim yoki ba'zan to'g'ri bo'ladigan narsalarni ifodalashda.</h4>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px] '>
                <li><i>I <b className='text-[#ec6825]'>don't drink</b> coffee.</i></li>
                <li><i>She<b className='text-[#ec6825]'>'s</b> very tall</i></li>
                <li><i>I <b className='text-[#ec6825]'>have</b> two brothers</i></li>
                <li><i>Water <b className='text-[#ec6825]'>boils</b> at 100 degrees</i></li>
                <li><i>I <b className='text-[#ec6825]'>like</b> soup</i></li>
              </ul>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}