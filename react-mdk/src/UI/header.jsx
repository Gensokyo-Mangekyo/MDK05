import style from '../UI/styles/style.css'
import image1  from '../UI/images/1.png'
import image2  from '../UI/images/2.png'

function Header() {
    return (
<header>
        <img src={image1} id="left"/>
        <img src={image2}  id="right"/>
        <div class="container">
        <h1>Touhou Project</h1>
        <h2>Серия видеоигр</h2>
        </div>
</header>
    );
  }
  
  export default Header;