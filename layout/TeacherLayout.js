import Header from '../pages/header'
import Footer from '../pages/footer'

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