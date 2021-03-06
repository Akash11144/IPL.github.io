console.log("Script loaded!!!")
var teamDetails = [
    {
        id : 1,
        name : "Chennai Super Kings",
        icon : "https://www.searchpng.com/wp-content/uploads/2019/02/Chennai-Super-Kings-Logo-PNG-Image-.png",
        playerCount : "16",
        captain : "Mahendra Singh Dhoni",
        topBatsman : "Suresh Raina",
        topBowler : "Ravindra Jadeja",
        champions : "3",
   },
   {
    id :  2,
    name : "Mumbai Indians",
    icon : "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png",
    playerCount : "16",
    captain : "Rohit Sharma",
    topBatsman :"Rohit Sharma",
    topBowler : "Jasprit Bumrah",
    champions : "5",
},
{
    id :  3,
    name : "Delhi Capitals",
    icon : "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/1200px-Delhi_Capitals_Logo.svg.png",
    playerCount : "16",
    captain : "Shreyas Iyer",
    topBatsman :"Rishabh Pant",
    topBowler : "Anrich Nortje",
    champions : "0",
},
{
    id :  4,
    name : "Kolkata Knight Riders",
    icon : "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png",
    playerCount : "16",
    captain : "Eion Morgan",
    topBatsman :"Shubhman Gill",
    topBowler : "Sunil Narine",
    champions : "2",
},
{
    id :  5,
    name : "Royal Challengers Bangalore",
    icon : "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png",
    playerCount : "16",
    captain : "Virat Kohli",
    topBatsman :"Virat Kohli",
    topBowler : "Kyle Jamieson",
    champions : "0",
},
{
    id :  6,
    name : "Punjab Kings",
    icon : "https://upload.wikimedia.org/wikipedia/en/1/1c/Punjab_Kings_logo_2021.png",
    playerCount : "16",
    captain : "KL Rahul",
    topBatsman :"Chris Gayle",
    topBowler : "Jhye Richardson",
    champions : "0",
},
 
{
    id :  7,
    name : "Rajasthan Royals",
    icon : "https://upload.wikimedia.org/wikipedia/en/6/60/Rajasthan_Royals_Logo.svg",
    playerCount : "16",
    captain : "Sanju Samson",
    topBatsman :"Ben Stokes",
    topBowler : "Chris Morris",
    champions : "1",
},
{
    id :  8,
    name : "Sunrisers Hyderabad",
    icon : "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png",
    playerCount : "16",
    captain : "Kane Williamson",
    topBatsman :"David Warner",
    topBowler : "Bhuvneshwar Kumar",
    champions : "1",
}
];





