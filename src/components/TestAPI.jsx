import React, { useState, useEffect } from "react";

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false); // Trạng thái xem timer có chạy không
  const [time, setTime] = useState(0); // Lưu thời gian tính từ giây (s)

  // Hàm bắt đầu hoặc dừng timer
  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  // Hàm reset thời gian lại từ đầu
  const resetTimer = () => {
    setIsRunning(false); // Dừng timer khi reset
    setTime(0); // Đặt lại thời gian về 0
  };

  // Hàm tính toán thời gian và cập nhật giây
  useEffect(() => {
    let interval;

    // Nếu isRunning là true, bắt đầu đếm thời gian
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Tăng thời gian mỗi giây
      }, 1000);
    } else {
      // Nếu không chạy, dừng interval
      clearInterval(interval);
    }

    // Dọn dẹp khi component unmount hoặc isRunning thay đổi
    return () => clearInterval(interval);
  }, [isRunning]);

  // Chuyển đổi thời gian từ giây thành số float (giờ, phút -> giờ.phút)
  const formatFloat = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);

    // Chuyển đổi phút thành phần thập phân của giờ
    const floatTime = hours + minutes / 60;

    // Trả về kết quả là một số float
    return floatTime.toFixed(2); // Làm tròn đến 2 chữ số thập phân
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  return (
    <div>
      <h1>Timer: {formatTime(time)}</h1>
      <h1>Timer: {formatFloat(time)}</h1>
      <button onClick={toggleTimer}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
