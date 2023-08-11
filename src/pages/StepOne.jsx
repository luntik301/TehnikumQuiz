import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AppInput } from '../components/UI/appInput'
import { Indicator } from '../components/UI/indicator'
import { Heading } from '../components/typography/heading'
import { AppButton } from '../components/UI/AppButton'
import { ThemeSwitcher } from '../components/UI/themeSwitcher'

const StepOne = () => {
  const navigate = useNavigate()

  const [answer, setAnswer] = useState(null)

  const isButtonDisabled = !answer

  const handleAnswerInput = (e) => {
    setAnswer(e.target.value)
  }

  return (
    <div>
      <ThemeSwitcher />
      <div className='container'>
        <div className='wrapper'>
          <div className='single-input-quiz'>
            <Indicator progress='1' />
            <div className='question'>
              <Heading headingType='h2' text='1. Занимательный вопрос' />
              <AppInput
                required={true}
                type='text'
                name='answer'
                placeholder='Ваш ответ'
                onInput={handleAnswerInput}
              />
              <AppButton
                disabled={isButtonDisabled}
                onClick={() => navigate('/step-two')}
                text='Далее'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepOne
