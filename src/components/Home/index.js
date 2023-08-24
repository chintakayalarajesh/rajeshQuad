import './index.css'
import {Component} from 'react'
import {FaTelegramPlane} from 'react-icons/fa'
import {RxSwitch} from 'react-icons/rx'
import {BsCurrencyRupee} from 'react-icons/bs'

class Home extends Component {
  state = {
    isClick: false,
  }

  componentDidMount() {
    this.renderCryptoData()
  }

  onChange = () => {
    this.setState(prevState => ({isClick: !prevState.isClick}))
  }

  renderCryptoData = async () => {
    const url = ' http://localhost:3002/tickers'
    const response = await fetch(url)
    const data = await response.json()
    const res = data.slice(0, 10)
    console.log(res)
  }

  render() {
    const {isClick} = this.state
    const change = isClick ? 'bg' : 'home-page'
    const correct = isClick ? 'heading2' : 'heading1'
    return (
      <div className={change}>
        <div className="bg-container">
          <img
            src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png"
            className="heading-image"
            alt="error"
          />
          <div>
            <select name="inr" className="selectbutton">
              <option value="INR">INR</option>
            </select>
            <select name="inr" className="selectbutton">
              <option value="btc">BTC</option>
              <option value="xrp">ETH</option>
              <option value="eth">USDT</option>
              <option value="trx">XRP</option>
              <option value="trx">TRX</option>
              <option value="trx">DASH</option>
              <option value="trx">ZEC</option>
              <option value="trx">XEM</option>
              <option value="trx">LOST</option>
              <option value="trx">WIN</option>
              <option value="trx">BIT</option>
              <option value="trx">WRX</option>
            </select>
            <button type="button" className="button">
              BUY BTC
            </button>
          </div>

          <button type="button" className="telegram-button">
            <FaTelegramPlane className="icon" /> Connect Telegram
          </button>
          <button type="button" className="On-icon" onClick={this.onChange}>
            <RxSwitch size={40} />
          </button>
        </div>
        <div className="percentage-container">
          <div>
            <h1 className="heading">0.52%</h1>
            <p className="para">5 Mints</p>
          </div>
          <div>
            <h1 className="heading">0.77%</h1>
            <p className="para">1 Hour</p>
          </div>
          <div>
            <p className="para1">Best Price to Trade</p>
            <h1 className={correct}>
              <BsCurrencyRupee className="currency" />
              24,26,143
            </h1>
            <p className="para">
              Average BTC/INR net price including commission
            </p>
          </div>
          <div>
            <h1 className="heading">10.13%</h1>
            <p className="para">1 Day</p>
          </div>
          <div>
            <h1 className="heading">10.31%</h1>
            <p className="para">7 Days</p>
          </div>
        </div>
        <div className="attribute">
          <div>
            <h1 className="hash">#</h1>
          </div>
          <div>
            <h1 className="hash1">Platform</h1>
          </div>
          <div>
            <h1 className="hash1">Last Traded Price</h1>
          </div>
          <div>
            <h1 className="hash1">Buy / Sell Price</h1>
          </div>
          <div>
            <h1 className="hash1">Diffrence</h1>
          </div>
          <div>
            <h1 className="hash1">Savings</h1>
          </div>
        </div>

        <div className="bg-yes">
          <div className="value">
            <div>
              <h1 className="one">1</h1>
            </div>
            <div className="wazirx">
              <img
                src="https://play-lh.googleusercontent.com/JoikhtJAr-CEcX6ptDKRSTYB8RY5dW3q_pPbqtpk7MNMNyTZ0nZLvTDe4rx8tRb-JA"
                alt="waz"
                className="waz"
              />
              <h1 className="one">WazirX</h1>
            </div>
            <div>
              <h1 className="one">23,55,555</h1>
            </div>
            <div>
              <h1 className="one">₹ 23,47,500 / ₹ 23,55,555</h1>
            </div>
            <div>
              <h1 className="one1"> -2.91 %</h1>
            </div>
            <div>
              <h1 className="one2"> ▼ ₹ 70,588</h1>
            </div>
          </div>
        </div>

        <div className="bg-yes">
          <div className="value">
            <div>
              <h1 className="one">2</h1>
            </div>
            <div className="wazirx">
              <img
                src="https://play-lh.googleusercontent.com/JoikhtJAr-CEcX6ptDKRSTYB8RY5dW3q_pPbqtpk7MNMNyTZ0nZLvTDe4rx8tRb-JA"
                alt="waz"
                className="waz"
              />
              <h1 className="one">Bitbns</h1>
            </div>
            <div>
              <h1 className="one">23,58,991</h1>
            </div>
            <div>
              <h1 className="one">₹ 28,23,874 / ₹ 28,69,239</h1>
            </div>
            <div>
              <h1 className="one2"> 16.41 %</h1>
            </div>
            <div>
              <h1 className="one2"> ▼ ₹ 3,98,187</h1>
            </div>
          </div>
        </div>

        <div className="bg-yes">
          <div className="value">
            <div>
              <h1 className="one">3</h1>
            </div>
            <div className="wazirx">
              <img
                src="https://play-lh.googleusercontent.com/JoikhtJAr-CEcX6ptDKRSTYB8RY5dW3q_pPbqtpk7MNMNyTZ0nZLvTDe4rx8tRb-JA"
                alt="waz"
                className="waz"
              />
              <h1 className="one">Colodax</h1>
            </div>
            <div>
              <h1 className="one">22,33,842</h1>
            </div>
            <div>
              <h1 className="one">₹ 22,22,671 / ₹ 27,25,287</h1>
            </div>
            <div>
              <h1 className="one1"> -7.93 %</h1>
            </div>
            <div>
              <h1 className="one1"> ▼ ₹ 1,92,301</h1>
            </div>
          </div>
        </div>

        <div className="bg-yes">
          <div className="value">
            <div>
              <h1 className="one">4</h1>
            </div>
            <div className="wazirx">
              <img
                src="https://play-lh.googleusercontent.com/JoikhtJAr-CEcX6ptDKRSTYB8RY5dW3q_pPbqtpk7MNMNyTZ0nZLvTDe4rx8tRb-JA"
                alt="waz"
                className="waz"
              />
              <h1 className="one">Zebpay</h1>
            </div>
            <div>
              <h1 className="one">23,58,991</h1>
            </div>
            <div>
              <h1 className="one">₹ 23,58,991 / ₹ 23,22,001</h1>
            </div>
            <div>
              <h1 className="one1"> -2.77 %</h1>
            </div>
            <div>
              <h1 className="one1"> ▼ ₹ 67,152</h1>
            </div>
          </div>
        </div>

        <div className="bg-yes">
          <div className="value">
            <div>
              <h1 className="one">5</h1>
            </div>
            <div className="wazirx">
              <img
                src="https://play-lh.googleusercontent.com/JoikhtJAr-CEcX6ptDKRSTYB8RY5dW3q_pPbqtpk7MNMNyTZ0nZLvTDe4rx8tRb-JA"
                alt="waz"
                className="waz"
              />
              <h1 className="one">WazirX</h1>
            </div>
            <div>
              <h1 className="one">23,58,000</h1>
            </div>
            <div>
              <h1 className="one">₹ 23,58,000 / ₹ 23,83,700</h1>
            </div>
            <div>
              <h1 className="one1"> -2.91 %</h1>
            </div>
            <div>
              <h1 className="one1"> ▼ ₹ 68,143</h1>
            </div>
          </div>
        </div>
        <hr />
        <h1 className="copy">Copyright © 2019 HodlInfo.com</h1>
      </div>
    )
  }
}
export default Home
