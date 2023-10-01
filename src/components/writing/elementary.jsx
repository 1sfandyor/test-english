import React from 'react'
import LessonCards from '../lessoncards'
import e1 from '../../assets/writing/elementary/e1.webp'
import e2 from '../../assets/writing/elementary/e2.jpg'
import e3 from '../../assets/writing/elementary/e3.webp'
import e4 from '../../assets/writing/elementary/e4.webp'

export default function WrElementary() {
  return (
    <div>
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#a84d98]'>A1 WRITING EXERCISES AND TESTS</h1>
        <div className='container'>
            <div className='card-wrapper flex justify-around items-center flex-wrap gap-y-5 pb-[20px]'>
                <LessonCards img={e1} text={"Present simple forms of 'to be' – am/is/are"} path={'grammar/a1'}/>
                <LessonCards img={e2} text={"This, that, these, those"} path={'grammar/a2'}/>
                <LessonCards img={e3} text={'Possessive adjectives and subject pronouns (I/my, you/your, etc.)'} path={''}/>
                <LessonCards img={e4} text={'A/an, plurals – singular and plural forms'} path={''} />
            </div>
        </div>
    </div>
  )
}