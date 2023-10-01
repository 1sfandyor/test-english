// import React from 'react'
import LessonCards from './lessoncards'
import grammar1 from '../assets/grammar1.webp'
import grammar2 from '../assets/grammar2.webp'
import grammar3 from '../assets/grammar3.webp'
import grammar4 from '../assets/grammar4.jpg'
import grammar5 from '../assets/grammar5.webp'
import grammar6 from '../assets/grammar6.webp'

export default function Grammar() {
  return (
    <>
        <div>
            <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'>Grammar</h1>
            <div className='container'>
                <div className='card-wrapper flex justify-between items-center flex-wrap gap-y-5 pb-[20px]'>
                    <LessonCards img={grammar1} text={'A1 Gramatika bo\'yicha darslar va mashqlar'} path={'grammar/a1'}/>
                    <LessonCards img={grammar2} text={'A2 Gramatika bo\'yicha darslar va mashqlar'} path={'grammar/a2'}/>
                    <LessonCards img={grammar3} text={'B1 Gramatika bo\'yicha darslar va mashqlar'} path={'grammar/b1'}/>
                    <LessonCards img={grammar4} text={'B1+ Gramatika bo\'yicha darslar va mashqlar'} path={'grammar/b1+'} />
                    <LessonCards img={grammar5} text={'B2 Gramatika bo\'yicha darslar va mashqlar'} path={'grammar/b2'} />
                    <LessonCards img={grammar6} text={'Gramatika mavzularining jadvali - Barcha darajalar'} path={'grammar/contents'} />
                </div>
            </div>
        </div>
    </>
  )
}
