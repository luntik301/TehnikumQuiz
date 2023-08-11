import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Indicator } from '../components/UI/indicator'
import { Heading } from '../components/typography/heading'
import { LevelWrapper } from '../components/UI/levelWrapper'
import { AppButton } from '../components/UI/AppButton'
import { ThemeSwitcher } from '../components/UI/themeSwitcher'

const StepFour = () => {
  const navigate = useNavigate()

  const [checkedAnswer, setCheckedAnswer] = useState(null)

  const handleCheck = (answerId) => {
    setCheckedAnswer(answerId)
  }
  const options = [
    {
      id: 'variant-1',
      text: '1',
    },
    {
      id: 'variant-2',
      text: '2',
    },
    {
      id: 'variant-3',
      text: '3',
    },
    {
      id: 'variant-4',
      text: '4',
    },
    {
      id: 'variant-5',
      text: '5',
    },
  ]
  return (
    <div>
      <ThemeSwitcher />
      <div className='container'>
        <div className='wrapper'>
          <div className='emoji-quiz'>
            <Indicator progress='4' />
            <div className='question'>
              <Heading headingType='h2' text='4. Занимательный вопрос' />
              <ul className='level-variants'>
                {options.map((element) => (
                  <LevelWrapper
                    key={element.id}
                    id={element.id}
                    labelText={element.text}
                    checked={checkedAnswer === element.id}
                    onChange={() => handleCheck(element.id)}
                  />
                ))}
              </ul>
              <AppButton
                onClick={() => navigate('/thanks')}
                disabled={!checkedAnswer}
                id='next-btn'
                text='Далее'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepFour
