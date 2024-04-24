import { checkOtp } from 'src/services/auth'
import { setCookie } from 'utils/cookie'
import { useNavigate } from 'react-router-dom'

import styles from "./Check.module.css"

function CheckOtpForm({ code, setCode, mobile, setStep }) {
  const navigate = useNavigate()
  const submitHandler = async (e) => {
    e.preventDefault()

    if (code.length !== 5) return

    const { response, error } = await checkOtp(mobile, code)
    navigate('/')

    if (response) setCookie(response.data)
    if (error) console.log(error.response.data.message)
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <p>تایید کد</p>
      <span>کد پیامک شده به شماره‌ی {mobile} را وارد کنید.</span>
      {/* <label htmlFor="input">کد تایید را وارد کنید</label> */}
      <input
        type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)} className={styles.backButton}>تغییر شماره موبایل</button>
    </form>
  )
}

export default CheckOtpForm
