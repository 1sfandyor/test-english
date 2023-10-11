import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import pic from '../../../assets/grammar/elementary/topics/at-in-on_place.webp'

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
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'> At, in, on - joy predloglari </h1>
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
            <h1 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>At, in, on - joy predloglari </h1>
            <h1 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>1- MASHQLAR</h1>
            <p className='bg-[#dbdbdb88] border-2 border-s border-black p-3 inline-block rounded-[10px] font-bold'>Quyidagi gaplarni to'ldirish uchun <i>at, in, on</i>-ni tanlang.</p>

            {/* Question 1 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>1</span>
              <p className='text-[19px]'>They are sitting </p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">on</option>
                <option value="are">it</option>
                <option value="are">at</option>
              </select>
              <p className='text-[19px]'>the table. </p>
            </div>

            {/* Question 2 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>2</span>
              <p className='text-[19px]'>I want to spend a year</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">in</option>
                <option value="are">at</option>
                <option value="are">on</option>
              </select>
              <p className='text-[19px]'>Barcelona.</p>
            </div>

            {/* Question 3 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>The milk isn't </p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">at</option>
                <option value="are">on</option>
                <option value="are">in</option>
              </select>
              <p className='text-[19px]'>the fridge. Where is it?</p>
            </div>

            {/* Question 4 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>4</span>
              <p className='text-[19px]'>Is Peter's office</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">at</option>
                <option value="are">in</option>
                <option value="are">on</option>
              </select>
              <p className='text-[19px]'>the first or the second floor?</p>
            </div>

            {/* Question 5 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>5</span>
              <p className='text-[19px]'>Why are all these clothes </p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">on</option>
                <option value="am">in</option>
                <option value="are">at</option>
              </select>
              <p className='text-[19px]'>the bed ?</p>
            </div>

            {/* Question 6 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>6</span>
              <p className='text-[19px]'>Please, put the clothes</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">in</option>
                <option value="are">at</option>
                <option value="are">on</option>
              </select>
              <p className='text-[19px]'> the wardrobe.</p>
            </div>

            {/* Question 7 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>7</span>
              <p className='text-[19px]'>Are you</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">at the</option>
                <option value="are">at</option>
                <option value="are">in the</option>
              </select>
              <p className='text-[19px]'>home?</p>
            </div>

            {/* Question 8 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>8</span>
              <p className='text-[19px]'>I don't want to see her</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">on</option>
                <option value="are">at</option>
                <option value="are">in</option>
              </select>
              <p className='text-[19px]'>the party tonight.</p>
            </div>

            {/* Question 9 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>9</span>
              <p className='text-[19px]'>I like the sea, but I prefer swimming</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">on</option>
                <option value="are">in</option>
                <option value="are">at</option>
              </select>
              <p className='text-[19px]'>a swimming pool.</p>
            </div>
 
            {/* Question 10 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>10</span>
              <p className='text-[19px]'>Please, call me when you are</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey] bg-white'>
                <option value=""></option>
                <option value="is">at</option>
                <option value="are">in</option>
                <option value="are">on</option>
              </select>
              <p className='text-[19px]'>the bus. </p>
            </div>

            <button className='py-2 px-5 bg-[#1a8ec1] flex justify-center items-center text-white mx-auto rounded-[10px] my-10'>
              Javoblarni Tekshirish
            </button>
          </div>


          {/* EXPLANATION */}
          <div className={`my-10 ${hidden}`}>
            <h1 className='text-[30px] py-[10px] my-5 text-[#1a8ec1]'><b><i>At, in, on -</i> joy predloglari</b></h1>

            <div className='w-[55%]'>
              <img className='w-[100%]' src={pic} alt="..." />
            </div>

            <div className='info my-10'>

              {/* AT */}
              <h2 className='text-[1.6rem] py-[10px] my-5 text-[#1a8ec1]'>At</h2>

              <h4 className='text-[1.2em] text-[#1a8ec1] mb-3'>Biror joy nuqtasi</h4>
              <p className='text-[1.1em] font-regular mb-4'>Biror narsaga yaqin joy nuqtasini ifodalash uchun <b>at</b> dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i>Can you see that car <span className='text-[#ec6825]'><b>at</b> </span> the traffic light? (=The car is at a point near the traffic light)</i></li>
                <li><i>Who is that man <span className='text-[#ec6825]'><b>at</b></span> the door? (=The man is at a point near the door)</i></li>
              </ul>


              {/* At the top of/at the bottom of/at the end of */}
              <h4 className='text-[1.2em] text-[#1a8ec1] mb-3'>At the top of/at the bottom of/at the end of</h4>
              <p className='text-[1.1em] font-regular mb-4'><b>Bat the top of, at the bottom of</b> va <b>at the end of</b> iboralarida <b>at</b>-dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i>She is <span className='text-[#ec6825]'><b>at</b></span> the top of the stairs. </i></li>
                <li><i>Please, sign <span className='text-[#ec6825]'><b>at</b></span> the bottom of the page. </i></li>
                <li><i>The new café is <span className='text-[#ec6825]'><b>at</b></span> the end of the street. </i></li>
              </ul>

              
              {/* Guruh faoliyati */}
              <h4 className='text-[1.2em] text-[#1a8ec1] mb-3'>Guruh faoliyatida</h4>
              <p className='text-[1.1em] font-regular mb-4'><b>Partiyalar, kontsertlar</b> va <b>boshqa tadbirlar</b> kabi guruh faoliyatini ifodalash uchun <b>at</b>-dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i>We were <span className='text-[#ec6825]'><b>at</b></span> the cinema</i></li>
                <li><i>I didn’t see you <span className='text-[#ec6825]'><b>at</b></span> Jackie’s party.</i></li>
                <li><i>We met <span className='text-[#ec6825]'><b>at</b></span> a concert.</i></li>
              </ul>


              {/* At + school/university/college */}
              <h4 className='text-[1.2em] text-[#1a8ec1] mb-3'>At + school/university/college</h4>
              <p className='text-[1.1em] font-regular mb-4'>Odatda <b>school, university</b> va <b>college</b> bilan <b>at</b>-ni ishlatamiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i>He is <span className='text-[#ec6825]'><b>at</b></span> school every morning until 12.</i></li>
                <li><i>I’m studying <span className='text-[#ec6825]'><b>at</b></span> Oxford University.</i></li>
              </ul>


              {/* Be at home/work */}
              <h4 className='text-[1.2em] text-[#1a8ec1] mb-3'>Be at home/work</h4>
              <p className='text-[1.1em] font-regular mb-4'><b>be at home/at work</b> deb aytamiz. (<b>the</b> artiklisiz)</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i>She’s <span className='text-[#ec6825]'><b>at</b></span> home. (<del>at the home</del> EMAS)</i></li>
                <li><i>I'll be<span className='text-[#ec6825]'><b>at</b></span> work all morning. (<del>at the work</del> EMAS)</i></li>
              </ul>

              {/* At the shop */}
              <h4 className='text-[1.2em] text-[#1a8ec1] mb-3'>Be at home/work</h4>
              <p className='text-[1.1em] font-regular mb-4'><b>Doʻkonlar, restoranlar, kafelar</b> va hokazolarni koʻrsatish uchun <b>at</b>dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i>I'm <span className='text-[#ec6825]'><b>at</b></span> the bakery.</i></li>
                <li><i>If you are <span className='text-[#ec6825]'><b>at</b></span> the chemist's, can you buy some aspirins?</i></li>
              </ul>

              {/* IN */}
              <h1 className='text-[30px] py-[10px] my-5 text-[#1a8ec1]'><b>In</b></h1>

              {/* In a 3D space */}
              <h4 className='text-[1.2em] text-[#1a8ec1] mb-3'>3 o'lchamli joylarning ichki qismiga nisbatan</h4>
              <p className='text-[1.1em] font-regular mb-4'>3 o'lchamli joylashuvning ichki pozitsiyasi haqida gapirganimizda <b>in</b>-dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i>The book is <b className='text-[#ec6825]'>in</b> the bag. </i></li>
                <li><i>She is waiting  <b className='text-[#ec6825]'>in</b> the classroom.</i></li>
              </ul>


              {/* In a space with limits */}
              <h4 className='text-[1.2em] text-[#1a8ec1] mb-3'>O'z chegaralariga ega joylarda</h4>
              <p className='text-[1.1em] font-regular mb-4'>Bundan tashqari <b>qit'alar, mamlakatlar, shaharlar, mintaqalar</b> va <b>boshqa shu kabi</b> o'z chegaralari mavjud hududlar uchun ham <b>in</b>-dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i>We are <b className='text-[#ec6825]'>in</b> France. </i></li>
                <li><i>I love the houses <b className='text-[#ec6825]'>in</b> the Alps.</i></li>
              </ul>


              {/* In a car */}
              <h4 className='text-[1.2em] text-[#1a8ec1] mb-3'>Mashina ichida</h4>
              <p className='text-[1.1em] font-regular mb-4'>Biror narsa yoki shaxsning <b>mashina</b> yoki <b>vagon</b>ning ichida ekanlgiini ifodalash uchun ham <b>in</b>-dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i>They are <b className='text-[#ec6825]'>in</b> the car. </i></li>
              </ul>


              {/* In the water */}
              <h4 className='text-[1.2em] text-[#1a8ec1] mb-3'>Suv ichida</h4>
              <p className='text-[1.1em] font-regular mb-4'>Nimadir suvning ichida ekanligini ifodalash uchun ham <b>in</b>-dan foydalanamiz: <b>in the sea, in the river, in the swimming pool</b></p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i>The kids have fun <b className='text-[#ec6825]'>in</b> the swimming pool. </i></li>
              </ul>


              {/* In a picture, in a book */}
              <h4 className='text-[1.2em] text-[#1a8ec1] mb-3'>Rasmda, kitobda</h4>
              <p className='text-[1.1em] font-regular mb-4'>Biror narsani <b>rasmda, kitobda</b> yoki <b>hujjatda</b> aks ettirilganini ifodalash uchun <b>in</b>-dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i>Who’s that woman <b className='text-[#ec6825]'>in</b> the picture? </i></li>
                <li><i>Does it say anything about the concert <b className='text-[#ec6825]'>in</b> the newspaper?</i></li>
              </ul>




              {/* ON */}
              <h1 className='text-[30px] py-[10px] my-5 text-[#1a8ec1]'><b>On</b></h1>

              {/* On a surface */}
              <h4 className='text-[1.2em] text-[#1a8ec1] mb-3'>Biror nimaning yuzasida</h4>
              <p className='text-[1.1em] font-regular mb-4'>Biror narsaning yuzasi haqida gapirganimizda <b>on</b>-dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i>The book is <b className='text-[#ec6825]'>on</b> the table. </i></li>
              </ul>


              {/* On the first/second/etc. floor */}
              <h4 className='text-[1.2em] text-[#1a8ec1] mb-3'>Birinchi/ikkinchi/... qavatda</h4>
              <p className='text-[1.1em] font-regular mb-4'>Binoning qavati haqida gapirganimizda <b>on</b>-dan foydalanamiz,</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i>The office is <b className='text-[#ec6825]'>on</b> the third floor.</i></li>
              </ul>


              {/* On the right/left */}
              <h4 className='text-[1.2em] text-[#1a8ec1] mb-3'>On the right/left</h4>
              <p className='text-[1.1em] font-regular mb-4'><b>On the right</b> yoki <b>on the left</b> iboralaridan foydalanganimizda <b>on</b>-dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i>The office is <b className='text-[#ec6825]'>on</b> the third floor <b className='text-[#ec6825]'>on</b> the left. </i></li>
              </ul>


              {/* On the bus/train/plane */}
              <h4 className='text-[1.2em] text-[#1a8ec1] mb-3'>On the bus/train/plane</h4>
              <p className='text-[1.1em] font-regular mb-4'>Jamoat transportlari haqida gapirganimizda <b>on</b>-dan foydalanamiz: <b>on the bus, on a train, on a plane</b></p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i>She's <b className='text-[#ec6825]'>on</b> the bus right now. </i></li>
              </ul>


              {/* On TV/the radio/the Internet/a website */}
              <h4 className='text-[1.2em] text-[#1a8ec1] mb-3'>On TV/the radio/the Internet/a website</h4>
              <p className='text-[1.1em] font-regular mb-4'>Biror ma'lumot o'qiganimizni, ko'rganimizni yoki mediadan nimadir o'rganganimizni ifodlashda <b>on</b>-dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i>I saw it <b className='text-[#ec6825]'>on</b> TV last night.</i></li>
                <li><i>I learned it <b className='text-[#ec6825]'>on</b> the internet.</i></li>
              </ul>

            </div>
          </div>
        </div>
      </main>
    </>
  );
};