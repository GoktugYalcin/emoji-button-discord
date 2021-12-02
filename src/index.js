import styles from './styles.module.css'
import getEmoji from 'get-random-emoji'
import React, { Fragment, useState } from 'react'
import classNames from 'classnames'

const EmojiButton = ({
  disabled,
  onClick,
  customEmoji,
  text,
  customClass,
  customContainer
}) => {
  const [emoji, setEmoji] = useState(getEmoji())

  const classDisabled = styles.emojiButtonDisabled

  const buttonClasses = classNames(styles.emojiButton, {
    classDisabled: disabled
  })

  const containerClasses = classNames(styles.emojiContainer)

  return (
    <>
      <div
        className={
          customContainer
            ? containerClasses + ' ' + customContainer
            : containerClasses
        }
      >
        <div
          className={
            styles.emojiButton + (disabled ? (" " + styles.emojiButtonDisabled) : ("")) +  (customClass ? (" " + customClass) : (""))
          }
          onMouseEnter={() => {
            setEmoji(getEmoji())
          }}
          onClick={onClick || null}
        >
          {customEmoji || emoji}
        </div>
        {text && <div className={styles.emojiText}>{text}</div>}
      </div>
    </>
  )
}

export default EmojiButton;
