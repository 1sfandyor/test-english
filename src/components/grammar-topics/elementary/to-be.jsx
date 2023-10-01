import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import tobe from './to-be.webp'
import tobe2 from './to-be2.webp'

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
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'>‘TO BE’ NING PRESENT SIMPLE SHAKLI – AM/IS/ARE
</h1>
        <div className='container'>
          <ul className="flex border-b-2 border-l-0 border-s border-gray-500 flex-wrap text-sm font-medium text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
              <li className="mr-2">
                  <button ref={exercisesButton} onClick={exercises} className='inline-block border-x-2 border-t-2 border-s border-[grey] active py-4 px-[2.5rem] rounded-t-lg  px-20 bg-[#1a8ec1] text-white font-bold'>Mashqlar</button>
              </li>
              <li className="mr-2">
                  <button ref={explanationButton} onClick={explanation} className="inline-block border-x-2 border-t-2 border-s border-[grey] py-4 px-[2.5rem] rounded-t-lg  px-20 bg-[#1a8ec1] text-white font-bold">Tushuntirish</button>
              </li>
          </ul>

          <div className={`my-[10px] ${hidden2}`}>
            <div className='flex items-center justify-end'>
              <p className='font-[300] text-gray-500 mr-2 text text-[25px] items-center'>MASHQLAR: </p>
              <Link className='bg-[#1a8ec1] mr-5 w-[50px] h-[40px] flex justify-center items-center text-white rounded-[5px]'>1</Link>
              <Link className='bg-[#1a8ec1] mr-5 w-[50px] h-[40px] flex justify-center items-center text-white rounded-[5px]'>2</Link>
              <Link className='bg-[#1a8ec1] mr-5 w-[50px] h-[40px] flex justify-center items-center text-white rounded-[5px]'>3</Link>
              <Link className='bg-[#1a8ec1] mr-5 w-[50px] h-[40px] flex justify-center items-center text-white rounded-[5px]'>4</Link>
            </div>
            <h1 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>‘TO BE’ NING PRESENT SIMPLE SHAKLI – AM/IS/ARE</h1>
            <h1 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>1- MASHQLAR</h1>
            <p className='bg-[#dbdbdb88] border-2 border-s border-black p-3 inline-block rounded-[10px] font-bold'>Quyidagi bo'sh joylarga "to be" ning to'g'ri present simple shaklini tanlang.</p>

            {/* Question 1 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>1</span>
              <p className='text-[19px]'>A:</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">Are</option>
                <option value="are">Is</option>
              </select>
              <p className='text-[19px]'>you teacher?</p>
              <p className='text-[19px]'>B: Yes, I</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="are">am</option>
                <option value="am">are</option>
              </select>
            </div>

            {/* Question 2 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>2</span>
              <p className='text-[19px]'>A:</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">Are</option>
                <option value="are">Is</option>
              </select>
              <p className='text-[19px]'>your name Marcus?</p>
              <p className='text-[19px]'>B: Yes, it</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="are">is</option>
                <option value="am">are</option>
              </select>
            </div>

            {/* Question 3 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>A:</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">Are</option>
                <option value="are">Am</option>
              </select>
              <p className='text-[19px]'>your children here?</p>
              <p className='text-[19px]'>B: No, they </p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="are">aren't</option>
                <option value="am">isn't</option>
              </select>
            </div>

            {/* Question 4 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>4</span>
              <p className='text-[19px]'>A:</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">Are</option>
                <option value="are">Is</option>
              </select>
              <p className='text-[19px]'>this your suitcase?</p>
              <p className='text-[19px]'>B: No, it </p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="are">isn't</option>
                <option value="am">aren't</option>
              </select>
            </div>

            {/* Question 5 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>5</span>
              <p className='text-[19px]'>A: Where</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">is</option>
                <option value="am">am</option>
                <option value="are">are</option>
              </select>
              <p className='text-[19px]'>we?</p>
              <p className='text-[19px]'>B: I think this</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="are">is</option>
                <option value="am">are</option>
              </select>
              <p className='text-[19px]'>Oxford street</p>
            </div>

            {/* Question 6 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>6</span>
              <p className='text-[19px]'>A:</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">Is</option>
                <option value="are">Are</option>
              </select>
              <p className='text-[19px]'>it Saturday today?</p>
              <p className='text-[19px]'>B: No, It </p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="are">'re</option>
                <option value="am">'s</option>
              </select>
              <p className='text-[19px]'>Sunday</p>
            </div>

            {/* Question 7 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>7</span>
              <p className='text-[19px]'>A:</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">Is</option>
                <option value="are">Are</option>
              </select>
              <p className='text-[19px]'>your friends from the UK?</p>
              <p className='text-[19px]'>B: No</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="are">he is</option>
                <option value="am">they are</option>
              </select>
              <p className='text-[19px]'>from the US.</p>
            </div>

            {/* Question 8 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>8</span>
              <p className='text-[19px]'>A: Hello, Maria. How </p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">are</option>
                <option value="are">am</option>
              </select>
              <p className='text-[19px]'>you?</p>
              <p className='text-[19px]'>B:</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="are">I are</option>
                <option value="am">I'm</option>
              </select>
              <p className='text-[19px]'>fine, thanks.</p>
            </div>

            {/* Question 9 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>9</span>
              <p className='text-[19px]'>A: How old </p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">is</option>
                <option value="are">are</option>
              </select>
              <p className='text-[19px]'>Peter ?</p>
              <p className='text-[19px]'>B: I think</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="are">he is</option>
                <option value="am">it is</option>
              </select>
              <p className='text-[19px]'>30 years old.</p>
            </div>
 
            {/* Question 10 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>10</span>
              <p className='text-[19px]'>A:</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">Is</option>
                <option value="are">Are</option>
              </select>
              <p className='text-[19px]'>David and Molly here?</p>
              <p className='text-[19px]'>B: Yes</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="are">we're</option>
                <option value="am">they're</option>
              </select>
              <p className='text-[19px]'>next to the door.</p>
            </div>

            <button className='py-2 px-5 bg-[#1a8ec1] flex justify-center items-center text-white mx-auto rounded-[10px] my-10'>
              Javoblarni Tekshirish
            </button>
          </div>

          <div className={`my-10 ${hidden}`}>
            <h1 className='text-[30px] py-[10px] my-5 text-[#1a8ec1]'><b><i>be</i> ning Present Simple shakli</b></h1>

            <div className='w-[55%]'>
              <img className='w-[100%]' src={tobe} alt="..." />
            </div>

            <div className='info my-10'>
              <p className='text-[25px] mb-5'><b>be</b> fe'lining Present Simple-da 3 ta shakli bor:</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i>I <span className='text-[#ec6825]'><b>am</b></span></i></li>
                <li><i>He/She/It <span className='text-[#ec6825]'><b>is</b></span></i></li>
                <li><i>we/You/They <span className='text-[#ec6825]'><b>are</b></span></i></li>
              </ul>

              <h1 className='text-[30px] py-[10px] my-5 text-[#1a8ec1]'><b>they</b>= odamlar va narsalar</h1>

              <p className='text-[25px] mb-5'>Biz <b>he</b>-ni erkaklar uchun, <b>she</b>-ni ayollar uchun, va <b>it</b>-ni narsalar uchun ishlatamiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i><b className='text-[#ec6825]'>He</b>'s little boy</i></li>
                <li><i><b className='text-[#ec6825]'>She</b>'s beautiful</i></li>
                <li><i>I like this TV. <span className='text-[#ec6825]'><b>It's</b></span> very big</i></li>
              </ul>

              <p className='text-[25px] mb-5'>Biz <b>they</b>-ni odamlar va narsalar uchun foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i>I love Sara and Jonas. <span className='text-[#ec6825]'><b>They</b></span> are my friend</i></li>
                <li><i>I love these chairs. <span className='text-[#ec6825]'><b>They</b></span> are very beautiful</i></li>
              </ul>

              <h1 className='text-[30px] py-[10px] my-5 text-[#1a8ec1]'>Subject-ni unutib qoldirmang</h1>

              <p className='text-[25px] mb-5'>Biz <b>they</b>-ni odamlar va narsalar uchun foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li>It is cold. (NOT<del> Is cold.)</del></li>
                <li>Sally is a wonderful woman. (NOT<del> s a wonderful woman.)</del></li>
              </ul>

              <h1 className='text-[30px] py-[10px] my-5 text-[#1a8ec1]'>Qisqartmalar yoki qisqa shakllari</h1>

              <p className='text-[25px] mb-5'>Biz <b>‘m,</b> <b>‘s</b> va <b>‘re</b>-ni (<b>I, you, he, va hkz.</b>) kabi kishilik olmoshlari uchun ishlatamiz </p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i><b className='text-[#ec6825]'>I'm</b> sad</i></li>
                <li><i><b className='text-[#ec6825]'>You're</b> tired</i></li>
                <li><i><b className='text-[#ec6825]'>She's</b> from Scotland</i></li>
              </ul>

              <p className='text-[25px] mb-5'>Ammo <b>‘s</b> ni ismlar bilan ham ishlata olamiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i><b className='text-[#ec6825]'>Laura’s </b> beautiful</i></li>
                <li><i><b className='text-[#ec6825]'>London’s </b> an expensive city. </i></li>
              </ul>

              <h1 className='text-[30px] py-[10px] my-5 text-[#1a8ec1]'>Qisqartmalar yoki qisqa shakllari</h1>

              <p className='text-[25px] mb-5'>Biz <b>qisqartmalarni</b> faqatgina <b>inkor shakldagi qisqa javoblarda</b> ishlata olamiz. Darak gap shaklidagi qisqa javoblarda emas.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li>Yes, <b className='text-[#ec6825]'>I am</b>. (NOT<del> Yes, I'm.)</del></li>
                <li>Yes, She <b className='text-[#ec6825]'>is</b>. (NOT<del> Yes, She's.)</del></li>
                <li>Yes, They <b className='text-[#ec6825]'>are</b>. (NOT<del> Yes, They're.)</del></li>
              </ul>

              <h1 className='text-[30px] py-[10px] my-5 text-[#1a8ec1]'><b>be</b>- present simple-da foydalanilishi</h1>
              
              <div className='w-[55%]'>
                <img className='w-[100%]' src={tobe2} alt="..." />
              </div>
              
              <p className='text-[25px] mb-5'>Biz quyida keltirilgan narsalar haqida gaplashayotganimizda <b>be</b> fe'lini ishlatamiz:</p>
              
              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><b>Biz kimmiz:</b> I <i className='text-[#ec6825]'>'m Steven, and this <i className='text-[#ec6825]'>is</i></i> Isabella.</li>
                <li><b>Yoshimiz:</b> I <i className='text-[#ec6825]'>'m Steven, and this <i className='text-[#ec6825]'>is</i></i> Isabella.</li>
                <li><b>Kasbimiz:</b> I <i className='text-[#ec6825]'>'m Steven, and this <i className='text-[#ec6825]'>is</i></i> Isabella.</li>
                <li><b>Millatimiz:</b> I <i className='text-[#ec6825]'>'m Steven, and this <i className='text-[#ec6825]'>is</i></i> Isabella.</li>
                <li><b>His tuyg'uyimiz:</b> I <i className='text-[#ec6825]'>'m Steven, and this <i className='text-[#ec6825]'>is</i></i> Isabella.</li>
                <li><b>Ranglar:</b> I <i className='text-[#ec6825]'>'m Steven, and this <i className='text-[#ec6825]'>is</i></i> Isabella.</li>
                <li><b>Narxlar:</b> I <i className='text-[#ec6825]'>'m Steven, and this <i className='text-[#ec6825]'>is</i></i> Isabella.</li>
                <li><b>Ob havo:</b> I <i className='text-[#ec6825]'>'m Steven, and this <i className='text-[#ec6825]'>is</i></i> Isabella.</li>
                <li><b>Vaqt:</b> I <i className='text-[#ec6825]'>'m Steven, and this <i className='text-[#ec6825]'>is</i></i> Isabella.</li>
                <li><b>Biror bir umumiy ta'rifda:</b> I <i className='text-[#ec6825]'>'m Steven, and this <i className='text-[#ec6825]'>is</i></i> Isabella.</li>
              </ul>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}