var players = [
    {
        name: "Mahendra Singh Dhoni",
        photo: "https://static.iplt20.com/players/210/1.png",
        team: "Chennai Super Kings",
        price: "Rs. 70 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://www.searchpng.com/wp-content/uploads/2019/02/Chennai-Super-Kings-Logo-PNG-Image-.png"
    },
    {
        name: "Moin Ali",
        photo: "https://static.iplt20.com/players/210/1735.png",
        team: "Chennai Super Kings",
        price: "RS 50 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://www.searchpng.com/wp-content/uploads/2019/02/Chennai-Super-Kings-Logo-PNG-Image-.png"
    },
    {
        name: "Suresh Raina",
        photo: "https://static.iplt20.com/players/210/14.png",
        team: "Chennai Super Kings",
        price: "RS 20 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://www.searchpng.com/wp-content/uploads/2019/02/Chennai-Super-Kings-Logo-PNG-Image-.png"
    },
    {
        name: "Ruturaj Gaikwad",
        photo: "https://static.iplt20.com/players/210/5443.png",
        team: "Chennai Super Kings",
        price: "RS 8 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://www.searchpng.com/wp-content/uploads/2019/02/Chennai-Super-Kings-Logo-PNG-Image-.png"
    },
    {
        name: "Faf du Plessis",
        photo: "https://static.iplt20.com/players/210/24.png",
        team: "Chennai Super Kings",
        price: "RS 5 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://www.searchpng.com/wp-content/uploads/2019/02/Chennai-Super-Kings-Logo-PNG-Image-.png"
    },
    {
        name: "Dwayne Bravo",
        photo: "https://static.iplt20.com/players/210/25.png",
        team: "Chennai Super Kings",
        price: "RS 2.5 Million",
        playingStatus: "Playing",
        Role: "All-Rounder",
        logo: "https://www.searchpng.com/wp-content/uploads/2019/02/Chennai-Super-Kings-Logo-PNG-Image-.png"
    },
    {
        name: "Ravindra Jadeja",
        photo: "https://static.iplt20.com/players/210/9.png",
        team: "Chennai Super Kings",
        price: "RS 1.2 Million",
        playingStatus: "Playing",
        Role: "All-Rounder",
        logo: "https://www.searchpng.com/wp-content/uploads/2019/02/Chennai-Super-Kings-Logo-PNG-Image-.png"
    },
    {
        name: "Krishnaappa Gowtham",
        photo: "https://static.iplt20.com/players/210/3834.png",
        team: "Chennai Super Kings",
        price: "RS 1.1 Million",
        playingStatus: "Playing",
        Role: "All-Rounder",
        logo: "https://www.searchpng.com/wp-content/uploads/2019/02/Chennai-Super-Kings-Logo-PNG-Image-.png"
    },
    {
        name: "Shardhul Thakur",
        photo: "https://static.iplt20.com/players/210/1745.png",
        team: "Chennai Super Kings",
        price: "RS 1 Million",
        playingStatus: "Playing",
        Role: "Bowler",
        logo: "https://www.searchpng.com/wp-content/uploads/2019/02/Chennai-Super-Kings-Logo-PNG-Image-.png"
    },
    {
        name: "Deepak Chahar",
        photo: "https://static.iplt20.com/players/210/140.png",
        team: "Chennai Super Kings",
        price: "RS 0.9 Million",
        playingStatus: "Playing",
        Role: "Bowler",
        logo: "https://www.searchpng.com/wp-content/uploads/2019/02/Chennai-Super-Kings-Logo-PNG-Image-.png"
    },
    {
        name: "Sam Curran",
        photo: "https://static.iplt20.com/players/210/2939.png",
        team: "Chennai Super Kings",
        price: "RS 0.5 Million",
        playingStatus: "Playing",
        Role: "Bowler",
        logo: "https://www.searchpng.com/wp-content/uploads/2019/02/Chennai-Super-Kings-Logo-PNG-Image-.png"
    },
    {
        name: "Karn Sharma",
        photo: "https://static.iplt20.com/players/210/1118.png",
        team: "Chennai Super Kings",
        price: "RS 0.7 Million",
        playingStatus: "On-Bench",
        Role: "Bowler",
        logo: "https://www.searchpng.com/wp-content/uploads/2019/02/Chennai-Super-Kings-Logo-PNG-Image-.png"
    },

    {
        name: "Rishabh Pant",
        photo: "https://static.iplt20.com/players/210/2972.png",
        team: "Delhi Capitals",
        price: "Rs. 70 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/1200px-Delhi_Capitals_Logo.svg.png"
    },
    {
        name: "Steve Smith",
        photo: "https://static.iplt20.com/players/210/271.png",
        team: "Delhi Capitals",
        price: "RS 50 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/1200px-Delhi_Capitals_Logo.svg.png"
    },
    {
        name: "Ajinkya Rahane",
        photo: "https://static.iplt20.com/players/210/135.png",
        team: "Delhi Capitals",
        price: "RS 20 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/1200px-Delhi_Capitals_Logo.svg.png"
    },
    {
        name: "Shikhar Dhawan",
        photo: "https://static.iplt20.com/players/210/41.png",
        team: "Delhi Capitals",
        price: "RS 8 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/1200px-Delhi_Capitals_Logo.svg.png"
    },
    {
        name: "Prithvi Shaw",
        photo: "https://static.iplt20.com/players/210/3764.png",
        team: "Delhi Capitals",
        price: "RS 5 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/1200px-Delhi_Capitals_Logo.svg.png"
    },
    {
        name: "Axar Patel",
        photo: "https://static.iplt20.com/players/210/1113.png",
        team: "Delhi Capitals",
        price: "RS 2.5 Million",
        playingStatus: "Playing",
        Role: "All-Rounder",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/1200px-Delhi_Capitals_Logo.svg.png"
    },
    {
        name: "Ravichandran Ashwin ",
        photo: "https://static.iplt20.com/players/210/8.png",
        team: "Delhi Capitals",
        price: "RS 1.2 Million",
        playingStatus: "Playing",
        Role: "All-Rounder",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/1200px-Delhi_Capitals_Logo.svg.png"
    },
    {
        name: "Chris Woakes",
        photo: "https://static.iplt20.com/players/210/967.png",
        team: "Delhi Capitals",
        price: "RS 1.1 Million",
        playingStatus: "Playing",
        Role: "All-Rounder",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/1200px-Delhi_Capitals_Logo.svg.png"
    },
    {
        name: "Avesh Khan",
        photo: "https://static.iplt20.com/players/210/1561.png",
        team: "Delhi Capitals",
        price: "RS 1 Million",
        playingStatus: "Playing",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/1200px-Delhi_Capitals_Logo.svg.png"
    },
    {
        name: "Amit Mishra",
        photo: "https://static.iplt20.com/players/210/30.png",
        team: "Delhi Capitals",
        price: "RS 0.9 Million",
        playingStatus: "Playing",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/1200px-Delhi_Capitals_Logo.svg.png"
    },
    {
        name: "Umesh Yadav",
        photo: "https://static.iplt20.com/players/210/59.png",
        team: "Delhi Capitals",
        price: "RS 0.7 Million",
        playingStatus: "Playing",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/1200px-Delhi_Capitals_Logo.svg.png"
    },
    {
        name: "Anrich Nortje",
        photo: "https://static.iplt20.com/players/210/5433.png",
        team: "Delhi Capitals",
        price: "RS 0.5 Million",
        playingStatus: "on-bench",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/1200px-Delhi_Capitals_Logo.svg.png"
    },
    {
        name: "Shubhman Gill",
        photo: "https://static.iplt20.com/players/210/3761.png",
        team: "Kolkata Knight Riders",
        price: "Rs. 70 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png"
    },
    {
        name: "Dinesh Kartik",
        photo: "https://static.iplt20.com/players/210/102.png",
        team: "Kolkata Knight Riders",
        price: "RS 50 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png"

    },
    {
        name: "Nitish Rana",
        photo: "https://static.iplt20.com/players/210/2738.png",
        team: "Kolkata Knight Riders",
        price: "RS 20 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png"
    },
    {
        name: "Karun Nair",
        photo: "https://static.iplt20.com/players/210/276.png",
        team: "Kolkata Knight Riders",
        price: "RS 8 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png"
    },
    {
        name: "Eoin Morgan",
        photo: "https://static.iplt20.com/players/210/197.png",
        team: "Kolkata Knight Riders",
        price: "RS 5 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png"
    },
    {
        name: "Sunil Narine",
        photo: "https://static.iplt20.com/players/210/203.png",
        team: "Kolkata Knight Riders",
        price: "RS 2.5 Million",
        playingStatus: "Playing",
        Role: "All-Rounder",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png"
    },
    {
        name: "Shakib Al Hasan",
        photo: "https://static.iplt20.com/players/210/201.png",
        team: "Kolkata Knight Riders",
        price: "RS 1.2 Million",
        playingStatus: "Playing",
        Role: "All-Rounder",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png"
    },
    {
        name: "Andre Russel",
        photo: "https://static.iplt20.com/players/210/3761.png",
        team: "Kolkata Knight Riders",
        price: "RS 1.1 Million",
        playingStatus: "Playing",
        Role: "All-Rounder",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png"
    },
    {
        name: "Pat Cummins",
        photo: "https://static.iplt20.com/players/210/488.png",
        team: "Kolkata Knight Riders",
        price: "RS 1 Million",
        playingStatus: "Playing",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png"
    },
    {
        name: "Lockie Ferguson",
        photo: "https://static.iplt20.com/players/210/3729.png",
        team: "Kolkata Knight Riders",
        price: "RS 0.9 Million",
        playingStatus: "Playing",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png"
    },
    {
        name: "Shivam Mavi",
        photo: "https://static.iplt20.com/players/210/3779.png",
        team: "Kolkata Knight Riders",
        price: "RS 0.7 Million",
        playingStatus: "Playing",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png"
    },
    {
        name: "Kuldeep Yadav",
        photo: "https://static.iplt20.com/players/210/261.png",
        team: "Kolkata Knight Riders",
        price: "RS 0.5 Million",
        playingStatus: "on-bench",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png"
    },
    {
        name: "Rohit Sharma",
        photo: "https://static.iplt20.com/players/210/107.png",
        team: "Mumbai Indians",
        price: "Rs. 70 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png"
    },
    {
        name: "Quinton de Kock",
        photo: "https://static.iplt20.com/players/210/834.png",
        team: "Mumbai Indians",
        price: "RS 50 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png"
    },
    {
        name: "Ishan Kishan",
        photo: "https://static.iplt20.com/players/210/2975.png",
        team: "Mumbai Indians",
        price: "RS 20 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png"
    },
    {
        name: "Suryakumar Yadav",
        photo: "https://static.iplt20.com/players/210/108.png",
        team: "Mumbai Indians",
        price: "RS 8 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png"
    },
    {
        name: "Chris Lynn",
        photo: "https://static.iplt20.com/players/210/179.png",
        team: "Mumbai Indians",
        price: "RS 5 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png"
    },
    {
        name: "Hardik Pandya",
        photo: "https://static.iplt20.com/players/210/2740.png",
        team: "Mumbai Indians",
        price: "RS 2.5 Million",
        playingStatus: "Playing",
        Role: "All-Rounder",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png"
    },
    {
        name: "Kieron Pollard",
        photo: "https://static.iplt20.com/players/210/210.png",
        team: "Mumbai Indians",
        price: "RS 1.2 Million",
        playingStatus: "Playing",
        Role: "All-Rounder",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png"
    },
    {
        name: "Kurnal Pandya",
        photo: "https://static.iplt20.com/players/210/3183.png",
        team: "Mumbai Indians",
        price: "RS 1.1 Million",
        playingStatus: "Playing",
        Role: "All-Rounder",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png"
    },
    {
        name: "Jasprit Bumrah",
        photo: "https://static.iplt20.com/players/210/1124.png",
        team: "Mumbai Indians",
        price: "RS 1 Million",
        playingStatus: "Playing",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png"
    },
    {
        name: "Trent Boult",
        photo: "https://static.iplt20.com/players/210/969.png",
        team: "Mumbai Indians",
        price: "RS 0.9 Million",
        playingStatus: "Playing",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png"
    },
    {
        name: "Piyush Chawala",
        photo: "https://static.iplt20.com/players/210/76.png",
        team: "Mumbai Indians",
        price: "RS 0.7 Million",
        playingStatus: "Playing",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png"
    },
    {
        name: "Arjun Tendulkar",
        photo: "https://static.iplt20.com/players/210/10244.png",
        team: "Mumbai Indians",
        price: "RS 0.5 Million",
        playingStatus: "on-bench",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png"
    },
    {
        name: "KL Rahul",
        photo: "https://static.iplt20.com/players/210/1125.png",
        team: "Punjab Kings",
        price: "Rs. 70 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/1/1c/Punjab_Kings_logo_2021.png"
    },
    {
        name: "Chris Gayle",
        photo: "https://static.iplt20.com/players/210/236.png",
        team: "Punjab Kings",
        price: "RS 50 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/1/1c/Punjab_Kings_logo_2021.png"
    },
    {
        name: "Nicholas Pooran",
        photo: "https://static.iplt20.com/players/210/1703.png",
        team: "Punjab Kings",
        price: "RS 20 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/1/1c/Punjab_Kings_logo_2021.png"
    },
    {
        name: "Sarfaraz Khan",
        photo: "https://static.iplt20.com/players/210/1564.png",
        team: "Punjab Kings",
        price: "RS 8 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/1/1c/Punjab_Kings_logo_2021.png"
    },
    {
        name: "Mayank Agarwal",
        photo: "https://static.iplt20.com/players/210/158.png",
        team: "Punjab Kings",
        price: "RS 5 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/1/1c/Punjab_Kings_logo_2021.png"
    },
    {
        name: "Chris Jordan",
        photo: "https://static.iplt20.com/players/210/1299.png",
        team: "Punjab Kings",
        price: "RS 2.5 Million",
        playingStatus: "Playing",
        Role: "All-Rounder",
        logo: "https://upload.wikimedia.org/wikipedia/en/1/1c/Punjab_Kings_logo_2021.png"
    },
    {
        name: "Jhye Richardson",
        photo: "https://static.iplt20.com/players/210/3781.png",
        team: "Punjab Kings",
        price: "RS 1.2 Million",
        playingStatus: "Playing",
        Role: "All-Rounder",
        logo: "https://upload.wikimedia.org/wikipedia/en/1/1c/Punjab_Kings_logo_2021.png"
    },
    {
        name: "Moises Henriques",
        photo: "https://static.iplt20.com/players/210/388.png",
        team: "Punjab Kings",
        price: "RS 1.1 Million",
        playingStatus: "Playing",
        Role: "All-Rounder",
        logo: "https://upload.wikimedia.org/wikipedia/en/1/1c/Punjab_Kings_logo_2021.png"
    },
    {
        name: "Riley Meredith",
        photo: "https://static.iplt20.com/players/210/4055.png",
        team: "Punjab Kings",
        price: "RS 1 Million",
        playingStatus: "Playing",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/1/1c/Punjab_Kings_logo_2021.png"
    },
    {
        name: "Ravi Bishnoi",
        photo: "https://static.iplt20.com/players/210/19351.png",
        team: "Punjab Kings",
        price: "RS 0.9 Million",
        playingStatus: "Playing",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/1/1c/Punjab_Kings_logo_2021.png"
    },
    {
        name: "Darshan Nalkande",
        photo: "https://static.iplt20.com/players/210/4447.png",
        team: "Punjab Kings",
        price: "RS 0.7 Million",
        playingStatus: "Playing",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/1/1c/Punjab_Kings_logo_2021.png"
    },
    {
        name: "Murugan Ashwin",
        photo: "https://static.iplt20.com/players/210/3187.png",
        team: "Punjab Kings",
        price: "RS 0.5 Million",
        playingStatus: "on-bench",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/1/1c/Punjab_Kings_logo_2021.png"
    },
    {
        name: "Sanju Samson",
        photo: "https://static.iplt20.com/players/210/258.png",
        team: "Rajasthan Royals",
        price: "Rs. 70 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/60/Rajasthan_Royals_Logo.svg"
    },
    {
        name: "Riyan Parag",
        photo: "https://static.iplt20.com/players/210/4445.png",
        team: "Rajasthan Royals",
        price: "RS 50 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/60/Rajasthan_Royals_Logo.svg"
    },
    {
        name: "Yashasvi Jaiswal",
        photo: "https://static.iplt20.com/players/210/13538.png",
        team: "Rajasthan Royals",
        price: "RS 20 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/60/Rajasthan_Royals_Logo.svg"
    },
    {
        name: "Liam Livingstone",
        photo: "https://static.iplt20.com/players/210/3644.png",
        team: "Rajasthan Royals",
        price: "RS 8 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/60/Rajasthan_Royals_Logo.svg"
    },
    {
        name: "Chris Morris",
        photo: "https://static.iplt20.com/players/210/836.png",
        team: "Rajasthan Royals",
        price: "RS 5 Million",
        playingStatus: "Playing",
        Role: "All-Rounder",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/60/Rajasthan_Royals_Logo.svg"
    },
    {
        name: "Ben Stokes",
        photo: "https://static.iplt20.com/players/210/1154.png",
        team: "Rajasthan Royals",
        price: "RS 2.5 Million",
        playingStatus: "Playing",
        Role: "All-Rounder",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/60/Rajasthan_Royals_Logo.svg"
    },
    {
        name: "Rahul Tewatia",
        photo: "https://static.iplt20.com/players/210/1749.png",
        team: "Rajasthan Royals",
        price: "RS 1.2 Million",
        playingStatus: "Playing",
        Role: "All-Rounder",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/60/Rajasthan_Royals_Logo.svg"
    },
    {
        name: "Jaydev Undakat",
        photo: "https://static.iplt20.com/players/210/86.png",
        team: "Rajasthan Royals",
        price: "RS 1.1 Million",
        playingStatus: "Playing",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/60/Rajasthan_Royals_Logo.svg"
    },
    {
        name: "Mayank Markande",
        photo: "https://static.iplt20.com/players/210/4951.png",
        team: "Rajasthan Royals",
        price: "RS 1 Million",
        playingStatus: "Playing",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/60/Rajasthan_Royals_Logo.svg"
    },
    {
        name: "Chetan Sakariya",
        photo: "https://static.iplt20.com/players/210/11062.png",
        team: "Rajasthan Royals",
        price: "RS 0.9 Million",
        playingStatus: "Playing",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/60/Rajasthan_Royals_Logo.svg"
    },
    {
        name: "Mustafizur Rehman",
        photo: "https://static.iplt20.com/players/210/1594.png",
        team: "Rajasthan Royals",
        price: "RS 0.7 Million",
        playingStatus: "Playing",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/60/Rajasthan_Royals_Logo.svg"
    },
    {
        name: "KC Kariappa",
        photo: "https://static.iplt20.com/players/210/2743.png",
        team: "Rajasthan Royals",
        price: "RS 0.5 Million",
        playingStatus: "on-bench",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/60/Rajasthan_Royals_Logo.svg"
    },



    {
        name: "Virat Kohli",
        photo: "https://static.iplt20.com/players/210/164.png",
        team: "Royal Challengers Bangalore",
        price: "Rs. 70 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"
    },
    {
        name: "Ab de Villers",
        photo: "https://static.iplt20.com/players/210/233.png",
        team: "Royal Challengers Bangalore",
        price: "RS 50 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"
    },
    {
        name: "Devdutt Padikkal",
        photo: "https://static.iplt20.com/players/210/5430.png",
        team: "Royal Challengers Bangalore",
        price: "RS 20 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"
    },
    {
        name: "Md. Azharuddin",
        photo: "https://static.iplt20.com/players/210/7743.png",
        team: "Royal Challengers Bangalore",
        price: "RS 8 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"
    },
    {
        name: "Rajat Patidar",
        photo: "https://static.iplt20.com/players/210/5471.png",
        team: "Royal Challengers Bangalore",
        price: "RS 5 Million",
        playingStatus: "Playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"
    },
    {
        name: "Washington Sundar",
        photo: "https://static.iplt20.com/players/210/2973.png",
        team: "Royal Challengers Bangalore",
        price: "RS 2.5 Million",
        playingStatus: "Playing",
        Role: "All-Rounder",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"
    },
    {
        name: "Glenn Maxwell",
        photo: "https://static.iplt20.com/players/210/282.png",
        team: "Royal Challengers Bangalore",
        price: "RS 1.2 Million",
        playingStatus: "Playing",
        Role: "All-Rounder",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"
    },
    {
        name: "Dan Christian",
        photo: "https://static.iplt20.com/players/210/181.png",
        team: "Royal Challengers Bangalore",
        price: "RS 1.1 Million",
        playingStatus: "Playing",
        Role: "All-Rounder",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"
    },
    {
        name: "Kyle Jamieson",
        photo: "https://static.iplt20.com/players/210/1616.png",
        team: "Royal Challengers Bangalore",
        price: "RS 1 Million",
        playingStatus: "Playing",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"
    },
    {
        name: "Harshal Patel",
        photo: "https://static.iplt20.com/players/210/157.png",
        team: "Royal Challengers Bangalore",
        price: "RS 0.9 Million",
        playingStatus: "Playing",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"
    },
    {
        name: "Adam Zampa",
        photo: "https://static.iplt20.com/players/210/958.png",
        team: "Royal Challengers Bangalore",
        price: "RS 0.7 Million",
        playingStatus: "Playing",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"
    },
    {
        name: "Pavan Deshpande",
        photo: "https://static.iplt20.com/players/210/4957.png",
        team: "Royal Challengers Bangalore",
        price: "RS 0.5 Million",
        playingStatus: "on-bench",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"
    },
    {
        name: "Kane Williamson",
        photo: "https://static.iplt20.com/players/210/440.png",
        team: "Sunrisers Hyderabad",
        price: "Rs 70 Million",
        playingStatus: "playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png"
    },
    {
        name: "David Warner",
        photo: "https://static.iplt20.com/players/210/170.png",
        team: "Sunrisers Hyderabad",
        price: "Rs 50 Million",
        playingStatus: "playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png"
    },
    {
        name: "Kedar JAdhav",
        photo: "https://static.iplt20.com/players/210/297.png",
        team: "Sunrisers Hyderabad",
        price: "RS 40 Million",
        playingStatus: "playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png"
    },
    {
        name: "Jonny Bairstow",
        photo: "https://static.iplt20.com/players/210/506.png",
        team: "Sunrisers Hyderabad",
        price: "RS 20 Million",
        playingStatus: "playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png"
    },
    {
        name: "Manish Pandey",
        photo: "https://static.iplt20.com/players/210/123.png",
        team: "Sunrisers Hyderabad",
        price: " Rs 40 Million",
        playingStatus: "playing",
        Role: "Batsman",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png"
    },
    {
        name: "Vijay Shankar",
        photo: "https://static.iplt20.com/players/210/1083.png",
        team: "Sunrisers Hyderabad",
        price: "Rs 10  Million",
        playingStatus: "playing",
        Role: "All-Rounder",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png"
    },
    {
        name: "JAson Holder",
        photo: "https://static.iplt20.com/players/210/1075.png",
        team: "Sunrisers Hyderabad",
        price: "Rs 5 million",
        playingStatus: "playing",
        Role: "All-Rounder",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png"
    },
    {
        name: "BAsil Thampi",
        photo: "https://static.iplt20.com/players/210/3825.png",
        team: "Sunrisers Hyderabad",
        price: "Rs 3 Million",
        playingStatus: "playing",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png"
    },
    {
        name: "Bhuvneshwar Kumar",
        photo: "https://static.iplt20.com/players/210/116.png",
        team: "Sunrisers Hyderabad",
        price: "Rs 5 Million",
        playingStatus: "playing",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png"
    },
    {
        name: "Siddharth Kaul",
        photo: "https://static.iplt20.com/players/210/1086.png",
        team: "Sunrisers Hyderabad",
        price: "Rs 0.8 Million",
        playingStatus: "playing",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png"
    },
    {
        name: "T Natarajan",
        photo: "https://static.iplt20.com/players/210/3831.png",
        team: "Sunrisers Hyderabad",
        price: "Rs 0.5 Million",
        playingStatus: "playing",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png"
    },
    {
        name: "Shabaz Nadeem",
        photo: "https://static.iplt20.com/players/210/57.png",
        team: "Sunrisers Hyderabad",
        price: "Rs 0.3 Million",
        playingStatus: "On-bench",
        Role: "Bowler",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png"
    }
]




