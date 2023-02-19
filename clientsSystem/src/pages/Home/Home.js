import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [isLogin,setIsLogin] = useState(null)
  const navigate = useNavigate();
  return (
    <div>
      <h2>ברוכים הבאים למערכת הניהול לעסק שלכם</h2>
      <h3>מערכת זו תתרום לשיפור ניהול העסק שלכם</h3>
      <h4>הסבר קצר מה יש במערכת</h4>
      <div>בעזרת מערכת זו תוכלו לנהל את מאגר הלקוחות שלכם,
        תוכלו לשמור את פרטי הלקוחות,
         בדף הלקוח תוכלו לראות את הסטוריית הקניות שלו לעדכן הערה חשובה הנוגעת ללקוח ,
         לקבוע פגישות עמו,
         ולשמור ולקבל את תקצירי השיחות עמו,
         כך תוכלו לדייק את השירות אותו תעניקו ללקוח.
         כמו"כ תוכלו בעזרת המערכת לבצע הזמנות ללקוחות ולעקוב אחר ההזמנות שסופקו ושיסופקו. 

      </div>
    
      <button onClick={()=>setIsLogin("log in")}
              onDoubleClick={()=>navigate('../login', {state:isLogin})}>להכנס</button>
      <button onClick={()=>setIsLogin("Register")}
              onDoubleClick={()=>navigate('../login', {state:isLogin})}>להרשם</button>
    </div>
  )
}

export default Home