# AI_Camera_Object_Detection\[ESP32-CAM\] : 👋

This project converges the ESP32 CAM Module with Google Vision API to construct an AI Camera. The Arduino code, inclusive of TFT and LCD display support, facilitates seamless object detection in captured frames. The ESP32 CAM's image processing capabilities make it ideal for this endeavor, enabling visualization of image labeling, face detection, OCR, and explicit content tagging. This DIY AI Camera project bridges AI and IoT, offering an insightful exploration of image processing capabilities.

## Motivation

This project aims to create a versatile AI Camera by integrating the ESP32 CAM Module with Google Vision API. The motivation is to explore the applications of Artificial Intelligence (AI) and Machine Learning (ML) in image processing for IoT devices. The project facilitates seamless object detection and labeling, contributing to a deeper understanding of AI in practical scenarios.

## Functionalities

- **Object Detection:**
- **Display Options:** 
- **AI Capabilities:** 
- **IoT Integration:** 

## Hardware Used

- **ESP32 CAM Module:** Chosen for its image processing capabilities, making it suitable for IoT and AI applications.
- **TFT Display:** For visualizing captured frames and detected labels.
- **LCD Display:** An alternative display option for added flexibility.
- **FTDI Module:** Facilitates communication with the ESP32 CAM Module.
- **Jumper Wires:** Essential for connecting components on the breadboard.
- **Breadboard:** Provides a platform for prototyping and connecting components.
- **Tactile Switch:** Captures Image on Press.


## Software Used

<img alt="Arduino IDE" src="https://img.shields.io/badge/Arduino%20IDE-00979D?style=for-the-badge&logo=Arduino&logoColor=white"/>	<img alt="TFT Library" src="https://img.shields.io/badge/TFT%20Library-0077CC?style=for-the-badge"/>	<img alt="JSON Library" src="https://img.shields.io/badge/JSON%20Library-4E5D94?style=for-the-badge"/>	<img alt="Decoder Library" src="https://img.shields.io/badge/Decoder%20Library-1A2835?style=for-the-badge"/>	<img alt="NodeJS" src="https://img.shields.io/badge/NodeJS-339933?style=for-the-badge&logo=Node.js&logoColor=white"/>	<img alt="Google Vision API" src="https://img.shields.io/badge/Google%20Vision%20API-4285F4?style=for-the-badge&logo=Google%20Cloud&logoColor=white"/>	<img alt="dlib" src="https://img.shields.io/badge/dlib-009688?style=for-the-badge"/>	<img alt="OpenCV" src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge"/>	<img alt="dface recognition" src="https://img.shields.io/badge/dface%20recognition-4CAF50?style=for-the-badge"/>





## Running and Using instructions





## Project Layout


![proj_layout](https://github.com/GeekyVed/AI_Camera_Object_Detection_ESP32-CAM/assets/121000404/a311d4aa-624f-4ecd-ba3f-30778ed3e68b)


## Project Schematic Design

![TFT](https://github.com/GeekyVed/AI_Camera_Object_Detection_ESP32-CAM/assets/121000404/47d5df28-42e3-4ddb-b31c-9b2ee36a5409)

![ESP32CAM](https://github.com/GeekyVed/AI_Camera_Object_Detection_ESP32-CAM/assets/121000404/b8ef8cfc-681f-45f7-a792-4362115206a8)

## Connections 
<table>
  <thead>
    <tr>
      <th>Peripheral</th>
      <th>I2C Connection</th>
      <th>ESP32-CAM Pin</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4"><strong>LCD to I2C</strong></td>
      <td>GND</td>
      <td>Gnd</td>
    </tr>
    <tr>
      <td>VCC</td>
      <td>3.3V</td>
    </tr>
    <tr>
      <td>SDA</td>
      <td>GPIO14</td>
    </tr>
    <tr>
      <td>SCL</td>
      <td>GPIO15</td>
    </tr>
    <tr>
      <td rowspan="2"><strong>Button to ESP32-CAM</strong></td>
      <td>Pullup Resistor</td>
      <td>GPIO4</td>
    </tr>
    <tr>
      <td>Diagonal Leg</td>
      <td>GND</td>
    </tr>
    <tr>
      <td rowspan="4"><strong>FTDI to ESP32-CAM</strong></td>
      <td>VCC</td>
      <td>5V</td>
    </tr>
    <tr>
      <td>GND</td>
      <td>GND</td>
    </tr>
    <tr>
      <td>TX</td>
      <td>RX (UART)</td>
    </tr>
    <tr>
      <td>RX</td>
      <td>TX (UART)</td>
    </tr>
    <tr>
      <td><strong>Programming Mode</strong></td>
      <td>IO0 to GND</td>
      <td></td>
    </tr>
  </tbody>
</table>


## Connect with me on 

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/geekyved/)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/who.ved/)


## Don't forget to leave a 🌟 if you like this repo 





