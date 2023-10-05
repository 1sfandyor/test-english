import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import pic from '../../../assets/grammar/elementary/topics/present-simple-present-continuous-use.png'

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
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'>Present simple yoki present continuous?</h1>
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
            <h4 className='text-[1.2em] font-bold py-[10px] my-5 text-[#1a8ec1]'>Present simple yoki continuous? – Grammatik jadval</h4>
            <h1 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>1-Mashq</h1>
            <p className='bg-[#f6f6f6] border-[1px] border-s border-[#ccc] p-[8px] inline-block rounded-[2px] font-bold'>Quyidagi dialoglarni to'ldirish uchun present simple yoki present continuous-dan to'g'risini tanlang.</p>
            <div className='flex my-5 items-center gap-3'>

              {/* Question 1 */}
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>1</span>
              <p className='text-[19px]'>Cindy: What </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="not drink">are you doing</option>
                <option value="don't drink">you are doing</option>
                <option value="don't drink">do you do</option>
              </select>
              <p className='text-[19px]'>?.</p>
            </div>
            
            {/* Question 2*/}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>2</span>
              <p className='text-[19px]'>Robert: I'm listening to the radio. They </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="haves">talk</option>
                <option value="have">are talking</option>
                <option value="have">talking</option>
              </select>
              <p className='text-[19px]'> about football.</p>
            </div>

            {/* Question 3 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>Cindy: </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="an interesting job">Do you listen often</option>
                <option value="a job interview">Are you often listening</option>
                <option value="an interesting job">Do you often listen</option>
              </select>
              <p className='text-[19px]'> to the radio ? </p>
            </div>

            {/* Question 4 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>4</span>
              <p className='text-[19px]'> Robert: Yes. I </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are fantastic">'m like</option>
                <option value="are fantastic">'m liking</option>
                <option value="are fantastic">like</option>
              </select>
              <p className='text-[19px]'> the radio.</p>
            </div>

            {/* Question 5 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>5</span>
              <p className='text-[19px]'>Cindy: </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="look tired">Are you often listening</option>
                <option value="look tired">Do you listen often</option>
                <option value="look tired">Do you often listen </option>
              </select>
              <p className='text-[19px]'> to sports programmes?</p>
            </div>

            {/* Question 6 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>Robert: Not usually, but today I </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="Are they happies">want</option>
                <option value="Are they happy">'m want</option>
                <option value="Are they happy">'m wanting</option>
              </select>
              <p className='text-[19px]'> to know what they say about my team.</p>
            </div>

            {/* Question 7 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>7</span>
              <p className='text-[19px]'>Terry: What </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="Are good his marks">are you doing</option>
                <option value="Are goods his marks">do you do</option>
                <option value="Are his marks good">are you do</option>
              </select>
              <p className='text-[19px]'> ?</p>
            </div>

            {/* Question 8 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>8</span>
              <p className='text-[19px]'>Lisa: I'm an architect, but I </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="sounds interesting">don't</option>
                <option value="interesting looks">'m not work</option>
                <option value="interesting looks">'m not working</option>
              </select>
              <p className='text-[19px]'> at the moment.</p>
            </div>

            {/* Question 9 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>9</span>
              <p className='text-[19px]'>Terry:  </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are excellents">Are you looking</option>
                <option value="excellent are">Do you looking</option>
                <option value="excellent are">Do you look</option>
              </select>
              <p className='text-[19px]'>for a job?</p>
            </div>

            {/* Question 10 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>10</span>
              <p className='text-[19px]'>Lisa: Yes. I</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are blues">'m need</option>
                <option value="are blue"> need</option>
                <option value="blue are">'m needing</option>
              </select>
              <p className='text-[19px]'> to find a job soon.</p>
            </div>

            <button className='py-2 px-5 bg-[#1a8ec1] flex justify-center items-center text-white mx-auto rounded-[10px] my-10'>
              Javoblarni Tekshirish
            </button>
          </div>

          {/* EXPLANATIONS */}
          <div className={`my-10 ${hidden}`}>
            <h1 className='text-[1.6rem] py-[10px] my-5 text-[#1a8ec1]'>Present simple yoki continuous? – Grammatik jadval</h1>

            <div className='w-[55%]'>
              <img className='w-[100%]' src={pic} alt="..." />
            </div>

            {/* INFO */}
            <div className='info my-10'>

              <h2 className='text-[1.6rem] text-[#1a8ec1] mb-3'>Present simple</h2>
              <p className='text-[1.1em] font-regular mb-4'>Present simple-ni <b>odatlar</b> yoki <b>doim takrorlanuvchi holatlar</b> uchun ishlatamiz. <b><a className='text-[#1a8ec1]' href="./to-be">Quyidagi</a></b> sahifada orqali present simple-ni qayta ko'rib chiqishingiz mumkin. </p>
              

              {/* Habits or actions that happen regularly*/}
              <h4 className='text-[1.2em] text-[#1a8ec1] '>Muntazam ravishda sodir bo'ladigan odatlar yoki harakatlar</h4>
              <p className='text-[1.1em] font-regular mb-4'>Present simpleni muntazam ravishda sodir bo'ladigan odatlar yoki harakatlar uchun ishlatamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>I <b className='text-[#ec6825]'>wash</b> my hair every day.</i></li>
                <li><i>I never<b className='text-[#ec6825]'>go</b> to the library.</i></li>
                <li><i>I <b className='text-[#ec6825]'>go</b> to the library on Saturdays.</i></li>
              </ul>

              {/* Permanent situations or things that are always or often true */}
              <h4 className='text-[1.2em] text-[#1a8ec1]'>Doimiy holatlar, har doim yoki ba'zan to'g'ri bo'ladigan narsalarni ifodalashda.</h4>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px] '>
                <li><i>I <b className='text-[#ec6825]'>don't drink</b> coffee.</i></li>
                <li><i>She<b className='text-[#ec6825]'>'s</b> very tall</i></li>
                <li><i>I <b className='text-[#ec6825]'>have</b> two brothers</i></li>
                <li><i>Water <b className='text-[#ec6825]'>boils</b> at 100 degrees</i></li>
                <li><i>I <b className='text-[#ec6825]'>like</b> soup</i></li>
              </ul>

              {/* Adverbs and expressions of frequency */}
              <h4 className='text-[1.6rem] text-[#1a8ec1] mb-3'>Adverb-lar va expressions of frequency</h4>
              <p className='text-[1.1em] font-regular mb-4'>Biror narsaning qanchalik tez-tez sodir bo'lishini ifodlash uchun <b><a className='text-[#1a8ec1]' href="./adverbs-frequency">adverblar va expression of frequency</a></b>-larni present simple bilan ishlatamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>We <b className='text-[#ec6825]'>usually</b> order pizza on Friday.</i></li>
                <li><i>I go running <b className='text-[#ec6825]'>twice a week</b>.</i></li>
              </ul>

              {/* Stative or non-action verbs */}
              <h4 className='text-[1.6rem] text-[#1a8ec1] mb-3'>Turg'un yoki harkatsiz fe'llar</h4>
              <p className='text-[1.1em] font-regular mb-4'>Ba'zi fe'llar hech qanday harakatni ifodalamaydi. Bu turdagi fe'llar <b>tative</b>  yoki <b>non-action</b> fe'llar deyiladi va biz bulardan present simpleda foydalanamiz lekin present continuous-da foydala olmaymiz. Bu kabi fe'llarga quyidagilar kiradi: <b>be, have</b> (=egalik qilish) <b>like, love, hate, prefer, need, want, know va hokazo.</b></p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>They <b className='text-[#ec6825]'>have</b> a new car. (<del>They are having a new car</del> EMAS.)</i></li>
                <li><i>I <b className='text-[#ec6825]'>like</b> chocolate. (<del>I’m liking chocolate</del>) EMAS.</i></li>
              </ul>


              {/* Present continuous use */}
              <h2 className='text-[1.6rem] text-[#1a8ec1] mb-3'>Present Continuous-dan foydalanish</h2>
              <p className='text-[1.1em] font-regular mb-4'>Biz hozir davom etayotgan narsalarni (aynan gapirayotgan vaqtimizda sodir bo'layotgan) yoki shu <b>yaqinda</b> (shu hafta yoki shu kunlarda) sodir bo'layotgan vaqtinchalik jarayonlarni ifodalash uchun present continuous-dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>They <b className='text-[#ec6825]'>have</b> a new car. (<del>They are having a new car</del> EMAS.)</i></li>
                <li><i>I <b className='text-[#ec6825]'>like</b> chocolate. (<del>I’m liking chocolate</del>) EMAS.</i></li>
              </ul>


              {/* Actions happening now */}
              <h4 className='text-[1.2em] text-[#1a8ec1] '>Hozir sodir bo'layotgan ish harakatlarida</h4>
              <p className='text-[1.1em] font-regular mb-4'>Biz <b>aynan gapirayotga paytimizda</b> sodir bo'layotgan ish harakati haqida gapirayotganimizda Present Continuous-dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>'What <b className='text-[#ec6825]'>are</b> you <b className='text-[#ec6825]'>doing</b>?' 'I<b className='text-[#ec6825]'>'m watching</b> TV.</i></li>
              </ul>


              {/* Actions happening around now */}
              <h4 className='text-[1.2em] text-[#1a8ec1] '>Shu yaqinda sodir bo'layotgan ish harakatlarida</h4>
              <p className='text-[1.1em] font-regular mb-4'>Biz <b>shu kunlarda</b> sodir bo'layotgan <b>vaqtinchalik ish harakatlarini</b> ifodalshda ham present Continuousdan foydalanamiz (=Aynan gapirayotgan paytimizda emas ammo <b>shu kunlarda yoki shu haftalarda va hkz.</b>)</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>I<b className='text-[#ec6825]'>'m reading</b> a very good book at the moment. (=I'm not reading it at the moment I'm speaking, but I'm reading it these days)</i></li>
                <li><i>What TV series <b className='text-[#ec6825]'>are</b> you <b className='text-[#ec6825]'>watching</b> these days? (=You are not watching it at the moment of speaking, but these days.)</i></li>
              </ul>


              {/* now, these days, at the moment, etc. */}
              <h4 className='text-[1.2em] text-[#1a8ec1] '>now, these days, at the moment va hkz</h4>
              <p className='text-[1.1em] font-regular mb-4'>Biz present continuousni <b>now</b> yoki <b>around</b> kabi ma'lum bir vaqtni ifodalovchi qo'shimchalar bilan ishlatamiz. Bu kabi ba'zi qo'shimchalarga misollar: <b>now, at the moment, at present, today, these days, this week va hokazo.</b></p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>I<b className='text-[#ec6825]'>'m reading</b> a very good book at the moment. (=I'm not reading it at the moment I'm speaking, but I'm reading it these days)</i></li>
                <li><i>What TV series <b className='text-[#ec6825]'>are</b> you <b className='text-[#ec6825]'>watching</b> these days? (=You are not watching it at the moment of speaking, but these days.)</i></li>
              </ul>


              {/* Present simple or continuous? */}
              <h2 className='text-[1.6rem] text-[#1a8ec1] mb-3'>Present simple yoki continuous?</h2>
              <h4 className='text-[1.2em] text-[#1a8ec1] '>Odatdami yoki hozir ?</h4>
              <p className='text-[1.1em] font-regular mb-4'>Biz <b>present simple</b>ni <b>odatda bajaradigan</b> ishlarimiz uchun foydalanamiz va <b>present continuous</b>ni aynan <b>hozir</b> bajarayotgan ishimizni ifodalash uchun ishlatamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>I <b className='text-[#ec6825]'>listen</b> to the radio. (=I usually listen to the radio; Bu odat.)</i></li>
                <li><i>I<b className='text-[#ec6825]'>'m listening</b> to the radio. (=I’m doing it now.)</i></li>
                <li><i>I don't <b className='text-[#ec6825]'>usually</b> watch documentaries, but I’m watching a documentary <b className='text-[#ec6825]'>now</b>.</i></li>
              </ul>


              {/* Temporary or permanent? */}
              <h4 className='text-[1.2em] text-[#1a8ec1] '>Vaqtinchalikmi yoki doimiy ?</h4>
              <p className='text-[1.1em] font-regular mb-4'><b>Doim</b> sodir bo'ladi vaziyatlarni ifodalashda <b>present simple</b>ni ishlatamiz yoki <b>vaqtinchalik</b> vaziyatlarni ifodalashda <b>present continuous</b>ni ishlatamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>I <b className='text-[#ec6825]'>work</b> in office. (=Doimiy jarayon)</i></li>
                <li><i>I<b className='text-[#ec6825]'>'m workin</b> in office. (Vaqtinchalik jarayon.)</i></li>
                <li><i>I <b className='text-[#ec6825]'>live</b> in Edinburgh. (Doimiy jarayon)</i></li>
                <li><i>I<b className='text-[#ec6825]'>'m living</b> in Edinburgh. (Vaqtinchalik jarayon)</i></li>
              </ul>


              {/* What do you do?/What are you doing? */}
              <h4 className='text-[1.2em] text-[#1a8ec1] '>Nima qilding ?/ Nima qilyapsan ?</h4>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>What <b className='text-[#ec6825]'>does</b> Erik <b className='text-[#ec6825]'>do</b> ? (=What is his job?)</i></li>
                <li><i>What <b className='text-[#ec6825]'>is</b> Erik <b className='text-[#ec6825]'>doing</b> ? (=What is he doing now, at the moment of speaking?)</i></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}