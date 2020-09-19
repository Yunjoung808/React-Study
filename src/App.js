import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '950712',
    'gender': '남자'

  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '몽크',
    'birthday': '000720',
    'gender': '남자'

  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '윤정',
    'birthday': '950730',
    'gender': '여자'

  }
]

function App() {
  return (
    <div>
      {
        customers.map(c =>{
          return(
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            
            />
          );
        })
      }
    </div>
  );
}

export default App;
