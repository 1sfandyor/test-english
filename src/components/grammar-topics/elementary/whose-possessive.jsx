import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import pic from '../../../assets/grammar/elementary/topics/possessive-s-use-form.webp';

export default function ThisThatThose() {

  const [hidden, setHidden] = useState('hidden');
  const [hidden2, setHidden2] = useState('block');
  const exercisesButton = useRef();
  const explanationButton = useRef();

  
  function explanation() {
    setHidden(hidden => hidden = 'block');
    setHidden2(hidden2 => hidden2 = 'hidden');
    exercisesButton.current.classList.remove('active');
    explanationButton.current.classList.add('active');
  };

  function exercises() {
    setHidden2(hidden2 => hidden2 = 'block');
    setHidden(hidden => hidden = 'hidden');
    exercisesButton.current.classList.add('active');
    explanationButton.current.classList.remove('active');
  };
  
  return (
    <>
      <main>
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'>Whose va ‘s egalik qo'shimchasi - Whose is this? It’s Mike’s</h1>
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
            <h2 className='text-[1.6rem] py-[10px] my-5 text-[#1a8ec1]'>Whose va ‘s egalik qo'shimchasi - Whose is this? It’s Mike’s</h2>
            <h1 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>1-Mashq</h1>
            <p className='bg-[#f6f6f6] border-[1px] border-s border-[#ccc] p-[8px] inline-block rounded-[2px] font-bold'>Gaplarni to'ldirish uchun to'g'ri variantni tanlang.</p>
            <div className='flex my-5 items-center gap-3'>

              {/* Question 1 */}
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>1</span>
              <p className='text-[19px]'>George is </p>
              <select className='w-24 bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="not drink">the new boyfriend  of my sister</option>
                <option value="don't drink">my sisters's new boyfriend</option>
                <option value="don't drink">my sisters' new boyfriend</option>
              </select>
            </div>
            
            {/* Question 2*/}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>2</span>
              <p className='text-[19px]'>All</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="haves">the toys of the boys</option>
                <option value="have">the boys toys</option>
                <option value="have">the boys' toys</option>
              </select>
              <p className='text-[19px]'>are broken.</p>
            </div>

            {/* Question 3 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>The </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="an interesting job">Book's page</option>
                <option value="a job interview">Books pages</option>
                <option value="a job interview">pages of the book</option>
              </select>
              <p className='text-[19px]'> are yellow. </p>
            </div>

            {/* Question 4 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>4</span>
              <p className='text-[19px]'>This is</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are fantastic">the hous of Hellen</option>
                <option value="are fantastics">Hellens house</option>
                <option value="are fantastics">Hellens' house</option>
              </select>
            </div>

            {/* Question 5 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>5</span>
              <p className='text-[19px]'>This is</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="look tired">my dog's collar</option>
                <option value="smell tired">the collar of my dog</option>
                <option value="smell tired">my dogs collar</option>
              </select>
            </div>

            {/* Question 6 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>You need to clean </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="Are they happies">the floor of the house</option>
                <option value="Are they happies">the floor's house</option>
                <option value="Are they happies">the house's floor</option>
              </select>
              <p className='text-[19px]'>?</p>
            </div>

            {/* Question 7 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>7</span>
              <p className='text-[19px]'>These are </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="Are good his marks">Tom and Jenny's cars</option>
                <option value="Are goods his marks">the cars of Tom and Jenny</option>
                <option value="Are his marks good">Tom's and Jenny's cars</option>
              </select>
              <p className='text-[19px]'>(= One car belongs to Tom and another car to Jenny.)</p>
            </div>

            {/* Question 8 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>8</span>
              <p className='text-[19px]'>This is</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="sounds interesting">the car of Tom and Jenny</option>
                <option value="interesting looks">Tom's and Jenny's cars</option>
                <option value="interesting looks">Tom and Jenny's cars</option>
              </select>
              <p className='text-[19px]'>(=Two people have one car.)</p>
            </div>

            {/* Question 9 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>9</span>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are excellents">The friend of my mum</option>
                <option value="excellent are">My mums' friend</option>
                <option value="excellent are">My mum's friend</option>
              </select>
              <p className='text-[19px]'>helps me with my homework</p>
            </div>

            {/* Question 10 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>10</span>
              <p className='text-[19px]'>I need to paint</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are blues">the children's playroom</option>
                <option value="are blue">the childrens' playroom</option>
                <option value="blue are">the playroom of children</option>
              </select>
            </div>

            <button className='py-2 px-5 bg-[#1a8ec1] flex justify-center items-center text-white mx-auto rounded-[10px] my-10'>
              Javoblarni Tekshirish
            </button>
          </div>

          {/* EXPLANATIONS */}
          <div className={`my-10 ${hidden}`}>
            <h1 className='text-[1.6rem] py-[10px] my-5 text-[#1a8ec1]'>Whose va 's egalik qo'shimchasi - Whose is this? It's Mike's</h1>

            <div className='w-[55%]'>
              <img className='w-[100%]' src={pic} alt="..." />
            </div>

            {/* INFO */}
            <div className='info my-10'>

              {/* Possessive ‘s – use */}
              <h3 className='text-[1.4em] text-[#1a8ec1] mb-3'><b>'s</b> egalik qo'shimchasi - Foydalanish</h3>
              
              <p className='text-[1.1em] font-regular mb-4'>Biror narsa shaxsga (yoki hayvonga) tegishli ekanligini yoki insonlar o'rtasidagi munosabat haqida gapirganimizda <b>'s</b> qo'shimchasidan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>This is Peter<b className='text-[#ec6825]'>'s</b> father. (<del>the father of Peter</del> EMAS).</i></li>
                <li><i>Peter and Mary<b className='text-[#ec6825]'>'s</b> car is red.</i></li>
                <li><i>My cat<b className='text-[#ec6825]'>'s</b> ears are white.</i></li>
              </ul>

              <p className='text-[1.1em] font-regular mb-4'>Bundan tashqari, do'konlar va uylar haqida gapirish uchun ham <b>'s</b> qo'shimchasidan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>I am at John<b className='text-[#ec6825]'>'s</b>  (= at John’s house).</i></li>
                <li><i>I need to go to the chemist<b className='text-[#ec6825]'>'s</b> (= the chemist’s shop).</i></li>
              </ul>

              {/* Possessive ‘s – form*/}
              <h2 className='text-[1.6rem] text-[#1a8ec1] mb-3'><b>'s</b> egalik qo'shimchasi - Qo'llanish shakli</h2>

              <p className='text-[1.1em] font-regular mb-4'>Birlik shaklidagi noun + <b>'s</b></p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px] '>
                <li><i><b className='text-[#ec6825]'>Anna’s</b> clothes.</i></li>
                <li><i><b className='text-[#ec6825]'>Chris’s </b> wife.</i></li>
                <li><i>The <b className='text-[#ec6825]'>student’s </b> books, etc.</i></li>
              </ul>

              <p className='text-[1.1em] font-regular mb-4'>Ko'plik shaklidagi ot <b>-s + ‘</b> (apostrof) bilan tugaydi.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>The <b className='text-[#ec6825]'>students’</b> books.</i></li>
                <li><i>The <b className='text-[#ec6825]'>boys’</b> toys.</i></li>
                <li><i>The <b className='text-[#ec6825]'>teachers’</b> lounge.</i></li>
              </ul>

              <p className='text-[1.1em] font-regular mb-4'>Agar biror buyum bir yoki bir nechta odamga tegishli bo'lsa <b>'s</b> qo'shichasi ohirgi shaxsdan keyin keladi.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i><b className='text-[#ec6825]'>Paul and Katherine’s </b> house.</i></li>
                <li><i><b className='text-[#ec6825]'>Anna and George’s </b> car.</i></li>
              </ul>

              <p className='text-[1.1em] font-regular mb-4'>Agar bir yoki bir nechta odamning har biriga tegishli biror narsa haqida gapirmoqchi bo'lsa har bir shaxsdan keyin <b>'s</b> qo'shimchasini qo'shamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i><b className='text-[#ec6825]'>Anna’s and George’s </b> cars (Anna’s car and George’s car).</i></li>
                <li><i><b className='text-[#ec6825]'>Sally’s</b>  and <b className='text-[#ec6825]'>Tim’s </b> computers (Sally’s computer and Tim’s computer).</i></li>
              </ul>

              <p className='text-[1.1em] font-regular mb-4'> </p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>The <b className='text-[#ec6825]'>students’</b> books, the <b className='text-[#ec6825]'>boys’</b> toys, the <b className='text-[#ec6825]'>teachers’</b> lounge, etc.</i></li>
              </ul>


              {/* Possessive of */}
              <h3 className='text-[1.4em] text-[#1a8ec1] mb-3'><b>of</b> egalik qo'shimchasi</h3>
              
              <p className='text-[1.1em] font-regular mb-4'>Bir narsaning narsasi haqida gapirganimizda (hayvon yoki insonlar haqida emas) <b>'s</b>ni emas <b>of</b> qo'shimchasini ishlatamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>the end <b className='text-[#ec6825]'>of</b> the street (<del>the street’s end</del> EMAS).</i></li>
                <li><i>a picture <b className='text-[#ec6825]'>of</b> the eclipse (<del>the eclipse’s picture</del> EMAS).</i></li>
                <li><i>the man <b className='text-[#ec6825]'>of</b> the match (<del>the match’s man</del> EMAS).</i></li>
              </ul>


              {/* Compound nouns – the city center */}
              <h3 className='text-[1.4em] text-[#1a8ec1] mb-3'>Qo'shma otlar - the city center</h3>
              
              <p className='text-[1.1em] font-regular mb-4'>Juda ko'p birga ishlatiladigan otlarni, <b>of</b> va <b>'s</b> qo'shinchalarisiz ham birga ko'p ishlatamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>a <b className='text-[#ec6825]'>school bus</b>.</i></li>
                <li><i>the <b className='text-[#ec6825]'>city center</b>.</i></li>
                <li><i>the <b className='text-[#ec6825]'>car key</b>.</i></li>
              </ul>


              {/* WHOSE */}
              <h3 className='text-[1.4em] text-[#1a8ec1] font-bold mb-3'>Whose</h3>

              <h4 className='text-[1.2em] text-[#1a8ec1] mb-3'>Qachon <b>whose</b>dan foydalanamiz ?</h4>
              
              <p className='text-[1.1em] font-regular mb-4'>So'roq gaplarda biror narsaning egasi haqida gapirganimizda <b>whose</b>dan foydalanamiz. Uning 2 ta shakli bor.</p>
              <p className='text-[1.1em] font-regular mb-4'><b>whose</b> + noun.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i><b className='text-[#ec6825]'>Whose</b> car is this?</i></li>
                <li><i><b className='text-[#ec6825]'>Whose</b>  books are those?</i></li>
              </ul>

              {/* whose without a noun  */}
              <p className='text-[1.1em] font-regular mb-4'>Noun-siz <b>whose</b></p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i><b className='text-[#ec6825]'>Whose</b> is this car?</i></li>
                <li><i><b className='text-[#ec6825]'>Whose</b> are those books??</i></li>
              </ul>

              {/* whose without a noun  */}
              <p className='text-[1.1em] font-regular mb-4'><b>'s</b> qo'shimchasi bilan javob berganimizda <b>'s</b> + noun shakalidan yoki <b>'s</b> qo'shimchasisiz ham foydalana olamiz..</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i><b className='text-[#ec6825]'>Whose</b> is this car ?</i></li>
                <li><i>It’s John<b className='text-[#ec6825]'>'s car</b> </i></li>
                <li><i>It’s John<b className='text-[#ec6825]'>'s </b> </i></li>
              </ul>

              {/* Whose vs who’s  */}
              <p className='text-[1.1em] font-regular mb-4'><b>Whose</b> = kimniki</p>
              <p className='text-[1.1em] font-regular mb-4'><b>Whose</b> = who is</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i><b className='text-[#ec6825]'>Whose</b> car is this? (<del>Who’s car is this?</del> EMAS)</i></li>
                <li><i><b className='text-[#ec6825]'>Who's</b> that man in the lobby? (<del>Whose that man in the lobby?</del> EMAS)</i></li>
              </ul>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}