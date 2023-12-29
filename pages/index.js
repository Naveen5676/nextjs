import MeetupList from "../components/meetups/MeetupList"

const dummy_meetups=[{
    id:'m1',
    title:'first meetup',
    image: 'https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-8923.jpg',
    address: 'some address 5, 123455 ',
    description: 'this is first meetup'
},
{
    id:'m2',
    title:'first meetup',
    image: 'https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-8923.jpg',
    address: 'some address 5, 123455 ',
    description: 'this is secand meetup'
},
{
    id:'m3',
    title:'first meetup',
    image: 'https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-8923.jpg',
    address: 'some address 5, 123455 ',
    description: 'this is third meetup'
},
]


const HomePage=()=>{
    return <MeetupList meetups={dummy_meetups}/>
}
export default HomePage