$(document).ready(function () {
    console.log("dom ready")
    for (let i = 0; i < teamDetails.length; i++)
     {

        let card = $('<div>').append(
            $('<div>').append($('<img>').attr("src", teamDetails[i].icon)).addClass("imgC"),
            $('<div>').append(
                $('<h4>').text(teamDetails[i].name),
                $('<h5>').text("Captain: " + teamDetails[i].captain),
                $('<h5>').text("Top Batsman: " + teamDetails[i].topBatsman),
                $('<h5>').text("Top Bowler: " + teamDetails[i].topBowler),
                $('<h5>').text("Champion: " + teamDetails[i].champions + " time/s"),
            ).addClass("info")
        );
        $('#cardContainer').append(card);

        $(card).click((e)=>
        {
            let re=e.delegateTarget.children[1].firstElementChild.innerText
            for(let i=0;i<teamDetails.length;i++)
                if(re==teamDetails[i].name){
                 localStorage.setItem("homeToTeam",JSON.stringify(teamDetails[i]));
                 localStorage.setItem("homeToTeamP",JSON.stringify(players));
                 window.open("teams.html","_self")
                }
            
        })
    }


    $('#ser').on(
        {
            'blur': () => $('#searchedP').css({ "display": "none" }),
            'keyup': (e) =>
             {
                if (e.keyCode == 13)
                 {
                    $('#searchedP').css({ "display": "block" })
                    let u = document.getElementById("ser").value;
                    if (u == "")
                        $('#searchedP p').remove();
                    else {
                        let uu = teamDetails.filter(a => a.name.toLowerCase().includes(u.toLowerCase()))
                        $('#searchedP p').remove();
                        for (let i = 0; i < uu.length; i++)
                         {
                            let r = uu[i].name;
                            for (let k = 0; k < players.length; k++)
                                if (r == players[k].team)
                                    $('#searchedP').append($('<p>').text(players[k].name))
                        }
                    }

                }

            }
        },
    )


    // ------------------------------------------------------------

        let qq=[];
    $('#addT').on(
        {
            'click':()=>{
                console.log('hello')
                $('#inputTaker div').remove();
                $('#inputTaker').css("display","block");
                $('#inputTaker').append(
                                $('<div>').append(
                                    $('<label>').text('Enter Team Name'),
                                    $('<input>').attr("id","teamname")
                                ),
                                $('<div>').append(
                                    $('<label>').text('Enter link for Icon'),
                                    $('<input>').attr("id","teamicon")
                                ),
                                $('<div>').append(
                                    $('<label>').text('Enter no of players in your team'),
                                    $('<input>').attr("id","teamcount")
                                ),
                                $('<div>').append(
                                    $('<label>').text('Enter Captain for your team'),
                                    $('<input>').attr("id","teamcaptain")
                                ),
                                $('<div>').append(
                                    $('<label>').text('Enter top batsman'),
                                    $('<input>').attr("id","teambat")
                                ),
                                $('<div>').append(
                                    $('<label>').text('Enter top bowler'),
                                    $('<input>').attr("id","teambowl")
                                ),
                                $('<div>').append(
                                    $('<label>').text('No of times team became champion'),
                                    $('<input>').attr("id","teamchamp")
                                ),
                                $('<div>').append(
                                    $('<button>').text('Submit').click(()=>{

                                        let a=document.getElementById("teamname").value
                                        let b=document.getElementById("teamicon").value
                                        let c=document.getElementById("teamcount").value
                                        let d=document.getElementById("teamcaptain").value
                                        let e=document.getElementById("teambat").value
                                        let f=document.getElementById("teambowl").value
                                        let g=document.getElementById("teamchamp").value
                                        if(a==""||b==""||c==""||d==""||e==""||f==""||g=="")
                                            alert("fill all details")
                                            else
                                            {
                                                let r=
                                                {
                                                    name:a,
                                                    icon:b,
                                                    playerCount:c,
                                                    captain:d,
                                                    topBatsman:e,
                                                    topBowler:f,
                                                    champions:g
                                                }

                                                    qq.push(r);
                                                    localStorage.setItem('teamdata',JSON.stringify(qq));

                                                    let card = $('<div>').append(
                                                        $('<div>').append($('<img>').attr("src", b)).addClass("imgC"),
                                                        $('<div>').append(
                                                            $('<h4>').text(a),
                                                            $('<h5>').text("Captain: " + d),
                                                            $('<h5>').text("Top Batsman: " +e),
                                                            $('<h5>').text("Top Bowler: "+f),
                                                            $('<h5>').text("Champions: "+g),
                                                        ).addClass("info")
                                                    );
                                                    $('#cardContainer').append(card);
                                        document.getElementById("teamname").value=""
                                        document.getElementById("teamicon").value=""
                                        document.getElementById("teamcount").value=""
                                        document.getElementById("teamcaptain").value=""
                                        document.getElementById("teambat").value=""
                                        document.getElementById("teambowl").value=""
                                        document.getElementById("teamchamp").value=""

                                                    $('#inputTaker').css("display","none");
                                                    $(card).click((e)=>
                                                    {
                                                            window.open("index.html","_self")
                                                        
                                                    })
                                                
                                            }



                                    }),
                                    $('<button>').text("close").click(()=>{
                                        $('#inputTaker').css("display","none")
                                    })
                                ),
                                
                )
            }
        }
    )



})
