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
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'>There yoki it</h1>
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
            <h2 className='text-[1.6rem] py-[10px] my-5 text-[#1a8ec1]'>There yoki it</h2>
            <h2 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>1-Mashq</h2>
            <p className='bg-[#f6f6f6] border-[1px] border-s border-[#ccc] p-[8px] inline-block rounded-[2px] font-bold'>Quyidagi gaplarni to'ldirish uchun to'g'ri shakldagi <i>there</i> yoki <i>it</i>ni tanlang.</p>
            <div className='flex my-5 items-center gap-3'>

              {/* Question 1 */}
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>1</span>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="not drink">There</option>
                <option value="don't drink">It</option>
              </select>
              <p className='text-[19px]'>is dangerous to drive at night.</p>
            </div>
            
            {/* Question 2*/}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>2</span>
              <p className='text-[19px]'>I opened the door and</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="haves">it</option>
                <option value="have">there</option>
              </select>
              <p className='text-[19px]'>was a strange man behind it.</p>
            </div>

            {/* Question 3 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="an interesting job">It</option>
                <option value="a job interview">There</option>
              </select>
              <p className='text-[19px]'>was a problem with the car. We took a taxi.</p>
            </div>

            {/* Question 4 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>4</span>
              <p className='text-[19px]'>I want to go home</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are fantastic">there</option>
                <option value="are fantastics">it</option>
              </select>
              <p className='text-[19px]'>'s late and I'm tired.</p>
            </div>

            {/* Question 5 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>5</span>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="look tired">There</option>
                <option value="smell tired">They</option>
              </select>
              <p className='text-[19px]'>aren't any students in the classroom.</p>
            </div>

            {/* Question 6 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>I'm watching a new series.</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="Are they happies">There</option>
                <option value="Are they happy">It</option>
              </select>
              <p className='text-[19px]'>'s very good.</p>
            </div>

            {/* Question 7 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>7</span>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="Are good his marks">It</option>
                <option value="Are goods his marks">There</option>
              </select>
              <p className='text-[19px]'>is very cold today.</p>
            </div>

            {/* Question 8 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>8</span>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="sounds interesting">It</option>
                <option value="interesting looks">There</option>
              </select>
              <p className='text-[19px]'>is a new teacher at my school.</p>
            </div>

            {/* Question 9 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>9</span>
              <p className='text-[19px]'>There's a park opposite my house</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are excellents">There</option>
                <option value="excellent are">It</option>
              </select>
              <p className='text-[19px]'>is beautiful.</p>
            </div>

            {/* Question 10 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>10</span>
              <p className='text-[19px]'>They are in the classroom.</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are blues">It</option>
                <option value="are blue">There</option>
              </select>
              <p className='text-[19px]'>is an exam now.</p>
            </div>

            <button className='py-2 px-5 bg-[#1a8ec1] flex justify-center items-center text-white mx-auto rounded-[10px] my-10'>
              Javoblarni Tekshirish
            </button>
          </div>

          {/* EXPLANATIONS */}
          <div className={`my-10 ${hidden}`}>
            {/* INFO */}
            <div className='info my-10'>

              {/* There */}
              <h2 className='text-[1.6rem] text-[#1a8ec1] mb-3'>There</h2>
              
              <p className='text-[1.1em] font-regular mb-4'><b>Qachondir</b> nimadur bo'lishini yoki <b>qayerdadur</b> biror narsa borligi haqida gapirganimizda <b>there</b>-dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i><b className='text-[#ec6825]'>There are</b> some dirty cups on the table.</i></li>
                <li><i><b className='text-[#ec6825]'>There is</b> a party tomorrow.</i></li>
              </ul>

              <p className='text-[1.1em] font-regular mb-4'>Biror narsa borligini yoki sodir bo'lganini aytish uchun <b>there</b>-dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px] '>
                <li><i><b className='text-[#ec6825]'>There is</b> a problem.</i></li>
                <li><i><b className='text-[#ec6825]'>There was</b> an accident.</i></li>
              </ul>

              <p className='text-[1.1em] font-regular mb-4'><span className='bg-[#ec6825] py-[2px] px-[4px] text-[#fff] font-bold  rounded text-sm leading-3'>Eslatma</span>  biror narsani birinchi marta eslatib o'tganimizda <b>there</b>-dan foydalanamiz. Agar yana o'sha narsa haqida gapiradigan bo'lsak <b>it</b> yoki <b>they</b>-dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px] '>
                <li><i><b className='text-[#ec6825]'>There are</b> some cups on the table. But <b className='text-[#ec6825]'>they</b> are dirty.</i></li>
                <li><i><b className='text-[#ec6825]'>There are</b> an accident. <b className='text-[#ec6825]'>It</b> was horrible.</i></li>
              </ul>


              {/* It */}
              <h2 className='text-[2rem] text-[#1a8ec1] mb-[40px] '>It</h2>

              <p className='text-[1.1em] font-regular mb-4'>Suhbatda biror narsa haqida qayta gapirganimizda <b>it</b> dan foydalanamiz. </p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[50px]'>
                <li><i>There is a party tomorrow. <b className='text-[#ec6825]'>It</b> will be fantastic!</i></li>
                <li><i>We saw a snake in the forest. <b className='text-[#ec6825]'>It</b> was very big.</i></li>
              </ul>


              {/* About time and data */}
              <p className='text-[1.1em] font-regular mb-4'>Vaqt va sana haqida gapirganimizda  <b>it</b> dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i><b className='text-[#ec6825]'>It</b>'s my mum's birthday today.</i></li>
                <li><i>Let's go home. <b className='text-[#ec6825]'>It</b>'s very late.</i></li>
                <li><i><b className='text-[#ec6825]'>It</b>'s four o'clock.</i></li>
              </ul>

              {/* About Weater */}
              <p className='text-[1.1em] font-regular mb-4'>Ob-havo haqida gapirganimizda <b>it</b> dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i><b className='text-[#ec6825]'>It</b>'s very windy. </i></li>
                <li><i><b className='text-[#ec6825]'>It</b>'s a nice day.</i></li>
                <li><i><b className='text-[#ec6825]'>It</b> rained a lot yesterday.</i></li>
                <li><i><b className='text-[#ec6825]'>It</b>'s four degrees.</i></li>
              </ul>

              {/* About distance */}
              <p className='text-[1.1em] font-regular mb-4'>Masofa haqida gapirganimizda <b>it</b> dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>How far is <b className='text-[#ec6825]'>it</b> ?</i></li>
                <li><i><b className='text-[#ec6825]'>It</b>'s not very far.</i></li>
                <li><i><b className='text-[#ec6825]'>It</b> a long way to the nearest petrol station.</i></li>
                <li><i><b className='text-[#ec6825]'>It</b>'s 2 kilometres from the hotel to the station.</i></li>
              </ul>

              <p className='text-[1.1em] font-regular mb-4'><span className='bg-[#ec6825] py-[2px] px-[4px] text-[#fff] font-bold  rounded text-sm leading-3'>Eslatma</span> inkor va so'roq gaplarda va tasdiqlovchi gaplarda <b>far</b>-dan foydalanamiz.</p>

              <p className='text-[1.1em] font-regular mb-4'> <b>it's</b> + adjective <b>+ to +</b> infinitive dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i><b className='text-[#ec6825]'>It’s nice to see</b> you again.</i></li>
                <li><i><b className='text-[#ec6825]'>It was difficult to find</b> the hotel.</i></li>
              </ul>


               {/* Be careful with these common mistakes! */}
              <h2 className='text-[2rem] text-[#1a8ec1] mb-[40px] '>Quyidagi keng tarqalgan xatolarni qilishdan ehtiyot bo'ling!</h2>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i className='text-[#ff0000]'>I think the worst part of the exam it’s speaking. ❌</i></li>
                <li><i className='text-[#339966]'>I think the worst part of the exam is speaking. ✅</i></li>
              </ul>

              <p className='text-[1.1em] font-regular mb-4'> Gapda ish harakati (fe'l)ning egasiga nisbatan <b>it</b> dan foydalanmaymiz. Yuqoridagi gapda <b>is</b>ning subjecti 'the worst part of the exam'-dir </p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i className='text-[#ff0000]'>I love their music. Is fantastic! ❌</i></li>
                <li><i className='text-[#339966]'>I love their music. It’s fantastic! ✅</i></li>
              </ul>

              <p className='text-[1.1em] font-regular mb-4'> Suhbatda biror narsani qayta estlaganingizda <b>it</b>-dan foydalanishni unutmang. </p>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}