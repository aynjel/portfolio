import School from './School'
import Course from './Course'
import Subject from './Subject'
import Svg from '../../components/SVG/Svg'


function Education() {
    return (
        <div className='bg-gray-100 flex flex-col justify-center items-center p-20 gap-10'>
            <Svg data="icon.svg#graduation" className="w-20 h-20 text-gray-800 dark:text-gray-200" />
            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-700 md:text-3xl">
                Education
            </h2>
            
            <div className="flex flex-col justify-center items-center w-full gap-10">
                <Course />
                <Subject />
                <School />
            </div>

        </div>
    )
}

export default Education