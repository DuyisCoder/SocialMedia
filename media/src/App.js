import React from 'react';
import Home from './pages/home/Home'
function App() {
  // const canh =prompt('Nhập cạnh');
  // const chuviHinhVuong=canh*4;
  // const dtHv=canh*canh;
  // console.log("Chu vi hình vuông: ",chuviHinhVuong);
  // console.log("Diện tích hình vuông:",dtHv);

  // const a =prompt('Nhập cạnh tam giác 1:');
  // const b =prompt('Nhập cạnh tam giác 2:');
  // const c =prompt('Nhập cạnh tam giác 3:');
  // const chuviTG= a+b+c;
  // if( a<b+c && b<a+c && c<a+b ){
  //   if( a*a==b*b+c*c || b*b==a*a+c*c || c*c== a*a+b*b)
  //   console.log("Tam giác vuông");
  //   else if(a==b && b==c)
  //   console.log("Tam giác đều");
  //   else if(a==b || a==c || b==c)
  //   console.log("Tam giác cân");
  //   else if(a*a > b*b+c*c || b*b > a*a+c*c || c*c > a*a+b*b) 
  // console.log("Tam giác tù");
  //   else
  //   console.log("Tam giác nhọn");
  //   }else{
  //     console.log("không phải là tam giác");
  //   }


  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
