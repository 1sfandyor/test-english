import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import pic from '../../../assets/grammar/elementary/topics/ing-spelling.png'

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
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'>Fe'llar +  To + Infinitive va fe'llar + -ing</h1>
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
            <h4 className='text-[1.2em] font-bold py-[10px] my-5 text-[#1a8ec1]'>Fe'llar +  To + Infinitive va fe'llar + -ing</h4>
            <h1 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>1-Mashq</h1>
            <p className='bg-[#f6f6f6] border-[1px] border-s border-[#ccc] p-[8px] inline-block rounded-[2px] font-bold'>To'g'ri infinitive yoki -ing shaklini tanlang.</p>
            <div className='flex my-5 items-center gap-3'>

              {/* Question 1 */}
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>1</span>
              <p className='text-[19px]'>Pam loves </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="recive">recive</option>
                <option value="recivings">recivings</option>
                <option value="reciving">reciving</option>
              </select>
              <p className='text-[19px]'>letters.</p>
            </div>
            
            {/* Question 2*/}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>2</span>
              <p className='text-[19px]'> She's planning </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="going">going</option>
                <option value="to go">to go</option>
                <option value="to going">to going</option>
              </select>
              <p className='text-[19px]'> on trip to Paris. </p>
            </div>

            {/* Question 3 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>Would you like </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="to have">to have</option>
                <option value="having">having</option>
                <option value="have">have</option>
              </select>
            </div>

            {/* Question 4 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>4</span>
              <p className='text-[19px]'>My son never wants. </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="going">going</option>
                <option value="to go">to go</option>
                <option value="goes">goes</option>
              </select>
            </div>

            {/* Question 5 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>5</span>
              <p className='text-[19px]'>I don't mind </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="washing">washing</option>
                <option value="wash">wash</option>
                <option value="to wash">to wash</option>
              </select>
              <p className='text-[19px]'> the dishes.</p>
            </div>

            {/* Question 6 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>Sorry, I forget  </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="Are they happies">to call</option>
                <option value="Are they happy">calling</option>
                <option value="Are happy they">call</option>
              </select>
              <p className='text-[19px]'>you this afternoon.</p>
            </div>

            {/* Question 7 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>7</span>
              <p className='text-[19px]'>Do you like </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="Are good his marks">driving</option>
                <option value="Are goods his marks">drive</option>
                <option value="Are his marks good">to driving</option>
              </select>
              <p className='text-[19px]'> ?</p>
            </div>

            {/* Question 8 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>8</span>
              <p className='text-[19px]'>Please, remember </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="sounds interesting">to send</option>
                <option value="interesting looks">sending</option>
                <option value="interesting looks">send</option>
              </select>
            </div>

            {/* Question 9 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>10</span>
              <p className='text-[19px]'>I'd like</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are blues">to ask</option>
                <option value="are blue">asking</option>
                <option value="blue are">ask</option>
              </select>
              <p className='text-[19px]'>you some questions.</p>
            </div>

            {/* Question 10 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>9</span>
              <p className='text-[19px]'>I learned  </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="to play">to play</option>
                <option value="played">played</option>
                <option value="played">playing</option>
              </select>
              <p className='text-[19px]'> the guitar when I was 6.</p>
            </div>
            

            <button className='py-2 px-5 bg-[#1a8ec1] flex justify-center items-center text-white mx-auto rounded-[10px] my-10'>
              Javoblarni Tekshirish
            </button>
          </div>

          {/* EXPLANATIONS */}
          <div className={`my-10 ${hidden}`}>
            <h1 className='text-[1.6rem] py-[10px] my-5 text-[#1a8ec1]'>Fe'llar + To + Infinitive va fe'llar + -ing</h1>

            {/* INFO */}
            <div className='info my-10'>

              <h2 className='text-[1.6rem] text-[#1a8ec1] mb-3'>Fe'llar + <b>-ing</b></h2>
              
              <p className='text-[1.1em] font-regular mb-4'>Ingliz tilida ba'zi fe'llardan keyin <b>-ing</b> shaklidagi boshqa fe'l ham keladi. Bu fe'llarning eng keng tarqalgan turlari <b>love, like, enjoy, don’t mind, don’t like, hate</b> kabi nimanidir yoqtirish yoki yoqtirmaslikni ifodalovchi fe'llardir.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>I <b className='text-[#ec6825]'>love going</b> to the gym.</i></li>
                <li><i>I <b className='text-[#ec6825]'>like reading</b>.</i></li>
                <li><i>I <b className='text-[#ec6825]'>enjoy travelling</b>.</i></li>
                <li><i>I <b className='text-[#ec6825]'>don't mind cooking</b>.</i></li>
                <li><i>I<b className='text-[#ec6825]'>don't like doing</b> homework.</i></li>
                <li><i>I<b className='text-[#ec6825]'>hate getting</b> up early.</i></li>
              </ul>

              <p className='text-[1.1em] font-regular mb-4'>Ikkinchi fe'l past (o'tgan zamon) da ham <b>-ing</b> qo'shimchasini oladi.</p>
              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>When I was a cchild I <b className='text-[#ec6825]'>hated going</b> to school. (<del>I hated went to school</del> EMAS.)</i></li>
              </ul>

              {/* -ing spelling*/}
              <h2 className='text-[1.6rem] text-[#1a8ec1] mb-3'><b>-ing</b> qoidasi</h2>
              <p className='text-[1.1em] font-regular mb-4'>Quyidagi jadval orqali <b>-ing</b> ning yozilish qoidasini tekshirishingiz mumkin.</p>

              <div className='w-[55%]'>
                <img className='w-[100%]' src={pic} alt="..." />
              </div>

              {/* verbs + to + infinitive*/}
              <h4 className='text-[1.2em] text-[#1a8ec1] '>Verbs + <b>to</b> + inginitive</h4>
              <p className='text-[1.1em] font-regular mb-4'>Ingliz tilidagi ko'p fe'llardan keyin <b>to</b> + infinitive keladi. Bularga <b>forget, hope, learn, need, offer, plan, remember, start, want va would like</b> kabi fe'llarini misol qilish mumkin.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>I <b className='text-[#ec6825]'>forgot to turn off</b> the light.</i></li>
                <li><i>I <b className='text-[#ec6825]'>hope to see</b> you soon.</i></li>
                <li><i>I<b className='text-[#ec6825]'>'m learning to drive</b>.</i></li>
                <li><i>We <b className='text-[#ec6825]'>need to arrive</b> early.</i></li>
                <li><i>She <b className='text-[#ec6825]'>offered to help</b> us.</i></li>
                <li><i>We <b className='text-[#ec6825]'>are planning to go</b> to France.</i></li>
                <li><i><b className='text-[#ec6825]'>Remember to lock</b> the door.</i></li>
                <li><i>I <b className='text-[#ec6825]'>want to go</b> home.</i></li>
                <li><i>I <b className='text-[#ec6825]'>would like to buy</b> a new computer.</i></li>
              </ul>
              <p className='text-[1.1em] font-regular mb-4'>Ikkinchi fe'l past (o'tgan zamonda) ham <b>to</b> + infinitive shaklini oladi.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>I <b className='text-[#ec6825]'>wanted to go</b> home. (<del>I wanted to went home</del> EMAS.)</i></li>
              </ul>


              {/* would like */}
              <h4 className='text-[1.2em] text-[#1a8ec1] '>Would like</h4>
              <p className='text-[1.1em] font-regular mb-4'><b>Would like</b> (yoki <b>'d like</b>) fe'li <b>like</b>dan farq qiladi. Biz <b>would like + to</b> + infinitive dan foydalanamiz va odatda umumiy afzalliklar haqida gapirish uchun <b>like</b> + <b>-ing</b> fe'lidan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>I<b className='text-[#ec6825]'>'d like to study</b> English.</i></li>
                <li><i>I <b className='text-[#ec6825]'>like studying</b> English.</i></li>
              </ul>

              <p className='text-[1.1em] font-regular mb-4'>Ularning ma'nolari ha farq qiladi.</p>
              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>I<b className='text-[#ec6825]'>'d like to study</b> English (= I want to do it.)</i></li>
                <li><i>I <b className='text-[#ec6825]'>like studying</b> English (= I enjoy it.)</i></li>
              </ul>


              <p className='text-[1.1em] font-regular mb-4'>Nimanidir taklif yoki tavsiya qilganimizda <b>would you like..</b> so'rog'idan foydalanamiz.</p>
              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i><b className='text-[#ec6825]'>Would you like</b> a cup of coffee ?</i></li>
                <li><i><b className='text-[#ec6825]'>Would you like</b> to dance with me ?</i></li>
              </ul>


            </div>
          </div>
        </div>
      </main>
    </>
  )
}