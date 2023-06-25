import style from '../UI/styles/style.css'


function Vote() {
    return (
        <div class="vote">
<h2>Оцени пожалуйста сайт</h2>
<form method="POST">
Одна звезда<input name="vote" value="1" type="radio"/>
<br/>
Две звезды<input name="vote" value="2"  type="radio"/>
<br/>
Три звезды<input name="vote" value="3"  type="radio"/>
<br/>
Четыре звезды<input name="vote" value="4"  type="radio"/>
<br/>
Пять звезд<input name="vote" value="5"  type="radio"/>
<br/>
<input id="butt" type="submit" value="Отправить оценку"/>
</form>
</div>
    );
  }
  
  export default Vote;