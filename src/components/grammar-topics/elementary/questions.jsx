import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import pic from '../../../assets/grammar/elementary/topics/Present-simple-questions.png'
import pic2 from '../../../assets/grammar/elementary/topics/Question-words-a1_new.png'

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
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'>Savollar – so'z ketma ketligi va so'roq gaplar</h1>
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
            <h2 className='text-[1.6rem] font-bold py-[10px] my-5 text-[#1a8ec1]'>Savollar – so'z ketma ketligi va so'roq gaplar</h2>
            <h1 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>1-Mashq</h1>
            <p className='bg-[#f6f6f6] border-[1px] border-s border-[#ccc] p-[8px] inline-block rounded-[2px] font-bold'>To'g'ri tuzilgan savollarni tanlang.</p>
            <div className='flex my-5 items-center gap-3'>

              {/* Question 1 */}
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>1</span>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="This">This</option>
                <option value="These">These</option>
              </select>
              <p className='text-[19px]'>are my trousers.</p>
            </div>
            
            {/* Question 2*/}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>2</span>
              <p className='text-[19px]'>Hi, Chris</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="This">This</option>
                <option value="That">That</option>
              </select>
              <p className='text-[19px]'>is my friend Jona.' 'Hi, Jona. Nice to meet you.'</p>
            </div>

            {/* Question 3 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>Look at</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="those">those</option>
                <option value="these">these</option>
              </select>
              <p className='text-[19px]'>birds in the sky. </p>
            </div>

            {/* Question 4 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>4</span>
              <p className='text-[19px]'>What are </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="that">that</option>
                <option value="those">those</option>
              </select>
              <p className='text-[19px]'>? They are my books.'</p>
            </div>

            {/* Question 5 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>5</span>
              <p className='text-[19px]'>Is</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="that">that</option>
                <option value="those">those</option>
              </select>
              <p className='text-[19px]'>hotel nice?</p>
            </div>

            {/* Question 6 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>6</span>
              <p className='text-[19px]'>A:</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="this">this</option>
                <option value="these">these</option>
              </select>
              <p className='text-[19px]'>your friends?</p>
            </div>

            {/* Question 7 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>7</span>
              <p className='text-[19px]'>Who is</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="that">that</option>
                <option value="this">this</option>
              </select>
              <p className='text-[19px]'>man over there?</p>
            </div>

            {/* Question 8 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>8</span>
              <p className='text-[19px]'>Isn't</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="these">these</option>
                <option value="this">this</option>
              </select>
              <p className='text-[19px]'>your friend Erik?</p>
            </div>

            {/* Question 9 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>9</span>
              <p className='text-[19px]'>Why are</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="these">these</option>
                <option value="those">those</option>
              </select>
              <p className='text-[19px]'>boxes here?</p>
            </div>

            {/* Question 10 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>10</span>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="These">These</option>
                <option value="That">That</option>
              </select>
              <p className='text-[19px]'>are my glasses.</p>
            </div>

            <button className='py-2 px-5 bg-[#1a8ec1] flex justify-center items-center text-white mx-auto rounded-[10px] my-10'>
              Javoblarni Tekshirish
            </button>
          </div>

          {/* EXPLANATIONS */}
          <div className={`my-10 ${hidden}`}>
            <h2 className='text-[1.6rem] font-bold py-[10px] my-5 text-[#1a8ec1]'>Present Simpledagi so'roq gaplarda soz'larning tartibi</h2>

            {/* INFO */}
            <div className='info my-10'>

              {/* QWASI */}
              <p className='text-[1.1em] mb-2'>Present simple-da savol tuzishda so'zlarning tartibi quyidagicha:  <b>QWASI: (Question Word) + Auxiliary + Subject + Infinitive.</b></p>

              <ul className='list-disc pl-5 text-[20px] mb-[30px]'>
                <li><i>What do you do?</i></li>
                <li><i>Where do they live?</i></li>
              </ul>

              {/* Yes-No questions */}
              <p className='text-[1.1em] mb-2'><b>Ha</b> yoki <b>yo'q</b> deb javob beriladigan savollarda (Question word) bo'lmaydi ?</p>

              <ul className='list-disc pl-5 text-[20px] mb-[30px]'>
                <li><i>Do you speak English ?</i></li>
                <li><i>Does she live here ?</i></li>
              </ul>

              <p className='text-[1.1em] mb-4'>Present Simple-da <b>Auxiliary verb</b>,  <b>be</b> yoki <b>do/does</b> bo'ladi.Quyida <b>be</b> yoki <b>do/does</b> ni Present Simple savollaridagi soʻzlarning tartibi boʻyicha grammatik jadvalni koʻrishingiz mumkin.</p>

              <div className='w-[55%] mb-[60px]'>
                <img className='w-[100%]' src={pic} alt="..." />
              </div>

              {/* am/is/are bilan savol tuzish */}
              <h4 className='text-[1.2em] text-[#1a8ec1]'>am/is/are bilan savol tuzish</h4>
              <p className='text-[1.1em] mb-4'>Gapdagi fe'l <b>to be</b> bo'lganida subjectdan oldin <b>am/is/are</b> yordamchi fe'lidan foydalanamiz. Keyin qolgan so'zlar ketma ketligi <b>QWAS: (Question Word) + Auxiliary (am/is/are) + Subject</b> bo'ladi</p>


              {/* do/does bilan savol tuzish */}
              <h4 className='text-[1.2em] text-[#1a8ec1]'>Do/does bilan savol tuzish</h4>
              <p className='text-[1.1em] mb-4'>Agar gapdagi gapdagi fe'l <b>to be</b> bo'lmasa yordamchi fe'l sifatida <b>do/does</b> dan foydalanamiz. <b>Does</b> ni <b>he/she/it</b> uchun va <b>do</b>ni <b>I/you/we/they</b> uchun ishlatamiz. Unutmang, subjectdan keyingi asosiy fe'l infinitiv bo'ladi (<b>-s</b> yoki <b>-es</b> EMAS).</p>

              <ul className='list-disc pl-5 text-[20px] mb-[30px]'>
                <li><i>What do<b className='text-[#ec6825]'>es</b> she <b className='text-[#ec6825]'>do</b>? <del>What does she does?</del>.</i></li>
                <li><i>Where do<b className='text-[#ec6825]'>es</b> he <b className='text-[#ec6825]'>work</b>? <del>Where does he works?</del>.</i></li>
              </ul>

              <h2 className='text-[1.6rem] font-bold py-[10px] my-5 text-[#1a8ec1]'>So'roq so'zlar - gramatika jadvali</h2>
              <div className='w-[55%] mb-[60px]'>
                <img className='w-[100%]' src={pic2} alt="..." />
              </div>

              {/* What + noun */}
              <h4 className='text-[1.2em] text-[#1a8ec1]'><b>What</b> + noun</h4>
              <p className='text-[1.1em] mb-4'>Biz <b>what</b>ni <b>what + noun</b> so'roq so'zi sifatida foydalanamiz. <b>what time, what colour, what size va hkz.</b></p>

              <ul className='list-disc pl-5 text-[20px] mb-[70px]'>
                <li><i><b className='text-[#ec6825]'>What colour</b> is your jacket?</i></li>
                <li><i><b className='text-[#ec6825]'>What size</b> do you want?</i></li>
                <li><i><b className='text-[#ec6825]'>What car</b> does he have?</i></li>
              </ul>

              {/* How + adjective/adverb */}
              <h4 className='text-[1.2em] text-[#1a8ec1]'><b>How</b> + adjective/adverb</h4>
              <p className='text-[1.1em] mb-4'>Bundan tashqari <b>how often, how old, how tall</b> kabi frazalarda so'roq gap sifatida <b>how + adjective/adverb</b> ni ham ishlatamiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-[70px]'>
                <li><i><b className='text-[#ec6825]'>How fast</b> is your car?</i></li>
                <li><i><b className='text-[#ec6825]'>How big</b> her house?</i></li>
                <li><i><b className='text-[#ec6825]'>How often</b> do you play sports?</i></li>
              </ul>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}