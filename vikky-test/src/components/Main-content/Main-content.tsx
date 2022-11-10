import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button, Checkbox,
  FormControlLabel,
  TextField,
  Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {RubleIcon} from "../Custom-svg-icons/Ruble-icon";
import IconDog from "../../images/dog-icon.svg";
import PlaceIcon from "@mui/icons-material/Place";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupIcon from "@mui/icons-material/Group";
import {CallBackBannerBlock} from "../Call-back-banner-block";
import React, {useState} from "react";
import dayjs, {Dayjs} from "dayjs";
import './Main-content.scss';


const MainContent = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());
  const [checked, setChecked] = useState(true);
  
  return (
    <main className="main container">
      
      <section className="booking-block">
        <h1 className="title booking-block__title">Бронирование тура</h1>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          className="booking-form"
        >
          <section className="booking-form__item booking-form__item_lg">
            <article className="contacts">
              <h3 className="subtitle">Данные покупателя</h3>
              <Box className="contacts__inner">
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  size="small"
                  className="custom-input contacts__input"
                />
                <TextField
                  id="tel"
                  label="Телефон"
                  type="tel"
                  size="small"
                  className="custom-input contacts__input"
                />
              </Box>
            </article>
            
            <article className="personal-data">
              <h3 className="subtitle personal-data__subtitle">Информация о туристах</h3>
              <span className="personal-data__text">Пусть это заполнят твои двуногие</span>
              
              <Accordion className="accordion" defaultExpanded={true}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="accordion__expand-icon"/>}
                  id="panel-header"
                >
                  <h3 className="accordion__title">Данные о первом двуногом</h3>
                </AccordionSummary>
                <AccordionDetails className="accordion__form">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TextField
                      id="surname"
                      label="Фамилия"
                      type="text"
                      size="small"
                      className="custom-input"
                    />
                    <TextField
                      id="name"
                      label="Имя"
                      type="text"
                      size="small"
                      className="custom-input"
                    />
                    <TextField
                      id="middle-name"
                      label="Отчество"
                      type="text"
                      size="small"
                      className="custom-input"
                    />
                    <DatePicker
                      openTo="year"
                      label="Дата рождения"
                      views={['year', 'month', 'day']}
                      value={value}
                      className="custom-input"
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => <TextField size="small" id="birth-date" {...params}
                                                          helperText={null}/>}
                    />
                    <TextField
                      id="passport-number"
                      label="Серия и номер паспорта"
                      type="text"
                      size="small"
                      className="custom-input"
                    />
                    <DatePicker
                      openTo="year"
                      label="Когда выдан"
                      views={['year', 'month', 'day']}
                      value={value}
                      className="custom-input"
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => <TextField size="small" id="passport-date" {...params}
                                                          helperText={null}/>}
                    />
                    <TextField
                      id="passport-issued-by"
                      label="Кем выдан"
                      type="text"
                      size="small"
                      fullWidth
                      className="custom-input"
                    />
                  </LocalizationProvider>
                </AccordionDetails>
              </Accordion>
              <Accordion className="accordion">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="accordion__expand-icon"/>}
                  id="panel-header"
                >
                  <h3 className="accordion__title">Данные о втором двуногом</h3>
                </AccordionSummary>
                <AccordionDetails className="accordion__form">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TextField
                      id="surname"
                      label="Фамилия"
                      type="text"
                      size="small"
                      className="custom-input"
                    />
                    <TextField
                      id="name"
                      label="Имя"
                      type="text"
                      size="small"
                      className="custom-input"
                    />
                    <TextField
                      id="middle-name"
                      label="Отчество"
                      type="text"
                      size="small"
                      className="custom-input"
                    />
                    <DatePicker
                      openTo="year"
                      label="Дата рождения"
                      views={['year', 'month', 'day']}
                      value={value}
                      className="custom-input"
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => <TextField size="small" id="birth-date" {...params}
                                                          helperText={null}/>}
                    />
                    <TextField
                      id="passport-number"
                      label="Серия и номер паспорта"
                      type="text"
                      size="small"
                      className="custom-input"
                    />
                    <DatePicker
                      openTo="year"
                      label="Когда выдан"
                      views={['year', 'month', 'day']}
                      value={value}
                      className="custom-input"
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => <TextField size="small" id="passport-date" {...params}
                                                          helperText={null}/>}
                    />
                    <TextField
                      id="passport-issued-by"
                      label="Кем выдан"
                      type="text"
                      size="small"
                      fullWidth
                      className="custom-input"
                    />
                  </LocalizationProvider>
                </AccordionDetails>
              </Accordion>
            </article>
            
            <article className="confirm-buy">
              <div className="confirm-buy__sum">
                <span>К оплате</span>
                <span className="sum">200 000 <RubleIcon inheritViewBox/></span>
              </div>
              
              <div className="confirm-buy__booking">
                <Button
                  type="submit"
                  variant="contained"
                  disabled={checked ? false : true}
                  className="btn-primary confirm-buy__btn"
                >
                  Забронировать
                </Button>
                
                <FormControlLabel className='privacy-note privacy-note_sm'
                                  control={<Checkbox
                                    className="privacy-checkbox"
                                    size="small"
                                    required={true}
                                    checked={checked}
                                    onChange={() => setChecked(!checked)}
                                    id='privacy-checkbox'
                                  />}
                                  label={
                                    <div className="privacy-note__text">
                                      <span>Я согласен на обработку своих персональных данных согласно </span>
                                      <a href="#" className="link">политике конфиденциальности</a>
                                      <span> и с условиями </span>
                                      <a href="#" className="link">оферты</a>
                                    </div>
                                  }/>
              </div>
            </article>
          </section>
          
          <section className="booking-form__item booking-form__item_sm">
            
            <article className="summary-info">
              <div className="chip">
                <span className="chip__text">Групповой</span>
                <span className="chip__number">
                  <img className="dog-icon" src={IconDog} alt="иконка собака"/>
                  <span>10</span>
                </span>
              </div>
              <h3 className="subtitle summary-info__subtitle">Сёрф-тур для хороших мальчиков</h3>
              <ul className="info-list">
                <li className="info-list__item">
                  <PlaceIcon className="item-icon" fontSize="small"/>
                  <span className="item-text">Аэропорт Хайнань</span>
                </li>
                <li className="info-list__item">
                  <TimelapseIcon className="item-icon" fontSize="small"/>
                  <span className="item-text">3 дня / 4 ночи</span>
                </li>
                <li className="info-list__item">
                  <CalendarMonthIcon className="item-icon" fontSize="small"/>
                  <span className="item-text">31 сентября <span
                    className="weekday weekday_workday">пн</span> — 5 ноября <span
                    className="weekday weekday_holiday">вс</span></span>
                </li>
                <li className="info-list__item">
                  <GroupIcon className="item-icon" fontSize="small"/>
                  <span className="item-text">1 пёс + 2 человека</span>
                </li>
              </ul>
              
              <a href="#" className="link summary-info__link">Ввести промокод</a>
              
              <footer className="resume">
                <div className="price">
                  <span>Стоимость тура </span>
                  <span className="price__number">
                    100 000<RubleIcon fontSize="small"/>x&nbsp;&nbsp;2
                  </span>
                </div>
                <div className="total-price">
                  <span>Итого к оплате</span>
                  <span className="total-price__number">
                    200 000<RubleIcon inheritViewBox/>
                  </span>
                </div>
              </footer>
            
            </article>
            
            <article className="help-desk">
              <span className="help-desk__title">Нужна помощь?</span>
              <a className="link help-desk__link" href="tel:88003339963">8 800 333 99 63</a>
            </article>
            
          </section>
        </Box>
      </section>
      
      <CallBackBannerBlock/>
    
    </main>
  );
}

export {MainContent}
