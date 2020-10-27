import React, { Component } from 'react'
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-Calendar'
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

moment.locale("en");
const localizer = momentLocalizer(moment)
const DragAndDropCalendar = withDragAndDrop(BigCalendar);

class calendar_big extends Component {
    constructor() {
        super();
        //const now = new Date();
        const events = [
            {
                id: 0,
                title: '2nd Grade Science, Topic: Changes in Properties',
                start: new Date(2020, 7, 3, 8, 0, 0),
                end: new Date(2020, 7, 3, 8, 55, 0),
                borderColor: '#d2f0ff',
                backgroundColor: '#d2f0ff',
                textColor: '#333'
            }, {
                id: 1,
                title: '3rd Grade Science, Topic: State of Water',
                start: new Date(2020, 7, 10, 9, 0, 0),
                end: new Date(2020, 7, 10, 10, 30, 0),
                borderColor: '#d2f0ff',
                backgroundColor: '#d2f0ff',
                textColor: '#333'
            }, {
                id: 2,
                title: '4th Grade Science, Topic: Energy',
                start: new Date(2020, 7, 17, 11, 0, 0),
                end: new Date(2020, 7, 17, 12, 30, 0),
                borderColor: '#d2f0ff',
                backgroundColor: '#d2f0ff',
                textColor: '#333'
            }, {
                id: 3,
                title: '5th Grade Science,  Topic: Experimenting with Forces',
                start: new Date(2020, 7, 24, 13, 0, 0),
                end: new Date(2020, 7, 24, 14, 30, 0),
                borderColor: '#d2f0ff',
                backgroundColor: '#d2f0ff',
                textColor: '#333'
            }, {
                id: 4,
                title: '2nd Grade Science, Topic: Changes in Properties',
                start: new Date(2020, 7, 4, 8, 0, 0),
                end: new Date(2020, 7, 4, 8, 55, 0),
                borderColor: '#d2f0ff',
                backgroundColor: '#d2f0ff',
                textColor: '#333'
            }, {
                id: 5,
                title: '3rd Grade Science, Topic: Forms of Energy',
                start: new Date(2020, 7, 11, 9, 0, 0),
                end: new Date(2020, 7, 11, 10, 30, 0),
                borderColor: '#d2f0ff',
                backgroundColor: '#d2f0ff',
                textColor: '#333'
            }, {
                id: 6,
                title: '4th Grade Science, Topic: Heat Flow',
                start: new Date(2020, 7, 18, 11, 0, 0),
                end: new Date(2020, 7, 18, 12, 30, 0),
                borderColor: '#d2f0ff',
                backgroundColor: '#d2f0ff',
                textColor: '#333'
            }, {
                id: 7,
                title: '5th Grade Science, Topic: Mixtures',
                start: new Date(2020, 7, 25, 13, 0, 0),
                end: new Date(2020, 7, 25, 14, 30, 0),
                borderColor: '#d2f0ff',
                backgroundColor: '#d2f0ff',
                textColor: '#333'
            }, {
                id: 8,
                title: '2nd Grade Science, Topic: Magnets and Gravity',
                start: new Date(2020, 7, 5, 8, 0, 0),
                end: new Date(2020, 7, 5, 8, 55, 0),
                borderColor: '#d2f0ff',
                backgroundColor: '#d2f0ff',
                textColor: '#333'
            }, {
                id: 9,
                title: '3rd Grade Science, Topic: Light',
                start: new Date(2020, 7, 12, 9, 0, 0),
                end: new Date(2020, 7, 12, 10, 30, 0),
                borderColor: '#d2f0ff',
                backgroundColor: '#d2f0ff',
                textColor: '#333'
            }, {
                id: 10,
                title: '4th Grade Science, Topic: Energy in a Food Chain',
                start: new Date(2020, 7, 19, 11, 0, 0),
                end: new Date(2020, 7, 19, 12, 30, 0),
                borderColor: '#d2f0ff',
                backgroundColor: '#d2f0ff',
                textColor: '#333'
            }, {
                id: 11,
                title: '5th Grade Science, Topic: Electric Circuits',
                start: new Date(2020, 7, 26, 13, 0, 0),
                end: new Date(2020, 7, 26, 14, 30, 0),
                borderColor: '#d2f0ff',
                backgroundColor: '#d2f0ff',
                textColor: '#333'
            }, {
                id: 12,
                title: '2nd Grade Science, Topic: Distinguishing Body Parts',
                start: new Date(2020, 7, 6, 8, 0, 0),
                end: new Date(2020, 7, 6, 8, 55, 0),
                borderColor: '#d2f0ff',
                backgroundColor: '#d2f0ff',
                textColor: '#333'
            }, {
                id: 13,
                title: '3rd Grade Science, Topic: Classifying Matter',
                start: new Date(2020, 7, 13, 9, 0, 0),
                end: new Date(2020, 7, 13, 10, 30, 0),
                borderColor: '#d2f0ff',
                backgroundColor: '#d2f0ff',
                textColor: '#333'
            }, {
                id: 14,
                title: '4th Grade Science, Topic: Earth’s Movements',
                start: new Date(2020, 7, 20, 11, 0, 0),
                end: new Date(2020, 7, 20, 12, 30, 0),
                borderColor: '#d2f0ff',
                backgroundColor: '#d2f0ff',
                textColor: '#333'
            }, {
                id: 15,
                title: '5th Grade Science, Topic: Adaptions',
                start: new Date(2020, 7, 27, 13, 0, 0),
                end: new Date(2020, 7, 27, 14, 30, 0),
                borderColor: '#d2f0ff',
                backgroundColor: '#d2f0ff',
                textColor: '#333'
            }, {
                id: 16,
                title: '2nd Grade Science, Topic: Life Cycles',
                start: new Date(2020, 7, 7, 8, 0, 0),
                end: new Date(2020, 7, 7, 8, 55, 0),
                borderColor: '#d2f0ff',
                backgroundColor: '#d2f0ff',
                textColor: '#333'
            }, {
                id: 17,
                title: '3rd Grade Science, Topic: Classifying Animals',
                start: new Date(2020, 7, 14, 9, 0, 0),
                end: new Date(2020, 7, 14, 10, 30, 0),
                borderColor: '#d2f0ff',
                backgroundColor: '#d2f0ff',
                textColor: '#333'
            }, {
                id: 18,
                title: '4th Grade Science, Topic: Classifying Rocks',
                start: new Date(2020, 7, 21, 11, 0, 0),
                end: new Date(2020, 7, 21, 12, 30, 0),
                borderColor: '#d2f0ff',
                backgroundColor: '#d2f0ff',
                textColor: '#333'
            }, {
                id: 19,
                title: '5th Grade Science, Topic: Human Organs',
                start: new Date(2020, 7, 28, 13, 0, 0),
                end: new Date(2020, 7, 28, 14, 30, 0),
                borderColor: '#d2f0ff',
                backgroundColor: '#d2f0ff',
                textColor: '#333'
            }
        ]
        this.state = {
            name: 'React',
            events
        };
        this.onEventDrop = this.onEventDrop.bind(this);
        this.onEventResize = this.onEventResize.bind(this);
    }

    onEventResize({ event, start, end }) {
        const { events } = this.state
        const nextEvents = events.map(existingEvent => {
            return existingEvent.id === event.id
                ? { ...existingEvent, start, end }
                : existingEvent
        })
        this.setState({
            events: nextEvents,
        })
    }

    onEventDrop({ event, start, end }) {
        const { events } = this.state;
        const idx = events.indexOf(event);
        const updatedEvent = { ...event, start, end };
        const nextEvents = [...events];
        nextEvents.splice(idx, 1, updatedEvent);
        this.setState({
            events: nextEvents,
        })
    }
    render() {
        return (
            <div style={{ height: 200 }}>
                <DragAndDropCalendar
                    events={this.state.events}
                    startAccessor="start"
                    endAccessor="end"
                    defaultDate={new Date(2020, 7, 2)}
                    defaultView="week"
                    localizer={localizer}
                    formats={{
                        dayFormat: 'ddd D/M',
                    }}
                    views={{
                        week: true
                    }}
                    resizable
                    selectable
                    onEventDrop={this.onEventDrop}
                    onEventResize={this.onEventResize}
                />
            </div>
        );
    }
}

export default calendar_big