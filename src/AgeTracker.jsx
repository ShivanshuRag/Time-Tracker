/* eslint-disable react/prop-types */
import  { useEffect, useState } from 'react';

const AgeTracker = ({ birthDate }) => {
  const [age, setAge] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const birth = new Date(birthDate);
      const diff = now - birth;

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      const milliseconds = diff % 1000;

      setAge({ years, months, days, hours, minutes, seconds, milliseconds });
    }, 1);

    return () => clearInterval(interval);
  }, [birthDate]);

  return (
    <div className="text-center p-4 bg-rgb(86, 44, 126) text-white"
    style={{
        filter: "drop-shadow(0px 10px 10px rgb(0,0,0))",
        borderRadius: "10px",
        backgroundColor: "rgb(86, 44, 126)",
        padding: "20px",
        margin: "20px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
        transition: "all 0.3s ease-in-out",
        transform: "translateY(0)",
        opacity: 1,
        transformOrigin: "center top",
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        height: "auto",
        width: "auto",
        maxWidth: "100%",
        maxHeight: "100%",
        overflow: "auto",
        
    }}
    > 
      <div style={{
        filter: "drop-shadow(0px 10px 10px rgb(0,0,0))",     }}>
      <h1 className="text-8xl font-bold mb-10 text-gray-300 "> Shivanshu </h1>
      <div className=" flex gap-10 text-4xl font-bold p-4 ">
        <p>Years <br />{age.years}</p>
        <p>Months <br />{age.months}</p>
        <p>Days <br /> {age.days}</p>
        <p>Hours <br /> {age.hours}</p>
        <p>Minutes <br />{age.minutes}</p>
        <p>Seconds <br />{age.seconds}</p>
        <p>Milliseconds <br />{age.milliseconds}</p>
      </div>
      </div>
    </div>
  );
};

export default AgeTracker;