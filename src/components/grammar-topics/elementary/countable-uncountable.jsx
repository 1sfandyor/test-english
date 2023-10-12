import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import pic from '../../../assets/grammar/elementary/topics/a_some_any.png'

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
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'>A, some, any - sanaladigan va sanalmaydigan otlar</h1>
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
            <h2 className='text-[1.6rem] py-[10px] my-5 text-[#1a8ec1]'>A, some, any - sanaladigan va sanalmaydigan otlar.</h2>
            <h2 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>1-Mashq</h2>
            <p className='bg-[#f6f6f6] border-[1px] border-s border-[#ccc] p-[8px] inline-block rounded-[2px] font-bold'>Quyidagi gaplarni to'ldirish uchun a, some, any ni tanlang</p>
            <div className='flex my-5 items-center gap-3'>

              {/* Question 1 */}
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>1</span>
              <p className='text-[19px]'>I need </p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="not drink">an</option>
                <option value="don't drink">some</option>
                <option value="don't drink">any</option>
              </select>
              <p className='text-[19px]'>information about the city.</p>
            </div>
            
            {/* Question 2*/}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>2</span>
              <p className='text-[19px]'>I always have</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="haves">some</option>
                <option value="have">any</option>
                <option value="have">an</option>
              </select>
              <p className='text-[19px]'>egg for breakfast.</p>
            </div>

            {/* Question 3 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>Can you help me? I need</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="an interesting job">some</option>
                <option value="a job interview">an</option>
                <option value="a job interview">any</option>
              </select>
              <p className='text-[19px]'>advice.</p>
            </div>

            {/* Question 4 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>4</span>
              <p className='text-[19px]'>We don't have</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are fantastic">any</option>
                <option value="are fantastics">some</option>
                <option value="are fantastics">a</option>
              </select>
              <p className='text-[19px]'>money.</p>
            </div>

            {/* Question 5 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>5</span>
              <p className='text-[19px]'>Can I have</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="look tired">a</option>
                <option value="smell tired">some</option>
                <option value="smell tired">any</option>
              </select>
              <p className='text-[19px]'>milk, please?</p>
            </div>

            {/* Question 6 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>Have you got</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="Are they happies">some</option>
                <option value="Are they happy">any</option>
                <option value="Are happy they">a</option>
              </select>
              <p className='text-[19px]'>pen?</p>
            </div>

            {/* Question 7 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>7</span>
              <p className='text-[19px]'>We didn't see</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="Are good his marks">a</option>
                <option value="Are goods his marks">some</option>
                <option value="Are his marks good">any</option>
              </select>
              <p className='text-[19px]'>people in the streets.</p>
            </div>

            {/* Question 8 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>8</span>
              <p className='text-[19px]'>Does Peter have</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="sounds interesting">some</option>
                <option value="interesting looks">a</option>
                <option value="interesting looks">any</option>
              </select>
              <p className='text-[19px]'>magazines in his office? </p>
            </div>

            {/* Question 9 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>9</span>
              <p className='text-[19px]'>Do you want</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are excellents">some</option>
                <option value="excellent are">a</option>
                <option value="excellent are">any</option>
              </select>
              <p className='text-[19px]'>chips?</p>
            </div>

            {/* Question 10 */}
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>10</span>
              <p className='text-[19px]'>My wife doesn't want</p>
              <select className='bg-white border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are blues">a</option>
                <option value="are blue">any</option>
                <option value="blue are">some</option>
              </select>
              <p className='text-[19px]'>dog.</p>
            </div>

            <button className='py-2 px-5 bg-[#1a8ec1] flex justify-center items-center text-white mx-auto rounded-[10px] my-10'>
              Javoblarni Tekshirish
            </button>
          </div>

          {/* EXPLANATIONS */}
          <div className={`my-10 ${hidden}`}>
            {/* INFO */}
            <div className='info my-10'>

              <h2 className='text-[1.6rem] text-[#1a8ec1] mb-3'>Sanaladigan otlar</h2>
              
              {/* Countable noun*/}
              <p className='text-[1.1em] font-regular mb-4'><b>Sanaladigan</b> (countable noun) otlar biz sanay oladigan narsalar hisoblanadi: <b>mashina, house, kitob va hokazo.</b> Biz ularni <b>one car, two cars, three cars</b> deya olamiz.</p>
              
              {/* Singular and plural */}
              <h4 className='text-[1.2em] text-[#1a8ec1] '>Birlik va ko'plik</h4>
              <p className='text-[1.1em] font-regular mb-4'>Sanaladigan otlar <b>birlik va ko'plik</b> shaklga ega: <b>a car/cars, a house/houses, a book/books</b></p>


               {/* A/an + singular countable noun */}
              <h4 className='text-[1.2em] text-[#1a8ec1] '><b>A/an</b> + birlikdagi sanaladigan otlar</h4>
              <p className='text-[1.1em] font-regular mb-4'>Sanaladigan otlarni <b>a/an</b> yoki <b>the</b> kabi aniqlovchilarsiz ishlata olmaymiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i><b className='text-[#ec6825]'>I have</b> a car.</i>(<del> I have car</del> EMAS.)</li>
                <li><i><b className='text-[#ec6825]'>When I was </b>a child.</i> (<del>When I was child</del> EMAS.)</li>
              </ul>


              {/* Uncountable nouns */}
              <h2 className='text-[1.6rem] text-[#1a8ec1] mb-3'>Sanalmaydigan otlar</h2>
              <p className='text-[1.1em] font-regular mb-4'><b>Sanalmaydigan</b> (uncountable nouns) otlar, biz sanay olmaydigan narsalar hisoblanadi: <b>money, milk, rain va boshqalar</b>. Biz <b><del>one money</del></b>, <b><del>two moneys</del></b> deya olmaymiz.</p>


              {/* Only singular */}
              <h4 className='text-[1.2em] text-[#1a8ec1] '>Faqatgina birlik</h4>
              <p className='text-[1.1em] font-regular mb-4'>Sanalmaydigan otlarning ko'plik shakli mavjud emas, ularning faqatgina <b>birlik shakli</b> bor: <b>money/<del>moneys</del>, milk/<del>milks</del>, rain/<del>rains</del> va hkz...</b></p>


              {/* NOT A/an */}
              <h4 className='text-[1.2em] text-[#1a8ec1] '><del>a</del>/<del>an</del> ishlatilmaydi</h4>
              <p className='text-[1.1em] font-regular mb-4'><b>a/an</b> + uncountable-dan foydalana olmaymiz. <b>A/an</b> 'bitta' degan ma'noni bildiradi va sanalmaydigan otlarni biz sanay olmaymiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px] '>
                <li><i>I need <b className='text-[#ec6825]'>money</b>. (<del>a money.</del> EMAS.)</i></li>
                <li><i>We need to buy <b className='text-[#ec6825]'>sugar</b>. (<del>a sugar.</del> EMAS.)</i></li>
              </ul>

              {/* Types of words that are uncountable */}
              <h4 className='text-[1.2em] text-[#1a8ec1] '>Sanab bo'lmaydigan so'z turlari</h4>
              <p className='text-[1.1em] font-regular mb-4'>Sanab bo'lmaydigan so'zlarning ayrim turlari:</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><b>Taomlar, ichimliklar va suyuqliklar:</b> cheese, bread, pasta, coffee, milk, petrol, fuel va hkz</li>
                <li><b>Xom ashyolar:</b> iron, wood, metal, paper, plastic va hkz</li>
                <li><b>Mavhum g'oyalar va hissiyotlar:</b> information, advice, strength, time, love, excitement va hkz</li>
                <li><b>Kasalliklar:</b> diabetes, alzheimer, cancer va hkz</li>
                <li><b>Tillar:</b> English, French, Spanish va hkz</li>
              </ul>


              {/* Uncountable in English but not in other languages */}
              <h4 className='text-[1.2em] text-[#1a8ec1] '>Ingliz tilida sanalmaydigan ammo boshqa tillarda sanaladigan otlar</h4>
              <p className='text-[1.1em] font-regular mb-4'>Ba'zi otlar borki ular ingliz tilida sanalmaydigan ot hisoblanadi ammo ular boshqa tillarda sanaladigan ot hisoblanadi. Bularga ba'zi misol: <b>advice, news</b> (bularning ohiri <b>-s</b> bilan tugaydi lekin birlikdagi ot hisoblanadi) <b>furniture, luggage, baggage, bread, cheese, toast</b> va hkz.</p>


              {/* Types of words that are uncountable */}
              <h2 className='text-[1.6rem] text-[#1a8ec1] '>Sanaladigan va sanalmaydigan</h2>
              <p className='text-[1.1em] font-regular mb-4'>Ba'zi otlar ham sanaladigan ham sanalmaydigan ot hisoblanadi chunki ular bitta yoki bir qancha yoki materialga bog'liq bo'ladi. Solishtirish: </p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[50px]'>
                <li><i>Yesterday I had <b className='text-[#ec6825]'>two coffees</b>. (= two cups of coffee)</i></li>
                <li><i>I love <b className='text-[#ec6825]'>coffee</b>. (= the liquid that we drink)</i></li>
                <li><i>I found <b className='text-[#ec6825]'>one hair</b> in my soup. (one single hair)</i></li>
                <li><i>She has beautiful <b className='text-[#ec6825]'>hair</b>. (= the mass of hair on her head)</i></li>
              </ul>


              {/* A/an, some, any */}
              <h2 className='text-[2rem] text-[#1a8ec1] mb-[40px] '>A/an, some, any</h2>

              <div className='w-[55%]'>
                <img className='w-[100%]' src={pic} alt="..." />
              </div>

              {/* A/an */}
              <h4 className='text-[1.2em] text-[#1a8ec1] '>A/an</h4>

              <p className='text-[1.1em] font-regular mb-4'>Sanaladigan otlarda  <b>a/an</b> + singular dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>I have <b className='text-[#ec6825]'>a</b> new car.</i></li>
                <li><i>She has <b className='text-[#ec6825]'>a</b> brother and <b className='text-[#ec6825]'>a</b> sister.</i></li>
              </ul>

              <p className='text-[1.1em] font-regular mb-4'>Ko'plik shakldagi otlardan yoki sanalmaydigan otlardan oldin <b className='text-[#ec6825]'>a/an</b>-dan foydalana olmaymiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>I need to buy <b className='text-[#ec6825]'>sugar</b> (<del>a sugar</del> EMAS).</i></li>
                <li><i>We saw <b className='text-[#ec6825]'>very beautiful places</b>. (<del>a very beautiful places</del> EMAS).</i></li>
              </ul>

              {/* Some/any */}
              <p className='text-[1.1em] font-regular mb-4'><b>Sanaladigan ko'plikdagi otlardan</b> yoki <b>birlikdagi sanaladigan otlardan</b> oldin <b>some</b> va <b>any</b>-ni  ishlatamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>He gave me <b className='text-[#ec6825]'>some coins</b>.</i></li>
                <li><i>He didn’t give me <b className='text-[#ec6825]'>any coins</b>.</i></li>
                <li><i>He gave me <b className='text-[#ec6825]'>some money</b>.</i></li>
              </ul>

              {/* Some */}
              <p className='text-[1.1em] font-regular mb-4'><b>Some</b>ni <b>darak gaplarda</b> ishlatamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>We cooked <b className='text-[#ec6825]'>some cookies</b>.</i></li>
              </ul>


              {/* Any */}
              <p className='text-[1.1em] font-regular mb-4'><b>Any</b>ni <b>inkor gaplarda</b> va <b>so'roq gaplarda</b> ishlatamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>She didn’t send me <b className='text-[#ec6825]'>any messages</b>.</i></li>
                <li><i>Have you got <b className='text-[#ec6825]'>any brothers or sisters</b>?</i></li>
              </ul>

              <p className='text-[1.1em] font-regular mb-4'><span className='bg-[#ec6825] py-[2px] px-[4px] text-[#fff] font-bold  rounded text-sm leading-3'>Lekin</span> <b>nimadir so'rash</b>dagi yoki <b>nimadurni taklif qilish</b>dagi so'roq gaplarimizda <b>some</b>-dan foydalanamiz.</p>

              <ul className='list-disc pl-5 text-[1.1em] font-regular mb-[35px]'>
                <li><i>Can I have <b className='text-[#ec6825]'>some tea</b>? (=I’m asking for some tea.)</i></li>
                <li><i>Would you like <b className='text-[#ec6825]'>some tea</b>?  (=I’m offering you some tea.)</i></li>
              </ul>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}