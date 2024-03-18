import '../App.css';
import { useEffect, useState } from 'react';

//การบ้าน : ใช้ state ตัวเดียวได้ไหม ใบ้: เก็บเป็น object, ใช้ memo จะใช้ state น้อยลง
//ลดการใช้ state ลง(เอาไปรวมกันก็ได้)
function GuessNumber() {
  const [guess, setGeuss] = useState({random: 0, inputNum: "", round: 5});
  const [randomNumber, setRandomNumber] = useState();
  const [number, setNumber] = useState();
  const [round, setRound] = useState(5);

  function inputChange(e) {
    setNumber(Number((e.target.value))); //เอา Number ครอบเพราะตอนแรกเป็น String ทำให้เทียบค่าไม่ได้
    console.log(e)
  }

  function randomNum() {
    let num = Math.floor(Math.random() * 100) + 1;
    setGeuss({...guess(random(num))});
  }

  useEffect(() => { //ใช้ UseEffect ทำให้ไม่ต้องใช้ปุ่ม random, UseEffect จะทำให้พอเปิดแอปจะรันฟังก์ชันนี้เป็นฟังก์ชันแรก
    if (!randomNumber) (randomNum())
  }, []);

  function checkNum() {
    setRound()
    if (number === randomNumber) { // '2'+ 2 == True(ไม่ได้มีการเช็ค type), '2' + 2 === False(เช็ค type แล้ว เลขบวกกับ string ไม่ได้)
      alert('Correct!');
      return;
    } else if (number > randomNumber) {
      alert('Too much!');
    } else {
      alert('Too low!');
    }

    const a = round - 1
    if (a === 0) {
      alert('loose')
    } else {
      setRound(a)
    }
  }

  console.log(randomNumber)

  return (
    <div className="App">
      Enter guess:{" "}
      <input
        type='text'
        onChange={inputChange}
      />
      <div> เหลือ {(round - 1) + 1} รอบ</div>
      
      {" "}
      <button onClick={() => checkNum()}>Check</button>
    </div>
  );
}

export default GuessNumber;
