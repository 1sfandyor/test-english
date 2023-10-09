import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

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
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'>Would you like…? I'd like…</h1>
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
            <h2 className='text-[1.6rem] font-bold py-[10px] my-5 text-[#1a8ec1]'>Would you like…? I’d like…</h2>
            <h2 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>1-Mashq</h2>
            <p className='bg-[#f6f6f6] border-[1px] border-s border-[#ccc] mb-5 p-[8px] inline-block rounded-[2px] font-bold'>Quyidagi "Do you want" yoki "I want" bilan keltirilgan gaplarni o'qing va "would you like" yoki "I’d like" yordamida bix xil ma'noga ega so'zlar yozing.</p>

            <p className='mb-7'>
                <em>MISOLLAR:</em><br />
                <em>
                  I want some coffee. ⇒ <span className='bg-[#fff] border border-[#d2d2d2] p-[2px] my-[1px] '>I'd like</span> some coffee.
                </em>
                <br />
                <em>
                  Do you want some coffee? ⇒ <span className='bg-[#fff] border border-[#d2d2d2] p-[2px] my-[1px] '>Would you like</span> some coffee ?
                </em>
              </p>

            <div className='flex my-5 items-center gap-3'>

              {/* Question 1 */}
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>1</span>
              <p className='text-[19px]'>I want to go out to night. ⇒ </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'>tonight.</p>
            </div>
            
            {/* Question 2*/}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>2</span>
              <p className='text-[19px]'>Do you want to come with us? ⇒  </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'>with us ?</p>
            </div>

            {/* Question 3 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>Do you want a sandwich? ⇒ </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'> a sandwich ?</p>
            </div>

            {/* Question 4 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>4</span>
              <p className='text-[19px]'> I want a bottle of water, please. ⇒ </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'> a bottle of water, please.</p>
            </div>

            {/* Question 5 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>5</span>
              <p className='text-[19px]'>Where do you want to go? ⇒ Where </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'>?</p>
            </div>

            {/* Question 6 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>I want to learn French. ⇒ </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'>French. </p>
            </div>

            {/* Question 7 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>7</span>
              <p className='text-[19px]'>What do you want for dessert? ⇒ What </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'>for dessert?</p>

            </div>

            {/* Question 8 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>8</span>
              <p className='text-[19px]'>I want to stay with you today. ⇒ </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'>with you today.</p>
            </div>

            {/* Question 9 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>9</span>
              <p className='text-[19px]'>Do you want to meet my family? ⇒ </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'>my family ?</p>
            </div>

            {/* Question 10 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>10</span>
              <p className='text-[19px]'>I want an answer. ⇒ I </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'>an answer. </p>
            </div>

            <button className='py-2 px-5 bg-[#1a8ec1] flex justify-center items-center text-white mx-auto rounded-[10px] my-10'>
              Javoblarni Tekshirish
            </button>
          </div>

          {/* EXPLANATIONS */}
          <div className={`my-10 ${hidden}`}>
            <h2 className='text-[1.6rem] py-[10px] my-5 text-[#1a8ec1] font-bold'>Would you like…?</h2>

            {/* INFO */}
            <div className='info mb-10'>

              <p className='text-[1.1em] font-regular mb-4'>Nimanidir taklif qilsak yoki kimgadir nimanidir qilishni taklif bersak <b>Would you like...?</b>dan foydalanamiz. <b>Would you like…?</b> = ‘Do you want…?’</p>
              
              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i><b className='text-[#ec6825]'>Would you like </b> some cake? (=Do you want some cake?)</i></li>
                <li><i><b className='text-[#ec6825]'>Would you like </b> some coffee ?</i></li>
                <li><i><b className='text-[#ec6825]'>Would you like </b> to go to the cinema? (=Do you want to go to the cinema?)</i></li>
                <li><i>Where <b className='text-[#ec6825]'>would you like </b> to go?</i></li>
              </ul>              


              {/* I'd like */}
              <h2 className='text-[1.6rem] text-[#1a8ec1] mb-3'>I'd like</h2>
              <p className='text-[1.1em] font-regular mb-4'>Biz biror narsa hohlasak yoki nimadir qilishni hohlasak <b>I'd like</b> (=I would like) foydalanamiz. </p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i><b className='text-[#ec6825]'>I'd like</b> some water, please (=I want some water.)</i></li>
                <li><i><b className='text-[#ec6825]'>I'd like</b> more information about this product. </i></li>
                <li><i><b className='text-[#ec6825]'>I'd like</b> to go to the zoo. (=I want to go to the zoo.)</i></li>
                <li><i><b className='text-[#ec6825]'>I'd like</b> to have a lemonade.</i></li>
              </ul>


              {/* Like */}
              <h2 className='text-[1.6rem] text-[#1a8ec1] mb-3'>Like</h2>
              <p className='text-[1.1em] font-regular mb-4'>Biror narsani ajoyib yoki kimnidir yaxshi deb o'ylashimiz haqida gapirganimizda <b>like + narsa nomi yoki kimdir</b>ni birga ishlatamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i><b className='text-[#ec6825]'>I like</b> coffee. (=I think coffee is good.)</i></li>
                <li><i><b className='text-[#ec6825]'>I like</b> John. (=I think John is nice.)</i></li>
              </ul>

              <p className='text-[1.1em] font-regular mb-4'>Biror ishni qilganimizda bu ishni qilish yoqishini aytayotganimizda <b>like + -ing</b> fe'lidan foydalanamiz.</p>
              
              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i><b className='text-[#ec6825]'>I like</b> dancing. (=I enjoy dancing.)</i></li>
                <li><i><b className='text-[#ec6825]'>I like</b> going to the cinema. (=I enjoy going to the cinema.)</i></li>
              </ul>

              <p className='text-[1.1em] font-regular mb-4'>So'roq gaplarda <b>do</b>dan foydalanamiz.</p>
              
              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i><b className='text-[#ec6825]'>Do you like</b> coffee ?</i></li>
                <li><i><b className='text-[#ec6825]'>Do you like</b> going to the cinema ?</i></li>
              </ul>


              {/* Like vs would like */}
              <h2 className='text-[1.6rem] text-[#1a8ec1] mb-3'><b>Like</b> vs <b>would like</b></h2>
              <p className='text-[1.1em] font-regular mb-4'>Quyidagi gaplarni solishtiring:</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px] '>
                <li><i><b className='text-[#ec6825]'>I like </b> tea. (=I think tea is good.)</i></li>
                <li><i><b className='text-[#ec6825]'>I’d like </b> some tea. (=I want some tea.)</i></li>
                <li><i><b className='text-[#ec6825]'>Do you like </b> tea? (=Do you think tea is good?)</i></li>
                <li><i><b className='text-[#ec6825]'>Would you like </b> some tea? (=Do you want some tea?)</i></li>
              </ul>

              <p className='text-[1.1em] font-regular mb-4'>Biz <b>like + -ing</b> fe'lidan va <b>would like + to + infinitive</b> dan foydalanamiz. Solishtirib ko'ring:</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i><b className='text-[#ec6825]'>I like going</b> to the cinema. (=I enjoy going to the cinema.)</i></li>
                <li><i><b className='text-[#ec6825]'>I’d like to go </b> to the cinema. (=I want to go to the cinema.)</i></li>
                <li><i><b className='text-[#ec6825]'>Do you like going  </b> to the cinema? (=Do you enjoy going to the cinema?)</i></li>
                <li><i><b className='text-[#ec6825]'>Would you like to go </b> to the cinema? (=Do you want to go to the cinema?)</i></li>
              </ul>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}