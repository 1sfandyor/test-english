import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import pic from '../../../assets/grammar/elementary/topics/this-that-these-those.webp'

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
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'>This, that, these, those</h1>
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
            <h2 className='text-[1.6rem] font-bold py-[10px] my-5 text-[#1a8ec1]'>This/these= here, that/those= there</h2>
            <h1 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>1-Mashq</h1>
            <p className='bg-[#f6f6f6] border-[1px] border-s border-[#ccc] p-[8px] inline-block rounded-[2px] font-bold'>Gaplarni this, that, these, those bilan to'ldirib chiqing .</p>
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
            <h1 className='text-[1.6rem] font-bold py-[10px] my-5 text-[#1a8ec1]'>This/these= here, that/those= there</h1>

            <div className='w-[55%]'>
              <img className='w-[100%]' src={pic} alt="..." />
            </div>

            {/* INFO */}
            <div className='info my-10'>

              {/* THIS VA THESE */}
              <h2 className='text-[1.6rem] font-bold text-[#1a8ec1]'>This, these</h2>
              <p className='text-[25px] mb-4'>Biz <b>this</b> va <b>these</b>ni <b>shu yerdagi</b> (yaqin) narsalar uchun ishlatamiz. <b>This</b> birlikni va <b>these</b> ko'plikni ifodalaydi.</p>

              <ul className='list-disc pl-5 text-[20px] mb-[70px]'>
                <li><i><span className='text-[#ec6825]'><b>This</b></span> is my new watch. </i></li>
                <li><i><span className='text-[#ec6825]'><b>These</b></span> are my sisters Anna and Jenny. </i></li>
              </ul>

              {/* THAT VA THOSE */}
              <h2 className='text-[1.6rem] font-bold text-[#1a8ec1]'>That, those</h2>
              <p className='text-[25px] mb-4'>Biz <b>that</b> va <b>those</b>ni <b>u yerdagi</b> (uzoqroq) narsalar uchun ishlatamiz. <b>That</b> birlikni va <b>those</b> ko'plikni ifodalaydi.</p>

              <ul className='list-disc pl-5 text-[20px] mb-[70px]'>
                <li><i><b className='text-[#ec6825]'>That </b>man is very strange. </i></li>
                <li><i>I need <b className='text-[#ec6825]'>those</b>boxes over there.</i></li>
              </ul>

              {/* With a noun or without a noun */}
              <h2 className='text-[1.6rem] font-bold text-[#1a8ec1]'>Noun bilan yoki noun-siz ishlatish</h2>
              <p className='text-[25px] mb-4'>Biz <b>this, that, these, those</b> larni otlar (<b>this box, that car, etc</b> va hkz) bilan yoki otlarsiz ham ishlata olamiz</p>

              <ul className='list-disc pl-5 text-[20px] mb-[70px]'>
                <li><i><b className='text-[#ec6825]'>This watch</b> is very expensive. </i></li>
                <li><i>I like <b className='text-[#ec6825]'>that woman</b> in the park.</i></li>
                <li><i>Who is <b className='text-[#ec6825]'>that</b>? (=that person)</i></li>
                <li><i>'What are <b className='text-[#ec6825]'>those</b>?' 'They are old pictures.'</i></li>
              </ul>

              {/* Introductions and on the phone */}
              <h2 className='text-[1.6rem] font-bold text-[#1a8ec1]'>Bu John (tanishtiruv va telefonda)</h2>
              <p className='text-[25px] mb-4'>Biz <b>this is</b>ni telefonda kimnidir tanishtirayotganimizda ishlatamiz</p>

              <ul className='list-disc pl-5 text-[20px] mb-[70px]'>
                <li><i>Hi <b className='text-[#ec6825]'>this is</b> Tim. (Tim on the telephone)</i></li>
                <li>Laura: <i>'Hi Sara. <b className='text-[#ec6825]'>This is</b> my friend Paul.'</i> Sara: <i>'Hi, Paul. Nice to meet you'</i></li>
              </ul>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}