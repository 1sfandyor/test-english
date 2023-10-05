import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import pic from '../../../assets/grammar/elementary/topics/adverbs_frequency_new.png'

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
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'>Present simple bilan ko'p ishlatiladigan qo'shimchalar?</h1>
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
            <h4 className='text-[1.2em] font-bold py-[10px] my-5 text-[#1a8ec1]'>Present simple bilan ko'p ishlatiladigan qo'shimchalar?</h4>
            <h1 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>1-Mashq</h1>
            <p className='bg-[#f6f6f6] border-[1px] border-s border-[#ccc] p-[8px] inline-block rounded-[2px] font-bold'>Quyidagi gaplarda ko'p ishlatiladigan qo'shimchalardan to'g'ri foydalanilgan javobni tanlang.</p>
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
            <h1 className='text-[1.6rem] py-[10px] my-5 text-[#1a8ec1]'>Adverbs of frequency</h1>

            <p className='text-[1.1em] font-regular mb-4'> Biror narsaning qanchalik tez-tez sodir bo'lishi haqida gapirish uchun present simple bilan tez tez foydalaniladigan qo'shimchalardan foydalanamiz..</p>
            <div className='w-[55%]'>
              <img className='w-[100%]' src={pic} alt="..." />
            </div>

            {/* INFO */}
            <div className='info my-10'>

              {/* Position */}
              <h2 className='text-[1.6rem] text-[#1a8ec1] mb-3'>Qo'llash</h2>
              <p className='text-[1.1em] font-regular mb-4'>Adverbs of frequency <b>fe'ldan oldin</b> keladi, ammo <b>be</b> fe'lidan keyin ishlatiladi. </p>
              
              {/* In negative*/}
              <p className='text-[1.1em] font-regular mb-4'><b>Inkor gaplarda</b> adverb of frequency-lar <b>don't/doesn't</b> dan oldinga chiqadi. </p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>We don't <b className='text-[#ec6825]'>often</b> go to bed late. </i></li>
                <li><i>He doesn't <b className='text-[#ec6825]'>always</b> agree with me.</i></li>
              </ul>


              {/* In question*/}
              <p className='text-[1.1em] font-regular mb-4'><b>So'roq gaplarda</b> adverb of frequency-lar subjectdan keyin keladi. </p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px] '>
                <li><i>Is he <b className='text-[#ec6825]'>always</b> late?.</i></li>
                <li><i>Do they <b className='text-[#ec6825]'>often</b> go to the library?</i></li>
              </ul>

              {/* never/hardly ever */}
              <h2 className='text-[1.6rem] text-[#1a8ec1] mb-3'>never/hardly ever</h2>
              <p className='text-[1.1em] font-regular mb-4'><b>Never</b> va <b>hardly ever</b> (=deyarli never) ning o'zi inkor ma'nosi ifodalaydi, ammo positive fe'l bilan ishlatiladi.  </p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>He <b className='text-[#ec6825]'>is never</b> late. (<del>He isn’t never late.</del> EMAS) </i></li>
                <li><i>They <b className='text-[#ec6825]'>hardly ever go</b> to the library. (<del>They don’t hardly ever go to the library</del> EMAS.)</i></li>
              </ul>

              {/* Time expressions */}
              <h2 className='text-[1.6rem] text-[#1a8ec1] mb-3'>Vaqtni ifodalovchi yordamchilar</h2>
              <p className='text-[1.1em] font-regular mb-4'>Tez tez qilinadigan ishlar haqida gapirganimizda <b>once a day, twice a week, three times a month, every day</b> kabi boshqa expression-lardan foydalanamiz. Bular uzunroq (2 ta so'z yoki undan ko'proq) bo'ladi va gapning ohirida keladi.</p>
              
              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>I brush my teeth <b className='text-[#ec6825]'>three times a day</b>. </i></li>
                <li><i>I see her <b className='text-[#ec6825]'>every day</b>.</i></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}