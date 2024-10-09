import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

// Настройка локализации для календаря
LocaleConfig.locales['ru'] = {
  monthNames: [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ],
  dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
};
LocaleConfig.defaultLocale = 'ru';

const MyComplexCalendar = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [markedDates, setMarkedDates] = useState({});
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Функция для обработки выбора дня
  const onDayPress = (day) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day.dateString);
      setEndDate(null);
      setMarkedDates({
        [day.dateString]: { selected: true, startingDay: true, color: 'green' },
      });
    } else {
      const newMarkedDates = markRange(startDate, day.dateString);
      setMarkedDates(newMarkedDates);
      setEndDate(day.dateString);
    }
    setSelectedDate(day.dateString);
  };

  // Функция для отметки диапазона дат
  const markRange = (start, end) => {
    let marked = {};
    const startDate = new Date(start);
    const endDate = new Date(end);
    let currentDate = startDate;

    while (currentDate <= endDate) {
      const formattedDate = currentDate.toISOString().split('T')[0];
      marked[formattedDate] = {
        color: 'green',
        textColor: 'white',
        startingDay: formattedDate === start,
        endingDay: formattedDate === end,
      };
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return marked;
  };

  // Функция для сброса выделенных дат
  const resetSelection = () => {
    setStartDate(null);
    setEndDate(null);
    setMarkedDates({});
  };

  // Функция для обработки смены месяца
  const onMonthChange = (month) => {
    Alert.alert('Месяц изменён', `Вы перешли на: ${month.month}-${month.year}`);
  };

  // Функция для отображения выбранного диапазона
  const displaySelectedRange = () => {
    if (startDate && endDate) {
      return `Выбрано с ${startDate} по ${endDate}`;
    } else if (startDate) {
      return `Начальная дата: ${startDate}`;
    } else {
      return 'Диапазон не выбран';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Выберите диапазон дат:</Text>
      <Calendar
        onDayPress={onDayPress}
        onMonthChange={onMonthChange}
        markedDates={markedDates}
        markingType={'period'}
      />
      <Text style={styles.selectedRange}>{displaySelectedRange()}</Text>
      <Button title="Сбросить диапазон" onPress={resetSelection} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  selectedRange: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    color: 'blue',
  },
});

export default MyComplexCalendar;