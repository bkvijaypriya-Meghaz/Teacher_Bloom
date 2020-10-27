import Header from '../pages/teacher/header'
import Footer from '../pages/teacher/footer'

const TeacherLayout = ({children}) => {
    
    return(
        <div className="teacherDashboard">
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    )
}

export default TeacherLayout