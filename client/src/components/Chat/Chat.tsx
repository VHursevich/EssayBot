import React, { useState } from 'react'
import './Chat.css'
import bot_img from '../../img/botAvo.png'
import client_img from '../../img/clientAvo.png'
import sender_img from '../../img/sendIco.png'
import {observer} from "mobx-react-lite";

function Chat() {
  const [chatText, setChatText] = useState<string>('');

  return (
    <div className='chatBot'>
      
        <div className='chatBot_in'>
            <div className='chatBot_h2'>Отправьте сообщение нашему боту</div>

            <div className='chatBot_ininput_forscrol'>
              <div className='chatBot_chat'>
                <div className='chatBot_chat_commenеbot chatBot_chat_commenеbc'>
                  <div className='chatBot_chat_commenеbot_onimg'><img src={bot_img} className='chatBot_chat_commenеbot_img'/></div>
                  <div className='chatBot_chat_commenеbot_text'>Поскольку не все шрифты доступны на всех компьютерах (существуют тысячи шрифтов и большинство из них не бесплатны), CSS предусматривает резервную систему. Первым вы указываете шрифт, который хотели бы использовать. Затем следуют любые шрифты, которые вы могли бы использовать, если первый указанный шрифт не доступен. А закончить список вы должны типовым шрифтом, который имеет 5 видов</div>
                </div>
                <div className='chatBot_chat_commenclient chatBot_chat_commenеbc'>
                  <div className='chatBot_chat_commenclient_onimg'><img src={client_img} className='chatBot_chat_commenclient_img'/></div>
                  <div className='chatBot_chat_commenclient_text'>Поскольку не все шрифты доступны на всех компьютерах (существуют тысячи шрифтов и большинство из них не бесплатны), CSS предусматривает резервную систему. Первым вы указываете шрифт, который хотели бы использовать. Затем следуют любые шрифты, которые вы могли бы использовать, если первый указанный шрифт не доступен. А закончить список вы должны типовым шрифтом, который имеет 5 видов</div>
                </div>
                <div className='chatBot_chat_commenclient chatBot_chat_commenеbc'>
                  <div className='chatBot_chat_commenclient_onimg'><img src={client_img} className='chatBot_chat_commenclient_img'/></div>
                  <div className='chatBot_chat_commenclient_text'>Поскольку не все шрифты доступны на всех компьютерах (существуют тысячи шрифтов и большинство из них не бесплатны), CSS предусматривает резервную систему. Первым вы указываете шрифт, который хотели бы использовать. Затем следуют любые шрифты, которые вы могли бы использовать, если первый указанный шрифт не доступен. А закончить список вы должны типовым шрифтом, который имеет 5 видов</div>
                </div>

                <div className='chatBot_chat_commenclient chatBot_chat_commenеbc'>
                  <div className='chatBot_chat_commenclient_onimg'><img src={client_img} className='chatBot_chat_commenclient_img'/></div>
                  <div className='chatBot_chat_commenclient_text'>Поскольку не все шрифты доступны на всех компьютерах (существуют тысячи шрифтов и большинство из них не бесплатны), CSS предусматривает резервную систему. Первым вы указываете шрифт, который хотели бы использовать. Затем следуют любые шрифты, которые вы могли бы использовать, если первый указанный шрифт не доступен. А закончить список вы должны типовым шрифтом, который имеет 5 видов</div>
                </div>
                <div className='chatBot_chat_commenclient chatBot_chat_commenеbc'>
                  <div className='chatBot_chat_commenclient_onimg'><img src={client_img} className='chatBot_chat_commenclient_img'/></div>
                  <div className='chatBot_chat_commenclient_text'>Поскольку не все шрифты доступны на всех компьютерах (существуют тысячи шрифтов и большинство из них не бесплатны), CSS предусматривает резервную систему. Первым вы указываете шрифт, который хотели бы использовать. Затем следуют любые шрифты, которые вы могли бы использовать, если первый указанный шрифт не доступен. А закончить список вы должны типовым шрифтом, который имеет 5 видов</div>
                </div>
                <div className='chatBot_chat_commenclient chatBot_chat_commenеbc'>
                  <div className='chatBot_chat_commenclient_onimg'><img src={client_img} className='chatBot_chat_commenclient_img'/></div>
                  <div className='chatBot_chat_commenclient_text'>Поскольку не все шрифты доступны на всех компьютерах (существуют тысячи шрифтов и большинство из них не бесплатны), CSS предусматривает резервную систему. Первым вы указываете шрифт, который хотели бы использовать. Затем следуют любые шрифты, которые вы могли бы использовать, если первый указанный шрифт не доступен. А закончить список вы должны типовым шрифтом, который имеет 5 видов</div>
                </div>
              </div>
            </div>
            <div className='chatBot_ininput'>
              <textarea placeholder='Введите свой текст' className='chatBot_input' onChange={(e)=>setChatText(e.target.value)}></textarea>
              <button className='chatBot_button'>
                <img src={sender_img} className='chatBot_button_img'/>
              </button>
              
            </div>
        </div>
    </div>
  )
}

export default observer(Chat);