import juan from './assets/juan-el-caballo-loco-630653_large.jpg'
import jordi from './assets/jordi.jpg'

function Paragrafo() {
    return (
        <>
        <p>
            <img src={juan} width={150} alt="Juan" />
            <img src={jordi} width={150} alt="Jordi" />
        </p>
        </>
    )
}

export default Paragrafo;