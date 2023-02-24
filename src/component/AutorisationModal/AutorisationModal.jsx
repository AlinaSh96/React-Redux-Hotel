import React from 'react'
import cls from './AutorisationModal.module.scss';

const AutorisationModal = () => {


let handleSubmit = () => {
  alert(12345)
}

  return (
    <div className={cls.wrap}>
      <p className={cls.label} >Simple Hotel Check</p>
      <form  onSubmit={handleSubmit}>
        <label>
          Логин:
          <input type="text" />
        </label>

        <label>
          Пароль:
          <input type="email" />
        </label>

        <input type="submit" value="Войти" />
      </form>
    </div>
  )
}

export default AutorisationModal