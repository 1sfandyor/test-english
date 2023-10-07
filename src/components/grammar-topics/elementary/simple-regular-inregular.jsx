import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import pic from '../../../assets/grammar/elementary/topics/past-regular-ed-spelling.webp'
import pic2 from '../../../assets/grammar/elementary/topics/irregular-verb-list_past.webp'

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
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'>Past simple – regular/irregular fe'llar</h1>
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
            <h2 className='text-[1.6rem] font-bold py-[10px] my-5 text-[#1a8ec1]'>Past simple – regular/irregular fe'llar</h2>
            <h2 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>1-Mashq</h2>
            <p className='bg-[#f6f6f6] border-[1px] border-s border-[#ccc] p-[8px] inline-block rounded-[2px] font-bold'>Quyidagi gaplarni to'ldirish uchun qavs ichidagi to'g'ri fe'llarni past simple shaklida yozing.</p>
            <div className='flex my-5 items-center gap-3'>

              {/* Question 1 */}
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>1</span>
              <p className='text-[19px]'>I </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'>(study) all night yesterday.</p>
            </div>
            
            {/* Question 2*/}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>2</span>
              <p className='text-[19px]'>We </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'> (play) poker after dinner.</p>
            </div>

            {/* Question 3 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>After escaping from prison, he </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'> (rob) a bank.</p>
            </div>

            {/* Question 4 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>4</span>
              <p className='text-[19px]'>He </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'>(start) playing chess at the age of 7.</p>
            </div>

            {/* Question 5 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>5</span>
              <p className='text-[19px]'>We </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'> (arrive) home very late.</p>
            </div>

            {/* Question 6 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>We </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'> (visit) the Louvre while we were in Paris. </p>
            </div>

            {/* Question 7 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>7</span>
              <p className='text-[19px]'>He </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'> (try) to escape.  </p>

            </div>

            {/* Question 8 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>8</span>
              <p className='text-[19px]'>I </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'>(stop) smoking when I was 30.</p>
            </div>

            {/* Question 9 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>9</span>
              <p className='text-[19px]'> When I was a child, I </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'>(hate) fish.</p>
            </div>

            {/* Question 10 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>10</span>
              <p className='text-[19px]'>We really </p>
              <input className='border-gray-400 border-2 w-28' type="text" />
              <p className='text-[19px]'>(enjoy) the concert. </p>
            </div>

            <button className='py-2 px-5 bg-[#1a8ec1] flex justify-center items-center text-white mx-auto rounded-[10px] my-10'>
              Javoblarni Tekshirish
            </button>
          </div>

          {/* EXPLANATIONS */}
          <div className={`my-10 ${hidden}`}>
            <h2 className='text-[1.6rem] py-[10px] my-5 text-[#1a8ec1]'>Past simple regular</h2>

            {/* INFO */}
            <div className='info mb-10'>

              <p className='text-[1.1em] font-regular mb-4'>Biz to'g'ri fe'llarni past simple shaklga o'tkazish uchun <b>-ed</b> qo'shimchasini qo'shamiz.</p>
              
              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>We often watch a film on Saturday. ⇒ We <b className='text-[#ec6825]'>watched</b> a film last Saturday.</i></li>
                <li><i>I live in Barcelona. ⇒ I <b className='text-[#ec6825]'>lived</b> in Barcelona in the 90s.</i></li>
              </ul>              

              <h4 className='text-[1.2em] mb-[15px] text-[#1a8ec1] '>To'g'ri fe'llar imlosi</h4>

              <div className='w-[55%] mb-[35px]'>
                <img className='w-[100%]' src={pic} alt="..." />
              </div>

              <h4 className='text-[1.2em] mb-[15px] text-[#1a8ec1]'>Qachon undoshlar ikkilanadi.</h4>

              <p className='text-[1.1em] font-regular mb-4'>Agar fe'l <b>undosh + unli + undosh</b> bilan tugasa uning ohirgi undosh harfi ikkilanadi. Fe'l <b>bir bo'g'inli</b> bo'lsagina undosh ikkilanishi mumkin.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>stop ⇒ sto<b className='text-[#ec6825]'>pp</b>ed.</i></li>
                <li><i>plan ⇒ pla<b className='text-[#ec6825]'>nn</b>ed.</i></li>
                <li><i>shop ⇒ sho<b className='text-[#ec6825]'>pp</b>ed.</i></li>
                <li><i>rob ⇒ ro<b className='text-[#ec6825]'>bb</b>ed.</i></li>
              </ul>

              <p className='text-[1.1em] font-regular mb-4'>Fe'l <b>ikki bo'g'inli</b> bo'lsa, <b>ohirgi bo'g'indagi undosh</b> ikkilanadi.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li>reFER ⇒ referred</li>
                <li>preFER ⇒ preferred</li>
                <li>reGRET ⇒ regretted</li>
              </ul>

              <p className='text-[1.1em] font-regular mb-4'>Lekin <b>ohirgi undoshga urg'u tushmasa</b> undosh harfni <b>ikkilamaymiz</b>.</p>
              
              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li>VIsit ⇒ visited</li>
                <li>ANswer ⇒ answered</li>
              </ul>


              {/* Past simple irregular */}
              <h2 className='text-[1.6rem] text-[#1a8ec1] mb-3'>Past simple irregular</h2>
              <p className='text-[1.1em] font-regular mb-4'>Baz'i fe'llar noto'g'ri fe'l hisoblanadi va ularni past simple-ga o'tkazish uchun <b>-ed</b> qo'shilmaydi. Quyida bularga ba'zi misollar keltirilgan.</p>
                          
              <div className='w-[55%] mb-[35px]'>
                <img className='w-[100%]' src={pic2} alt="..." />
              </div>

              {/* Past simple – use */}
              <h2 className='text-[1.6rem] text-[#1a8ec1] mb-3'>Past simple - Foydalanish</h2>
              <h4 className='text-[1.2em] mb-[15px] text-[#1a8ec1]'>Tugallangan ish haraktlar yoki holatlar</h4>

              <p className='text-[1.1em] font-regular mb-4'>Past simpleni <b>tugallangan ish harakatlari yoki holatlar</b> haqida gapirganimizda ishlatamiz. Biz bu ish allaqachon o'tib ketganini bilamiz va bu ish sodir qachon bo'lganligini ifodalovchi <b>yesterday, yesterday morning, last night, last week, two days ago, five years ago va hkz</b> kabi vaqt iboralarini ko'p ishlatamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px] '>
                <li><i>Jessica<b className='text-[#ec6825]'>called</b> me last night.</i></li>
                <li><i>Reachel <b className='text-[#ec6825]'>was</b> a very good writer.</i></li>
              </ul>


              {/* Past repeated actions */}
              <h4 className='text-[1.2em] mb-[15px] text-[#1a8ec1]'>O'tgan takrorlanuvuchi ish harakatlar</h4>

              <p className='text-[1.1em] font-regular mb-4'>Past simple-ni o'tgan zamonda sodir bo'lgan ammo hozirda bo'lmayotgan <b>odatlar yoki takrorlanuvchi ish harkatlar</b> haqida gapirganimizda ham ishlata olamiz. Biz <b>adverblardan yoki often, always, every day, kabi expression-lardan </b> ko'p foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>When I was a child, I <b className='text-[#ec6825]'>ate</b> sweets every day.</i></li>
                <li><i>In school, I always <b className='text-[#ec6825]'>played</b> football during break time.</i></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}