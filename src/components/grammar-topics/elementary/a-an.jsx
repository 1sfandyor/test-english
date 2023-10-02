import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import pic from '../../../assets/grammar/elementary/topics/a-an_plurals.webp'

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
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'>A/an, ko'plik – birlik va ko'plik shakllari</h1>
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
            <h2 className='text-[1.6rem] font-bold py-[10px] my-5 text-[#1a8ec1]'>A/an, ko'plik – birlik va ko'plik shakllari</h2>
            <h1 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>1-Mashq</h1>
            <p className='bg-[#f6f6f6] border-[1px] border-s border-[#ccc] p-[8px] inline-block rounded-[2px] font-bold'>Quyidagi gaplarda a/an-ni tanlang.</p>
            <div className='flex my-5 items-center gap-3'>

              {/* Question 1 */}
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>1</span>
              <p className='text-[19px]'>It's </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="a">a</option>
                <option value="an">an</option>
              </select>
              <p className='text-[19px]'>animal.</p>
            </div>
            
            {/* Question 2*/}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>2</span>
              <p className='text-[19px]'>I need</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="an">an</option>
                <option value="a">a</option>
              </select>
              <p className='text-[19px]'>new bed.</p>
            </div>

            {/* Question 3 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>It's</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="a">a</option>
                <option value="an">an</option>
              </select>
              <p className='text-[19px]'>useful machine.</p>
            </div>

            {/* Question 4 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>4</span>
              <p className='text-[19px]'>I'm </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="an">an</option>
                <option value="a">a</option>
              </select>
              <p className='text-[19px]'> waiter.</p>
            </div>

            {/* Question 5 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>5</span>
              <p className='text-[19px]'>Do you have</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="an">an</option>
                <option value="a">a</option>
              </select>
              <p className='text-[19px]'> umbrella?</p>
            </div>

            {/* Question 6 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>6</span>
              <p className='text-[19px]'>I'm</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="an">an</option>
                <option value="a">a</option>
              </select>
              <p className='text-[19px]'> English teacher</p>
            </div>

            {/* Question 7 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>7</span>
              <p className='text-[19px]'>I need</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="an">an</option>
                <option value="a">a</option>
              </select>
              <p className='text-[19px]'>hat</p>
            </div>

            {/* Question 8 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>8</span>
              <p className='text-[19px]'>Is she</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="an">an</option>
                <option value="a">a</option>
              </select>
              <p className='text-[19px]'> student?</p>
            </div>

            {/* Question 9 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>9</span>
              <p className='text-[19px]'>We have </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="an">an</option>
                <option value="a">a</option>
              </select>
              <p className='text-[19px]'> ugly duck.</p>
            </div>

            {/* Question 10 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>10</span>
              <p className='text-[19px]'> I need</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="a">a</option>
                <option value="an">an</option>
              </select>
              <p className='text-[19px]'> hour.</p>
            </div>

            <button className='py-2 px-5 bg-[#1a8ec1] flex justify-center items-center text-white mx-auto rounded-[10px] my-10'>
              Javoblarni Tekshirish
            </button>
          </div>

          {/* EXPLANATIONS */}
          <div className={`my-10 ${hidden}`}>
            <h2 className='text-[1.6rem] py-[10px] my-5 text-[#1a8ec1]'>A/an, ko'plik – grammatika jadvali</h2>

            <div className='w-[55%]'>
              <img className='w-[100%]' src={pic} alt="..." />
            </div>

            {/* INFO */}
            <div className='info my-10'>

              {/* A/AN */}
              <h4 className='text-[1.2em] font-bold text-[#1a8ec1]'>A/an</h4>
              <p className='text-[20px] mb-4'>Biz <b>a/an</b>ni birlikdagi otlar bilan ishlatamiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-[35px]'>
                <li><i><span className='text-[#ec6825]'><b>This is</b></span>a table.</i></li>
                <li><i><span className='text-[#ec6825]'><b>It's</b></span> an orange. </i></li>
              </ul>

              {/* A*/}
              <p className='text-[20px] mb-4'>Bundan tashqari <b>a</b>-ni undosh bilan <b>an</b>-ni esa unli harf bilan boshlangan otlarda ishlatamiz (a, e, i, o, u).</p>

              <ul className='list-disc pl-5 text-[20px] mb-[35px]'>
                <li><i>Give me <b className='text-[#ec6825]'>an a</b>pple. </i></li>
                <li><i>There is <b className='text-[#ec6825]'>an e</b>lephant in the zoo.</i></li>
                <li><i>It's <b className='text-[#ec6825]'>an a</b>mazing experience.</i></li>
              </ul>

              {/* An */}
              <p className='text-[20px] mb-4'>Bundan tashqari <b>an</b>-ni <b>h</b> harfi talaffuz qilinmasada  <b>h</b> bilan boshlanadigan otlarda ham ishlamiz. Lekin <b>h</b> talaffuz qilinsa unda <b>a</b>dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-[35px]'>
                <li><i>Give me <b className='text-[#ec6825]'>an h</b>our. (<b><del>hour</del></b>-da <b>h</b> harfi talaffuz qilinmaydi)</i></li>
                <li><i>I want to buy <b className='text-[#ec6825]'>a h</b>at? (<b>Hat</b> so'zida <b>h</b> talaffuz qilinadi.)</i></li>
              </ul>

              {/* davomi */}
              <p className='text-[20px] mb-4'>Agar <b>university</b> kabi <b>u</b> bilan boshlansayu ammo /ju:/ deb talaffuz qilinsa <b>an</b>-dan emas <b>a</b>-dan foydalanamiz. </p>

              <ul className='list-disc pl-5 text-[20px] mb-[70px]'>
                <li><i>Is there <b className='text-[#ec6825]'>a u</b>niversity in this city.</i></li>
                <li><i>I wear <b className='text-[#ec6825]'>a u</b>niform.</i></li>
              </ul>


              {/* Plural in english */}
              <h1 className='text-[1.6rem] font-bold text-[#1a8ec1]'>Ingliz tilida ko'pliklar</h1>

              <h4 className='text-[1.2em] text-[#1a8ec1]'><del>A tables</del></h4>
              <p className='text-[1.1em] mb-4'>Ko'plik shaklidagi otlar bilan <b>a/an</b>ni ishlatmaymiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] mb-[70px]'>
                <li><i>These are <b className='text-[#ec6825]'>tables</b> (<del>a tables</del> EMAS)</i></li>
              </ul>


              {/* Regular plurals */}
              <h4 className='text-[1.2em] text-[#1a8ec1]'>To'g'ri shakldagi ko'pliklar</h4>
              <p className='text-[1.1em] mb-4'>Ingliz tilida otlarni ko'plikka aylantirish uchun <b>'s'</b> qo'shimchasini qo'shamiz. Ba'zida <b>-es</b>, <b>-ies</b> yoki <b>-ves</b> qo'shimchalarini ham qo'shishimiz kerak bo'lib qoladi.</p>

              <ul className='list-disc pl-5 text-[1.1em] mb-[70px]'>
                <li><i>The <b className='text-[#ec6825]'>cats</b> are playing in the garden.</i></li>
                <li><i>The <b className='text-[#ec6825]'>buses</b> are parked at the station.</i></li>
                <li><i>The <b className='text-[#ec6825]'>babies</b> are sleeping peacefully.</i></li>
                <li><i>The <b className='text-[#ec6825]'>leaves</b> are falling from the trees.</i></li>
              </ul>

              {/* Irregular plurals */}
              <h4 className='text-[1.2em] text-[#1a8ec1]'>Noto'g'ri shakldagi ko'pliklar</h4>
              <p className='text-[20px] mb-4'>Ba'zi so'zlarda noto'g'ri shakldagi ko'pliklar bo'ladi va ularni ko'plikka aylantirish uchun <b>'s</b> qo'shimchasi qo'shilmaydi</p>

              <ul className='list-disc pl-5 text-[20px] mb-[70px]'>
                <li><i>I have two <b className='text-[#ec6825]'>children</b> (<b><del>childs</del></b> EMAS).</i></li>
                <li><i>He brushes his teeth <b className='text-[#ec6825]'>theeth</b> twice a day. (<b><del>tooths</del></b> EMAS)</i></li>
              </ul>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}