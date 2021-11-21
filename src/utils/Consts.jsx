import { Check, Clock, Flash, Menu } from '../icons'

export const initialTab = [
    { name: 'All', value: 'all' },
    { name: 'In Progress', value: 'inProgress' },
    { name: 'Started', value: 'started' },
    { name: 'Completed', value: 'completed' },
]


export const statistics = [
    { name: 'Total projects', total: 50, icon: Menu },
    { name: 'Completed', total: 15, icon: Check },
    { name: 'In Progress', total: 10, icon: Flash },
    { name: 'Delayed', total: 2, icon: Clock },
]

export const timeLapse = [
    { name: 'Day', value: 'day' },
    { name: 'Week', value: 'week' },
    { name: 'Month', value: 'month' },
    { name: 'Year', value: 'year' },
]

export const months = ["", "Jan", "", "Jul", "", "Aug", "", "Sep", "", "Oct", "", "Nov", "",]

export const days = ["", "Mon", "", "Tue", "", "Wed", "", "Thu", "", "Fri", "", "Sat", "", "Sun", "",]

export const tasks = [
    {
        order: '#890PO90',
        name: 'Bryan Williams',
        days: 1,
        progress: 20,
        order2: '#90Q241',
        name2: 'Marcus Klaus',
        days2: 3,
        progress2: 20
    },
    {
        order: '#PO90R2',
        name: ' Williams Bryan',
        days: 1,
        progress: 20,
        order2: '#890PO90',
        name2: 'Klaus Marcus',
        days2: 3,
        progress2: 40
    },
    {
        order: '#1L54J1',
        name: 'Bryan Klaus',
        days: 1,
        progress: 20,
        order2: '#ZXC981',
        name2: 'Marcus Williams',
        days2: 3,
        progress2: 50
    },
]

export const points = [
    35,//1
    40,//2
    40,//2
    35,//3
    33,//4
    34,//4
    44,//5
    46,//5
    40,//6
    35,//7
    35,//7
    45,//8
].map(n => n - 25)

export const options = {
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                display: false
            },
            display: false,
        },
        x: {
            grid: {
                display: false
            },
        },
    },
    responsive: true,
    maintainAspectRatio: false,
    layout: {
        padding: {
            bottom: 10,
        },
    },
    plugins: {
        tooltip: {
            enabled: false
        },
        legend: {
            display: false,
        },

    }
}

