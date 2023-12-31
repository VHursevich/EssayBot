import React from 'react'
import './Header.css'
import client_img from '../../img/botAvo.png'
import robot_img from '../../img/robot.webp'
//import robot_img from '../../img/Mini-Robot.png'
import telegram_img from '../../img/telegram.png'



function Header() {
  return (
    
    <header className='header'>
        <div className='header_block1'>
            <div className='header_block1_img_div'><img className='header_block1_img' src={client_img}/></div>
            <div className='header_block1_btns'>
            <button className="header_block1_btn">
                Вход
                <div className="hoverEffect">
                <div>
                </div>
                </div>
            </button>
            <button className="header_block1_btn">
                Регистрация
                <div className="hoverEffect">
                <div>
                </div>
                </div>
            </button>
          </div>
        </div>

        <div className='header_block2'>
          <div className='header_block2_textinfo'>
            <div className='header_block2_textinfo_h'>
              <div className='header_block2_textinfo_h1'>
                Продвинутое написание сочинений с помощью искусственного интеллекта
              </div>
              <div className='header_block2_textinfo_h2'>
                Более 50 000 студентов улучшили свои сочинения с помощью нашего AI Essay Writer.
              </div>
            </div>

            <div className="tooltip-container">
              <a className="tooltip" href='https://web.telegram.org/a/' target="_blank">Telegram</a>
              <span className="tooltip_text">
                <div className="borde-back">
                  <div className="icon">
                    <img src={telegram_img}
                      className="bi bi-discord"
                      height="50"
                      width="50"/>
                  </div>
                </div>
              </span>
            </div>

            

          </div>
          <div className='header_block2_img'>
            
            <img className='header_block2_img_robot' src={robot_img}/>
          </div>
          
          
          
        </div>
        
    </header>
  )
}

export default Header




