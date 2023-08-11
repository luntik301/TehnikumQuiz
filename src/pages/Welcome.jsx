import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Heading } from '../components/typography/heading'
import { AppInput } from '../components/UI/appInput'
import { AppButton } from '../components/UI/AppButton'
import { ThemeSwitcher } from '../components/UI/themeSwitcher'

const Welcome = () => {
  const navigate = useNavigate()

  const [name, setName] = useState(null)
  const [number, setNumber] = useState(null)

  const isButtonDisabled = !(name && number)

  const handleNameInput = (e) => {
    setName(e.target.value)
  }
  const handleNumberInput = (e) => {
    setNumber(e.target.value)
  }

  return (
    <div>
      <ThemeSwitcher />
      <div className='container'>
        <div className='wrapper'>
          <div className='welcome'>
            <Heading
              headingType='h1'
              text='Добро пожаловать в квиз от лучшего учебного центра '
            />
            <div className='welcome__form'>
              <AppInput
                required={true}
                type='text'
                name='username'
                id='username'
                placeholder='Ваш ответ'
                labelText='Ваше имя'
                onInput={handleNameInput}
              />
              <label className='input-wrapper' htmlFor='username'>
                <AppInput
                  required={true}
                  labelText='Ваш номер'
                  type='tel'
                  name='phone'
                  id='phone'
                  placeholder='+998 9- --- -- -- '
                  pattern='^(?:\+998)?(?:\d{2})?(?:\d{7})$'
                  errText='Введите номер в правильном формате'
                  onInput={handleNumberInput}
                />
                <AppButton
                  disabled={isButtonDisabled}
                  onClick={() => navigate('/step-one')}
                  text='Далее'
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
