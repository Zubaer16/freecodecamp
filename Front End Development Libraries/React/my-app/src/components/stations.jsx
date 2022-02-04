import React, { Component } from 'react'
import '../css/stations.css'
import Backarrow from '../images/back-arrow.png'
import Fm from '../images/fm.png'
import Minus from '../images/minus.png'
import Plus from '../images/plus.png'
import Switch from '../images/switch.png'

let stationList = [
  { name: 'Putin FM', fequency: '66,6' },
  { name: 'Dribble FM', fequency: '101,2' },
  { name: 'Doge FM', fequency: '99,4' },
  { name: 'Ballads FM', fequency: '87,1' },
  { name: 'Maximum FM', fequency: '142,2' },
]
class Stations extends Component {
  render() {
    let stationss = stationList.map((elem) => (
      <>
        <div className="fm-hr-pic">
          <div className="fm-detail-pic">
            <a href="#" className="plus">
              <img className="detail-img" src={Plus} alt="plus" />
            </a>
            <img src={Fm} alt="fm" />
            <a href="#" className="minus">
              <img className="detail-img" src={Minus} alt="minus" />
            </a>
          </div>
          <div
            onClick={(e) => {
              let click = e.currentTarget.firstElementChild.firstElementChild
              let change = e.currentTarget.parentElement.firstElementChild
              let statuss = document.getElementsByClassName('status-section')[0]
              let forClick = document.getElementsByClassName('fm-with-hr')
              let forChange = document.getElementsByClassName('fm-detail-pic')

              if (!change.style.display || change.style.display === 'none') {
                change.style.display = 'flex'
                statuss.style.visibility = 'visible'
                document.getElementsByClassName('current-fm')[0].innerHTML =
                  click.innerText
                for (let i = 0; i < forClick.length; i++) {
                  if (
                    forClick[i].querySelector('.fm-name').innerHTML ===
                    click.innerText
                  ) {
                    continue
                  } else {
                    forChange[i].style.display = 'none'
                  }
                }
              } else {
                change.style.display = 'none'
                statuss.style.visibility = 'hidden'
              }
            }}
            className="fm-with-hr"
          >
            <a href="#" className="fm-and-frequnecy">
              <span className="fm-name">{elem.name}</span>
              <span className="fm-frequency">{elem.fequency}</span>
            </a>
            <hr />
          </div>
        </div>
      </>
    ))
    return (
      <>
        <div className="main">
          <div className="main-section">
            <section className="fm-heading">
              <a href="#">
                <img src={Backarrow} alt="back-arrow" />
              </a>
              <h1 className="heading">STATIONS</h1>
              <a href="#">
                <img src={Switch} alt="switch" />
              </a>
            </section>
            <section className="fm-list">
              <section className="list-with-details">{stationss}</section>
            </section>
          </div>
          <div className="status-section">
            <span className="current">CURRENTLY PLAYING</span>
            <span className="current-fm">Putin FM</span>
          </div>
        </div>
      </>
    )
  }
}

export default Stations
