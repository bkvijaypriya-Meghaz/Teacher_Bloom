import TeacherLayout from '../../layout/TeacherLayout';
import EnergyLessonPlan from './energy_lessonplan';
import React from 'react'

function energy_lessonplancall(props) {
    return (
        <TeacherLayout {...props}>
            
        <EnergyLessonPlan/>
            
        
        </TeacherLayout>
    )
}

export default energy_lessonplancall
