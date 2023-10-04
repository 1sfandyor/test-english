import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import pic from '../../../assets/grammar/elementary/topics/Object-pronouns_Subject-pronouns_new.png'

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
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'>Object pronoun-lar vs subject pronoun-lar – me yoki I, she yoki her?
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

          {/* EXERCISES */}
          <div className={`my-[10px] ${hidden2}`}>
            <div className='flex items-center justify-end'>
              <p className='font-[300] text-gray-500 mr-2 text text-[25px] items-center'>Mashqlar: </p>
              <Link className='bg-[#1a8ec1] mr-5 w-[50px] h-[40px] flex justify-center items-center text-white rounded-[5px]'>1</Link>
              <Link className='bg-[#1a8ec1] mr-5 w-[50px] h-[40px] flex justify-center items-center text-white rounded-[5px]'>2</Link>
              <Link className='bg-[#1a8ec1] mr-5 w-[50px] h-[40px] flex justify-center items-center text-white rounded-[5px]'>3</Link>
              <Link className='bg-[#1a8ec1] mr-5 w-[50px] h-[40px] flex justify-center items-center text-white rounded-[5px]'>4</Link>
            </div>
            <h4 className='text-[1.2em] font-bold py-[10px] my-5 text-[#1a8ec1]'>Object pronoun-lar vs subject pronoun-lar – me yoki I, she yoki her ?</h4>
            <h1 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>1-Mashq</h1>
            <p className='bg-[#f6f6f6] border-[1px] border-s border-[#ccc] p-[8px] inline-block rounded-[2px] font-bold'>Quyidagi gaplarni to'ldirish uchun to'g'ri subject pronoun yoki object pronounlarni tanlang.</p>
            <div className='flex my-5 items-center gap-3'>

              {/* Question 1 */}
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>1</span>
              <p className='text-[19px]'>What time can I call </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="not drink">him</option>
                <option value="don't drink">he</option>
              </select>
              <p className='text-[19px]'>?.</p>
            </div>
            
            {/* Question 2*/}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>2</span>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="haves">He</option>
                <option value="have">Him</option>
              </select>
              <p className='text-[19px]'> never listens to </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="haves">us</option>
                <option value="have">we</option>
              </select>
            </div>

            {/* Question 3 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>Do you like my new glasses?' 'Yes, </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="an interesting job">I</option>
                <option value="a job interview">me</option>
              </select>
              <p className='text-[19px]'> love </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="an interesting job">it</option>
                <option value="a job interview">them</option>
                <option value="a job interview">they</option>
              </select>
            </div>

            {/* Question 4 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>4</span>
              <p className='text-[19px]'>Tom loves his rabbits. </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are fantastic">Him</option>
                <option value="are fantastics">He</option>
              </select>
              <p className='text-[19px]'>plays with </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are fantastic">them</option>
                <option value="are fantastics">they</option>
              </select>
              <p className='text-[19px]'> in the garden every day.</p>
            </div>

            {/* Question 5 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>5</span>
              <p className='text-[19px]'>Please, call </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="look tired">I</option>
                <option value="smell tired">me</option>
              </select>
              <p className='text-[19px]'> soon;</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="look tired">I</option>
                <option value="smell tired">me</option>
              </select>
              <p className='text-[19px]'> am very worried.</p>
            </div>

            {/* Question 6 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>Look, Sara and Kevin. Can you see </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="Are they happies">they</option>
                <option value="Are they happy">you</option>
                <option value="Are happy they">them</option>
              </select>
              <p className='text-[19px]'>?</p>
            </div>

            {/* Question 7 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>7</span>
              <p className='text-[19px]'>Tell John that </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="Are good his marks">he</option>
                <option value="Are goods his marks">him</option>
                <option value="Are his marks good">she</option>
              </select>
              <p className='text-[19px]'> can meet </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="Are good his marks">us</option>
                <option value="Are goods his marks">we</option>
                <option value="Are his marks good">they</option>
              </select>
              <p className='text-[19px]'> at the canteen.</p>
            </div>

            {/* Question 8 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>8</span>
              <p className='text-[19px]'>I like your earrings. Can  </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="sounds interesting">me</option>
                <option value="interesting looks">I</option>
              </select>
              <p className='text-[19px]'>see </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="sounds interesting">them</option>
                <option value="interesting looks">they</option>
              </select>
              <p className='text-[19px]'>?</p>
            </div>

            {/* Question 9 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>9</span>
              <p className='text-[19px]'>Look at that man. Who is  </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are excellents">he</option>
                <option value="excellent are">him</option>
              </select>
              <p className='text-[19px]'>?</p>
            </div>

            {/* Question 10 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>10</span>
              <p className='text-[19px]'>That man over there is David. I work with  </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are blues">her</option>
                <option value="are blue">him</option>
                <option value="blue are">he</option>
              </select>
            </div>

            <button className='py-2 px-5 bg-[#1a8ec1] flex justify-center items-center text-white mx-auto rounded-[10px] my-10'>
              Javoblarni Tekshirish
            </button>
          </div>

          {/* EXPLANATIONS */}
          <div className={`my-10 ${hidden}`}>
            <h1 className='text-[1.6rem] py-[10px] my-5 text-[#1a8ec1]'>Object pronoun-lar vs subject pronoun-lar – me yoki I, she yoki her ?</h1>

            <div className='w-[55%]'>
              <img className='w-[100%]' src={pic} alt="..." />
            </div>

            {/* INFO */}
            <div className='info my-10'>

              <h2 className='text-[1.6rem] text-[#1a8ec1] mb-3'>Kishilik olmoshlari</h2>
              
              {/* Subject –before the verb*/}
              <h4 className='text-[1.2em] text-[#1a8ec1] '>subject - fe'ldan oldin keladi</h4>
              <p className='text-[1.1em] font-regular mb-4'><b>Subject pronoun</b> ish harakatini aynan kim bajarayotganligini ifodalaydi. Shu sababli u fe'ldan oldin keladi,</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i><b className='text-[#ec6825]'>I</b> like your dress.</i></li>
                <li><i><b className='text-[#ec6825]'>You</b> are late.</i></li>
                <li><i><b className='text-[#ec6825]'>He</b> is my friend.</i></li>
                <li><i><b className='text-[#ec6825]'>It</b> often rains.</i></li>
                <li><i><b className='text-[#ec6825]'>She</b> is on holiday.</i></li>
                <li><i><b className='text-[#ec6825]'>We</b> live in England.</i></li>
                <li><i><b className='text-[#ec6825]'>They</b> come from London.</i></li>
              </ul>


              {/* Object pronouns*/}
              <h2 className='text-[1.6rem] text-[#1a8ec1] mb-3'>Object pronoun-lar</h2>

              {/* Object pronouns*/}
              <h4 className='text-[1.2em] text-[#1a8ec1] '>Object pronounlar - fe'ldan keyin keladi</h4>
              <p className='text-[1.1em] font-regular mb-4'>Object pronounlar ish harakati aynan kimga qaratilganligini ifodalaydi. Shu sababli ular fe;ldan keyin keladi.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px] '>
                <li><i>Can you help <b className='text-[#ec6825]'>me</b> please ?.</i></li>
                <li><i>I can see <b className='text-[#ec6825]'>you</b>.</i></li>
                <li><i>She doesn’t like <b className='text-[#ec6825]'>him</b>.</i></li>
                <li><i>We can see <b className='text-[#ec6825]'>him</b>. but he can’t see <b className='text-[#ec6825]'>us</b></i></li>
              </ul>

              {/* After preposition */}
              <h2 className='text-[1.6rem] text-[#1a8ec1] mb-3' title='Predlog deb ot oki olmoshning gapdagi boshqa so’zlarga munosabatini ko’rsatuvchi yordamchi so’zlarga aytiladi'>Predloglardan keyin</h2>
              <p className='text-[1.1em] font-regular mb-4'><b>Object pronounlar</b>ni predloglardan keyin ishlatamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>She is there <b className='text-[#ec6825]'>for me</b>.</i></li>
                <li><i>I'll get it <b className='text-[#ec6825]'>for you</b>.</i></li>
                <li><i>Give it <b className='text-[#ec6825]'>to him</b>.</i></li>
                <li><i>Can you listen <b className='text-[#ec6825]'>to her</b>.</i></li>
                <li><i>Don’t take it <b className='text-[#ec6825]'>from us</b>.</i></li>
                <li><i>I want to speak <b className='text-[#ec6825]'>to them</b>.</i></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}