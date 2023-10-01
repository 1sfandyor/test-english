import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import pic from '../../../assets/grammar/elementary/topics/possesive-adjectives.webp'

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
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'>Possessive adjective-lar va subject pronoun-lar (I/my, you/your, hkz.)</h1>
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
            <h2 className='text-[1.6rem] font-bold py-[10px] my-5 text-[#1a8ec1]'>Possessive adjective-lar va subject pronoun-lar</h2>
            <h1 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>1-Mashq</h1>
            <p className='bg-[#dbdbdb88] border-2 border-s border-black p-3 inline-block rounded-[10px] font-bold'>Gaplarni to'ldirish uchun to'g'ri subject pronoun-larni yoki possessive adjective-larni tanlang.</p>
            
            {/* Question 1 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>1</span>
              <p className='text-[19px]'>Harry is </p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">My</option>
                <option value="are">I</option>
              </select>
              <p className='text-[19px]'>friend.</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="he">He</option>
                <option value="his">His</option>
              </select>
              <p className='text-[19px]'>has a nice house.</p>
            </div>

            {/* Question 2 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>2</span>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="their">Their</option>
                <option value="they">They</option>
              </select>
              <p className='text-[19px]'>are very happy with </p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="they">they</option>
                <option value="their">their</option>
              </select>
              <p className='text-[19px]'>new dog</p>
            </div>

            {/* Question 3 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>We love </p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="our">our</option>
                <option value="we">we</option>
              </select>
              <p className='text-[19px]'>little dog</p>
            </div>

            {/* Question 4 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>4</span>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="he">he</option>
                <option value="his">his</option>
              </select>
              <p className='text-[19px]'>wants</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="his">his</option>
                <option value="he">he</option>
              </select>
              <p className='text-[19px]'>breakfast.</p>
            </div>

            {/* Question 5 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>5</span>
              <p className='text-[19px]'>We want to see </p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="our">our</option>
                <option value="ours">ours</option>
              </select>
              <p className='text-[19px]'>children.</p>
            </div>

            {/* Question 6 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>6</span>
              <p className='text-[19px]'>Scotland is famous for </p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="its">its</option>
                <option value="itis">it's</option>
              </select>
              <p className='text-[19px]'>rainy weather</p>
            </div>

            {/* Question 7 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>7</span>
              <p className='text-[19px]'>Susan lives on </p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="my">my</option>
                <option value="I">I</option>
              </select>
              <p className='text-[19px]'>street</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="her">Her</option>
                <option value="his">His</option>
              </select>
              <p className='text-[19px]'>house is very near.</p>
            </div>

            {/* Question 8 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>8</span>
              <p className='text-[19px]'>'What are those?' '</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="are">They are</option>
                <option value="itis">It is</option>
              </select>
              <p className='text-[19px]'>postcards'</p>
            </div>

            {/* Question 9 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>9</span>
              <p className='text-[19px]'>I like this place and </p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="itis">it's</option>
                <option value="its">its</option>
              </select>
              <p className='text-[19px]'>special atmosphere.</p>
            </div>

            {/* Question 10 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>10</span>
              <p className='text-[19px]'>I love this place.</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="its">Its</option>
                <option value="itis">It's</option>
              </select>
              <p className='text-[19px]'>very special.</p>
            </div>

            <button className='py-2 px-5 bg-[#1a8ec1] flex justify-center items-center text-white mx-auto rounded-[10px] my-10'>
              Javoblarni Tekshirish
            </button>
          </div>

          {/* EXPLANATIONS */}
          <div className={`my-10 ${hidden}`}>
            <h2 className='text-[1.6rem] font-bold py-[10px] my-5 text-[#1a8ec1]'>Possessive adjective-lar va subject pronoun-lar</h2>

            <div className='w-[55%]'>
              <img className='w-[100%]' src={pic} alt="..." />
            </div>

            {/* INFO */}
            <div className='info my-10'>

              {/* USE */}
              <h2 className='text-[1.6rem] font-bold text-[#1a8ec1] mb-5'>Foydalanish</h2>
              <h2 className='text-[1.6rem] text-[#1a8ec1] mb-3'><b>I</b> + verb - <b>my</b> + noun</h2>
              <p className='text-[20px] mb-4'>Biz <b>subject pronoun + verb</b> va <b>possessive adjective + noun</b>dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-[70px]'>
                <li><i>These are Susan and Thomas; <span className='text-[#ec6825]'><b>they</b></span> are from Ohio. And that’s <span className='text-[#ec6825]'><b>their</b></span> house</i></li>
                <li><i><span className='text-[#ec6825]'><b>I</b></span> love <span className='text-[#ec6825]'><b>my</b></span> friend Sheila. </i></li>
              </ul>

              {/* possessive adjective are always singular */}
              <h2 className='text-[1.6rem] text-[#1a8ec1]'>Possessive adjective-lar har doim birlik shaklda bo'ladi</h2>
              <p className='text-[20px] mb-4'>Ingliz tilida adjective-larning ko'plik shakli yo'q. Possessive adjective-lar har doim birlik shaklda bo'ladi</p>

              <ul className='list-disc pl-5 text-[20px] mb-[70px]'>
                <li><i>These are <b className='text-[#ec6825]'>their </b>suitcases. (NOT <del>theirs suitcases</del>) </i></li>
              </ul>

              {/* With a noun or without a noun */}
              <h2 className='text-[1.6rem] text-[#1a8ec1]'><b>it/its</b> narsalar uchun va <b>they/their</b> odamlar yoki narsalar uchun ishlatiladi.</h2>
              <p className='text-[20px] mb-4'>Biz <b>he-his</b>ni va <b>she-her</b>ni insonlar uchun va <b>it-its</b>ni narsalar uchun ishlatamiz. Ammo ko'plikda <b>they-their</b>ni odamlar uchun ham naarsalar uchun ham ishlatamiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-[70px]'>
                <li><i>The hotel has <b className='text-[#ec6825]'>its</b> own spa. <b className='text-[#ec6825]'>It</b> is a relaxing place.</i></li>
                <li><i>I like those chairs, <b className='text-[#ec6825]'>they</b> are beautiful. But <b className='text-[#ec6825]'>their</b> legs are too long.</i></li>
              </ul>

              {/* it’s for time and weather */}
              <h2 className='text-[1.6rem] text-[#1a8ec1]'>Vaqt va ob havoni ifodalashda <b>it's</b> dan foydalanamiz</h2>
              <p className='text-[20px] mb-4'>Biz <b>it’s (=it is)</b>ni vaqt yoki ob havo haqida gapirayotganimizda ishlatamiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-[70px]'>
                <li><i><b className='text-[#ec6825]'>It's</b> very windy today, but <b className='text-[#ec6825]'>it's</b> sunny</i></li>
                <li><i>'What time <b className='text-[#ec6825]'>is it</b> ?' <b className='text-[#ec6825]'>It is</b> three o'clock</i></li>
              </ul>

              {/* it’s or its */}
              <h2 className='text-[1.6rem] text-[#1a8ec1]'><b>it's</b>mi yoki <b>it's</b>?</h2>
              <p className='text-[20px] mb-4'><b>Its</b>= possessive adjective. <b>It’s</b> = <b>it is</b> (subject + verb <b>be</b>)</p>

              <ul className='list-disc pl-5 text-[20px] mb-[70px]'>
                <li><i>Look at that dog. <b className='text-[#ec6825]'>It's</b> beautiful. I like <b className='text-[#ec6825]'>Its</b> hair.</i></li>
              </ul>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}