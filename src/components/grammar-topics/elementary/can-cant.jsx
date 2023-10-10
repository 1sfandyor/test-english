import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import pic from '../../../assets/grammar/elementary/topics/can-cannot_form-use.webp'

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
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'> Can, can’t – ability, possibility, permission</h1>
        <div className='container'>
          <ul className="flex border-b-2 border-l-0 border-s border-gray-500 flex-wrap text-sm font-medium text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
              <li className="mr-2">
                  <button ref={exercisesButton} onClick={exercises} className='inline-block border-x-2 border-t-2 border-s border-[grey] active py-4 px-[2.5rem] rounded-t-lg  px-20 bg-[#1a8ec1] text-white font-bold'>Mashqlar</button>
              </li>
              <li className="mr-2">
                  <button ref={explanationButton} onClick={explanation} className="inline-block border-x-2 border-t-2 border-s border-[grey] py-4 px-[2.5rem] rounded-t-lg  px-20 bg-[#1a8ec1] text-white font-bold">Tushuntirish</button>
              </li>
          </ul>

          {/* EXERCISE */}
          <div className={`my-[10px] ${hidden2}`}>
            <div className='flex items-center justify-end'>
              <p className='font-[300] text-gray-500 mr-2 text text-[25px] items-center'>MASHQLAR: </p>
              <Link className='bg-[#1a8ec1] mr-5 w-[50px] h-[40px] flex justify-center items-center text-white rounded-[5px]'>1</Link>
              <Link className='bg-[#1a8ec1] mr-5 w-[50px] h-[40px] flex justify-center items-center text-white rounded-[5px]'>2</Link>
              <Link className='bg-[#1a8ec1] mr-5 w-[50px] h-[40px] flex justify-center items-center text-white rounded-[5px]'>3</Link>
              <Link className='bg-[#1a8ec1] mr-5 w-[50px] h-[40px] flex justify-center items-center text-white rounded-[5px]'>4</Link>
            </div>
            <h1 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>Can, can’t – ability, possibility, permission</h1>
            <h1 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>1- MASHQLAR</h1>
            <p className='bg-[#dbdbdb88] border-2 border-s border-black p-3 inline-block rounded-[10px] font-bold'>Gaplarni to'ldirish uchun to'g'ri varyantni tanlang.</p>

            {/* Question 1 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>1</span>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">Do I can</option>
                <option value="are">I can</option>
                <option value="are">Can I</option>
              </select>
              <p className='text-[19px]'>ask you a question ?</p>
            </div>

            {/* Question 2 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>2</span>
              <p className='text-[19px]'>I</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">don't can hear</option>
                <option value="are">can't hear</option>
                <option value="are">can't to hear</option>
              </select>
              <p className='text-[19px]'>. The music is too loud.</p>
            </div>

            {/* Question 3 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>The match is</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">on</option>
                <option value="are">in</option>
                <option value="are">at</option>
              </select>
              <p className='text-[19px]'>4 o'clock.</p>
            </div>

            {/* Question 4 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>4</span>
              <p className='text-[19px]'>'Can you play the piano?' 'Yes, I </p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">can</option>
                <option value="are">play</option>
                <option value="are">do</option>
              </select>
              <p className='text-[19px]'>.'</p>
            </div>

            {/* Question 5 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>5</span>
              <p className='text-[19px]'>He says that he</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">can't to help</option>
                <option value="am">can't help</option>
                <option value="are">can't helps</option>
              </select>
              <p className='text-[19px]'>me.</p>
            </div>

            {/* Question 6 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>6</span>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">Do I can have</option>
                <option value="are">Can I to have</option>
                <option value="are">Can I have</option>
              </select>
              <p className='text-[19px]'>a ham and cheese pizza, please ?</p>
            </div>

            {/* Question 7 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>7</span>
              <p className='text-[19px]'>'Can I smoke here?' 'No, you </p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">can't</option>
                <option value="are">aren't</option>
                <option value="are">don't</option>
              </select>
              <p className='text-[19px]'>.'</p>
            </div>

            {/* Question 8 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>8</span>
              <p className='text-[19px]'>We </p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">can't to</option>
                <option value="are">cannot</option>
                <option value="are">don't can</option>
              </select>
              <p className='text-[19px]'>use our phones in class.</p>
            </div>

            {/* Question 9 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>9</span>
              <p className='text-[19px]'>He </p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">cans use</option>
                <option value="are">can to use</option>
                <option value="are">can use</option>
              </select>
              <p className='text-[19px]'>my car if he needs it.</p>
            </div>
 
            {/* Question 10 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>10</span>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">Can you open</option>
                <option value="are">Can you to open</option>
                <option value="are">Do you can open</option>
              </select>
              <p className='text-[19px]'> the window, please?</p>
            </div>

            <button className='py-2 px-5 bg-[#1a8ec1] flex justify-center items-center text-white mx-auto rounded-[10px] my-10'>
              Javoblarni Tekshirish
            </button>
          </div>


          {/* EXPLANATION */}
          <div className={`my-10 ${hidden}`}>
            <h1 className='text-[30px] py-[10px] my-5 text-[#1a8ec1]'><b>Can, can't</b> - gramatik jadval</h1>

            <div className='w-[55%]'>
              <img className='w-[100%]' src={pic} alt="..." />
            </div>

            <div className='info my-10'>

            <h2 className='text-[1.6rem] py-[10px] my-5 text-[#1a8ec1]'><b>Can, can’t</b> – shakli</h2>

              {/* Infinitive without to */}
              <h4 className='text-[1.2em] text-[#1a8ec1] mb-3'><b>To</b> qo'shimchasisiz infinitiv</h4>

              <p className='text-[1.1em] font-regular mb-4'><b>can + infinitive</b>-ni <b>to</b> qo'shimchasisiz ishlatamiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i>I <span className='text-[#ec6825]'><b>can swim</b> </span>. (<del>I can to swim</del> EMAS.)</i></li>
                <li><i>We <span className='text-[#ec6825]'><b>can’t come</b></span>. (<del>We can’t to come</del> EMAS.)</i></li>
              </ul>

              {/* No -s after he/she/it */}
              <h4 className='text-[1.2em] text-[#1a8ec1] mb-3'><b>he/she/it</b>-da <b>-s</b> bo'lmaydi.</h4>

              <p className='text-[1.1em] font-regular mb-4'><b>he/she/it</b> dan keyin <b>-s</b> qo'shimchasini qo'shmaymiz. Barcha kishilik olmoshlari uchun <b>can</b>-dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i>He<span className='text-[#ec6825]'><b>can</b></span> swim. (<del>He cans swim</del> EMAS).</i></li>
              </ul>

              
              {/* No do/don’t */}
              <h4 className='text-[1.2em] text-[#1a8ec1] mb-3'><b>Do/Don't</b> bo'lmaydi.</h4>

              <p className='text-[1.1em] font-regular mb-4'><b>Can</b> yordamchi fe’l bo‘lib, inkor va so‘roq shaklga ega. So'roq va inkor gap tuzish uchun <b>do/don't</b>-dan foydalanmaymiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i><span className='text-[#ec6825]'><b>Can</b></span> you swim? (<del>Do you can swim?</del> EMAS)</i></li>
                <li><i>He<span className='text-[#ec6825]'><b>can’t</b></span> swim. (<del>He don’t can swim.</del> EMAS)</i></li>
              </ul>

              {/* Can, can’t – use */}
              <h2 className='text-[1.6rem] py-[10px] my-5 text-[#1a8ec1]'><b>Can, can’t</b> – Qo'llash</h2>
              <h4 className='text-[1.2em] text-[#1a8ec1] mb-3'>Qobiliyat</h4>

              <p className='text-[1.1em] font-regular mb-4'>Qobiliyat haqida gapirish uchun <b>can/can't</b>-dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i>Laura<span className='text-[#ec6825]'><b>can sing</b></span> very well.</i></li>
                <li><i>I<span className='text-[#ec6825]'><b>can't</b></span> can’t speak </i></li>
              </ul>

              {/* Possibility */}
              <h4 className='text-[1.2em] text-[#1a8ec1] mb-3'>Imkoniyat</h4>
              <p className='text-[1.1em] font-regular mb-4'><b>Ruxsat so'rash</b>-da va biror narsa <b>mumkin</b> yoki <b>mumkin emasligini</b> aytish uchun <b>can/can't</b>-dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i><span className='text-[#ec6825]'><b>Can</b></span> I sit here?</i></li>
                <li><i>You<span className='text-[#ec6825]'><b>can’t vote </b></span> if you aren’t 18 years old. </i></li>
                <li><i>’m sorry but I <span className='text-[#ec6825]'><b>can’t come</b></span> to the party. </i></li>
              </ul>


              {/* Ask for something */}
              <h4 className='text-[1.2em] text-[#1a8ec1] mb-3'>Nimadur so'rash uchun</h4>
              <p className='text-[1.1em] font-regular mb-4'>Bar, restoran, do'konlar-da <b>biror narsa so'rash</b> va <b>buyurtma</b> qilish uchun <b>can/can’t</b>-dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i><b className='text-[#ec6825]'>Can you lend </b> me some money? </i></li>
                <li><i><b className='text-[#ec6825]'>Can I have </b> some water, please?</i></li>
                <li><i><b className='text-[#ec6825]'>Can I have </b> a burger and a soda? </i></li>
              </ul>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}